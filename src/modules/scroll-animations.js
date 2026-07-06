// ═══════════════════════════════════════════════════════════════
// Scroll Animations — IntersectionObserver-based reveals
// ═══════════════════════════════════════════════════════════════

export function initScrollAnimations() {
  // ── Reveal on scroll (IntersectionObserver) ──
  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Don't unobserve — keep for re-entry if desired
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  // Re-observe dynamically added elements
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          if (
            node.classList &&
            (node.classList.contains('reveal') ||
              node.classList.contains('reveal-left') ||
              node.classList.contains('reveal-right') ||
              node.classList.contains('reveal-scale'))
          ) {
            revealObserver.observe(node);
          }
          // Also check children
          const children = node.querySelectorAll
            ? node.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
            : [];
          children.forEach((child) => revealObserver.observe(child));
        }
      });
    });
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });

  // ── Counter animations ──
  const counterElements = document.querySelectorAll('[data-count]');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !entry.target.dataset.counted) {
          entry.target.dataset.counted = 'true';
          animateCounter(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counterElements.forEach((el) => counterObserver.observe(el));

  // Re-observe counters in dynamic content
  const counterMutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          const counters = node.querySelectorAll
            ? node.querySelectorAll('[data-count]')
            : [];
          counters.forEach((el) => counterObserver.observe(el));
          if (node.dataset && node.dataset.count) {
            counterObserver.observe(node);
          }
        }
      });
    });
  });

  counterMutationObserver.observe(document.body, { childList: true, subtree: true });

  // ── Parallax on scroll ──
  initParallax();
}

function animateCounter(element) {
  const target = parseFloat(element.dataset.count);
  const suffix = element.dataset.suffix || '';
  const decimals = parseInt(element.dataset.decimals) || 0;
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = target * eased;

    if (decimals > 0) {
      element.textContent = current.toFixed(decimals) + suffix;
    } else {
      element.textContent = Math.round(current).toLocaleString() + suffix;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

function initParallax() {
  const parallaxElements = document.querySelectorAll('.hero-photo-wrapper, .about-photo-wrapper');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    parallaxElements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        const yOffset = (rect.top - window.innerHeight / 2) * 0.06;
        el.style.transform = `translateY(${yOffset}px)`;
      }
    });
  });
}
