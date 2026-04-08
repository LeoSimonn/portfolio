/* ================================================
   Leonardo Monteiro Portfolio v3 — Interactions
   ================================================ */

/** Bibata Modern Ice (GPL-3.0) — inlined as data URLs so the cursor works without fetching assets/ (preview, subpaths, file://). */
const BIBATA_ICE_LEFT_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">' +
  '<path d="M201.163 133.54L201.149 133.528L201.134 133.515L91.6855 36.4935C86.5144 31.7659 81.4269 27.9549 76.5421 25.525C71.7671 23.1497 66.0861 21.5569 60.4133 23.1213C54.3118 24.8039 50.4875 29.4674 48.3639 34.759C46.3122 39.8715 45.4999 46.2787 45.4999 53.5383L45.4999 200.431V200.493L45.5008 200.555C45.6218 208.862 50.4279 217.843 55.9963 223.894C58.8934 227.043 62.5163 229.986 66.6704 231.742C70.9172 233.537 76.217 234.254 81.4691 231.884C85.7536 229.951 89.6754 226.055 92.8565 222.651C94.6841 220.695 96.8336 218.252 99.0355 215.749C100.71 213.847 102.414 211.91 104.03 210.126C112.189 201.122 121.346 192.286 132.161 187.407C143.013 182.511 155.809 181.375 167.963 181.146C170.959 181.089 173.85 181.087 176.65 181.085H176.663H176.686C179.447 181.083 182.164 181.081 184.662 181.019C189.231 180.906 194.643 180.609 198.777 178.88C208.711 174.723 210.972 163.838 210.753 156.445C210.521 148.596 207.57 139.272 201.163 133.54Z" fill="#FFFFFF" stroke="#000000" stroke-width="17"/>' +
  '</svg>';

const BIBATA_ICE_HAND_SVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" viewBox="0 0 256 256" fill="none">' +
  '<path d="M17.6822 129.306C17.9142 128.737 18.2237 128.029 18.6212 127.22C19.4074 125.619 20.5888 123.517 22.2747 121.268C25.6285 116.795 31.4352 111.177 40.4538 108.547C49.9972 105.764 60.2881 106.957 71.4261 112.134L62.4414 58.6843C60.8294 49.3309 63.9295 40.6043 68.759 34.3679C73.6032 28.1125 81.2692 22.9561 90.6807 22.1174L90.8223 22.1048L90.9641 22.0945C96.5492 21.6909 102.027 22.8772 106.89 25.2756C112.328 18.0399 120.747 13.0682 130.119 12.4974C137.915 12.0139 145.424 14.6381 151.345 19.2813C156.26 15.3869 162.302 12.9011 168.762 12.499C178.496 11.8817 187.04 16.0978 192.777 21.7858C197.756 26.7223 201.675 33.8207 202.203 42.0306C203.897 41.6272 205.632 41.3651 207.394 41.2567C218.449 40.4961 227.733 46.0028 233.371 52.7116C239.007 59.4173 242.879 69.5748 240.075 80.404L225.593 138.14C222.913 148.824 220.644 170.418 219.052 190.7C218.278 200.551 217.694 209.658 217.304 216.307L215.959 243.204L114.324 243.559C100.059 243.639 89.2654 235.043 81.9284 227.234C74.3328 219.149 67.3923 208.592 61.1496 198.746C59.813 196.638 58.5002 194.549 57.2019 192.484L57.2002 192.481C52.1173 184.394 47.2583 176.662 42.0744 169.535C35.5479 160.56 29.5477 154.059 23.8231 150.227L12.9668 142.959L17.1948 130.598L17.6822 129.306Z" fill="#000000"/>' +
  '<path d="M131.161 29.4654C123.564 29.9227 117.078 37.2105 117.566 44.7415L121.494 112.736C121.69 116.132 118.607 116.829 118.171 114.234L107.597 51.3314C106.558 44.2169 99.4208 38.5277 92.1898 39.0503C84.2336 39.7593 77.8367 48.0202 79.1993 55.8246L93.7003 142.091C93.7496 143.308 93.9506 144.519 94.3044 145.685C93.7371 147.965 93.3986 149.579 93.3986 149.579C45.0621 101.653 33.28 136.1 33.28 136.1C66.1267 158.088 86.0504 226.74 114.244 226.56L199.738 226.26C199.738 226.26 202.925 158.636 209.104 134.004L223.605 76.193C225.925 67.3805 217.66 57.5471 208.499 58.221C202.303 58.5729 196.62 63.3112 195.207 69.3037L182.821 118.128C182.149 120.778 181.503 119.715 181.612 117.529L185.238 44.7419C185.767 36.6115 178.03 28.9402 169.83 29.4654C162.742 29.9001 156.519 36.2081 156.236 43.244L152.913 109.741C152.743 113.12 150.399 113.186 150.194 109.442L146.568 43.2444C146.262 35.6092 138.852 28.9826 131.161 29.4654Z" fill="#FFFFFF"/>' +
  '</svg>';

