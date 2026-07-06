// ═══════════════════════════════════════════════════════════════
// Gallery — Lightbox and hover effects
// ═══════════════════════════════════════════════════════════════

export function initGallery() {
  const items = document.querySelectorAll('.gallery-item');
  if (!items.length) return;

  // Gallery items already have hover effects via CSS
  // This module adds a simple lightbox overlay for when real images are added

  items.forEach((item) => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (!img) return; // Skip placeholder items

      // Create lightbox
      const overlay = document.createElement('div');
      overlay.style.cssText = `
        position: fixed;
        inset: 0;
        z-index: 999;
        background: rgba(14, 14, 12, 0.92);
        backdrop-filter: blur(16px);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 0;
        transition: opacity 0.3s;
      `;

      const fullImg = document.createElement('img');
      fullImg.src = img.src;
      fullImg.alt = img.alt;
      fullImg.style.cssText = `
        max-width: 90%;
        max-height: 90vh;
        border-radius: 12px;
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.5);
        transform: scale(0.9);
        transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      `;

      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);

      // Animate in
      requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        fullImg.style.transform = 'scale(1)';
      });

      // Close on click
      overlay.addEventListener('click', () => {
        overlay.style.opacity = '0';
        fullImg.style.transform = 'scale(0.9)';
        setTimeout(() => overlay.remove(), 300);
      });
    });
  });
}
