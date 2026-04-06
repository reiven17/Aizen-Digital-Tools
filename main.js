/* ═══════════════════════════════════════════════
   AIZEN DIGITAL TOOLS — main.js
   Particle hero · Carousel · Modal · Filters
   Search · Scroll animations · Counter anim
═══════════════════════════════════════════════ */

'use strict';

/* ════════════════════════════════════════
   PRODUCT DATA
════════════════════════════════════════ */
/* Conversion: $USD * 3.4, floor to int */
const USD_TO_PEN = 3.4;
const pen = (usd) => Math.floor(usd * USD_TO_PEN);

const WA_NUMBER = '51941797198';
const WA_BASE   = `https://wa.me/${WA_NUMBER}?text=`;
const WA_GROUP  = 'https://chat.whatsapp.com/KBYeX08mcx21ZmS5T1DQwE?mode=gi_t';

function waLink(productName) {
  const msg = encodeURIComponent(`Hola! Me interesa adquirir ${productName}. ¿Podría darme más información?`);
  return `${WA_BASE}${msg}`;
}

const PRODUCTS = [
  {
    id: 'antigravity-ultra',
    name: 'Antigravity Ultra',
    category: 'ia',
    featured: false,
    tag: null,
    stars: 5,
    image: 'assets/products/antigravity.png',
    duration: '1 Mes',
    priceUSD: 25,
    pricePEN: pen(25),
    description: 'Potencia máxima de IA con razonamiento avanzado, generación multimodal y análisis profundo. Eleva tu productividad a otro nivel.',
  },
  {
    id: 'gemini-ultra',
    name: 'Gemini Ultra',
    category: 'ia',
    featured: true,
    tag: 'TOP',
    stars: 5,
    image: 'assets/products/gemini.png',
    isMultiVariant: true,
    variants: [
      {
        type: 'Cuenta Compartida',
        duration: '1 Mes',
        priceUSD: 10,
        pricePEN: pen(10),
      },
      {
        type: 'Cuenta Privada',
        duration: '1 Mes',
        priceUSD: 45,
        pricePEN: pen(45),
      },
    ],
    description: 'La IA más avanzada de Google: generación de video ilimitada con Veo 3.1, análisis profundo, Notebooklm y razonamiento ultra veloz.',
    descriptionVariants: {
      'Cuenta Compartida': 'Acceso compartido sin créditos adicionales. Ideal para uso ocasional.',
      'Cuenta Privada': 'Directamente a tu correo personal con 5,000 créditos incluidos. Máxima privacidad.',
    },
  },
  {
    id: 'supergrok',
    name: 'SuperGrok',
    category: 'ia',
    featured: true,
    tag: null,
    stars: 5,
    image: 'assets/products/grok.png',
    duration: '1 Mes',
    priceUSD: 7,
    pricePEN: pen(7),
    description: 'IA de xAI con razonamiento en tiempo real, acceso a datos de X y capacidades multimodales avanzadas. El cerebro que piensa diferente.',
  },
  {
    id: 'supergrok-heavy',
    name: 'SuperGrok Heavy',
    category: 'ia',
    featured: false,
    tag: 'HEAVY',
    stars: 5,
    image: 'assets/products/grok-heavy.png',
    duration: '1 Mes',
    priceUSD: 23,
    pricePEN: pen(23),
    description: 'La versión más potente de Grok. Razonamiento extendido, mayor contexto y análisis profundo sin límites. Para usuarios exigentes.',
  },
  {
    id: 'capcut-pro',
    name: 'CapCut Pro',
    category: 'edicion',
    featured: true,
    tag: 'POPULAR',
    stars: 5,
    image: 'assets/products/capcut.png',
    duration: '1 Mes',
    priceUSD: 3.5,
    pricePEN: pen(3.5),
    description: 'Edición de video profesional con IA. Elimina fondos, subtítulos automáticos, efectos cinematográficos y templates premium. Todo desde tu celular.',
  },
  {
    id: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    category: 'ia',
    featured: true,
    tag: null,
    stars: 5,
    image: 'assets/products/chatgpt.png',
    duration: '1 Mes',
    priceUSD: 7,
    pricePEN: pen(7),
    description: 'GPT-4o, generación de imágenes con DALL·E 3, navegación web en tiempo real y plugins avanzados. El estándar de la IA conversacional.',
  },
  {
    id: 'chatgpt-business',
    name: 'ChatGPT Business',
    category: 'ia',
    featured: false,
    tag: 'BUSINESS',
    stars: 5,
    image: 'assets/products/chatgpt-business.png',
    duration: '1 Mes',
    priceUSD: 7,
    pricePEN: pen(7),
    description: 'Versión empresarial de ChatGPT. Tus conversaciones no entrenan modelos de OpenAI. Mayor privacidad y acceso prioritario a nuevas funciones.',
  },
  {
    id: 'adobe-pro-plus',
    name: 'Adobe Pro Plus',
    category: 'edicion',
    featured: false,
    tag: null,
    stars: 5,
    image: 'assets/products/adobe.png',
    isMultiVariant: true,
    variants: [
      { type: '1 Mes',    duration: '1 Mes',    priceUSD: 10, pricePEN: pen(10) },
      { type: '3 Meses',  duration: '3 Meses',  priceUSD: 24, pricePEN: pen(24) },
      { type: '6 Meses',  duration: '6 Meses',  priceUSD: 39, pricePEN: pen(39) },
    ],
    description: 'Suite completa de Adobe: Photoshop, Premiere Pro, After Effects, Illustrator y más. Creatividad sin límites para profesionales.',
  },
  {
    id: 'n8n-starter',
    name: 'N8n Starter',
    category: 'programacion',
    featured: false,
    tag: null,
    stars: 5,
    image: 'assets/products/n8n.png',
    duration: '1 Año',
    priceUSD: 49,
    pricePEN: pen(49),
    description: 'Automatización de flujos sin código. Conecta apps, automatiza tareas repetitivas y construye pipelines de IA. Poder de desarrollador sin serlo.',
  },
  {
    id: 'canva-pro',
    name: 'Canva Pro',
    category: 'edicion',
    featured: false,
    tag: 'OFERTA',
    stars: 5,
    image: 'assets/products/canva.png',
    duration: '1 Año',
    priceUSD: 8,
    pricePEN: pen(8),
    description: 'Diseño gráfico profesional para todos. Más de 100M de templates, eliminación de fondos con IA, Brand Kit y colaboración en equipo.',
  },
  {
    id: 'gemini-ultra-workspace',
    name: 'Gemini Ultra Workspace',
    category: 'ia',
    featured: false,
    tag: 'WORKSPACE',
    stars: 4,
    image: 'assets/products/gemini-workspace.png',
    duration: '1 Mes',
    priceUSD: 15,
    pricePEN: pen(15),
    description: 'Correo corporativo con 25,000 créditos de Gemini. Acceso empresarial con IA integrada. Ideal para equipos y proyectos. Sin garantía.',
    warning: 'Sin garantía',
  },
  {
    id: 'gemini-pro',
    name: 'Gemini Pro',
    category: 'ia',
    featured: false,
    tag: 'GARANTÍA',
    stars: 5,
    image: 'assets/products/gemini-pro.png',
    duration: '18 Meses',
    priceUSD: 36,
    pricePEN: pen(36),
    description: 'Directamente a tu correo personal. 18 meses de acceso continuo con garantía de 12 meses. Inversión inteligente a largo plazo.',
    guarantee: '12 meses de garantía',
  },
  {
    id: 'claude-pro',
    name: 'Claude Pro',
    category: 'ia',
    featured: true,
    tag: null,
    stars: 5,
    image: 'assets/products/claude.png',
    duration: '1 Mes',
    priceUSD: 12,
    pricePEN: pen(12),
    description: 'El modelo de IA más preciso y seguro. Contexto extendido de 200k tokens, proyectos organizados y acceso prioritario a Claude Sonnet y Opus.',
  },
  {
    id: 'claude-max',
    name: 'Claude Max 5x',
    category: 'ia',
    featured: false,
    tag: 'MAX',
    stars: 5,
    image: 'assets/products/claude-max.png',
    duration: '1 Mes',
    priceUSD: 65,
    pricePEN: pen(65),
    description: 'Límite de uso 5x mayor que Claude Pro. Para creadores, desarrolladores y profesionales que necesitan máxima potencia sin interrupciones.',
  },
];

