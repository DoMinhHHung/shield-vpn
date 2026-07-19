document.addEventListener('DOMContentLoaded', function() {
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const item = this.parentElement;
      const isActive = item.classList.contains('active');
      document.querySelectorAll('.accordion-item').forEach(accItem => {
        accItem.classList.remove('active');
        accItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });

  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('primaryNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('open');
      this.setAttribute('aria-expanded', String(isOpen));
      this.querySelector('i').className = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.querySelector('i').className = 'fa-solid fa-bars';
      });
    });
  }

  const newsForm = document.querySelector('.newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = this.querySelector('button');
      const orig = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      this.querySelector('input').value = '';
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
      }, 2500);
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const tocToggle = document.getElementById('tocToggle');
  const tocPanel = document.getElementById('tocPanel');
  if (tocToggle && tocPanel) {
    tocToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      const isOpen = tocPanel.classList.toggle('open');
      this.setAttribute('aria-expanded', String(isOpen));
    });
    tocPanel.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        tocPanel.classList.remove('open');
        tocToggle.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function(e) {
      if (!tocPanel.contains(e.target) && e.target !== tocToggle) {
        tocPanel.classList.remove('open');
        tocToggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        tocPanel.classList.remove('open');
        tocToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  const tocLinks = document.querySelectorAll('#tocList a[data-toc-target]');
  if (tocLinks.length) {
    const linkMap = new Map();
    tocLinks.forEach(link => linkMap.set(link.dataset.tocTarget, link));
    const sections = Array.from(linkMap.keys()).map(id => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(function(entries) {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible.length > 0) {
        const id = visible[0].target.id;
        tocLinks.forEach(l => l.classList.remove('active'));
        const active = linkMap.get(id);
        if (active) active.classList.add('active');
      }
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
    sections.forEach(s => observer.observe(s));
  }

  const scrollBtn = document.getElementById('scrollTop');
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      scrollBtn.classList.toggle('visible', window.scrollY > 600);
    });
    scrollBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const carousel = document.getElementById('benefitCarousel');
  const track = document.getElementById('benefitTrack');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');
  const dots = document.querySelectorAll('.carousel-dot');
  if (carousel && track && dots.length) {
    const slideCount = dots.length;
    let current = 0;
    function goTo(index) {
      current = (index + slideCount) % slideCount;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === current);
        dot.setAttribute('aria-selected', String(i === current));
      });
    }
    prevBtn.addEventListener('click', function() { goTo(current - 1); });
    nextBtn.addEventListener('click', function() { goTo(current + 1); });
    dots.forEach(function(dot, i) {
      dot.addEventListener('click', function() { goTo(i); });
    });
    carousel.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'ArrowLeft') goTo(current - 1);
    });
  }

  const modal = document.getElementById('reviewModal');
  const modalClose = document.getElementById('modalClose');
  const modalBody = document.getElementById('modalBody');
  const modalTitle = document.getElementById('modalTitle');

  if (modal && modalClose && modalBody && modalTitle) {
    const reviewData = {
      protonvpn: {
        title: 'ProtonVPN Full Review',
        rating: '9.6',
        stars: '★★★★½',
        badge: 'Editor\'s Choice 2026',
        badgeClass: 'badge-gold',
        description: '<p><strong>ProtonVPN</strong> is the most transparent VPN on the market. Built by the team behind Proton Mail, this service is fully open-source and has been independently audited by security professionals.</p><p>What sets ProtonVPN apart is its commitment to privacy. The company is based in Switzerland, which has some of the strongest privacy laws in the world and sits outside the 14 Eyes intelligence-sharing alliance.</p><p>The free tier is genuinely free — no time limits, no credit card required, and no ads. You get unlimited bandwidth with access to servers in 3 countries, making it the only truly free VPN worth recommending.</p>',
        pros: ['Fully open-source and independently audited', 'Genuine free tier with no time limits', 'Swiss jurisdiction, outside 14 Eyes', 'Strong commitment to privacy and transparency'],
        cons: ['Free tier has limited server selection', 'Fewer servers than some competitors'],
        ctaLink: 'https://protonvpn.com/',
        ctaLabel: 'Get ProtonVPN Free'
      },
      surfshark: {
        title: 'Surfshark Full Review',
        rating: '9.3',
        stars: '★★★★½',
        badge: 'Best for Families',
        badgeClass: 'badge-blue',
        description: '<p><strong>Surfshark</strong> is the best choice for households with many devices. It\'s the only premium VPN that offers truly unlimited simultaneous connections — one subscription covers every device in your home.</p><p>Privacy is taken seriously here too. The no-logs policy has been independently audited <strong>twice</strong> by Deloitte, one of the Big Four accounting firms. This means you can trust that your data isn\'t being stored or sold.</p><p>At just $1.99/month on the long-term plan, it\'s also the most affordable option among the top-tier VPNs.</p>',
        pros: ['Unlimited simultaneous devices', 'No-logs policy audited twice by Deloitte', 'Cheapest long-term pricing', 'Clean Web feature blocks ads and malware'],
        cons: ['Based in the Netherlands (14 Eyes)', 'Newer service with less track record'],
        ctaLink: 'https://surfshark.com/',
        ctaLabel: 'Try Surfshark Unlimited'
      },
      nordvpn: {
        title: 'NordVPN Full Review',
        rating: '9.1',
        stars: '★★★★☆',
        badge: 'Largest Server Network',
        badgeClass: 'badge-green',
        description: '<p><strong>NordVPN</strong> operates the largest server network of any VPN, with over 9,400 servers in 224+ locations worldwide. This means you\'re almost always able to find a fast server close to your physical location.</p><p>The company developed its own WireGuard-based protocol called NordLynx, which is designed to maximize speed while maintaining strong encryption. This makes NordVPN one of the fastest options available.</p><p>NordVPN is based in Panama, a privacy-friendly jurisdiction outside the 14 Eyes alliance, and has undergone independent security audits.</p>',
        pros: ['9,400+ servers in 224+ locations', 'NordLynx protocol for maximum speed', 'Panama jurisdiction, outside 14 Eyes', 'Double VPN and Onion Over VPN options'],
        cons: ['10 device limit per account', 'Slightly more expensive than Surfshark'],
        ctaLink: 'https://nordvpn.com/',
        ctaLabel: 'Explore NordVPN Servers'
      }
    };

    function openModal(key) {
      const data = reviewData[key];
      if (!data) return;
      modalTitle.textContent = data.title;
      modalBody.innerHTML = `
        <div class="review-meta">
          <span class="badge ${data.badgeClass}">${data.badge}</span>
        </div>
        <div class="review-rating">
          <span class="score">${data.rating}</span>
          <span class="stars">${data.stars}</span>
          <span style="color: var(--text-muted); font-size: 14px;">Outstanding</span>
        </div>
        <div class="review-detail-title">${data.title}</div>
        <div class="review-detail-text">${data.description}</div>
        <h4 style="font-size: 18px; font-weight: 700; margin-bottom: 12px;">What We Like</h4>
        <ul class="review-detail-list">
          ${data.pros.map(p => `<li><span class="check">✓</span> ${p}</li>`).join('')}
        </ul>
        <h4 style="font-size: 18px; font-weight: 700; margin-bottom: 12px;">Things to Consider</h4>
        <ul class="review-detail-list">
          ${data.cons.map(c => `<li><span class="cross">✗</span> ${c}</li>`).join('')}
        </ul>
        <div class="review-cta">
          <a href="${data.ctaLink}" class="btn btn-primary" target="_blank" rel="noopener">${data.ctaLabel}</a>
          <button type="button" class="btn btn-secondary" id="modalCloseInner">Close Review</button>
        </div>
      `;
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      document.getElementById('modalCloseInner').addEventListener('click', closeModal);
    }

    function closeModal() {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-review]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        openModal(this.getAttribute('data-review'));
      });
    });

    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
      if (e.target === this) closeModal();
    });
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });
  }

  const statusEl = document.getElementById('connectionStatus');
  const pingEl = document.getElementById('pingDisplay');
  const locationEl = document.getElementById('virtualLocation');

  if (statusEl && pingEl && locationEl) {
    const locations = ['Zurich, Switzerland', 'Berlin, Germany', 'Singapore, SG', 'Tokyo, Japan', 'London, UK', 'New York, US', 'Amsterdam, NL'];
    let ping = 12;
    setInterval(function() {
      ping = Math.floor(Math.random() * 20) + 5;
      pingEl.textContent = '· ' + ping + 'ms';
      if (Math.random() < 0.08) {
        locationEl.textContent = locations[Math.floor(Math.random() * locations.length)];
      }
      if (Math.random() < 0.05) {
        statusEl.textContent = 'Connected';
        setTimeout(function() {
          statusEl.textContent = 'Encrypted';
        }, 3000);
      }
    }, 2000);
  }
});