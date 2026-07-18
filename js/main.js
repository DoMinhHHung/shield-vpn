document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initMobileNav();
  initSmoothScroll();
  initNewsletterForm();
});

function initFaqAccordion() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      document.querySelectorAll('.accordion-item').forEach(accItem => {
        accItem.classList.remove('active');
        accItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });

      if (!isActive) {
        item.classList.add('active');
        header.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initMobileNav() {
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  if (!navToggle || !nav) return;

  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.querySelector('i').className = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars';
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.querySelector('i').className = 'fa-solid fa-bars';
    });
  });
}

function initNewsletterForm() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const button = form.querySelector('button');
    const originalLabel = button.textContent;
    button.textContent = 'Subscribed!';
    button.disabled = true;
    form.querySelector('input').value = '';
    setTimeout(() => {
      button.textContent = originalLabel;
      button.disabled = false;
    }, 2500);
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}