const navigationItems = [
  { label: 'Where to Ride', href: '#where-to-ride' },
  { label: 'Gear', href: '#gear' },
  { label: 'Academy', href: '#academy' },
];

const categories = [
  {
    id: 'where-to-ride',
    eyebrow: 'Places',
    title: 'Where to Ride',
    description:
      'Reviews and guides to bike parks, pump tracks, trails and other places suitable for young riders.',
    cta: 'Explore riding spots',
    icon: '🚵',
  },
  {
    id: 'gear',
    eyebrow: 'Equipment',
    title: 'Gear',
    description:
      'Recommendations and comparisons of helmets, gloves, protection and other equipment for young mountain bikers.',
    cta: 'Compare gear',
    icon: '🛡️',
    isCommerceReady: true,
  },
  {
    id: 'academy',
    eyebrow: 'Skills',
    title: 'Academy',
    description:
      'A place for children’s MTB coaching, camps, riding lessons and other opportunities to improve their skills.',
    cta: 'Find skill support',
    icon: '🏕️',
  },
];

function logo() {
  return `
    <a class="logo" href="#top" aria-label="Young Shredders home">
      <span class="logo-mark" aria-hidden="true">YS</span>
      <span class="logo-text"><strong>Young</strong><span>Shredders</span></span>
    </a>`;
}

function navigation(className) {
  return navigationItems.map((item) => `<a href="${item.href}">${item.label}</a>`).join('');
}

function categoryCards() {
  return categories
    .map(
      (category) => `
        <article class="category-card" id="${category.id}">
          <div class="card-icon" aria-hidden="true">${category.icon}</div>
          <p class="eyebrow">${category.eyebrow}</p>
          <h3>${category.title}</h3>
          <p>${category.description}</p>
          ${category.isCommerceReady ? '<span class="commerce-note">Affiliate-ready layout</span>' : ''}
          <a href="#${category.id}" aria-label="${category.cta} coming soon">${category.cta}</a>
        </article>`,
    )
    .join('');
}

const app = `
  <header class="site-header">
    <nav class="nav-shell" aria-label="Main navigation">
      ${logo()}
      <button class="mobile-menu-button" type="button" aria-controls="mobile-nav" aria-expanded="false">
        <span aria-hidden="true">☰</span><span class="sr-only">Open navigation</span>
      </button>
      <div class="nav-links">${navigation()}</div>
    </nav>
    <div class="mobile-nav" id="mobile-nav" hidden>${navigation()}</div>
  </header>
  <main id="top">
    <section class="hero section" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Parent-first MTB guidance</p>
        <h1 id="hero-title">Everything young riders need. One place for parents.</h1>
        <p class="hero-text">
          Discover places your children can ride, choose suitable mountain bike gear, and find coaching,
          camps and riding opportunities that help young riders progress with confidence.
        </p>
        <div class="hero-actions" aria-label="Homepage shortcuts">
          <a class="button primary" href="#where-to-ride">Start exploring</a>
          <a class="button secondary" href="#purpose">Why it exists</a>
        </div>
      </div>
      <div class="hero-image-card">
        <img
          src="https://images.unsplash.com/photo-1571868200845-4fe0654eb0c5?auto=format&fit=crop&w=1200&q=85"
          alt="A young mountain bike rider riding a forest trail"
        />
        <div class="image-caption">Ride-ready guidance for families</div>
      </div>
    </section>
    <section class="section categories-section" aria-labelledby="categories-title">
      <div class="section-heading">
        <p class="eyebrow">Built around three parent decisions</p>
        <h2 id="categories-title">Find the right ride, kit and coaching faster.</h2>
      </div>
      <div class="category-grid">${categoryCards()}</div>
    </section>
    <section class="purpose-section section" id="purpose" aria-labelledby="purpose-title">
      <div>
        <p class="eyebrow">Why Young Shredders exists</p>
        <h2 id="purpose-title">Clear guidance for safer, happier progression.</h2>
      </div>
      <p>
        Young Shredders helps parents make better decisions for young mountain bike riders by keeping
        ride locations, gear advice and skills opportunities simple, practical and age-aware. The goal is
        to support children enjoying mountain biking safely without asking families to share unnecessary
        personal data.
      </p>
    </section>
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      ${logo()}
      <div class="footer-links" aria-label="Footer navigation">${navigation()}</div>
    </div>
    <p>© ${new Date().getFullYear()} Young Shredders. Practical MTB guidance for riding families.</p>
  </footer>`;

document.querySelector('#root').innerHTML = app;

const mobileButton = document.querySelector('.mobile-menu-button');
const mobileNav = document.querySelector('#mobile-nav');

mobileButton.addEventListener('click', () => {
  const isExpanded = mobileButton.getAttribute('aria-expanded') === 'true';
  mobileButton.setAttribute('aria-expanded', String(!isExpanded));
  mobileNav.hidden = isExpanded;
});

mobileNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    mobileButton.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
  }
});
