'use strict';

/* ── PRODUCTOS ── */
const pen = usd => Math.floor(usd * 3.4);
const WA  = n => `https://wa.me/51941797198?text=${encodeURIComponent('Hola! Me interesa adquirir ' + n + '. ¿Me das más info?')}`;

const PRODUCTS = [
  { id:'antigravity-ultra',    name:'Antigravity Ultra',        cat:'programacion', feat:true,  tag:'TOP',       stars:5, img:'assets/productos/antigravity.png',
    dur:'1 Mes',    usd:25,   pen:pen(25),
    desc:'Plataforma enfocada en programación con agentes: genera código, depura, planifica tareas técnicas y acelera entregas de desarrollo.' },

  { id:'gemini-ultra',         name:'Gemini Ultra',             cat:'ia',           feat:true,  tag:'TOP',       stars:5, img:'assets/productos/gemini.png',
    multi:true,
    variants:[
      { type:'Cuenta Compartida', dur:'1 Mes', usd:10,  pen:pen(10)  },
      { type:'Cuenta Privada',    dur:'1 Mes', usd:45,  pen:pen(45)  }
    ],
    desc:'Enfocado en creación con IA: video con Veo 3.1, generación de imágenes y asistencia multimodal para producir contenido más rápido.' },

  { id:'supergrok',            name:'SuperGrok',                cat:'ia',           feat:true,  tag:'TOP',       stars:5, img:'assets/productos/grok.png',
    dur:'1 Mes',    usd:7,    pen:pen(7),
    desc:'IA con acceso a información en tiempo real para investigar tendencias, responder rápido y apoyar creación de contenido diario.' },

  { id:'supergrok-heavy',      name:'SuperGrok Heavy',          cat:'ia',           feat:false, tag:'HEAVY',     stars:5, img:'assets/productos/grok-heavy.png',
    dur:'1 Mes',    usd:23,   pen:pen(23),
    desc:'Versión más potente para trabajos largos, investigación profunda y generación de contenido con mayor contexto.' },

  { id:'capcut-pro',           name:'CapCut Pro',               cat:'edicion',      feat:false, tag:'POPULAR',   stars:5, img:'assets/productos/capcut.png',
    dur:'1 Mes',    usd:3.5,  pen:pen(3.5),
    desc:'Edición de video con IA: elimina fondos, subtítulos automáticos, efectos cinematográficos y templates premium.' },

  { id:'chatgpt-plus',         name:'ChatGPT Plus',             cat:'ia',           feat:false, tag:null,        stars:5, img:'assets/productos/chatgpt.png',
    dur:'1 Mes',    usd:7,    pen:pen(7),
    desc:'Ideal para texto, ideas, imágenes y apoyo diario con herramientas premium de IA conversacional.' },

  { id:'chatgpt-business',     name:'ChatGPT Business',         cat:'ia',           feat:false, tag:'BUSINESS',  stars:5, img:'assets/productos/chatgpt-business.png',
    dur:'1 Mes',    usd:7,    pen:pen(7),
    desc:'Plan para equipos con entorno más privado y mejor organización para trabajar contenido y tareas internas.' },

  { id:'adobe-pro-plus',       name:'Adobe Pro Plus',           cat:'edicion',      feat:false, tag:null,        stars:5, img:'assets/productos/adobe.png',
    multi:true,
    variants:[
      { type:'1 Mes',   dur:'1 Mes',   usd:10, pen:pen(10) },
      { type:'3 Meses', dur:'3 Meses', usd:24, pen:pen(24) },
      { type:'6 Meses', dur:'6 Meses', usd:39, pen:pen(39) }
    ],
    desc:'Suite creativa completa para diseño, edición de video, motion graphics y producción de contenido profesional.' },

  { id:'n8n-starter',          name:'N8n Starter',              cat:'programacion', feat:false, tag:null,        stars:5, img:'assets/productos/n8n.png',
    dur:'1 Año',    usd:49,   pen:pen(49),
    desc:'Automatiza flujos conectando apps y servicios para ahorrar tiempo en tareas repetitivas de negocio y contenido.' },

  { id:'canva-pro',            name:'Canva Pro',                cat:'edicion',      feat:false, tag:'OFERTA',    stars:5, img:'assets/productos/canva.png',
    dur:'1 Año',    usd:8,    pen:pen(8),
    desc:'Plantillas premium, edición rápida y herramientas de IA para crear contenido visual para redes y marcas.' },

  { id:'gemini-workspace',     name:'Gemini Ultra Workspace',   cat:'ia',           feat:false, tag:'WORKSPACE', stars:4, img:'assets/productos/gemini-workspace.png',
    dur:'1 Mes',    usd:15,   pen:pen(15),
    desc:'Workspace con Gemini para trabajo colaborativo, redacción, ideas y producción de contenido en equipo.',
    warning:'Sin garantía' },

  { id:'gemini-pro',           name:'Gemini Pro',               cat:'ia',           feat:true,  tag:'TOP',       stars:5, img:'assets/productos/gemini-pro.png',
    dur:'18 Meses', usd:36,   pen:pen(36),
    desc:'Plan balanceado para productividad diaria, apoyo con IA y creación de contenido en el ecosistema de Google.',
    guarantee:'12 meses de garantía' },

  { id:'claude-pro',           name:'Claude Pro',               cat:'programacion', feat:false, tag:null,        stars:5, img:'assets/productos/claude.png',
    dur:'1 Mes',    usd:12,   pen:pen(12),
    desc:'Orientado a programación y análisis técnico: contexto amplio, respuestas precisas y excelente rendimiento para documentación y código.' },

  { id:'claude-max',           name:'Claude Max 5x',            cat:'programacion', feat:false, tag:'MAX',       stars:5, img:'assets/productos/claude-max.png',
    dur:'1 Mes',    usd:65,   pen:pen(65),
    desc:'Plan de alto rendimiento para desarrollo intensivo: mayor capacidad de uso, sesiones largas y mejor flujo para equipos técnicos.' }
];

