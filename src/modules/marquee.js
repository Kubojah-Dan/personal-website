// ═══════════════════════════════════════════════════════════════
// Infinite Marquee — Disciplines scrolling band
// ═══════════════════════════════════════════════════════════════

export function initMarquee() {
  const disciplines = [
    'Machine Learning',
    'Full-Stack Development',
    'Deep Learning',
    'Generative AI',
    'React · Node.js',
    'Python · Java',
    'Competitive Programming',
    'Data Science',
    'NLP · Computer Vision',
    'MERN Stack',
    'Offline-First PWAs',
    'Social Impact Tech',
  ];

  const marquee1 = document.getElementById('marquee-1');
  const marquee2 = document.getElementById('marquee-2');
  if (!marquee1 || !marquee2) return;

  const items = disciplines
    .map(
      (d) => `
    <span class="marquee-item">
      <span>${d}</span>
      <span class="marquee-dot"></span>
    </span>
  `
    )
    .join('');

  marquee1.innerHTML = items;
  marquee2.innerHTML = items;
}