function bibataSvgDataUrl(svg) {
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

function getLang() {
  return document.documentElement.dataset.lang === 'pt' ? 'pt' : 'en';
}

function i18nResolve(lang, path) {
  const parts = path.split('.');
  let cur = window.PORTFOLIO_I18N && window.PORTFOLIO_I18N[lang];
  for (const p of parts) cur = cur?.[p];
  return typeof cur === 'string' ? cur : null;
}

function t(path) {
  const v = i18nResolve(getLang(), path);
  return v != null ? v : path;
}

function applyI18n(lang) {
  if (!window.PORTFOLIO_I18N) return;
  const L = lang === 'pt' ? 'pt' : 'en';
  document.documentElement.dataset.lang = L;
  document.documentElement.setAttribute('lang', L === 'pt' ? 'pt-BR' : 'en');
  try {
    localStorage.setItem('portfolio-lang', L);
  } catch (e) {}

  const meta = window.PORTFOLIO_I18N[L].meta;
  if (meta) {
    document.title = meta.title;
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute('content', meta.description);
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const path = el.getAttribute('data-i18n');
    const val = i18nResolve(L, path);
    if (val != null) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const path = el.getAttribute('data-i18n-html');
    const val = i18nResolve(L, path);
    if (val != null) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const path = el.getAttribute('data-i18n-placeholder');
    const val = i18nResolve(L, path);
    if (val != null) el.setAttribute('placeholder', val);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
    const path = el.getAttribute('data-i18n-aria');
    const val = i18nResolve(L, path);
    if (val != null) el.setAttribute('aria-label', val);
  });

  const langLbl = document.getElementById('langToggleLabel');
  if (langLbl) langLbl.textContent = L === 'en' ? 'PT' : 'EN';

  syncThemeToggleAria();
}

function getInitialLang() {
  try {
    const saved = localStorage.getItem('portfolio-lang');
    if (saved === 'en' || saved === 'pt') return saved;
  } catch (e) {}
  const nav = navigator.language || navigator.userLanguage || 'en';
  return String(nav).toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (e) {}
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function syncThemeToggleAria() {
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  const theme = document.documentElement.getAttribute('data-theme') || 'dark';
  btn.setAttribute(
    'aria-label',
    theme === 'dark' ? t('nav.themeAriaDark') : t('nav.themeAriaLight')
  );
}

function refreshBibataCursor() {
  const el = document.querySelector('#customCursor .custom-cursor__bibata');
  if (!el) return;
  const hover = document.body.classList.contains('cursor-hover');
  const mode = hover ? 'hand' : 'left';
  if (el.dataset.bibataMode === mode) return;
  el.dataset.bibataMode = mode;
  const svg = hover ? BIBATA_ICE_HAND_SVG : BIBATA_ICE_LEFT_SVG;
  el.style.backgroundImage = 'url(' + JSON.stringify(bibataSvgDataUrl(svg)) + ')';
}

function applyTheme(theme) {
  const next = theme === 'light' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  try {
    localStorage.setItem('portfolio-theme', next);
  } catch (e) {}
  const icon = document.getElementById('themeToggleIcon');
  if (icon) icon.className = next === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  syncThemeToggleAria();
  refreshBibataCursor();
}

function initThemeToggle() {
  applyTheme(getInitialTheme());
  const btn = document.getElementById('themeToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    applyTheme(cur === 'dark' ? 'light' : 'dark');
  });
}

function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const next = getLang() === 'en' ? 'pt' : 'en';
    applyI18n(next);
  });
}

function initCustomCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const root = document.getElementById('customCursor');
  if (!root) return;
  const bibataEl = root.querySelector('.custom-cursor__bibata');
  if (!bibataEl) return;

  document.body.classList.add('has-custom-cursor');

  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let lastHover = false;

  const hoverSel =
    'a, button, [role="button"], .nav-tool-btn, label, .filter-btn, .project-card-hit, .project-card-detail-icon, .back-to-top';

  function onMove(e) {
    mx = e.clientX;
    my = e.clientY;
    const textMode = !!(e.target && e.target.closest && e.target.closest('input,textarea,select'));
    document.body.classList.toggle('custom-cursor--text', textMode);
    const el =
      !textMode && e.target && e.target.closest ? e.target.closest(hoverSel) : null;
    const hover = !!el;
    document.body.classList.toggle('cursor-hover', hover);
    if (!document.body.classList.contains('is-cursor-ready')) {
      document.body.classList.add('is-cursor-ready');
    }
    if (hover !== lastHover) {
      lastHover = hover;
      refreshBibataCursor();
    }
  }

  function tick() {
    root.style.transform = `translate3d(${mx}px, ${my}px, 0)`;
    requestAnimationFrame(tick);
  }

  window.addEventListener('pointermove', onMove, { passive: true });
  refreshBibataCursor();
  requestAnimationFrame(tick);
}

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  applyI18n(getInitialLang());
  initLangToggle();
  initCustomCursor();

  const loader = document.getElementById('loader');
  setTimeout(() => {
    if (loader) loader.classList.add('hidden');
  }, 1800);

  initNav();
  initScrollReveal();
  initScrollProgress();
  initProjectFilter();
  initContactForm();
  initCounters();
  initTiltCards();
});