const FEATURED = PRODUCTS.filter(p => p.feat);

/* ── LOADER (1.8 segundos) ── */
function initLoader() {
  const fill = document.getElementById('loaderFill');
  const pct  = document.getElementById('loaderPct');
  const dur  = 1800;
  const start = performance.now();

  function tick(now) {
    const t = Math.min((now - start) / dur, 1);
    // ease in-out quad
    const e = t < .5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2;
    const v = Math.floor(e * 100);
    fill.style.width = (e * 100) + '%';
    pct.textContent  = v + '%';
    if (t < 1) {
      requestAnimationFrame(tick);
    } else {
      fill.style.width = '100%';
      pct.textContent  = '100%';
      setTimeout(exitLoader, 200);
    }
  }
  requestAnimationFrame(tick);
}

function exitLoader() {
  const loader = document.getElementById('loader');
  const app    = document.getElementById('app');
  loader.classList.add('exit');
  app.classList.add('show');
  setTimeout(() => { loader.style.display = 'none'; }, 800);
  initApp();
}

/* ── HERO CANVAS ── */
function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const COLS = [
    [180,78,248], [167,139,250], [196,181,253], [217,70,239], [255,255,255]
  ];

  let W, H, parts;

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  class P {
    constructor() { this.init(); }
    init() {
      this.x  = Math.random() * W;
      this.y  = Math.random() * H;
      this.vx = (Math.random() - .5) * .45;
      this.vy = (Math.random() - .5) * .45;
      this.r  = Math.random() * 1.8 + .4;
      this.c  = COLS[Math.floor(Math.random() * COLS.length)];
      this.a  = Math.random() * .5 + .2;
      this.ph = Math.random() * Math.PI * 2;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.ph += .018;
      if (this.x < 0) this.x = W;
      if (this.x > W) this.x = 0;
      if (this.y < 0) this.y = H;
      if (this.y > H) this.y = 0;
      this._a = this.a + Math.sin(this.ph) * .15;
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${this.c[0]},${this.c[1]},${this.c[2]},${this._a})`;
      ctx.fill();
    }
  }

  function connect() {
    const md = Math.min(W * .14, 150);
    for (let i = 0; i < parts.length; i++) {
      for (let j = i + 1; j < parts.length; j++) {
        const dx = parts[i].x - parts[j].x;
        const dy = parts[i].y - parts[j].y;
        const d2 = dx*dx + dy*dy;
        if (d2 < md * md) {
          const a = (1 - Math.sqrt(d2)/md) * .22;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(167,139,250,${a})`;
          ctx.lineWidth = .6;
          ctx.moveTo(parts[i].x, parts[i].y);
          ctx.lineTo(parts[j].x, parts[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function build() {
    const n = Math.min(Math.floor(W*H/13000), 90);
    parts = Array.from({ length: n }, () => new P());
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    parts.forEach(p => { p.update(); p.draw(); });
    connect();
    requestAnimationFrame(loop);
  }

  resize();
  build();
  loop();
  window.addEventListener('resize', () => { resize(); build(); }, { passive: true });
}

/* ── NAVBAR ── */
function initNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  const io  = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(el => io.observe(el));
}

/* ── COUNTER ── */
function initCounters() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const target = +e.target.dataset.count;
        const dur    = 1400;
        const start  = performance.now();
        (function tick(now) {
          const p = Math.min((now-start)/dur,1);
          const v = 1 - Math.pow(1-p,3);
          e.target.textContent = Math.floor(v*target);
          if (p < 1) requestAnimationFrame(tick);
          else e.target.textContent = target;
        })(performance.now());
        io.unobserve(e.target);
      }
    });
  }, { threshold: .5 });
  document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
}

