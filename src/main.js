// ═══════════════════════════════════════════════════════════════
// Main Entry Point — Kuboja Daniel M. Portfolio
// ═══════════════════════════════════════════════════════════════

// Styles
import './styles/index.css';
import './styles/animations.css';
import './styles/sections.css';
import './styles/components.css';

// Modules
import { initParticles } from './modules/particles.js';
import { initCursor } from './modules/cursor.js';
import { initScrollAnimations } from './modules/scroll-animations.js';
import { initTextAnimations } from './modules/text-animations.js';
import { initChatbot } from './modules/chatbot.js';
import { initMarquee } from './modules/marquee.js';
import { initTechOrbit } from './modules/tech-orbit.js';
import { initGallery } from './modules/gallery.js';
import { initNav } from './modules/nav.js';
import { renderContent } from './modules/render.js';
import { PERSONAL } from './data/content.js';

// ── Init on DOM ready ──
document.addEventListener('DOMContentLoaded', () => {
  // 1. Render dynamic content from data
  renderContent();

  // 2. Initialize smooth scroll (Lenis)
  initSmoothScroll();

  // 3. Initialize modules
  initParticles();
  initCursor();
  initTextAnimations();
  initScrollAnimations();
  initChatbot();
  initMarquee();
  initTechOrbit();
  initGallery();
  initNav();

  // 4. Contact form handler
  initContactForm();
});

// ── Smooth Scroll (Lenis) ──
function initSmoothScroll() {
  import('@studio-freight/lenis').then(({ default: Lenis }) => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Expose for anchor link scrolling
    window.__lenis = lenis;

    // Handle anchor clicks
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          lenis.scrollTo(target, { offset: -60 });
        }
      });
    });
  }).catch(() => {
    // Fallback: native smooth scroll
    console.warn('Lenis not available, using native scroll');
  });
}

// ── Contact Form ──
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const submitBtn = form.querySelector('.form-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'SENDING...';
    submitBtn.disabled = true;

    try {
      // 1. Try Vercel Serverless API first
      let apiResponse;
      try {
        apiResponse = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({ name, email, message })
        });
      } catch (err) {
        // Network error probably means local development environment without backend handler
        console.info('Serverless local function offline. Falling back to Web3Forms.');
      }

      // 2. If Vercel API is not found (404) or offline, fall back to Web3Forms/Mock mode
      if (!apiResponse || apiResponse.status === 404) {
        const apiKey = PERSONAL.web3formsKey;
        const isMock = !apiKey || apiKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE';

        if (isMock) {
          console.warn('Web3Forms access key is not set. Submitting in Mock mode.');
          // Mock submit delay
          await new Promise((resolve) => setTimeout(resolve, 1000));
          submitBtn.textContent = 'MESSAGE_SENT( ) ✓';
          submitBtn.style.background = 'linear-gradient(135deg, #7A9E6B, #5B7A4E)';
          form.reset();
        } else {
          const web3Response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: apiKey,
              name: name,
              email: email,
              message: message,
              subject: `New Portfolio Message from ${name}`
            })
          });

          if (web3Response.status === 200) {
            submitBtn.textContent = 'MESSAGE_SENT( ) ✓';
            submitBtn.style.background = 'linear-gradient(135deg, #7A9E6B, #5B7A4E)';
            form.reset();
          } else {
            throw new Error('Web3Forms submission failed');
          }
        }
      } else if (apiResponse.status === 200) {
        submitBtn.textContent = 'MESSAGE_SENT( ) ✓';
        submitBtn.style.background = 'linear-gradient(135deg, #7A9E6B, #5B7A4E)';
        form.reset();
      } else {
        const errorData = await apiResponse.json();
        throw new Error(errorData.error || 'Serverless function failed');
      }
    } catch (error) {
      console.error('Contact submission error:', error);
      submitBtn.textContent = 'ERROR_TRY_AGAIN( )';
      submitBtn.style.background = 'linear-gradient(135deg, #D4704C, #B24F30)';
    }

    setTimeout(() => {
      submitBtn.textContent = originalText;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
    }, 4000);
  });
}
