(function () {
  'use strict';

  const SESSION_KEY = 'portfolio-code';
  const LANG_KEY = 'portfolio-lang';
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- Talen ---------- */

  // Vaste teksten van de site. De inhoud zelf (producten enz.) staat in de versleutelde data.
  const UI = {
    nl: {
      nav: { over: 'Over mij', producten: 'Producten', contact: 'Contact' },
      mainMenu: 'Hoofdmenu', openMenu: 'Menu openen', logout: 'Afsluiten',
      hello: (n) => `Hoi, ${n}!`, helloAnon: 'Hoi, leuk dat je er bent!',
      seeWork: 'Bekijk producten', meet: 'Even kennismaken',
      available: { label: 'Beschikbaar', title: 'Zullen we samen beginnen?', text: 'Ik heb ruimte voor nieuwe projecten. Vertel me over je idee, dan denk ik vrijblijvend met je mee.' },
      unavailable: { label: 'Niet beschikbaar', title: 'Momenteel niet beschikbaar', text: 'Mijn agenda zit vol. Neem gerust contact op voor een later moment.' },
      aboutEyebrow: 'Over mij', aboutTitle: 'Wie ben ik?',
      productsEyebrow: 'Producten', productsTitle: 'Kant-en-klaar voor jou',
      from: 'vanaf', delivery: 'Levertijd', popular: 'Populair', order: 'Bestellen', orderSubject: (t) => `Bestelling: ${t}`,
      contactEyebrow: 'Contact', contactTitle: 'Zullen we samenwerken?', sendMsg: 'Stuur een bericht',
      confidential: 'Vertrouwelijk — alleen voor genodigden', updated: 'bijgewerkt',
      lock: {
        eyebrow: 'Klantomgeving',
        text: "Hier vind je privévoorstellen en klantdemo's. Vul je persoonlijke toegangscode in om verder te gaan.",
        label: 'Toegangscode', placeholder: 'Bijv. ABCD-2345', open: 'Openen',
        noCode: 'Geen code ontvangen?', ask: 'Neem contact op',
        show: 'Code tonen', hide: 'Code verbergen',
        wrong: 'Deze code klopt niet. Controleer de code en probeer het opnieuw.',
        wait: (s) => `Deze code klopt niet. Wacht ${s} seconden en probeer het opnieuw.`,
        patience: (s) => `Even geduld… probeer het over ${s} seconden opnieuw.`,
        empty: 'Vul eerst je toegangscode in.',
        missing: 'De portfolio-inhoud ontbreekt (data/portfolio.js).',
        noCrypto: 'Deze browser ondersteunt geen beveiligde ontsleuteling. Open de pagina via https.',
        badLink: 'De code in deze link is niet (meer) geldig.'
      }
    },
    en: {
      nav: { over: 'About', producten: 'Products', contact: 'Contact' },
      mainMenu: 'Main menu', openMenu: 'Open menu', logout: 'Sign out',
      hello: (n) => `Hi, ${n}!`, helloAnon: 'Hi, great to have you here!',
      seeWork: 'View products', meet: "Let's get acquainted",
      available: { label: 'Available', title: 'Shall we get started together?', text: "I have room for new projects. Tell me about your idea and I'll happily think along with you, no strings attached." },
      unavailable: { label: 'Unavailable', title: 'Currently unavailable', text: 'My schedule is full. Feel free to get in touch for a later date.' },
      aboutEyebrow: 'About me', aboutTitle: 'Who am I?',
      productsEyebrow: 'Products', productsTitle: 'Ready-made for you',
      from: 'from', delivery: 'Delivery', popular: 'Popular', order: 'Order now', orderSubject: (t) => `Order: ${t}`,
      contactEyebrow: 'Contact', contactTitle: 'Shall we work together?', sendMsg: 'Send a message',
      confidential: 'Confidential — by invitation only', updated: 'updated',
      lock: {
        eyebrow: 'Client area',
        text: "Here you'll find private proposals and client demos. Enter your personal access code to continue.",
        label: 'Access code', placeholder: 'E.g. ABCD-2345', open: 'Open',
        noCode: "Didn't get a code?", ask: 'Get in touch',
        show: 'Show code', hide: 'Hide code',
        wrong: "That code isn't right. Please check it and try again.",
        wait: (s) => `That code isn't right. Wait ${s} seconds and try again.`,
        patience: (s) => `Hold on… try again in ${s} seconds.`,
        empty: 'Please enter your access code first.',
        missing: 'The portfolio content is missing (data/portfolio.js).',
        noCrypto: "This browser doesn't support secure decryption. Please open the page over https.",
        badLink: 'The code in this link is not (or no longer) valid.'
      }
    }
  };
  const LANGS = Object.keys(UI);

  function initialLang() {
    const fromHash = location.hash.match(/lang=(nl|en)/);
    if (fromHash) return fromHash[1];
    try {
      const saved = localStorage.getItem(LANG_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (_) {}
    return /^nl\b/i.test(navigator.language || '') ? 'nl' : (navigator.language ? 'en' : 'nl');
  }

  let lang = initialLang();
  const ui = () => UI[lang];

  // Inhoud mag tweetalig zijn: { "nl": "…", "en": "…" }. Valt terug op de andere taal.
  function tr(v) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      return v[lang] != null ? v[lang] : (v.nl != null ? v.nl : v.en);
    }
    return v;
  }
  const trList = (v) => (tr(v) || []).map(tr);

  function langSwitch() {
    return h('div', { class: 'lang-switch', role: 'group', 'aria-label': 'Taal / Language' },
      LANGS.map((l) =>
        h('button', {
          type: 'button', 'data-lang': l, 'aria-pressed': String(l === lang), class: l === lang ? 'active' : '',
          onclick: () => setLang(l)
        }, l.toUpperCase())
      )
    );
  }

  function setLang(l) {
    if (l === lang || !LANGS.includes(l)) return;
    lang = l;
    try { localStorage.setItem(LANG_KEY, l); } catch (_) {}
    applyLockTexts();
    if (current) {
      const y = window.scrollY;
      render(current.data, current.name, current.meta, true);
      window.scrollTo(0, y);
    }
  }

  /* ---------- Kleine helpers ---------- */

  // Bouwt elementen veilig op: tekst gaat altijd via textContent.
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === 'class') el.className = v;
      else if (k.startsWith('on')) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v === true ? '' : v);
    }
    for (const kid of kids.flat(Infinity)) {
      if (kid == null || kid === false || kid === '') continue;
      el.append(kid.nodeType ? kid : document.createTextNode(String(kid)));
    }
    return el;
  }

  const ICONS = {
    code: '<path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 4l-4 16"/>',
    cloud: '<path d="M7 18h10a4 4 0 0 0 .6-7.96A6 6 0 0 0 6.2 9.1 4.5 4.5 0 0 0 7 18z"/>',
    shield: '<path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/>',
    server: '<rect x="4" y="4" width="16" height="7" rx="2"/><rect x="4" y="13" width="16" height="7" rx="2"/><path d="M8 7.5h.01M8 16.5h.01"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18h2"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/>',
    call: '<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5V16M8 7.5v.01M11.5 16v-3.2a2.3 2.3 0 0 1 4.6 0V16M11.5 10.5V16"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>',
    close: '<path d="M6 6l12 12M18 6L6 18"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    logout: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 16l-4-4 4-4M6 12h10"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    pen: '<path d="M4 20l4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    cart: '<circle cx="9.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/><path d="M2.5 3.5h3l2.3 10.7a1.5 1.5 0 0 0 1.5 1.3h8.3a1.5 1.5 0 0 0 1.5-1.1L21 7.5H6.3"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M9 9v11"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };

  function icon(name, size = 22) {
    const span = document.createElement('span');
    span.className = 'icon';
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.spark}</svg>`;
    return span;
  }

  // Alleen veilige links toestaan.
  function safeUrl(url) {
    const u = String(url || '').trim();
    return /^(https?:|mailto:|tel:|#)/i.test(u) ? u : null;
  }

  // Logo: een "O" met een muisaanwijzer die klikt ("van concept tot klik").
  const LOGO = '<svg viewBox="0 0 40 40" width="42" height="42" aria-hidden="true">' +
    '<rect width="40" height="40" rx="13" fill="#4E6E5A"/>' +
    '<circle cx="16.5" cy="17" r="8" fill="none" stroke="#FFFDFA" stroke-width="3.4"/>' +
    '<circle class="logo-spark" cx="31" cy="9" r="2.4" fill="#DCC27E"/>' +
    '<path class="logo-pointer" d="M20.5 20.5 L33 25.4 L27.6 27.6 L25.4 33 Z" fill="#E3A68B" stroke="#4E6E5A" stroke-width="1.8" stroke-linejoin="round"/>' +
    '</svg>';

  function logoMark() {
    const span = document.createElement('span');
    span.className = 'brand-mark';
    span.innerHTML = LOGO;
    return span;
  }

  // "OnlineDesk" -> "Online" + "Desk" in accentkleur; andere namen blijven heel.
  function wordmark(name) {
    const m = String(name).match(/^([A-Z][^A-Z\s]+)([A-Z]\S*)$/);
    return h('span', { class: 'brand-name' }, m ? [m[1], h('span', { class: 'brand-accent' }, m[2])] : name);
  }


  const COLORS = ['sage', 'clay', 'sky', 'lav', 'sand'];
  const colorOf = (c, i) => (COLORS.includes(c) ? c : COLORS[i % COLORS.length]);
  const paragraphs = (text) => String(tr(text) || '').split(/\n\s*\n/).map((t) => h('p', {}, t));

  /* ---------- Secties ---------- */

  const NAV = ['over', 'producten', 'contact'];

  function header(d) {
    const p = d.profile || {};
    const links = NAV.filter((id) => hasSection(d, id)).map((id) =>
      h('a', { href: `#${id}`, class: 'nav-link', 'data-nav': id }, ui().nav[id])
    );
    const toggle = h('button', { class: 'icon-btn nav-toggle', type: 'button', 'aria-label': ui().openMenu, 'aria-expanded': 'false' }, icon('menu'));
    const nav = h('nav', { class: 'nav', id: 'nav', 'aria-label': ui().mainMenu },
      links,
      h('button', { class: 'nav-link logout', type: 'button', onclick: logout }, icon('logout', 18), ui().logout)
    );
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', (e) => {
      if (e.target.closest('a')) {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });

    return h('header', { class: 'site-header' },
      h('div', { class: 'container header-inner' },
        h('a', { href: '#top', class: 'brand', 'aria-label': p.name || 'Portfolio' },
          logoMark(),
          wordmark(p.name || 'Portfolio')
        ),
        nav,
        h('div', { class: 'header-tools' }, langSwitch(), toggle)
      )
    );
  }

  function hasSection(d, id) {
    return {
      over: !!(d.about && (d.about.text || (d.about.services || []).length)),
      producten: (d.products || []).length > 0,
      contact: !!d.contact
    }[id];
  }

  function hero(d, guest) {
    const p = d.profile || {};
    // Een deel van de kop krijgt de groene accentkleur: het woord uit "headlineAccent",
    // of anders de laatste twee woorden. Leestekens direct erna kleuren mee.
    const headline = String(tr(p.headline) || p.name || '');
    const accent = String(tr(p.headlineAccent) || '');
    let plain, marked;
    const at = accent ? headline.lastIndexOf(accent) : -1;
    if (at >= 0) {
      const rest = headline.slice(at + accent.length);
      const punct = rest.match(/^[.!?,…]*/)[0];
      plain = [headline.slice(0, at), null, rest.slice(punct.length)];
      marked = accent + punct;
    } else {
      const words = headline.split(/\s+/).filter(Boolean);
      const cut = words.length > 2 ? words.length - 2 : words.length;
      plain = [words.slice(0, cut).join(' ') + (cut < words.length ? ' ' : ''), null, ''];
      marked = words.slice(cut).join(' ');
    }

    // Hero als speelse "bento": losse tegels in zachte kleuren.
    return h('section', { class: 'hero', id: 'top' },
      h('div', { class: 'container bento' },
        h('div', { class: 'tile tile-intro reveal' },
          h('p', { class: 'chip' }, h('span', { class: 'wave', 'aria-hidden': 'true' }, '👋'), guest ? ui().hello(guest) : ui().helloAnon),
          h('h1', { class: 'hero-title' },
            plain[0], marked ? h('span', { class: 'squiggle' }, marked) : null, plain[2]
          ),
          p.subheadline ? h('p', { class: 'hero-sub' }, tr(p.subheadline)) : null,
          p.intro ? h('p', { class: 'hero-intro' }, tr(p.intro)) : null,
          h('div', { class: 'hero-actions' },
            hasSection(d, 'producten') ? h('a', { href: '#producten', class: 'btn btn-primary' }, ui().seeWork, icon('arrow', 18)) : null,
            hasSection(d, 'contact') ? h('a', { href: '#contact', class: 'btn btn-ghost' }, ui().meet) : null
          )
        ),
        availabilityTile(d)
      )
    );
  }

  // Tegel naast de kop: beschikbaar of niet, aan te zetten met "available": true / false.
  function availabilityTile(d) {
    const p = d.profile || {};
    if (p.available == null) return null;
    const on = !!p.available;
    const t = on ? ui().available : ui().unavailable;
    return h(hasSection(d, 'contact') ? 'a' : 'div', {
      class: `tile tile-cta reveal${on ? '' : ' is-off'}`, href: hasSection(d, 'contact') ? '#contact' : null
    },
      h('span', { class: 'status-pill' }, h('span', { class: 'dot' }), t.label),
      h('span', { class: 'cta-title' }, t.title),
      h('span', { class: 'cta-text' }, t.text),
      hasSection(d, 'contact') ? h('span', { class: 'cta-arrow' }, icon('arrow', 24)) : null
    );
  }

  function sectionHead(eyebrow, title, text) {
    return h('div', { class: 'section-head reveal' },
      h('p', { class: 'eyebrow' }, h('span', { class: 'spark', 'aria-hidden': 'true' }, '✦'), eyebrow),
      h('h2', {}, title),
      text ? h('p', { class: 'section-text' }, text) : null
    );
  }

  function about(d) {
    if (!hasSection(d, 'over')) return null;
    const a = d.about;
    return h('section', { class: 'section', id: 'over' },
      h('div', { class: 'container' },
        sectionHead(ui().aboutEyebrow, tr(a.title) || ui().aboutTitle),
        h('div', { class: 'about-grid' },
          h('div', { class: 'about-text reveal' }, paragraphs(a.text)),
          h('div', { class: 'services' },
            (a.services || []).map((s, i) =>
              h('article', { class: `service reveal tone-${colorOf(s.color, i)}` },
                h('div', { class: 'service-icon' }, icon(s.icon)),
                h('h3', {}, tr(s.title)),
                h('p', {}, tr(s.text))
              )
            )
          )
        )
      )
    );
  }

  // Kant-en-klare producten. "Bestellen" opent een e-mail met de productnaam als onderwerp.
  function products(d) {
    if (!hasSection(d, 'producten')) return null;
    const email = d.contact && d.contact.email;
    return h('section', { class: 'section section-tint', id: 'producten' },
      h('div', { class: 'container' },
        sectionHead(ui().productsEyebrow, tr(d.productsTitle) || ui().productsTitle, tr(d.productsText)),
        h('div', { class: 'product-grid' },
          d.products.map((p, i) => {
            const title = tr(p.title);
            const features = trList(p.features);
            const order = email ? `mailto:${email}?subject=${encodeURIComponent(ui().orderSubject(title))}` : '#contact';
            return h('article', { class: `product reveal tone-${colorOf(p.color, i)}` },
              h('div', { class: 'product-visual' },
                h('span', { class: 'project-icon' }, icon(p.icon || 'code', 34)),
                p.popular ? h('span', { class: 'chip chip-on' }, '★ ', ui().popular) : null
              ),
              h('div', { class: 'product-body' },
                h('h3', {}, title),
                p.text ? h('p', { class: 'product-text' }, tr(p.text)) : null,
                p.price
                  ? h('p', { class: 'product-price' },
                      h('small', {}, ui().from), ' ', tr(p.price),
                      p.priceNote ? h('small', {}, ' ', tr(p.priceNote)) : null)
                  : null,
                features.length ? h('ul', { class: 'checks' }, features.map((f) => h('li', {}, icon('check', 18), h('span', {}, f)))) : null,
                p.delivery ? h('p', { class: 'product-meta' }, icon('clock', 16), `${ui().delivery}: ${tr(p.delivery)}`) : null,
                h('a', { class: 'btn btn-primary btn-block', href: safeUrl(order) || '#contact' }, tr(p.cta) || ui().order, icon('arrow', 18))
              )
            );
          })
        )
      )
    );
  }

  function contact(d) {
    if (!hasSection(d, 'contact')) return null;
    const c = d.contact;
    const items = [
      c.email && ['mail', c.email, `mailto:${c.email}`],
      c.phone && ['call', c.phone, `tel:${c.phone.replace(/[^\d+]/g, '')}`],
      c.linkedin && ['linkedin', 'LinkedIn', c.linkedin],
      c.github && ['github', 'GitHub', c.github],
      c.location && ['pin', tr(c.location), null]
    ].filter(Boolean);

    return h('section', { class: 'section', id: 'contact' },
      h('div', { class: 'container' },
        h('div', { class: 'contact-card reveal' },
          h('div', { class: 'contact-copy' },
            h('p', { class: 'chip' }, h('span', { 'aria-hidden': 'true' }, '💬'), ui().contactEyebrow),
            h('h2', {}, tr(c.title) || ui().contactTitle),
            c.text ? h('p', {}, tr(c.text)) : null,
            c.email ? h('a', { class: 'btn btn-light', href: `mailto:${c.email}` }, ui().sendMsg, icon('arrow', 18)) : null
          ),
          h('ul', { class: 'contact-list' },
            items.map(([ic, label, href]) => {
              const url = safeUrl(href);
              const inner = [h('span', { class: 'contact-icon' }, icon(ic, 20)), h('span', {}, label)];
              return h('li', {}, url
                ? h('a', { href: url, ...(url.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {}) }, inner)
                : h('span', { class: 'contact-static' }, inner));
            })
          )
        )
      )
    );
  }

  function footer(d, meta) {
    const p = d.profile || {};
    return h('footer', { class: 'site-footer' },
      h('div', { class: 'container footer-inner' },
        h('span', {}, `© ${new Date().getFullYear()} ${p.name || ''}`),
        h('span', { class: 'footer-note' }, ui().confidential, meta && meta.updated ? ` · ${ui().updated} ${meta.updated}` : '')
      )
    );
  }

  /* ---------- Opbouwen ---------- */

  let current = null;

  function render(d, guest, meta, instant) {
    current = { data: d, name: guest, meta };
    const p = d.profile || {};
    document.documentElement.lang = lang;
    document.title = `${p.name || 'OnlineDesk'} · ${lang === 'en' ? 'Client area' : 'Klantomgeving'}`;
    const app = $('#app');
    app.replaceChildren(
      header(d),
      h('main', { id: 'main' }, hero(d, guest), about(d), products(d), contact(d)),
      footer(d, meta)
    );
    $('#lock').hidden = true;
    app.hidden = false;
    if (!instant) window.scrollTo(0, 0);
    observe(instant);
  }

  let navIo;
  function observe(instant) {
    const reveals = $$('.reveal');
    if (instant || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      reveals.forEach((el) => io.observe(el));
    }

    // Actieve menu-item markeren tijdens het scrollen.
    if ('IntersectionObserver' in window) {
      if (navIo) navIo.disconnect();
      navIo = new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          $$('[data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === en.target.id));
        });
      }, { rootMargin: '-45% 0px -50% 0px' });
      NAV.forEach((id) => { const s = document.getElementById(id); if (s) navIo.observe(s); });
    }
    onScroll();
  }

  function onScroll() {
    const header = $('.site-header');
    if (header) header.classList.toggle('scrolled', window.scrollY > 8);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  function logout() {
    try { sessionStorage.removeItem(SESSION_KEY); } catch (_) {}
    location.hash = '';
    location.reload();
  }

  /* ---------- Toegangsscherm ---------- */

  const form = $('#lock-form');
  const input = $('#code');
  const msg = $('#lock-msg');
  const btn = $('#lock-btn');
  const eye = $('#eye');
  let failures = 0;
  let lockedUntil = 0;
  let lastMessage = null;

  // Teksten op het toegangsscherm met data-i18n="sleutel" in index.html.
  function applyLockTexts() {
    const L = ui().lock;
    document.documentElement.lang = lang;
    $$('[data-i18n]').forEach((el) => { if (L[el.dataset.i18n]) el.textContent = L[el.dataset.i18n]; });
    input.placeholder = L.placeholder;
    eye.setAttribute('aria-label', input.type === 'password' ? L.show : L.hide);
    const sw = $('#lock-lang');
    if (sw) sw.replaceChildren(langSwitch());
    if (lastMessage) setMessage(lastMessage.key, lastMessage.kind, lastMessage.arg);
  }

  function setMessage(key, kind, arg) {
    lastMessage = key ? { key, kind, arg } : null;
    const t = key ? ui().lock[key] : '';
    msg.textContent = typeof t === 'function' ? t(arg) : (t || '');
    msg.className = 'lock-msg' + (kind ? ` is-${kind}` : '');
  }

  async function tryCode(code) {
    if (!window.PORTFOLIO_VAULT) {
      setMessage('missing', 'error');
      return false;
    }
    if (!window.crypto || !crypto.subtle) {
      setMessage('noCrypto', 'error');
      return false;
    }
    const result = await Vault.open(window.PORTFOLIO_VAULT, code);
    if (!result) return false;
    try { sessionStorage.setItem(SESSION_KEY, code); } catch (_) {}
    render(result.data, result.name, window.PORTFOLIO_VAULT);
    return true;
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const now = Date.now();
    if (now < lockedUntil) {
      setMessage('patience', 'warn', Math.ceil((lockedUntil - now) / 1000));
      return;
    }
    const code = input.value.trim();
    if (!code) {
      setMessage('empty', 'warn');
      input.focus();
      return;
    }
    btn.disabled = true;
    form.classList.add('busy');
    setMessage(null);
    const ok = await tryCode(code).catch(() => false);
    btn.disabled = false;
    form.classList.remove('busy');
    if (ok) return;

    failures++;
    form.classList.remove('shake');
    void form.offsetWidth;
    form.classList.add('shake');
    if (failures >= 3) {
      const wait = Math.min(60, (failures - 2) * 5);
      lockedUntil = Date.now() + wait * 1000;
      setMessage('wait', 'error', wait);
    } else {
      setMessage('wrong', 'error');
    }
    input.select();
  });

  eye.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    eye.setAttribute('aria-pressed', String(show));
    eye.setAttribute('aria-label', show ? ui().lock.hide : ui().lock.show);
  });

  applyLockTexts();

  // Automatisch openen via een deellink (#code=XXXX&lang=en) of eerder ingevoerde code in deze sessie.
  (async function autoUnlock() {
    let code = '';
    const m = location.hash.match(/code=([^&]+)/);
    if (m) {
      code = decodeURIComponent(m[1]);
      history.replaceState(null, '', location.pathname + location.search);
    } else {
      try { code = sessionStorage.getItem(SESSION_KEY) || ''; } catch (_) {}
    }
    if (code) {
      form.classList.add('busy');
      const ok = await tryCode(code).catch(() => false);
      form.classList.remove('busy');
      if (!ok) {
        try { sessionStorage.removeItem(SESSION_KEY); } catch (_) {}
        if (m) setMessage('badLink', 'error');
      }
    }
    if ($('#app').hidden) input.focus({ preventScroll: true });
  })();
})();
