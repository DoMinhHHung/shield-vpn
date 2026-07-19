document.addEventListener('DOMContentLoaded', () => {
  initFaqAccordion();
  initMobileNav();
  initSmoothScroll();
  initNewsletterForm();
  initTableOfContents();
  initScrollTop();
  initBenefitCarousel();
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
    navToggle.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
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

function initTableOfContents() {
  const toggle = document.getElementById('tocToggle');
  const panel = document.getElementById('tocPanel');
  if (!toggle || !panel) return;
  const setOpen = (isOpen) => {
    panel.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  };
  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
    setOpen(!panel.classList.contains('open'));
  });
  panel.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && e.target !== toggle) {
      setOpen(false);
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
  initScrollSpy();
}

function initScrollSpy() {
  const links = document.querySelectorAll('#tocList a[data-toc-target]');
  if (!links.length) return;
  const linkByTargetId = new Map();
  links.forEach(link => linkByTargetId.set(link.dataset.tocTarget, link));
  const sections = Array.from(linkByTargetId.keys()).map(id => document.getElementById(id)).filter(Boolean);
  const setActive = (id) => {
    links.forEach(link => link.classList.remove('active'));
    const activeLink = linkByTargetId.get(id);
    if (activeLink) activeLink.classList.add('active');
  };
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible.length > 0) setActive(visible[0].target.id);
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
  sections.forEach(section => observer.observe(section));
}

function initScrollTop() {
  const button = document.getElementById('scrollTop');
  if (!button) return;
  let ticking = false;
  const updateVisibility = () => {
    button.classList.toggle('visible', window.scrollY > 600);
    ticking = false;
  };
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateVisibility);
      ticking = true;
    }
  });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initBenefitCarousel() {
  const carousel = document.getElementById('benefitCarousel');
  const track = document.getElementById('benefitTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dots = Array.from(document.querySelectorAll('.carousel-dot'));
  if (!carousel || !track || !dots.length) return;
  const slideCount = dots.length;
  let currentIndex = 0;
  const goTo = (index) => {
    currentIndex = (index + slideCount) % slideCount;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach((dot, i) => {
      const isActive = i === currentIndex;
      dot.classList.toggle('active', isActive);
      dot.setAttribute('aria-selected', String(isActive));
    });
  };
  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
  carousel.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') goTo(currentIndex + 1);
    if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
  });
}