const FEATURED = PRODUCTS.filter(p => p.featured);


/* ════════════════════════════════════════
   DOM REFS
════════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const DOM = {
  loader:          $('#loader'),
  loaderFill:      $('#loaderFill'),
  loaderPercent:   $('#loaderPercent'),
  app:             $('#app'),
  navbar:          $('#navbar'),
  heroCanvas:      $('#heroCanvas'),
  carouselTrack:   $('#carouselTrack'),
  carouselPrev:    $('#carouselPrev'),
  carouselNext:    $('#carouselNext'),
  carouselDots:    $('#carouselDots'),
  searchInput:     $('#searchInput'),
  searchClear:     $('#searchClear'),
  categoryPills:   $$('.pill'),
  productsGrid:    $('#productsGrid'),
  noResults:       $('#noResults'),
  noResultsQuery:  $('#noResultsQuery'),
  modal:           $('#productModal'),
  modalBackdrop:   $('#modalBackdrop'),
  modalSheet:      $('#modalSheet'),
  modalClose:      $('#modalClose'),
  modalBody:       $('#modalBody'),
};


/* ════════════════════════════════════════
   LOADER
════════════════════════════════════════ */
function initLoader() {
  let progress = 0;
  const duration = 2200; // ms total
  const interval = 40;
  const steps = duration / interval;

  const tick = setInterval(() => {
    // Eased progress: fast start, slow middle, fast end
    const remaining = 100 - progress;
    const speed = Math.random() * (remaining * 0.12) + 0.3;
    progress = Math.min(progress + speed, 97);

    setLoaderProgress(progress);

    if (progress >= 97) {
      clearInterval(tick);
      setTimeout(() => {
        setLoaderProgress(100);
        setTimeout(exitLoader, 400);
      }, 300);
    }
  }, interval);
}