/* ── CAROUSEL ── */
let carIdx = 0, carTimer;

function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dots  = document.getElementById('carDots');
  if (!track) return;
  const SWIPE_THRESHOLD = 32;

  FEATURED.forEach((p, i) => track.appendChild(buildFC(p, i)));

  FEATURED.forEach((p, i) => {
    const d = document.createElement('button');
    d.className = 'car-dot' + (i===0 ? ' active' : '');
    d.setAttribute('aria-label', p.name);
    d.addEventListener('click', () => { goSlide(i); resetAuto(); });
    dots.appendChild(d);
  });

  document.getElementById('carPrev').addEventListener('click', () => { goSlide((carIdx-1+FEATURED.length)%FEATURED.length); resetAuto(); });
  document.getElementById('carNext').addEventListener('click', () => { goSlide((carIdx+1)%FEATURED.length); resetAuto(); });

  let tx = 0;
  let ty = 0;
  let touchMode = null;
  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;
  let moved = false;
  let isTicking = false;
  const vp = track.parentElement;
  const cards = Array.from(track.children);
  const dotEls = Array.from(dots.children);
  const beginDrag = x => {
    isDown = true;
    startX = x;
    startScrollLeft = vp.scrollLeft;
    moved = false;
    vp.classList.add('dragging');
  };

  const updateActiveByScroll = () => {
    if (!cards.length) return;
    const center = vp.scrollLeft + vp.offsetWidth / 2;
    let nearest = 0;
    let best = Infinity;
    cards.forEach((c, idx) => {
      const cCenter = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(cCenter - center);
      if (dist < best) { best = dist; nearest = idx; }
    });
    if (nearest !== carIdx) {
      carIdx = nearest;
      cards.forEach((c, j) => c.classList.toggle('active', j===carIdx));
      dotEls.forEach((d, j) => d.classList.toggle('active', j===carIdx));
    }
  };

  const onMouseUp = () => {
    if (!isDown) return;
    isDown = false;
    vp.classList.remove('dragging');
    const delta = vp.scrollLeft - startScrollLeft;
    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      goSlide(delta > 0 ? Math.min(carIdx + 1, FEATURED.length - 1) : Math.max(carIdx - 1, 0));
      resetAuto();
    } else {
      goSlide(carIdx);
    }
  };

  const onMouseMove = e => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - vp.offsetLeft;
    const walk = x - startX;
    if (Math.abs(walk) > 2) moved = true;
    vp.scrollLeft = startScrollLeft - walk;
  };

  const onScroll = () => {
    if (isTicking) return;
    isTicking = true;
    requestAnimationFrame(() => {
      updateActiveByScroll();
      isTicking = false;
    });
  };
  vp.addEventListener('touchstart', e => {
    tx = e.touches[0].clientX;
    ty = e.touches[0].clientY;
    touchMode = null;
    beginDrag(tx);
  }, { passive:true });
  vp.addEventListener('touchmove', e => {
    if (!isDown) return;
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const dx = x - tx;
    const dy = y - ty;
    if (!touchMode && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      touchMode = Math.abs(dx) >= Math.abs(dy) ? 'x' : 'y';
    }
    if (touchMode === 'y') {
      isDown = false;
      vp.classList.remove('dragging');
      return;
    }
    if (touchMode !== 'x') return;
    e.preventDefault();
    const walk = x - startX;
    if (Math.abs(walk) > 3) moved = true;
    vp.scrollLeft = startScrollLeft - walk;
  }, { passive:false });
  vp.addEventListener('touchend', e => {
    if (!isDown) return;
    isDown = false;
    vp.classList.remove('dragging');
    if (touchMode === 'y') {
      touchMode = null;
      return;
    }
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      goSlide(dx < 0 ? Math.min(carIdx + 1, FEATURED.length - 1) : Math.max(carIdx - 1, 0));
      resetAuto();
    } else {
      goSlide(carIdx);
    }
    touchMode = null;
  }, { passive:true });
  vp.addEventListener('mousedown', e => {
    beginDrag(e.pageX - vp.offsetLeft);
  });
  window.addEventListener('mouseup', onMouseUp);
  vp.addEventListener('mouseleave', () => {
    isDown = false;
    moved = false;
    vp.classList.remove('dragging');
  });
  vp.addEventListener('mousemove', onMouseMove);
  vp.addEventListener('scroll', onScroll, { passive: true });

  track.addEventListener('click', e => {
    if (moved) {
      e.preventDefault();
      e.stopPropagation();
      moved = false;
    }
  }, true);

  startAuto();
}

