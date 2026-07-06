// ═══════════════════════════════════════════════════════════════
// Custom Cursor with Magnetic Hover Effects
// ═══════════════════════════════════════════════════════════════

export function initCursor() {
  // Skip on touch devices
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;
  let ringX = 0;
  let ringY = 0;

  // Track mouse position
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animate cursor with lerp
  function animate() {
    // Dot follows closely
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;
    dot.style.left = dotX + 'px';
    dot.style.top = dotY + 'px';

    // Ring follows with more lag
    ringX += (mouseX - ringX) * 0.08;
    ringY += (mouseY - ringY) * 0.08;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';

    requestAnimationFrame(animate);
  }
  animate();

  // ── Hover effects on interactive elements ──
  const hoverTargets = document.querySelectorAll(
    '[data-cursor-hover], a, button, input, textarea, .tech-item, .project-card, .hackathon-card, .profile-card, .cert-card, .gallery-item, .future-card'
  );

  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', () => {
      dot.classList.add('hovering');
      ring.classList.add('hovering');
    });

    el.addEventListener('mouseleave', () => {
      dot.classList.remove('hovering');
      ring.classList.remove('hovering');
    });
  });

  // Re-bind after dynamic content renders
  const observer = new MutationObserver(() => {
    const newTargets = document.querySelectorAll(
      '[data-cursor-hover]:not([data-cursor-bound]), .project-card:not([data-cursor-bound]), .hackathon-card:not([data-cursor-bound]), .tech-item:not([data-cursor-bound])'
    );
    newTargets.forEach((el) => {
      el.setAttribute('data-cursor-bound', 'true');
      el.addEventListener('mouseenter', () => {
        dot.classList.add('hovering');
        ring.classList.add('hovering');
      });
      el.addEventListener('mouseleave', () => {
        dot.classList.remove('hovering');
        ring.classList.remove('hovering');
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  // ── Card hover glow (mouse position on card) ──
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.card, .project-card, .future-card, .profile-card, .cert-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });
  });

  // Hide cursor when leaving window
  document.addEventListener('mouseleave', () => {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });

  document.addEventListener('mouseenter', () => {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
}