function setLoaderProgress(val) {
  const v = Math.floor(val);
  DOM.loaderFill.style.width = val + '%';
  DOM.loaderPercent.textContent = v + '%';
  if (DOM.loader.querySelector('.loader-bar'))
    DOM.loader.querySelector('.loader-bar').setAttribute('aria-valuenow', v);
}

function exitLoader() {
  DOM.loader.classList.add('exit');
  DOM.app.classList.add('visible');
  setTimeout(() => {
    DOM.loader.style.display = 'none';
  }, 900);
  initApp();
}


/* ════════════════════════════════════════
   HERO CANVAS — PARTICLE NETWORK
════════════════════════════════════════ */
let heroAnimId = null;

function initHeroCanvas() {
  const canvas = DOM.heroCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COLORS = [
    [180, 78, 248],   // purple neon
    [167, 139, 250],  // purple-400
    [196, 181, 253],  // purple-300
    [255, 255, 255],  // white
    [217, 70, 239],   // purple-glow
  ];

  let W, H, particles;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() { this.init(); }
    init() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.r  = Math.random() * 1.8 + 0.4;
      this.c  = COLORS[Math.floor(Math.random() * COLORS.length)];
      this.a  = Math.random() * 0.5 + 0.2;
      this.pulse = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.pulse += 0.02;
      const pa = this.a + Math.sin(this.pulse) * 0.15;
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
      this._pa = pa;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.c[0]},${this.c[1]},${this.c[2]},${this._pa})`;
      ctx.fill();
    }
  }

  const CONNECTION_DIST = Math.min(W * 0.15, 160);

  function connect() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d2 = dx * dx + dy * dy;
        const maxD = CONNECTION_DIST;
        if (d2 < maxD * maxD) {
          const dist = Math.sqrt(d2);
          const alpha = (1 - dist / maxD) * 0.22;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(167,139,250,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function buildParticles() {
    const count = Math.floor((W * H) / 14000);
    particles = Array.from({ length: Math.min(count, 90) }, () => new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => { p.update(); p.draw(); });
    connect();
    heroAnimId = requestAnimationFrame(animate);
  }

  resize();
  buildParticles();
  animate();

  window.addEventListener('resize', () => {
    resize();
    buildParticles();
  }, { passive: true });
}


/* ════════════════════════════════════════
   NAVBAR — SCROLL BEHAVIOR
════════════════════════════════════════ */
function initNavbar() {
  const nav = DOM.navbar;
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}


/* ════════════════════════════════════════
   SCROLL REVEAL
════════════════════════════════════════ */
function initScrollReveal() {
  const els = $$('[data-reveal]');
  if (!els.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const delay = parseInt(e.target.dataset.delay || 0);
        setTimeout(() => e.target.classList.add('revealed'), delay);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => io.observe(el));
}


/* ════════════════════════════════════════
   COUNTER ANIMATION
════════════════════════════════════════ */
function initCounters() {
  const counters = $$('[data-count]');
  if (!counters.length) return;

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        animateCount(e.target);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => io.observe(el));
}

function animateCount(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1400;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(ease * target);
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target;
  }

  requestAnimationFrame(update);
}


/* ════════════════════════════════════════
   CAROUSEL — FEATURED CARDS
════════════════════════════════════════ */
let carouselIndex = 0;
let carouselAutoTimer = null;

function initCarousel() {
  const track = DOM.carouselTrack;
  const dotsWrap = DOM.carouselDots;
  if (!track) return;

  // Build cards
  FEATURED.forEach((product, i) => {
    const card = buildFeaturedCard(product, i);
    track.appendChild(card);
  });

  // Build dots
  FEATURED.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Ir a ${FEATURED[i].name}`);
    dot.setAttribute('role', 'tab');
    dot.addEventListener('click', () => goToSlide(i));
    dotsWrap.appendChild(dot);
  });

  updateCarouselUI();

  DOM.carouselPrev.addEventListener('click', () => {
    goToSlide((carouselIndex - 1 + FEATURED.length) % FEATURED.length);
    resetAutoPlay();
  });
  DOM.carouselNext.addEventListener('click', () => {
    goToSlide((carouselIndex + 1) % FEATURED.length);
    resetAutoPlay();
  });

  // Touch swipe
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 50) {
      goToSlide(dx < 0
        ? (carouselIndex + 1) % FEATURED.length
        : (carouselIndex - 1 + FEATURED.length) % FEATURED.length
      );
      resetAutoPlay();
    }
  }, { passive: true });

  startAutoPlay();
}