function goSlide(i) {
  carIdx = i;
  const cards = document.querySelectorAll('.fc');
  const dots  = document.querySelectorAll('.car-dot');
  cards.forEach((c, j) => c.classList.toggle('active', j===i));
  dots.forEach((d, j) => d.classList.toggle('active', j===i));
  const vp = document.getElementById('carouselTrack').parentElement;
  const c  = cards[i];
  if (c) vp.scrollTo({ left: c.offsetLeft - vp.offsetWidth/2 + c.offsetWidth/2, behavior:'smooth' });
}

function startAuto() { carTimer = setInterval(() => goSlide((carIdx+1)%FEATURED.length), 4500); }
function resetAuto()  { clearInterval(carTimer); startAuto(); }

function buildFC(p, i) {
  const el = document.createElement('div');
  el.className = 'fc' + (i===0 ? ' active' : '');
  el.innerHTML = `
    <div class="fc-logo">
      <img src="${p.img}" alt="${p.name}" onerror="this.outerHTML='<span class=\\'fc-logo-fb\\'>${p.name[0]}</span>'">
    </div>
    <div class="fc-name">${p.name}</div>
    <div class="fc-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</div>
    <p class="fc-desc">${p.desc.substring(0,90)}…</p>
    <button class="fc-cta">Ver Detalles</button>`;
  el.addEventListener('click', () => openModal(p));
  return el;
}

