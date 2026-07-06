// ═══════════════════════════════════════════════════════════════
// Tech Stack Orbit — Interactive orbital visualization
// ═══════════════════════════════════════════════════════════════

import { TECH_STACK } from '../data/content.js';

export function initTechOrbit() {
  const container = document.getElementById('tech-orbit');
  if (!container) return;

  // Combine all tech items
  const allTech = [
    ...TECH_STACK.core.slice(0, 8),
    ...TECH_STACK.web.slice(0, 6),
    ...TECH_STACK.dataScience.slice(0, 4),
  ];

  // Place nodes on three orbital rings
  const rings = [
    { items: allTech.slice(0, 6), radius: 32.5 },   // Inner ring (65% / 2)
    { items: allTech.slice(6, 12), radius: 41 },     // Middle ring (82% / 2)
    { items: allTech.slice(12, 18), radius: 50 },    // Outer ring (100% / 2)
  ];

  rings.forEach((ring) => {
    const count = ring.items.length;
    ring.items.forEach((tech, i) => {
      const angle = (i / count) * 2 * Math.PI - Math.PI / 2;
      const x = 50 + ring.radius * Math.cos(angle);
      const y = 50 + ring.radius * Math.sin(angle);

      const node = document.createElement('div');
      node.className = 'orbit-node';
      node.style.left = x + '%';
      node.style.top = y + '%';
      node.setAttribute('data-cursor-hover', '');

      // Use first 2 letters as icon text
      const abbr = tech.name.length <= 3 ? tech.name : tech.name.slice(0, 2).toUpperCase();

      node.innerHTML = `
        <div class="orbit-node-icon">${abbr}</div>
        <span class="orbit-node-label">${tech.name}</span>
      `;

      container.appendChild(node);
    });
  });
}
