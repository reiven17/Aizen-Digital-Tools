'use strict';

/* ── PRODUCTOS ── */
const pen = usd => Math.floor(usd * 3.4);
const WA  = n => `https://wa.me/51941797198?text=${encodeURIComponent('Hola! Me interesa adquirir ' + n + '. ¿Me das más info?')}`;

const PRODUCTS = [
  { id:'antigravity-ultra',    name:'Antigravity Ultra',        cat:'ia',           feat:false, tag:null,        stars:5, img:'assets/products/antigravity.png',
    dur:'1 Mes',    usd:25,   pen:pen(25),
    desc:'Potencia máxima de IA: razonamiento avanzado, generación multimodal y análisis profundo sin límites.' },

  { id:'gemini-ultra',         name:'Gemini Ultra',             cat:'ia',           feat:true,  tag:'TOP',       stars:5, img:'assets/products/gemini.png',
    multi:true,
    variants:[
      { type:'Cuenta Compartida', dur:'1 Mes', usd:10,  pen:pen(10)  },
      { type:'Cuenta Privada',    dur:'1 Mes', usd:45,  pen:pen(45)  }
    ],
    desc:'La IA más avanzada de Google: videos ilimitados con Veo 3.1, razonamiento ultra veloz y Notebooklm.' },

  { id:'supergrok',            name:'SuperGrok',                cat:'ia',           feat:true,  tag:null,        stars:5, img:'assets/products/grok.png',
    dur:'1 Mes',    usd:7,    pen:pen(7),
    desc:'IA de xAI con razonamiento en tiempo real, acceso a X y capacidades multimodales avanzadas.' },

  { id:'supergrok-heavy',      name:'SuperGrok Heavy',          cat:'ia',           feat:false, tag:'HEAVY',     stars:5, img:'assets/products/grok-heavy.png',
    dur:'1 Mes',    usd:23,   pen:pen(23),
    desc:'La versión más potente de Grok. Mayor contexto, razonamiento extendido y análisis sin restricciones.' },

  { id:'capcut-pro',           name:'CapCut Pro',               cat:'edicion',      feat:true,  tag:'POPULAR',   stars:5, img:'assets/products/capcut.png',
    dur:'1 Mes',    usd:3.5,  pen:pen(3.5),
    desc:'Edición de video con IA: elimina fondos, subtítulos automáticos, efectos cinematográficos y templates premium.' },

  { id:'chatgpt-plus',         name:'ChatGPT Plus',             cat:'ia',           feat:true,  tag:null,        stars:5, img:'assets/products/chatgpt.png',
    dur:'1 Mes',    usd:7,    pen:pen(7),
    desc:'GPT-4o, DALL·E 3, navegación web en tiempo real y plugins avanzados. El estándar de la IA conversacional.' },

  { id:'chatgpt-business',     name:'ChatGPT Business',         cat:'ia',           feat:false, tag:'BUSINESS',  stars:5, img:'assets/products/chatgpt-business.png',
    dur:'1 Mes',    usd:7,    pen:pen(7),
    desc:'Versión empresarial de ChatGPT. Tus conversaciones no entrenan modelos de OpenAI. Máxima privacidad.' },

  { id:'adobe-pro-plus',       name:'Adobe Pro Plus',           cat:'edicion',      feat:false, tag:null,        stars:5, img:'assets/products/adobe.png',
    multi:true,
    variants:[
      { type:'1 Mes',   dur:'1 Mes',   usd:10, pen:pen(10) },
      { type:'3 Meses', dur:'3 Meses', usd:24, pen:pen(24) },
      { type:'6 Meses', dur:'6 Meses', usd:39, pen:pen(39) }
    ],
    desc:'Suite Adobe completa: Photoshop, Premiere Pro, After Effects, Illustrator y más. Creatividad sin límites.' },

  { id:'n8n-starter',          name:'N8n Starter',              cat:'programacion', feat:false, tag:null,        stars:5, img:'assets/products/n8n.png',
    dur:'1 Año',    usd:49,   pen:pen(49),
    desc:'Automatización de flujos sin código. Conecta apps, automatiza tareas y construye pipelines de IA.' },

  { id:'canva-pro',            name:'Canva Pro',                cat:'edicion',      feat:false, tag:'OFERTA',    stars:5, img:'assets/products/canva.png',
    dur:'1 Año',    usd:8,    pen:pen(8),
    desc:'+100M de templates, eliminación de fondos con IA, Brand Kit y colaboración en equipo.' },

  { id:'gemini-workspace',     name:'Gemini Ultra Workspace',   cat:'ia',           feat:false, tag:'WORKSPACE', stars:4, img:'assets/products/gemini-workspace.png',
    dur:'1 Mes',    usd:15,   pen:pen(15),
    desc:'Correo corporativo con 25,000 créditos de Gemini. Ideal para equipos y proyectos empresariales.',
    warning:'Sin garantía' },

  { id:'gemini-pro',           name:'Gemini Pro',               cat:'ia',           feat:false, tag:'GARANTÍA',  stars:5, img:'assets/products/gemini-pro.png',
    dur:'18 Meses', usd:36,   pen:pen(36),
    desc:'Directo a tu correo personal. 18 meses de acceso con garantía real de 12 meses.',
    guarantee:'12 meses de garantía' },

  { id:'claude-pro',           name:'Claude Pro',               cat:'ia',           feat:true,  tag:null,        stars:5, img:'assets/products/claude.png',
    dur:'1 Mes',    usd:12,   pen:pen(12),
    desc:'El modelo más preciso y seguro. Contexto de 200k tokens, proyectos organizados y acceso a Opus.' },

  { id:'claude-max',           name:'Claude Max 5x',            cat:'ia',           feat:false, tag:'MAX',       stars:5, img:'assets/products/claude-max.png',
    dur:'1 Mes',    usd:65,   pen:pen(65),
    desc:'Límite de uso 5x mayor que Claude Pro. Para creadores y desarrolladores que no aceptan restricciones.' }
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
  const vp = track.parentElement;
  vp.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive:true });
  vp.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx;
    if (Math.abs(dx) > 50) { goSlide(dx<0 ? (carIdx+1)%FEATURED.length : (carIdx-1+FEATURED.length)%FEATURED.length); resetAuto(); }
  }, { passive:true });

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
  const dp  = p.multi ? `Desde S/ ${p.variants[0].pen}` : `S/ ${p.pen}`;
  const du  = p.multi ? `Desde $${p.variants[0].usd}`  : `$${p.usd}`;
  const dr  = p.multi ? p.variants[0].dur : p.dur;
  el.innerHTML = `
    ${p.tag ? `<span class="fc-tag">${p.tag}</span>` : ''}
    <div class="fc-logo">
      <img src="${p.img}" alt="${p.name}" onerror="this.outerHTML='<span class=\\'fc-logo-fb\\'>${p.name[0]}</span>'">
    </div>
    <div class="fc-name">${p.name}</div>
    <div class="fc-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</div>
    <p class="fc-desc">${p.desc.substring(0,90)}…</p>
    <div class="fc-price-row">
      <span class="fc-dur">${dr}</span>
      <div class="fc-prices">
        <span class="fc-pen">${dp}</span>
        <span class="fc-usd">${du}</span>
      </div>
    </div>
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
      const dp = p.multi ? `Desde S/ ${p.variants[0].pen}` : `S/ ${p.pen}`;
      const dr = p.multi ? p.variants[0].dur : p.dur;
      c.innerHTML = `
        ${p.tag ? `<span class="pc-tag">${p.tag}</span>` : ''}
        <div class="pc-logo">
          <img src="${p.img}" alt="${p.name}" onerror="this.outerHTML='<span class=\\'pc-logo-fb\\'>${p.name[0]}</span>'">
        </div>
        <div class="pc-name">${p.name}</div>
        <div class="pc-stars">${'★'.repeat(p.stars)}${'☆'.repeat(5-p.stars)}</div>
        <div class="pc-dur">${dr}</div>
        <div class="pc-price">${dp}</div>
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
          <span class="m-pen">S/ ${v.pen}</span>
          <span class="m-usd">$${v.usd}</span>
        </div>
      </div>`).join('')}</div>`;
  } else {
    priceHTML = `<div class="m-price-row">
      <span class="m-price-lbl">${p.dur}</span>
      <div class="m-price-vals">
        <span class="m-pen">S/ ${p.pen}</span>
        <span class="m-usd">$${p.usd}</span>
      </div>
    </div>`;
  }

  const badges = [
    p.warning  ? `<span class="m-badge warn">⚠️ ${p.warning}</span>`  : '',
    p.guarantee? `<span class="m-badge guar">🛡️ ${p.guarantee}</span>`: ''
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
      💬 Comprar por WhatsApp
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