/* ============================================================ */
/* NAVIGATION                                                     */
/* ============================================================ */
function initNav() {
  const nav = document.getElementById('nav');
  const links = document.querySelectorAll('.nav-link');
  const cta = document.querySelector('nav#nav .nav-cta');
  const sections = document.querySelectorAll('section[id]');
  if (!nav) return;

  function update() {
    const sy = window.scrollY;
    nav.classList.toggle('scrolled', sy > 50);
    links.forEach((l) => l.classList.remove('active'));
    if (cta) cta.classList.remove('active');

    for (const s of sections) {
      const top = s.offsetTop - 150;
      const h = s.offsetHeight;
      const id = s.id;
      if (sy >= top && sy < top + h) {
        if (id === 'contact' && cta) {
          cta.classList.add('active');
        } else {
          const active = document.querySelector(`.nav-link[href="#${id}"]`);
          if (active) active.classList.add('active');
        }
        return;
      }
    }
  }
  window.addEventListener('scroll', () => requestAnimationFrame(update));
  update();
}

/* ============================================================ */
/* SCROLL REVEAL                                                  */
/* ============================================================ */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const parent = entry.target.parentElement;
        const siblings = Array.from(parent?.children || []).filter(
          el => el.classList.contains('reveal')
        );
        const idx = siblings.indexOf(entry.target);
        const delay = Math.min(idx * 100, 300);
        setTimeout(() => {
          entry.target.classList.add('active');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0 });

  els.forEach(el => observer.observe(el));

  // Fallback
  setTimeout(() => {
    document.querySelectorAll('.reveal:not(.active)').forEach(el => {
      el.classList.add('active');
    });
  }, 2500);
}

/* ============================================================ */
/* SCROLL PROGRESS                                                */
/* ============================================================ */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;
  function update() {
    const top = window.scrollY;
    const h = document.documentElement.scrollHeight - window.innerHeight;
    const pct = h > 0 ? (top / h) * 100 : 0;
    bar.style.width = pct + '%';
    requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

/* ============================================================ */
/* PROJECT FILTER                                                 */
/* ============================================================ */
function initProjectFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cards.forEach(card => {
        const cat = card.getAttribute('data-category') || '';
        const cats = cat.trim().split(/\s+/).filter(Boolean);
        if (filter === 'all' || cats.includes(filter)) {
          card.style.display = '';
          requestAnimationFrame(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.95)';
          setTimeout(() => { card.style.display = 'none'; }, 300);
        }
      });
    });
  });
}

/* ============================================================ */
/* CONTACT FORM                                                   */
/* ============================================================ */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  function submitBtnHtml() {
    return '<span class="btn-shine"></span>' + t('contact.submit') + ' <i class="fas fa-paper-plane"></i>';
  }
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.innerHTML = '<span><i class="fas fa-spinner fa-spin"></i> ' + t('contact.sending') + '</span>';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<span><i class="fas fa-check"></i> ' + t('contact.sent') + '</span>';
      btn.style.background = 'var(--success-green)';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = submitBtnHtml();
        btn.style.background = '';
        btn.disabled = false;
      }, 3000);
    }, 1500);
  });
}

/* ============================================================ */
/* COUNT-UP ANIMATION                                             */
/* ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  function animate(el) {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1600;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.round(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => animate(entry.target), 600);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  counters.forEach(el => observer.observe(el));
}

/* ============================================================ */
/* TILT ON CARDS                                                   */
/* ============================================================ */
function initTiltCards() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  document.querySelectorAll('[data-tilt-card]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const rx = ((y - 50) / 50) * -6;
      const ry = ((x - 50) / 50) * 6;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.5s cubic-bezier(.16,1,.3,1)';
      setTimeout(() => { card.style.transition = ''; }, 600);
    });
  });

  document.querySelectorAll('.tilt-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      const rx = ((y - 50) / 50) * -5;
      const ry = ((x - 50) / 50) * 5;
      card.style.transform = `perspective(600px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