function goToSlide(index) {
  carouselIndex = index;
  updateCarouselUI();
}

function updateCarouselUI() {
  const cards = $$('.featured-card', DOM.carouselTrack);
  const dots  = $$('.carousel-dot', DOM.carouselDots);

  cards.forEach((card, i) => {
    card.classList.toggle('is-active', i === carouselIndex);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === carouselIndex);
    dot.setAttribute('aria-selected', i === carouselIndex);
  });

  // Slide track to center active card
  const activeCard = cards[carouselIndex];
  if (activeCard) {
    const viewport = DOM.carouselTrack.parentElement;
    const scrollTarget = activeCard.offsetLeft - viewport.offsetWidth / 2 + activeCard.offsetWidth / 2;
    viewport.scrollTo({ left: scrollTarget, behavior: 'smooth' });
  }
}

function startAutoPlay() {
  carouselAutoTimer = setInterval(() => {
    goToSlide((carouselIndex + 1) % FEATURED.length);
  }, 4500);
}
function resetAutoPlay() {
  clearInterval(carouselAutoTimer);
  startAutoPlay();
}

function buildFeaturedCard(product, index) {
  const card = document.createElement('div');
  card.className = 'featured-card' + (index === 0 ? ' is-active' : '');
  card.setAttribute('role', 'listitem');
  card.setAttribute('aria-label', product.name);

  const displayPrice = product.isMultiVariant
    ? `Desde S/ ${product.variants[0].pricePEN}`
    : `S/ ${product.pricePEN}`;
  const displayUSD = product.isMultiVariant
    ? `Desde $${product.variants[0].priceUSD}`
    : `$${product.priceUSD}`;
  const displayDuration = product.isMultiVariant
    ? product.variants[0].duration
    : product.duration;

  card.innerHTML = `
    ${product.tag ? `<span class="card-tag">${product.tag}</span>` : ''}
    <div class="card-logo-wrap">
      <img
        src="${product.image}"
        alt="${product.name}"
        onerror="this.outerHTML='<span class=\'card-logo-fallback\'>${product.name[0]}</span>'"
      >
    </div>
    <div class="card-name">${product.name}</div>
    <div class="card-stars">${'★'.repeat(product.stars)}${'☆'.repeat(5 - product.stars)}</div>
    <p class="card-desc">${product.description.substring(0, 90)}…</p>
    <div class="card-price-row">
      <span class="card-duration">${displayDuration}</span>
      <div class="card-prices">
        <span class="card-price-pen">${displayPrice}</span>
        <span class="card-price-usd">${displayUSD}</span>
      </div>
    </div>
    <button class="card-cta">Ver Detalles</button>
  `;

  card.addEventListener('click', () => openModal(product));
  return card;
}


