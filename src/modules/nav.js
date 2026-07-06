// ═══════════════════════════════════════════════════════════════
// Navigation — Side rail tracking & floating header
// ═══════════════════════════════════════════════════════════════

export function initNav() {
  const navRail = document.getElementById('nav-rail');
  const navbar = document.getElementById('navbar');
  const navItems = document.querySelectorAll('.nav-rail-item, .navbar-link, .mobile-menu-link');
  const sections = [];

  // Build sections array based on unique targets
  const targets = new Set();
  navItems.forEach((item) => {
    const targetId = item.getAttribute('data-nav-target');
    if (targetId && !targets.has(targetId)) {
      targets.add(targetId);
      const section = document.getElementById(targetId);
      if (section) {
        sections.push({ id: targetId, el: section });
      }
    }
  });

  if (!sections.length) return;

  // ── Scroll tracking ──
  let ticking = false;

  function updateActiveSection() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    // Show/hide nav rail
    if (navRail) {
      if (scrollY > viewportHeight * 0.5) {
        navRail.classList.add('is-visible');
      } else {
        navRail.classList.remove('is-visible');
      }
    }

    // Toggle navbar scrolled state
    if (navbar) {
      if (scrollY > 50) {
        navbar.classList.add('is-scrolled');
      } else {
        navbar.classList.remove('is-scrolled');
      }
    }

    // Find current section
    let currentId = sections[0].id;

    for (const section of sections) {
      const rect = section.el.getBoundingClientRect();
      // Section is active if it occupies the middle/top of the screen
      if (rect.top <= viewportHeight * 0.4) {
        currentId = section.id;
      }
    }

    // Update active states for all navigation links (rail, header, and mobile menu)
    navItems.forEach((item) => {
      const targetId = item.getAttribute('data-nav-target');
      if (targetId === currentId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateActiveSection);
      ticking = true;
    }
  });

  // Handle navbar and nav-rail click smooth scrolls
  navItems.forEach((item) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = item.getAttribute('data-nav-target');
      const target = document.getElementById(targetId);
      
      // Close mobile menu if open
      if (hamburger && mobileMenu) {
        hamburger.classList.remove('is-active');
        mobileMenu.classList.remove('is-active');
        document.body.style.overflow = '';
      }

      if (target && window.__lenis) {
        window.__lenis.scrollTo(target, { offset: -60 });
      }
    });
  });

  // ── Mobile Menu Toggling ──
  const hamburger = document.getElementById('navbar-hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isActive = hamburger.classList.toggle('is-active');
      mobileMenu.classList.toggle('is-active', isActive);
      document.body.style.overflow = isActive ? 'hidden' : ''; // prevent page scroll
    });
  }

  // Initial check
  updateActiveSection();
}