/* ── CATALOG ── */
let activeFilter = 'all', searchQ = '';

function initCatalog() {
  render();

  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeFilter = pill.dataset.filter;
      render();
    });
  });

  const inp = document.getElementById('searchInput');
  const clr = document.getElementById('searchClr');
  let deb;
  inp.addEventListener('input', () => {
    clearTimeout(deb);
    deb = setTimeout(() => {
      searchQ = inp.value;
      clr.style.display = searchQ ? 'block' : 'none';
      render();
    }, 200);
  });
  clr.addEventListener('click', () => {
    inp.value = ''; searchQ = '';
    clr.style.display = 'none';
    render(); inp.focus();
  });
}

function render() {
  const grid = document.getElementById('prodGrid');
  const noR  = document.getElementById('noRes');
  const noRQ = document.getElementById('noResQ');
  grid.innerHTML = '';

  const list = PRODUCTS.filter(p => {
    const fm = activeFilter === 'all' || p.cat === activeFilter;
    const q  = searchQ.toLowerCase().trim();
    const sm = !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q);
    return fm && sm;
  });

  if (!list.length) {
    noR.style.display = 'block';
    noRQ.textContent  = searchQ;
  } else {
    noR.style.display = 'none';
    list.forEach((p, i) => {
      const c = document.createElement('div');
      c.className = 'pc';
      c.style.animationDelay = (i * .05) + 's';
      c.innerHTML = `
        <div class="pc-logo">
          <img src="${p.img}" alt="${p.name}" onerror="this.outerHTML='<span class=\\'pc-logo-fb\\'>${p.name[0]}</span>'">
        </div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</div>
        <button class="pc-btn">Ver Detalles</button>`;
      c.addEventListener('click', () => openModal(p));
      grid.appendChild(c);
    });
  }
}

/* ── MODAL ── */
function openModal(p) {
  const modal = document.getElementById('modal');
  const body  = document.getElementById('modalBody');

  let priceHTML = '';
  if (p.multi) {
    priceHTML = `<div class="m-variants">${p.variants.map(v => `
      <div class="m-var">
        <div>
          <div class="m-var-type">${v.type}</div>
          <div class="m-var-dur">${v.dur}</div>
        </div>
        <div class="m-price-vals">
          <span class="m-usd">$${v.usd}</span>
          <span class="m-pen">S/ ${v.pen}</span>
        </div>
      </div>`).join('')}</div>`;
  } else {
    priceHTML = `<div class="m-price-row">
      <span class="m-price-lbl">${p.dur}</span>
      <div class="m-price-vals">
        <span class="m-usd">$${p.usd}</span>
        <span class="m-pen">S/ ${p.pen}</span>
      </div>
    </div>`;
  }

  const badges = [
    p.warning  ? `<span class="m-badge warn">${p.warning}</span>`  : '',
    p.guarantee? `<span class="m-badge guar">${p.guarantee}</span>`: ''
  ].join('');

  body.innerHTML = `
    <div class="m-logo">
      <img src="${p.img}" alt="${p.name}" onerror="this.outerHTML='<span class=\\'m-logo-fb\\'>${p.name[0]}</span>'">
    </div>
    <h2 class="m-name">${p.name}</h2>
    <div class="m-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</div>
    <p class="m-desc">${p.desc}</p>
    ${badges ? `<div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center">${badges}</div>` : ''}
    <div class="m-div"></div>
    ${priceHTML}
    <a href="${WA(p.name)}" class="m-buy" target="_blank" rel="noopener">
      Comprar por WhatsApp
    </a>`;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function initModal() {
  document.getElementById('modalClose').addEventListener('click', closeModal);
  document.getElementById('modalBg').addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

/* ── INIT ── */
function initApp() {
  initCanvas();
  initNav();
  initReveal();
  initCounters();
  initCarousel();
  initCatalog();
  initModal();
}

document.addEventListener('DOMContentLoaded', initLoader);