/* ════════════════════════════════════════
   CATALOG — PRODUCT GRID
════════════════════════════════════════ */
let activeFilter = 'all';
let searchQuery  = '';

function initCatalog() {
  renderProducts();
  initFilters();
  initSearch();
}

function renderProducts() {
  const grid = DOM.productsGrid;
  grid.innerHTML = '';

  const filtered = PRODUCTS.filter(p => {
    const matchFilter = activeFilter === 'all' || p.category === activeFilter;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q ||
      p.name.toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q);
    return matchFilter && matchSearch;
  });

  if (filtered.length === 0) {
    DOM.noResults.style.display = 'block';
    DOM.noResultsQuery.textContent = searchQuery;
  } else {
    DOM.noResults.style.display = 'none';
    filtered.forEach((product, i) => {
      const card = buildProductCard(product, i);
      grid.appendChild(card);
    });
  }
}

function buildProductCard(product, index) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.setAttribute('role', 'listitem');
  card.style.animationDelay = `${index * 0.05}s`;

  const displayPrice = product.isMultiVariant
    ? `Desde S/ ${product.variants[0].pricePEN}`
    : `S/ ${product.pricePEN}`;
  const displayDuration = product.isMultiVariant
    ? product.variants[0].duration
    : product.duration;

  card.innerHTML = `
    ${product.tag ? `<span class="product-card-tag">${product.tag}</span>` : ''}
    <div class="product-card-logo">
      <img
        src="${product.image}"
        alt="${product.name}"
        onerror="this.outerHTML='<span class=\'product-card-logo-fallback\'>${product.name[0]}</span>'"
      >
    </div>
    <div class="product-card-name">${product.name}</div>
    <div class="product-card-stars">${'★'.repeat(product.stars)}${'☆'.repeat(5 - product.stars)}</div>
    <div class="product-card-duration">${displayDuration}</div>
    <div class="product-card-price">${displayPrice}</div>
    <button class="product-card-btn">Ver Detalles</button>
  `;

  card.addEventListener('click', () => openModal(product));
  return card;
}

