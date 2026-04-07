/* ================================================
   Leonardo Monteiro Portfolio v3 — Interactions
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => { if (loader) loader.classList.add('hidden'); }, 1800);

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
  const sections = document.querySelectorAll('section[id]');
  if (!nav) return;

  function update() {
    const sy = window.scrollY;
    nav.classList.toggle('scrolled', sy > 50);
    sections.forEach(s => {
      const top = s.offsetTop - 150;
      const h = s.offsetHeight;
      const id = s.id;
      if (sy >= top && sy < top + h) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }
  window.addEventListener('scroll', () => requestAnimationFrame(update));
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
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span><i class="fas fa-spinner fa-spin"></i> Sending...</span>';
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = '<span><i class="fas fa-check"></i> Message Sent!</span>';
      btn.style.background = 'var(--success-green)';
      form.reset();
      setTimeout(() => {
        btn.innerHTML = orig;
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
