// ═══════════════════════════════════════════════════════════════
// Three.js Neural Network Particles — Hero Background
// ═══════════════════════════════════════════════════════════════

import * as THREE from 'three';

export function initParticles() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ── Particle system ──
  const particleCount = 120;
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  const spread = 12;

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 2] = (Math.random() - 0.5) * spread * 0.5;
    velocities.push({
      x: (Math.random() - 0.5) * 0.003,
      y: (Math.random() - 0.5) * 0.003,
      z: (Math.random() - 0.5) * 0.002,
    });
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    color: new THREE.Color('#E8A849'),
    size: 0.04,
    transparent: true,
    opacity: 0.7,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  scene.add(points);

  // ── Connection lines ──
  const lineMaterial = new THREE.LineBasicMaterial({
    color: new THREE.Color('#E8A849'),
    transparent: true,
    opacity: 0.08,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });

  const maxDistance = 2.2;
  let linesMesh = null;

  function updateLines() {
    if (linesMesh) {
      scene.remove(linesMesh);
      linesMesh.geometry.dispose();
    }

    const linePositions = [];
    const pos = geometry.attributes.position.array;

    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          linePositions.push(pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]);
          linePositions.push(pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);
  }

  // ── Mouse tracking ──
  const mouse = { x: 0, y: 0 };
  const targetRotation = { x: 0, y: 0 };

  document.addEventListener('mousemove', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    targetRotation.x = mouse.y * 0.15;
    targetRotation.y = mouse.x * 0.15;
  });

  // ── Scroll-based fade ──
  let scrollOpacity = 1;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const heroHeight = window.innerHeight;
    scrollOpacity = Math.max(0, 1 - scrollY / heroHeight);
  });

  // ── Animate ──
  let lineUpdateFrame = 0;

  function animate() {
    requestAnimationFrame(animate);

    // Update particle positions
    const pos = geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      // Boundary wrapping
      const half = spread / 2;
      if (Math.abs(pos[i * 3]) > half) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > half) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > half * 0.5) velocities[i].z *= -1;
    }
    geometry.attributes.position.needsUpdate = true;

    // Update lines every 3 frames for performance
    lineUpdateFrame++;
    if (lineUpdateFrame % 3 === 0) {
      updateLines();
    }

    // Smooth rotation towards mouse
    points.rotation.x += (targetRotation.x - points.rotation.x) * 0.02;
    points.rotation.y += (targetRotation.y - points.rotation.y) * 0.02;
    if (linesMesh) {
      linesMesh.rotation.x = points.rotation.x;
      linesMesh.rotation.y = points.rotation.y;
    }

    // Scroll-based opacity
    material.opacity = 0.7 * scrollOpacity;
    lineMaterial.opacity = 0.08 * scrollOpacity;

    renderer.render(scene, camera);
  }

  animate();

  // ── Resize handler ──
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });
}
