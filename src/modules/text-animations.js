// ═══════════════════════════════════════════════════════════════
// Text Animations — Hero headline reveal + section headers
// ═══════════════════════════════════════════════════════════════

export function initTextAnimations() {
  // ── Hero headline — word reveal ──
  animateHeroHeadline();

  // ── Hero subtitle — fade in ──
  animateHeroSubtitle();
}

function animateHeroHeadline() {
  const headline = document.getElementById('hero-headline');
  if (!headline) return;

  const words = headline.querySelectorAll('.word');

  // Delay for initial page load
  setTimeout(() => {
    words.forEach((word, i) => {
      setTimeout(() => {
        word.style.transition = 'transform 0.9s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1)';
        word.style.transform = 'translateY(0)';
        word.style.opacity = '1';
      }, i * 120);
    });
  }, 300);
}

function animateHeroSubtitle() {
  const subtitle = document.getElementById('hero-subtitle');
  if (!subtitle) return;

  setTimeout(() => {
    subtitle.style.transition = 'opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1), filter 1s cubic-bezier(0.16, 1, 0.3, 1)';
    subtitle.style.opacity = '1';
    subtitle.style.transform = 'translateY(0)';
    subtitle.style.filter = 'blur(0)';
  }, 900);
}
