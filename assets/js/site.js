/* Openbare OnlineDesk-website. De inhoud staat in assets/js/content.js. */
(function () {
  'use strict';

  const LANG_KEY = 'portfolio-lang';


  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const C = window.SITE_CONTENT || {};

  /* ---------- Talen ---------- */

  const UI = {
    nl: {
      meta: {
        title: 'OnlineDesk · Websites, webshops en apps',
        description: 'Kant-en-klare websites en webshops, en websites, webshops en apps op maat. Van concept tot klik: persoonlijk, met duidelijke prijzen en afspraken.'
      },
      nav: { producten: 'Producten', maatwerk: 'Op maat', faq: 'FAQ', contact: 'Contact' },
      mainMenu: 'Hoofdmenu', openMenu: 'Menu openen',
      hello: 'Hoi, leuk dat je er bent!',
      seeProducts: 'Bekijk het aanbod', discussCustom: 'Vertel je idee',
      available: { label: 'Beschikbaar', title: 'Weet je nog niet wat je nodig hebt?', text: 'Vertel wat je wilt bereiken. Ik denk met je mee over een passende website, webshop of app.', cta: 'Denk met me mee' },
      unavailable: { label: 'Niet beschikbaar', title: 'Momenteel niet beschikbaar', text: 'Mijn agenda zit vol. Neem gerust contact op voor een later moment.', cta: 'Neem contact op' },
      productsEyebrow: 'Producten', productsTitle: 'Direct aan de slag?',
      productsText: 'Deze websites en webshops zijn al volledig gebouwd. Kies wat bij je past en ga zelf aan de slag. Wil je hulp met jouw teksten, huisstijl of het online zetten? Dat regel ik graag voor je.',
      from: 'vanaf', delivery: 'Levertijd', popular: 'Populair',
      sample: 'Voorbeeldafbeelding', sampleNote: 'echte screenshot volgt',
      lists: { features: 'Functies', included: 'In de prijs', extra: 'Extra of op offerte', recurring: 'Terugkerende kosten', supply: 'Dit lever jij aan', receive: 'Dit ontvang je bij oplevering' },
      requestPkg: 'Pakket aanvragen', customise: 'Laten aanpassen', demo: 'Bekijk demo',
      forWho: 'Voor', details: 'Bekijk details', priceTbd: 'Prijs volgt', allPackages: 'Alle pakketten',
      invite: { title: 'Staat jouw idee er niet tussen?', text: 'Ik maak ook websites, webshops en apps op maat.', cta: 'Vertel je idee' },
      notFound: 'Dit pakket bestaat niet (meer).',
      detailsPending: 'De volledige details van dit pakket volgen binnenkort. Vraag gerust naar de mogelijkheden: je krijgt altijd eerst een voorstel met duidelijke kosten.',
      mailNote: 'De knoppen openen je e-mailprogramma met je keuze al ingevuld.',
      noMailNote: 'Aanvragen kan via de contactgegevens onderaan de pagina.',
      options: { ready: 'Kant-en-klaar', custom: 'Laten aanpassen', bespoke: 'Maatwerk' },
      customEyebrow: 'Op maat', customTitle: 'Websites, webshops en apps op maat', workTitle: 'Eigen werk',
      faqEyebrow: 'Vragen', faqTitle: 'Goed om te weten.', faqSub: 'Een paar antwoorden voordat je begint.',
      faqMore: 'Nog een vraag?', faqMoreLink: 'Stuur me een bericht.',
      contactEyebrow: 'Contact',
      form: {
        heading: 'Vertel me over\njouw idee.',
        lead: 'Een vraag over een product of iets op maat laten maken? Stuur me een bericht.',
        soft: 'Je hoeft nog niet precies te weten wat je nodig hebt.',
        directMail: 'Liever rechtstreeks mailen?', directPhone: 'Liever even bellen?', directLinkedin: 'Bekijk mijn profiel',
        title: 'Stuur een bericht', name: 'Naam', email: 'E-mailadres', message: 'Jouw bericht',
        submit: 'Verstuur bericht', submitMail: 'Verstuur via e-mail',
        notePrivacy: 'Ik gebruik je gegevens om op je bericht te reageren.',
        noteMail: 'Je e-mailprogramma opent met je bericht al ingevuld. Ik gebruik je gegevens alleen om te reageren.',
        noteOff: 'Het contactformulier wordt binnenkort geactiveerd.',
        invalid: 'Vul je naam, een geldig e-mailadres en je bericht in.',
        sending: 'Bezig met versturen…', sent: 'Bedankt! Je bericht is verstuurd. Ik reageer zo snel mogelijk.',
        mailOpened: 'Je e-mailprogramma is geopend. Verstuur het bericht daar om het af te ronden.',
        failed: 'Versturen is niet gelukt. Probeer het later nog eens.',
        failedMail: (m) => `Versturen is niet gelukt. Probeer het later nog eens of mail naar ${m}.`
      },
      mail: {
        subject: (what, option) => `Aanvraag: ${what} – ${option}`,
        body: (what, option) => `Hallo OnlineDesk,\n\nIk heb interesse in: ${what}\nGekozen optie: ${option}\n\nMijn naam:\nBedrijf (optioneel):\nMijn wensen:\n\nGroet,\n`,
        ideaSubject: 'Maatwerk: mijn idee',
        ideaBody: 'Hallo OnlineDesk,\n\nIk heb een idee voor een website, webshop of app op maat.\n\nMijn naam:\nBedrijf (optioneel):\nMijn idee:\n\nGroet,\n',
        generalSubject: 'Vraag via de website'
      }
    },
    en: {
      meta: {
        title: 'OnlineDesk · Websites, webshops and apps',
        description: 'Ready-made websites and webshops, plus custom websites, webshops and apps. From concept to click: personal, with clear prices and agreements.'
      },
      nav: { producten: 'Products', maatwerk: 'Custom-built', faq: 'FAQ', contact: 'Contact' },
      mainMenu: 'Main menu', openMenu: 'Open menu',
      hello: 'Hi, great to have you here!',
      seeProducts: 'View the offer', discussCustom: 'Tell me your idea',
      available: { label: 'Available', title: "Not sure yet what you need?", text: "Tell me what you want to achieve. I'll think along with you about a suitable website, webshop or app.", cta: "Let's think it through" },
      unavailable: { label: 'Unavailable', title: 'Currently unavailable', text: 'My schedule is full. Feel free to get in touch for a later date.', cta: 'Get in touch' },
      productsEyebrow: 'Products', productsTitle: 'Ready to get started?',
      productsText: "These websites and webshops are already fully built. Choose what suits you and get started yourself. Would you like help with your copy, brand style or going live? I'm happy to take care of that for you.",
      from: 'from', delivery: 'Delivery', popular: 'Popular',
      sample: 'Sample image', sampleNote: 'real screenshot coming soon',
      lists: { features: 'Features', included: 'Included in the price', extra: 'Extra or on quotation', recurring: 'Recurring costs', supply: 'What you supply', receive: 'What you receive on delivery' },
      requestPkg: 'Request package', customise: 'Have it customised', demo: 'View demo',
      forWho: 'For', details: 'View details', priceTbd: 'Price coming soon', allPackages: 'All packages',
      invite: { title: "Can't find your idea here?", text: 'I also build custom websites, webshops and apps.', cta: 'Tell me your idea' },
      notFound: 'This package does not exist (anymore).',
      detailsPending: "The full details of this package are coming soon. Feel free to ask about the options: you'll always get a proposal with clear costs first.",
      mailNote: 'The buttons open your email program with your choice already filled in.',
      noMailNote: 'You can request this via the contact details at the bottom of the page.',
      options: { ready: 'Ready-made', custom: 'Customised', bespoke: 'Custom build' },
      customEyebrow: 'Custom-built', customTitle: 'Custom websites, webshops and apps', workTitle: 'My work',
      faqEyebrow: 'Questions', faqTitle: 'Good to know.', faqSub: 'A few answers before you start.',
      faqMore: 'Another question?', faqMoreLink: 'Send me a message.',
      contactEyebrow: 'Contact',
      form: {
        heading: 'Tell me about\nyour idea.',
        lead: 'A question about a product, or something custom-built? Send me a message.',
        soft: "You don't need to know exactly what you need yet.",
        directMail: 'Prefer to email directly?', directPhone: 'Prefer to call?', directLinkedin: 'View my profile',
        title: 'Send a message', name: 'Name', email: 'Email address', message: 'Your message',
        submit: 'Send message', submitMail: 'Send via email',
        notePrivacy: 'I use your details to reply to your message.',
        noteMail: 'Your email program opens with your message already filled in. I only use your details to reply.',
        noteOff: 'The contact form will be activated soon.',
        invalid: 'Please enter your name, a valid email address and your message.',
        sending: 'Sending…', sent: "Thank you! Your message has been sent. I'll get back to you as soon as possible.",
        mailOpened: 'Your email program has opened. Send the message there to finish.',
        failed: "Sending didn't work. Please try again later.",
        failedMail: (m) => `Sending didn't work. Please try again later or email ${m}.`
      },
      mail: {
        subject: (what, option) => `Request: ${what} – ${option}`,
        body: (what, option) => `Hello OnlineDesk,\n\nI'm interested in: ${what}\nChosen option: ${option}\n\nMy name:\nCompany (optional):\nMy wishes:\n\nKind regards,\n`,
        ideaSubject: 'Custom build: my idea',
        ideaBody: "Hello OnlineDesk,\n\nI have an idea for a custom website, webshop or app.\n\nMy name:\nCompany (optional):\nMy idea:\n\nKind regards,\n",
        generalSubject: 'Question via the website'
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
    if (v && typeof v === 'object' && !Array.isArray(v)) return v[lang] != null ? v[lang] : (v.nl != null ? v.nl : v.en);
    return v;
  }
  const trList = (v) => (tr(v) || []).map(tr);

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
    phone: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18h2"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14.5a6.5 6.5 0 0 1 3.5 5.5"/>',
    spark: '<path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M4 7l8 6 8-6"/>',
    call: '<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 10.5V16M8 7.5v.01M11.5 16v-3.2a2.3 2.3 0 0 1 4.6 0V16M11.5 10.5V16"/>',
    pin: '<path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    repeat: '<path d="M17 2l4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
    upload: '<path d="M12 16V4M7 9l5-5 5 5"/><path d="M4 16v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3"/>',
    gift: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M12 8v13M3 12h18M12 8S10.5 3 8 3.5 7 8 12 8zM12 8s1.5-5 4-4.5S17 8 12 8z"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    pen: '<path d="M4 20l4-1 11-11a2.1 2.1 0 0 0-3-3L5 16l-1 4z"/><path d="M14 6l3 3"/>',
    search: '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
    cart: '<circle cx="9.5" cy="19.5" r="1.5"/><circle cx="17.5" cy="19.5" r="1.5"/><path d="M2.5 3.5h3l2.3 10.7a1.5 1.5 0 0 0 1.5 1.3h8.3a1.5 1.5 0 0 0 1.5-1.1L21 7.5H6.3"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="3"/><path d="M3 9h18M9 9v11"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10" rx="3"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 12.5h18"/>',
    scissors: '<circle cx="6" cy="6.5" r="2.5"/><circle cx="6" cy="17.5" r="2.5"/><path d="M8 8.2L20 18M8 15.8L20 6"/>',
    coffee: '<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M17 10.5h1.5a2.5 2.5 0 0 1 0 5H17M8 3v3M12 3v3"/>',
    chat: '<path d="M20 12a7.5 7.5 0 0 1-11 6.6L4 20l1.4-4.5A7.5 7.5 0 1 1 20 12z"/>'
  };

  function icon(name, size = 22) {
    const span = document.createElement('span');
    span.className = 'icon';
    span.setAttribute('aria-hidden', 'true');
    span.innerHTML = `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${ICONS[name] || ICONS.spark}</svg>`;
    return span;
  }

  // Alleen veilige links en afbeeldingspaden toestaan.
  const safeUrl = (url) => { const u = String(url || '').trim(); return /^(https?:|mailto:|tel:|#)/i.test(u) ? u : null; };
  const safeSrc = (src) => { const s = String(src || '').trim(); return s && !/^\s*(javascript|data):/i.test(s) ? s : null; };

  const COLORS = ['sage', 'clay', 'sky', 'lav', 'sand'];
  const colorOf = (c, i) => (COLORS.includes(c) ? c : COLORS[i % COLORS.length]);
  const checks = (items) => h('ul', { class: 'checks' }, items.map((x) => h('li', {}, icon('check', 18), h('span', {}, x))));

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

  function wordmark(name) {
    const m = String(name).match(/^([A-Z][^A-Z\s]+)([A-Z]\S*)$/);
    return h('span', { class: 'brand-name' }, m ? [m[1], h('span', { class: 'brand-accent' }, m[2])] : name);
  }

  /* ---------- Aanvragen per e-mail ---------- */

  const email = () => String((C.contact && C.contact.email) || '').trim();

  // Een mailto-link met onderwerp en bericht al ingevuld; zonder e-mailadres naar het contactblok.
  function requestHref(subject, body) {
    if (!email()) return '#contact';
    return `mailto:${email()}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  function requestButton(label, what, option, cls) {
    const href = requestHref(ui().mail.subject(what, option), ui().mail.body(what, option));
    return h('a', { class: `btn ${cls}`, href, 'data-request': `${what} | ${option}` }, email() ? icon('mail', 18) : null, label);
  }

  /* ---------- Secties ---------- */

  const NAV = ['producten', 'maatwerk', 'faq', 'contact'];
  // Op de detailpagina verwijzen menulinks naar de homepage; contact staat op beide pagina's.
  const PAGE = document.body.dataset.page || 'home';
  const navHref = (id) => (PAGE === 'home' || id === 'contact' ? `#${id}` : `./#${id}`);

  function header() {
    const links = NAV.filter((id) => has(id)).map((id) =>
      h('a', { href: navHref(id), class: 'nav-link', 'data-nav': id }, ui().nav[id])
    );
    const toggle = h('button', { class: 'icon-btn nav-toggle', type: 'button', 'aria-label': ui().openMenu, 'aria-expanded': 'false', 'aria-controls': 'nav' }, icon('menu'));
    const nav = h('nav', { class: 'nav', id: 'nav', 'aria-label': ui().mainMenu }, links);
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
        h('a', { href: PAGE === 'home' ? '#top' : './', class: 'brand', 'aria-label': C.brand || 'OnlineDesk' }, logoMark(), wordmark(C.brand || 'OnlineDesk')),
        nav,
        h('div', { class: 'header-tools' }, langSwitch(), toggle)
      )
    );
  }

  function has(id) {
    return {
      producten: (C.products || []).length > 0,
      maatwerk: !!C.custom,
      faq: (C.faq || []).length > 0,
      contact: true
    }[id];
  }

  function sectionHead(eyebrow, title, text) {
    return h('div', { class: 'section-head reveal' },
      h('p', { class: 'eyebrow' }, h('span', { class: 'spark', 'aria-hidden': 'true' }, '✦'), eyebrow),
      h('h2', {}, title),
      text ? h('p', { class: 'section-text' }, text) : null
    );
  }

  function hero() {
    const p = C.hero || {};
    // Een deel van de kop krijgt de groene accentkleur; leestekens direct erna kleuren mee.
    const headline = String(tr(p.headline) || '');
    const accent = String(tr(p.accent) || '');
    const at = accent ? headline.lastIndexOf(accent) : -1;
    let title = [headline];
    if (at >= 0) {
      const rest = headline.slice(at + accent.length);
      const punct = rest.match(/^[.!?,…]*/)[0];
      title = [headline.slice(0, at), h('span', { class: 'squiggle' }, accent + punct), rest.slice(punct.length)];
    }
    return h('section', { class: 'hero', id: 'top' },
      h('div', { class: 'container hero-greeting' },
        h('p', { class: 'chip' }, h('span', { class: 'wave', 'aria-hidden': 'true' }, '👋'), ui().hello)
      ),
      h('div', { class: 'container bento' },
        h('div', { class: 'tile tile-intro reveal' },
          h('h1', { class: 'hero-title' }, title),
          p.sub ? h('p', { class: 'hero-sub' }, tr(p.sub)) : null,
          p.intro ? h('p', { class: 'hero-intro' }, tr(p.intro)) : null,
          h('div', { class: 'hero-actions' },
            h('a', { href: '#producten', class: 'btn btn-primary' }, ui().seeProducts, icon('arrow', 18)),
            h('a', { href: '#maatwerk', class: 'btn btn-ghost' }, ui().discussCustom)
          )
        ),
        availabilityTile()
      )
    );
  }

  // Tegel naast de kop: beschikbaar of niet ("available" in content.js).
  function availabilityTile() {
    if (C.available == null) return null;
    const on = !!C.available;
    const t = on ? ui().available : ui().unavailable;
    return h('a', { class: `tile tile-cta reveal${on ? '' : ' is-off'}`, href: '#contact' },
      h('span', { class: 'status-pill' }, h('span', { class: 'dot' }), t.label),
      h('span', { class: 'cta-title' }, t.title),
      h('span', { class: 'cta-text' }, t.text),
      h('span', { class: 'cta-link' }, t.cta, h('span', { class: 'cta-arrow' }, icon('arrow', 22)))
    );
  }

  // Voorbeeldafbeelding zolang er geen echte screenshot is — duidelijk als voorbeeld gemarkeerd.
  function productVisual(p, big) {
    const src = safeSrc(p.image);
    if (src) return h('div', { class: 'product-shot' }, h('img', { src, alt: tr(p.title), loading: big ? 'eager' : 'lazy' }));
    const isShop = p.id === 'webshop';
    return h('div', { class: 'product-shot is-sample', role: 'img', 'aria-label': `${ui().sample}: ${tr(p.title)}` },
      h('div', { class: 'mock', 'aria-hidden': 'true' },
        h('div', { class: 'mock-bar' }, h('i'), h('i'), h('i')),
        h('div', { class: `mock-body ${isShop ? 'mock-shop' : 'mock-folio'}` },
          isShop
            ? [1, 2, 3].map(() => h('div', { class: 'mock-card' }, h('b'), h('span'), h('em')))
            : [h('div', { class: 'mock-hero' }, h('span'), h('span')), [1, 2, 3].map(() => h('div', { class: 'mock-tile' }))]
        )
      ),
      h('span', { class: 'sample-badge' }, ui().sample, big ? [' · ', ui().sampleNote] : null)
    );
  }

  const detailHref = (p) => `pakket.html?id=${encodeURIComponent(p.id)}`;

  // Eigen prijs per pakket; zolang die niet is ingevuld staat er "Prijs volgt".
  function priceLine(p) {
    return tr(p.price)
      ? h('p', { class: 'product-price' }, h('small', {}, ui().from), ' ', tr(p.price), p.priceNote ? h('small', {}, ' ', tr(p.priceNote)) : null)
      : h('p', { class: 'product-price is-tbd' }, ui().priceTbd);
  }

  function popularChip(p) {
    return p.popular ? h('span', { class: 'chip chip-on' }, '★ ', ui().popular) : null;
  }

  // Rustige schets per soort website (geen screenshot): blokken, lijnen en een vorm.
  // Elke regel: [soort, links %, boven %, breedte %, hoogte %]. b = blok, l = lijn, p = paneel, c = cirkel, a = boog, h = halve cirkel.
  const WIRES = {
    split:  [['b', 6, 14, 42, 66], ['l', 56, 22, 34, 0], ['l', 56, 32, 24, 0], ['b', 56, 50, 36, 30]],
    shop:   [['b', 6, 14, 32, 70], ['l', 45, 22, 38, 0], ['l', 45, 32, 26, 0], ['b', 45, 54, 14, 30], ['b', 62, 54, 14, 30], ['b', 79, 54, 14, 30]],
    circle: [['p', 58, 0, 42, 100], ['l', 8, 42, 34, 0], ['l', 8, 52, 22, 0], ['c', 71, 26, 0, 46]],
    arch:   [['p', 56, 0, 44, 100], ['l', 8, 42, 34, 0], ['l', 8, 52, 22, 0], ['a', 66, 16, 24, 84]],
    half:   [['p', 58, 0, 42, 100], ['l', 8, 30, 36, 0], ['l', 8, 40, 24, 0], ['h', 70, 12, 20, 76]]
  };

  function wireframe(p) {
    const src = safeSrc(p.image);
    if (src) return h('div', { class: 'wire has-image' }, h('img', { src, alt: tr(p.title), loading: 'lazy' }));
    const parts = WIRES[p.wire] || WIRES.split;
    return h('div', { class: 'wire', 'aria-hidden': 'true' },
      parts.map(([kind, x, y, w, hgt]) =>
        h('i', { class: `w-${kind}`, style: `left:${x}%;top:${y}%;${w ? `width:${w}%;` : ''}${hgt ? `height:${hgt}%;` : ''}` })
      )
    );
  }

  // Pakketkaarten: rustig en compact. De hele kaart linkt naar de detailpagina met prijs en inhoud.
  function products() {
    const list = C.products || [];
    if (!list.length) return null;
    return h('section', { class: 'section section-tint', id: 'producten' },
      h('div', { class: 'container' },
        sectionHead(ui().productsEyebrow, ui().productsTitle, ui().productsText),
        h('div', { class: 'package-grid' },
          list.map((p) =>
            h('a', { class: 'pcard reveal', href: detailHref(p), id: `product-${p.id}` },
              wireframe(p),
              h('div', { class: 'pcard-row' },
                h('h3', {}, tr(p.title)),
                h('span', { class: 'pcard-arrow' }, icon('arrow', 20))
              ),
              p.tagline ? h('p', { class: 'pcard-text' }, tr(p.tagline)) : null
            )
          )
        ),
        // Rustige uitnodiging voor maatwerk direct onder de pakketten.
        h('a', { class: 'invite reveal', href: '#maatwerk' },
          h('span', { class: 'invite-text' },
            h('strong', {}, ui().invite.title),
            h('span', {}, ui().invite.text)
          ),
          h('span', { class: 'invite-link' }, ui().invite.cta, icon('arrow', 18))
        )
      )
    );
  }

  // Detailpagina van één pakket: pakket.html?id=…
  function currentProduct() {
    const id = new URLSearchParams(location.search).get('id');
    const list = C.products || [];
    const i = list.findIndex((p) => p.id === id);
    return i >= 0 ? { p: list[i], i } : null;
  }

  function detailPage() {
    const found = currentProduct();
    if (!found) {
      return h('section', { class: 'section', id: 'top' },
        h('div', { class: 'container narrow detail-missing' },
          h('h1', { class: 'detail-title' }, ui().notFound),
          h('a', { class: 'btn btn-primary', href: './#producten' }, ui().allPackages, icon('arrow', 18))
        )
      );
    }
    const { p, i } = found;
    const title = tr(p.title);
    const L = ui().lists;
    const demo = safeUrl(p.demo);
    const highlights = trList(p.highlights);
    const groups = ['features', 'included', 'extra', 'recurring', 'supply', 'receive']
      .map((k) => { const items = trList(p[k]); return items.length ? h('div', { class: 'detail-card reveal' }, h('h3', {}, L[k]), checks(items)) : null; })
      .filter(Boolean);

    return h('section', { class: `section detail tone-${colorOf(p.color, i)}`, id: 'top' },
      h('div', { class: 'container' },
        h('a', { class: 'back-link', href: './#producten' }, icon('back', 16), ui().allPackages),
        h('div', { class: 'detail-hero reveal' },
          h('div', { class: 'detail-visual' }, productVisual(p, true), popularChip(p)),
          h('div', { class: 'detail-copy' },
            h('div', { class: 'product-head' },
              h('span', { class: 'project-icon' }, icon(p.icon || 'code', 24)),
              h('h1', { class: 'detail-title' }, title)
            ),
            p.audience ? h('p', { class: 'type-audience' }, `${ui().forWho}: ${tr(p.audience)}`) : null,
            p.text ? h('p', { class: 'product-text' }, tr(p.text)) : null,
            highlights.length ? h('ul', { class: 'feature-tags' }, highlights.map((x) => h('li', {}, x))) : null,
            h('div', { class: 'product-facts' },
              priceLine(p),
              tr(p.delivery) ? h('p', { class: 'product-meta' }, icon('clock', 16), `${ui().delivery}: ${tr(p.delivery)}`) : null
            ),
            h('div', { class: 'product-actions' },
              requestButton(ui().requestPkg, title, ui().options.ready, 'btn-primary'),
              requestButton(ui().customise, title, ui().options.custom, 'btn-ghost'),
              demo ? h('a', { class: 'btn btn-ghost', href: demo, target: '_blank', rel: 'noopener' }, ui().demo, icon('external', 16)) : null
            ),
            h('p', { class: 'mail-note is-left' }, icon(email() ? 'mail' : 'arrow', 16), email() ? ui().mailNote : ui().noMailNote)
          )
        ),
        groups.length
          ? h('div', { class: 'detail-grid' }, groups)
          : h('div', { class: 'detail-pending reveal' }, icon('clock', 22), h('p', {}, ui().detailsPending))
      )
    );
  }

  // Tekst met "\n" als regelovergang.
  const withBreaks = (text) => String(text || '').split('\n').flatMap((line, i) => (i ? [h('br'), line] : [line]));

  // Op maat: tekst en knop links, vier gekleurde kaarten rechts.
  function custom() {
    const c = C.custom;
    if (!c) return null;
    const work = C.work || [];
    return h('section', { class: 'section', id: 'maatwerk' },
      h('div', { class: 'container' },
        h('div', { class: 'custom-grid' },
          h('div', { class: 'custom-copy reveal' },
            h('p', { class: 'eyebrow custom-eyebrow' }, ui().customEyebrow),
            h('h2', {}, withBreaks(tr(c.title) || ui().customTitle)),
            String(tr(c.text) || '').split(/\n\s*\n/).map((t) => h('p', {}, withBreaks(t))),
            h('a', { class: 'btn btn-primary', href: requestHref(ui().mail.ideaSubject, ui().mail.ideaBody), 'data-request': 'idea' },
              ui().discussCustom, icon('arrow', 18))
          ),
          h('div', { class: 'custom-cards' },
            (c.services || []).map((s, i) =>
              h('article', { class: `custom-card reveal tone-${colorOf(s.color, i)}` },
                icon(s.icon, 44),
                h('h3', {}, tr(s.title)),
                h('p', {}, tr(s.text))
              )
            )
          )
        ),
        // Alleen echte projecten; zonder projecten wordt dit blok niet getoond.
        work.length
          ? h('div', { class: 'work' },
              h('h3', { class: 'work-title reveal' }, ui().workTitle),
              h('div', { class: 'work-grid' },
                work.map((w, i) => {
                  const link = safeUrl(w.link);
                  const src = safeSrc(w.image);
                  return h(link ? 'a' : 'article', { class: `work-card reveal tone-${colorOf(w.color, i)}`, href: link, target: link ? '_blank' : null, rel: link ? 'noopener' : null },
                    src ? h('img', { src, alt: tr(w.title), loading: 'lazy' }) : null,
                    h('div', { class: 'work-body' },
                      h('p', { class: 'work-meta' }, [tr(w.client), w.year].filter(Boolean).join(' · ')),
                      h('h4', {}, tr(w.title)),
                      w.text ? h('p', {}, tr(w.text)) : null
                    )
                  );
                })
              )
            )
          : null
      )
    );
  }

  function faq() {
    const list = C.faq || [];
    if (!list.length) return null;
    const ask = email() ? `mailto:${email()}?subject=${encodeURIComponent(ui().mail.generalSubject)}` : '#contact';
    return h('section', { class: 'section', id: 'faq' },
      h('div', { class: 'container faq-wrap' },
        h('div', { class: 'faq-head reveal' },
          h('p', { class: 'eyebrow custom-eyebrow' }, ui().faqEyebrow),
          h('h2', {}, ui().faqTitle),
          h('p', { class: 'faq-sub' }, ui().faqSub)
        ),
        h('div', { class: 'faq-list' },
          // Eerste vraag staat open; het antwoord verschijnt als een zacht groen tekstballonnetje.
          list.map((f, i) =>
            h('details', { class: `faq-item reveal tone-${['sage', 'clay', 'lav', 'sand'][i % 4]}`, open: i === 0 },
              h('summary', {}, h('span', {}, tr(f.q)), h('span', { class: 'faq-toggle', 'aria-hidden': 'true' })),
              h('p', { class: 'faq-bubble' }, tr(f.a))
            )
          )
        ),
        h('p', { class: 'faq-more reveal' }, ui().faqMore, ' ', h('a', { href: ask }, ui().faqMoreLink))
      )
    );
  }

  // Contact: tekst links, formulier rechts.
  // Het formulier verstuurt alleen echt als "contact.formEndpoint" is ingevuld (bijv. een Formspree-adres).
  // Zonder endpoint maar met e-mailadres opent het je e-mailprogramma met het bericht al ingevuld.
  // Zonder beide is het formulier uitgeschakeld, zodat het nooit doet alsof er iets verstuurd is.
  function contact() {
    const c = C.contact || {};
    const endpoint = safeUrl(c.formEndpoint) && /^https:/i.test(c.formEndpoint) ? c.formEndpoint : '';
    const mode = endpoint ? 'send' : (email() ? 'mail' : 'off');
    const t = ui().form;
    const phone = String(c.phone || '').trim();
    const direct = [
      email() && ['mail', t.directMail, email(), `mailto:${email()}?subject=${encodeURIComponent(ui().mail.generalSubject)}`],
      phone && ['call', t.directPhone, phone, `tel:${phone.replace(/[^\d+]/g, '')}`],
      c.linkedin && ['linkedin', 'LinkedIn', t.directLinkedin, c.linkedin]
    ].filter(Boolean);

    const field = (name, label, type) => h('label', { class: 'field-row' },
      h('span', {}, label),
      type === 'textarea'
        ? h('textarea', { name, rows: '5', required: true, disabled: mode === 'off' })
        : h('input', { name, type, required: true, autocomplete: name === 'naam' ? 'name' : 'email', disabled: mode === 'off' })
    );

    const status = h('p', { class: 'form-status', role: 'status', 'aria-live': 'polite' });
    const form = h('form', { class: 'contact-form reveal', novalidate: true },
      h('h3', {}, t.title),
      field('naam', t.name, 'text'),
      field('email', t.email, 'email'),
      field('bericht', t.message, 'textarea'),
      // Onzichtbaar veld tegen spam-robots.
      h('input', { type: 'text', name: '_gotcha', tabindex: '-1', autocomplete: 'off', class: 'hp', 'aria-hidden': 'true' }),
      h('button', { class: 'btn btn-primary btn-block', type: 'submit', disabled: mode === 'off' },
        mode === 'mail' ? t.submitMail : t.submit, icon('arrow', 18)),
      status,
      h('p', { class: 'form-note' }, mode === 'off' ? t.noteOff : mode === 'mail' ? t.noteMail : t.notePrivacy)
    );

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (mode === 'off') return;
      if (!form.checkValidity()) { status.textContent = t.invalid; status.className = 'form-status is-error'; form.reportValidity(); return; }
      const data = Object.fromEntries(new FormData(form));
      if (data._gotcha) return;
      if (mode === 'mail') {
        const body = `${data.bericht}\n\n${t.name}: ${data.naam}\n${t.email}: ${data.email}\n`;
        location.href = `mailto:${email()}?subject=${encodeURIComponent(ui().mail.generalSubject)}&body=${encodeURIComponent(body)}`;
        status.textContent = t.mailOpened; status.className = 'form-status';
        return;
      }
      const btn = form.querySelector('button');
      btn.disabled = true; status.textContent = t.sending; status.className = 'form-status';
      try {
        const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
        if (!res.ok) throw new Error(String(res.status));
        form.reset();
        status.textContent = t.sent; status.className = 'form-status is-ok';
      } catch (_) {
        status.textContent = email() ? t.failedMail(email()) : t.failed; status.className = 'form-status is-error';
      } finally {
        btn.disabled = false;
      }
    });

    return h('section', { class: 'section', id: 'contact' },
      h('div', { class: 'container contact-grid' },
        h('div', { class: 'contact-copy reveal' },
          h('p', { class: 'eyebrow contact-eyebrow' }, icon('chat', 22), ui().contactEyebrow),
          h('h2', {}, withBreaks(t.heading)),
          h('p', { class: 'contact-lead' }, t.lead),
          h('p', { class: 'contact-soft' }, t.soft),
          direct.length
            ? h('ul', { class: 'contact-direct' },
                direct.map(([ic, label, value, href]) =>
                  h('li', {}, icon(ic, 24), h('span', {}, h('small', {}, label), h('a', { href: safeUrl(href), ...(String(href).startsWith('http') ? { target: '_blank', rel: 'noopener' } : {}) }, value)))
                ))
            : null
        ),
        form
      )
    );
  }

  function footer() {
    return h('footer', { class: 'site-footer' },
      h('div', { class: 'container footer-inner' },
        h('span', {}, `© ${new Date().getFullYear()} ${C.brand || 'OnlineDesk'}`)
      )
    );
  }

  function langSwitch() {
    return h('div', { class: 'lang-switch', role: 'group', 'aria-label': 'Taal / Language' },
      LANGS.map((l) =>
        h('button', { type: 'button', 'data-lang': l, 'aria-pressed': String(l === lang), class: l === lang ? 'active' : '', onclick: () => setLang(l) }, l.toUpperCase())
      )
    );
  }

  /* ---------- Opbouwen ---------- */

  function applyMeta() {
    document.documentElement.lang = lang;
    let title = ui().meta.title;
    let description = ui().meta.description;
    const found = PAGE === 'pakket' ? currentProduct() : null;
    if (found) {
      title = `${tr(found.p.title)} · OnlineDesk`;
      description = [tr(found.p.audience) && `${ui().forWho}: ${tr(found.p.audience)}.`, tr(found.p.text)].filter(Boolean).join(' ') || description;
    }
    document.title = title;
    const d = $('meta[name="description"]');
    if (d) d.setAttribute('content', description);
  }

  function render(instant) {
    applyMeta();
    const main = PAGE === 'pakket'
      ? h('main', { id: 'main' }, detailPage(), contact())
      : h('main', { id: 'main' }, hero(), products(), custom(), faq(), contact());
    $('#app').replaceChildren(main, footer());
    $('#app').prepend(header());
    observe(instant);
  }

  function setLang(l) {
    if (l === lang || !LANGS.includes(l)) return;
    lang = l;
    try { localStorage.setItem(LANG_KEY, l); } catch (_) {}
    const y = window.scrollY;
    render(true);
    window.scrollTo(0, y);
  }

  let navIo;
  function observe(instant) {
    const reveals = $$('.reveal');
    if (instant || !('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      reveals.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
      reveals.forEach((el) => io.observe(el));
    }
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

  // Ontbrekende gegevens zichtbaar maken voor de eigenaar (alleen in de console).
  const missing = [];
  if (!email()) missing.push('contact.email');
  (C.products || []).forEach((p) => {
    if (!p.price) missing.push(`products[${p.id}].price`);
    if (!p.image) missing.push(`products[${p.id}].image`);
  });
  if (missing.length) console.info('[OnlineDesk] Nog in te vullen in assets/js/content.js:', missing.join(', '));

  render(false);

  // Bij openen met #producten enz. naar die sectie springen nadat de pagina is opgebouwd.
  const target = location.hash && location.hash.length > 1 && !/lang=/.test(location.hash) ? document.getElementById(location.hash.slice(1)) : null;
  if (target) {
    // Direct springen (niet animeren) en nog eens na het laden, omdat lettertypes de layout kunnen verschuiven.
    const jump = () => target.scrollIntoView({ behavior: 'instant', block: 'start' });
    jump();
    window.addEventListener('load', jump, { once: true });
  }
})();