function initFilters() {
  DOM.categoryPills.forEach(pill => {
    pill.addEventListener('click', () => {
      DOM.categoryPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.dataset.filter;
      renderProducts();
    });
  });
}

function initSearch() {
  const input = DOM.searchInput;
  const clear = DOM.searchClear;
  if (!input) return;

  let debounce;
  input.addEventListener('input', () => {
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      searchQuery = input.value;
      clear.style.display = searchQuery ? 'block' : 'none';
      renderProducts();
    }, 200);
  });

  clear.addEventListener('click', () => {
    input.value = '';
    searchQuery = '';
    clear.style.display = 'none';
    renderProducts();
    input.focus();
  });
}


/* ════════════════════════════════════════
   MODAL
════════════════════════════════════════ */
function openModal(product) {
  const modal = DOM.modal;
  const body  = DOM.modalBody;

  body.innerHTML = buildModalContent(product);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus trap
  setTimeout(() => DOM.modalClose.focus(), 100);
}

function closeModal() {
  const modal = DOM.modal;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function buildModalContent(product) {
  const stars = '★'.repeat(product.stars) + '☆'.repeat(5 - product.stars);

  // Price block
  let priceHTML = '';
  if (product.isMultiVariant) {
    priceHTML = `
      <div class="modal-variants">
        ${product.variants.map(v => `
          <div class="modal-variant-row">
            <div>
              <div class="modal-variant-type">${v.type}</div>
              <div class="modal-variant-duration">${v.duration}</div>
            </div>
            <div class="modal-price-values">
              <span class="modal-price-pen">S/ ${v.pricePEN}</span>
              <span class="modal-price-usd">$${v.priceUSD}</span>
            </div>
          </div>
        `).join('')}
      </div>
    `;
  } else {
    priceHTML = `
      <div class="modal-price-block">
        <span class="modal-price-label">${product.duration}</span>
        <div class="modal-price-values">
          <span class="modal-price-pen">S/ ${product.pricePEN}</span>
          <span class="modal-price-usd">$${product.priceUSD}</span>
        </div>
      </div>
    `;
  }

  // Badges
  let badgesHTML = '';
  if (product.warning) {
    badgesHTML += `<span class="modal-badge warning">⚠️ ${product.warning}</span>`;
  }
  if (product.guarantee) {
    badgesHTML += `<span class="modal-badge guarantee">🛡️ ${product.guarantee}</span>`;
  }

  return `
    <div class="modal-logo">
      <img
        src="${product.image}"
        alt="${product.name}"
        onerror="this.outerHTML='<span class=\'modal-logo-fallback\'>${product.name[0]}</span>'"
      >
    </div>
    <h2 class="modal-product-name" id="modalProductName">${product.name}</h2>
    <div class="modal-stars" aria-label="${product.stars} estrellas">${stars}</div>
    <p class="modal-description">${product.description}</p>
    ${badgesHTML ? `<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">${badgesHTML}</div>` : ''}
    <div class="modal-divider"></div>
    ${priceHTML}
    <a
      href="${waLink(product.name)}"
      class="modal-buy-btn"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Comprar ${product.name} por WhatsApp"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.862L.5 23.5l5.826-1.527A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.95 9.95 0 01-5.058-1.38L2.5 21.5l.917-4.283A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
      Comprar por WhatsApp
    </a>
  `;
}

function initModal() {
  DOM.modalClose.addEventListener('click', closeModal);
  DOM.modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && DOM.modal.classList.contains('open')) closeModal();
  });
}


/* ════════════════════════════════════════
   INIT APP
════════════════════════════════════════ */
function initApp() {
  initHeroCanvas();
  initNavbar();
  initScrollReveal();
  initCounters();
  initCarousel();
  initCatalog();
  initModal();
}

/* ════════════════════════════════════════
   START
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
});
