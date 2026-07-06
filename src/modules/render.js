// ═══════════════════════════════════════════════════════════════
// Content Renderer — Populates HTML with data from content.js
// ═══════════════════════════════════════════════════════════════

import {
  PERSONAL,
  PROJECTS,
  FUTURE_PROJECTS,
  HACKATHONS,
  CODING_PROFILES,
  TECH_STACK,
  CERTIFICATIONS,
  GALLERY,
  CONFERENCES,
} from '../data/content.js';

export function renderContent() {
  // Render personal photos
  const heroPhoto = document.getElementById('hero-photo');
  if (heroPhoto && PERSONAL.photo) {
    heroPhoto.src = PERSONAL.photo;
  }
  const aboutPhoto = document.querySelector('.about-photo-wrapper img');
  if (aboutPhoto && PERSONAL.photo) {
    aboutPhoto.src = PERSONAL.photo;
  }

  // Update social links
  const linkedin = document.getElementById('social-linkedin');
  if (linkedin && PERSONAL.socials.linkedin) linkedin.href = PERSONAL.socials.linkedin;
  const github = document.getElementById('social-github');
  if (github && PERSONAL.socials.github) github.href = PERSONAL.socials.github;
  const leetcode = document.getElementById('social-leetcode');
  if (leetcode && PERSONAL.socials.leetcode) leetcode.href = PERSONAL.socials.leetcode;

  renderProjects();
  renderFutureProjects();
  renderHackathons();
  renderCodingProfiles();
  renderTechCategories();
  renderCertifications();
  renderGallery();
  renderConferences();
  renderIcons();
}

// ── Projects ──
function renderProjects() {
  const grid = document.getElementById('projects-grid');
  if (!grid) return;

  grid.innerHTML = PROJECTS.map(
    (p) => `
    <div class="project-card reveal" data-cursor-hover>
      <div class="project-card-image">
        ${p.image ? `<img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover;" />` : `
        <div class="placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
          <span>[Insert Screenshot: ${p.title}]</span>
        </div>`}
      </div>
      <div class="project-card-body">
        <span class="project-card-subtitle">${p.subtitle}</span>
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.description}</p>
        <div class="project-card-tech">
          ${p.tech.map((t) => `<span class="tech-badge">${t}</span>`).join('')}
        </div>
        <div class="project-card-metrics">
          ${p.metrics.map((m) => `<span class="metric-pill">${m}</span>`).join('')}
        </div>
      </div>
    </div>
  `
  ).join('');
}

// ── Conferences ──
function renderConferences() {
  const grid = document.getElementById('conferences-grid');
  if (!grid) return;

  grid.innerHTML = CONFERENCES.map(
    (c) => `
    <div class="conference-card reveal" data-cursor-hover>
      <div class="conference-card-image">
        ${c.image ? `<img src="${c.image}" alt="${c.title}" style="width: 100%; height: 100%; object-fit: cover;" />` : `
        <div class="placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <path d="M21 15l-5-5L5 21"/>
          </svg>
          <span>[Insert Image: ${c.title}]</span>
        </div>`}
      </div>
      <div class="conference-card-body">
        <div class="conference-card-meta">
          <span>${c.location}</span>
          <span>${c.date}</span>
        </div>
        <h3 class="conference-card-title">${c.title}</h3>
        <p class="conference-card-desc">${c.description}</p>
      </div>
    </div>
  `
  ).join('');
}

// ── Future Projects ──
function renderFutureProjects() {
  const grid = document.getElementById('future-projects');
  if (!grid) return;

  grid.innerHTML = FUTURE_PROJECTS.map(
    (p) => `
    <div class="future-card reveal" data-cursor-hover>
      <div class="future-card-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          ${
            p.icon === 'building'
              ? '<path d="M6 22V4a2 2 0 012-2h8a2 2 0 012 2v18zM6 12H4a2 2 0 00-2 2v6a2 2 0 002 2h2M18 9h2a2 2 0 012 2v9a2 2 0 01-2 2h-2M10 6h4M10 10h4M10 14h4M10 18h4"/>'
              : '<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/>'
          }
        </svg>
      </div>
      <h3 class="future-card-title">${p.title}</h3>
      <p class="future-card-desc">${p.description}</p>
    </div>
  `
  ).join('');
}

// ── Hackathons ──
function renderHackathons() {
  const scroll = document.getElementById('hackathon-scroll');
  if (!scroll) return;

  scroll.innerHTML = HACKATHONS.map(
    (h) => `
    <div class="hackathon-card reveal" data-cursor-hover>
      <div class="hackathon-card-image">
        ${h.image ? `<img src="${h.image}" alt="${h.title}" style="width: 100%; height: 100%; object-fit: cover;" />` : `
        <div class="placeholder">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M6 9l6 6 6-6"/>
            <path d="M12 3v12"/>
            <path d="M5 21h14"/>
          </svg>
          <span>[Insert Photo: ${h.title}]</span>
        </div>`}
      </div>
      <div class="hackathon-card-body">
        <span class="hackathon-achievement">${h.achievement}</span>
        <h3 class="hackathon-title">${h.title}</h3>
        <p class="hackathon-desc">${h.description}</p>
      </div>
    </div>
  `
  ).join('');
}

// ── Coding Profiles ──
function renderCodingProfiles() {
  const grid = document.getElementById('coding-profiles');
  if (!grid) return;

  grid.innerHTML = CODING_PROFILES.map(
    (p) => `
    <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="profile-card reveal" data-cursor-hover>
      <div>
        <h3 class="profile-platform">${p.platform}</h3>
        <div class="profile-count" data-count="${p.problems}" data-suffix="${p.suffix}">0</div>
        <div class="profile-label">Problems Solved</div>
        <div class="profile-rank">Global: <strong>${p.globalRank}</strong></div>
      </div>
      ${p.badge ? `
      <div class="profile-badge-wrapper" style="width: 70px; height: 70px; display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.02); border: 1px solid var(--surface-glass-border); border-radius: var(--radius-md); padding: 8px; flex-shrink: 0;">
        <img src="${p.badge}" alt="${p.platform} Badge" style="width: 100%; height: 100%; object-fit: contain; filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.45));" />
      </div>` : ''}
    </a>
  `
  ).join('');
}

// ── Tech Categories ──
function renderTechCategories() {
  const container = document.getElementById('tech-categories');
  if (!container) return;

  const categories = [
    { label: 'Core Languages & AI', items: TECH_STACK.core },
    { label: 'Web & Databases', items: TECH_STACK.web },
    { label: 'Data Science', items: TECH_STACK.dataScience },
  ];

  container.innerHTML = categories
    .map(
      (cat) => `
    <div class="tech-category reveal">
      <div class="tech-category-title">${cat.label}</div>
      <div class="tech-list">
        ${cat.items.map((item) => `<span class="tech-item" data-cursor-hover>${item.name}</span>`).join('')}
      </div>
    </div>
  `
    )
    .join('');
}

// ── Certifications ──
function renderCertifications() {
  const track = document.getElementById('cert-slider-track');
  const container = document.getElementById('cert-slider-track-container');
  const prevBtn = document.getElementById('cert-prev');
  const nextBtn = document.getElementById('cert-next');

  if (!track || !container) return;

  // Duplicate certifications array to enable infinite looping
  const infiniteCerts = [...CERTIFICATIONS, ...CERTIFICATIONS];

  track.innerHTML = infiniteCerts.map((c, idx) => `
    <div class="cert-card-item" data-idx="${idx % CERTIFICATIONS.length}" data-cursor-hover>
      <img src="${c.link}" alt="${c.name}" loading="lazy" />
      <div class="cert-card-content">
        <p class="cert-card-issuer">${c.issuer}</p>
        <h4 class="cert-card-title">${c.name}</h4>
        <div class="cert-card-footer">
          <span class="cert-card-date">${c.date}</span>
          <span class="cert-card-zoom-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </span>
        </div>
      </div>
    </div>
  `).join('');

  // ── Auto Scroll Marquee Loop ──
  let isPaused = false;
  let scrollSpeed = 0.8;

  function step() {
    if (!isPaused) {
      container.scrollLeft += scrollSpeed;
      
      // If we scroll past the first half, wrap back to 0 seamlessly
      const halfWidth = track.scrollWidth / 2;
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft = 0;
      }
    }
    requestAnimationFrame(step);
  }

  // Start scrolling after a short delay
  setTimeout(() => {
    requestAnimationFrame(step);
  }, 1000);

  // ── Hover to Pause ──
  container.addEventListener('mouseenter', () => { isPaused = true; });
  container.addEventListener('mouseleave', () => { isPaused = false; });

  // ── Left/Right Buttons ──
  const cardWidth = 320 + 32; // card width + margins

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      container.scrollTo({
        left: container.scrollLeft - cardWidth,
        behavior: 'smooth'
      });
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      container.scrollTo({
        left: container.scrollLeft + cardWidth,
        behavior: 'smooth'
      });
    });
  }

  // ── Click to Zoom Modal ──
  track.querySelectorAll('.cert-card-item').forEach(card => {
    card.addEventListener('click', () => {
      const idx = parseInt(card.getAttribute('data-idx'));
      const cert = CERTIFICATIONS[idx];
      openCertModal(cert);
    });
  });
}

function openCertModal(cert) {
  // Create modal markup
  const modal = document.createElement('div');
  modal.className = 'cert-modal';
  modal.innerHTML = `
    <div class="cert-modal-container">
      <button class="cert-modal-close-btn" aria-label="Close modal" data-cursor-hover>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
      <img src="${cert.link}" alt="${cert.name}" class="cert-modal-img" />
      <div class="cert-modal-info">
        <h3 class="cert-modal-title">${cert.name}</h3>
        <p class="cert-modal-meta">${cert.issuer} • Issued ${cert.date}</p>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  // Animate in
  requestAnimationFrame(() => {
    modal.classList.add('is-active');
  });

  // Close helper
  function closeModal() {
    modal.classList.remove('is-active');
    setTimeout(() => {
      modal.remove();
    }, 400); // match transition
  }

  // Bind close events
  modal.querySelector('.cert-modal-close-btn').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// ── Gallery ──
function renderGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  grid.innerHTML = GALLERY.map(
    (item) => `
    <div class="gallery-item reveal" data-cursor-hover>
      ${item.src ? `<img src="${item.src}" alt="${item.caption}" style="width: 100%; height: 100%; object-fit: cover;" />` : `
      <div class="placeholder">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <path d="M21 15l-5-5L5 21"/>
        </svg>
        <span>[Insert: ${item.caption}]</span>
      </div>`}
      <div class="gallery-caption">${item.caption}</div>
    </div>
  `
  ).join('');
}



// ── Inject SVG Icons into contact section ──
function renderIcons() {
  // Phone
  const phone = document.getElementById('icon-phone');
  if (phone) phone.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`;

  // Mail
  const mail = document.getElementById('icon-mail');
  if (mail) mail.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`;

  // Location
  const loc = document.getElementById('icon-location');
  if (loc) loc.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`;

  // Social icons
  const linkedin = document.getElementById('social-linkedin');
  if (linkedin) linkedin.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

  const github = document.getElementById('social-github');
  if (github) github.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>`;

  const leetcode = document.getElementById('social-leetcode');
  if (leetcode) leetcode.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z"/></svg>`;
}
