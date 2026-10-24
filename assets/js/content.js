/* =========================================================
   Openbare inhoud van de OnlineDesk-website (NL + EN)

   Dit bestand is OPENBAAR: alles hierin is voor iedereen zichtbaar.
   Zet hier geen privévoorstellen of vertrouwelijke klantinformatie in.

   Tweetalig: { "nl": "…", "en": "…" }. Een gewone tekst geldt voor beide talen.

   NOG INVULLEN (zoek op "INVULLEN"):
   - contact.email / phone / linkedin / location
   - per product: image (echte screenshot) en demo (link naar werkende demo)
   - work: echte projecten (laat leeg zolang er geen zijn)
   ========================================================= */
window.SITE_CONTENT = {
  "brand": "OnlineDesk",
  "available": true,

  "hero": {
    "headline": { "nl": "Van concept tot klik.", "en": "From concept to click." },
    "accent": { "nl": "klik", "en": "click" },
    "sub": {
      "nl": "Een sterke start voor jouw website, webshop of app.",
      "en": "A strong start for your website, webshop or app."
    },
    "intro": {
      "nl": "Snel starten met een kant-en-klare oplossing of een eigen idee laten uitwerken? Ik help je kiezen, aanpassen en bouwen tot alles werkt.",
      "en": "Want to start quickly with a ready-made solution, or have your own idea worked out? I'll help you choose, customise and build until everything works."
    }
  },

  /* Pakketten (in deze volgorde op de site). Per pakket:
     - "price": INVULLEN als die nog leeg is; leeg = "Prijs volgt" op de site.
     - "image": INVULLEN met een echte screenshot; leeg = gemarkeerde voorbeeldafbeelding.
     - "demo": link naar een werkende demo; leeg = geen demoknop.
     - "highlights": korte labels op de kaart. De overige lijsten staan op de detailpagina (pakket.html?id=…).
       Ontbreken die lijsten, dan meldt de detailpagina dat de details binnenkort volgen. */
  "products": [
    {
      "id": "bedrijf",
      "tagline": { "nl": "Laat zien wat je doet.", "en": "Show what you do." }, "wire": "split",
      "title": { "nl": "Bedrijfswebsite", "en": "Business website" },
      "icon": "briefcase", "color": "sage", "image": "", "demo": "",
      "audience": { "nl": "Zzp'ers en kleine bedrijven", "en": "Freelancers and small businesses" },
      "highlights": { "nl": ["Introductie", "Diensten", "Projecten", "Reviews", "Offerteknop"], "en": ["Introduction", "Services", "Projects", "Reviews", "Quote button"] },
      "price": "", "priceNote": { "nl": "excl. btw", "en": "excl. VAT" }, "delivery": ""
    },
    {
      "id": "webshop",
      "tagline": { "nl": "Verkoop jouw producten online.", "en": "Sell your products online." }, "wire": "shop",
      "title": "Webshop",
      "icon": "cart", "color": "clay", "popular": true, "image": "", "demo": "",
      "audience": { "nl": "Ondernemers die producten verkopen", "en": "Entrepreneurs who sell products" },
      "highlights": { "nl": ["Productfoto's", "Categorieën", "Productpagina", "Winkelwagen"], "en": ["Product photos", "Categories", "Product page", "Shopping cart"] },
      "text": {
        "nl": "Een complete online winkel, klaar om te verkopen. Ik richt hem in met jouw producten en lever hem online op.",
        "en": "A complete online store, ready to sell. I set it up with your products and deliver it online."
      },
      "price": { "nl": "€ 1.495", "en": "€1,495" },
      "priceNote": { "nl": "excl. btw", "en": "excl. VAT" },
      "delivery": { "nl": "2–3 weken", "en": "2–3 weeks" },
      "features": {
        "nl": ["Productpagina's en winkelwagen", "Veilig betalen met iDEAL, creditcard en meer", "Werkt perfect op mobiel"],
        "en": ["Product pages and shopping cart", "Secure payments with iDEAL, credit card and more", "Works perfectly on mobile"]
      },
      "included": {
        "nl": ["Professioneel ontwerp in jouw huisstijl", "Tot 50 producten voor je ingericht", "Domeinnaam en hosting voor 1 jaar", "Korte uitleg, zodat je zelf verder kunt", "Oplevering: ik zet de webshop online"],
        "en": ["Professional design in your brand style", "Up to 50 products set up for you", "Domain name and hosting for 1 year", "A short walkthrough so you can carry on yourself", "Delivery: I put the webshop online"]
      },
      "extra": {
        "nl": ["Meer dan 50 producten inrichten", "Koppelingen (zoals boekhouding of voorraad) en extra functies", "Hulp bij productteksten en vindbaarheid"],
        "en": ["Setting up more than 50 products", "Integrations (such as accounting or stock) and extra features", "Help with product copy and findability"]
      },
      "recurring": {
        "nl": ["Domeinnaam en hosting na het eerste jaar — de kosten staan in je voorstel", "Transactiekosten van je betaalprovider (rechtstreeks via de provider)"],
        "en": ["Domain name and hosting after the first year — the costs are in your proposal", "Transaction fees from your payment provider (charged directly by the provider)"]
      },
      "supply": {
        "nl": ["Productgegevens: namen, prijzen, omschrijvingen en foto's", "Logo en huisstijl", "Je bedrijfsgegevens voor op de webshop (zoals KvK-nummer en adres)", "Een account bij een betaalprovider"],
        "en": ["Product details: names, prices, descriptions and photos", "Logo and brand style", "Your business details for the webshop (such as company number and address)", "An account with a payment provider"]
      },
      "receive": {
        "nl": ["Een werkende webshop, online op je domeinnaam", "Een korte uitleg om zelf producten en bestellingen te beheren"],
        "en": ["A working webshop, live on your domain name", "A short walkthrough to manage products and orders yourself"]
      }
    },
    {
      "id": "salon",
      "tagline": { "nl": "Een eigen plek voor jouw salon.", "en": "A place of your own for your salon." }, "wire": "circle",
      "title": { "nl": "Salonwebsite", "en": "Salon website" },
      "icon": "scissors", "color": "lav", "image": "", "demo": "",
      "audience": { "nl": "Kappers, barbers en schoonheidssalons", "en": "Hairdressers, barbers and beauty salons" },
      "highlights": { "nl": ["Behandelingen", "Prijzen", "Sfeerfoto's", "Afspraakknop"], "en": ["Treatments", "Prices", "Atmosphere photos", "Booking button"] },
      "price": "", "priceNote": { "nl": "excl. btw", "en": "excl. VAT" }, "delivery": ""
    },
    {
      "id": "horeca",
      "tagline": { "nl": "Breng jouw zaak in beeld.", "en": "Put your business in the spotlight." }, "wire": "arch",
      "title": { "nl": "Horecawebsite", "en": "Hospitality website" },
      "icon": "coffee", "color": "sand", "image": "", "demo": "",
      "audience": { "nl": "Restaurants, cafés en lunchzaken", "en": "Restaurants, cafés and lunchrooms" },
      "highlights": { "nl": ["Grote sfeerfoto", "Menukaart", "Openingstijden", "Reserveren"], "en": ["Large atmosphere photo", "Menu", "Opening hours", "Reservations"] },
      "price": "", "priceNote": { "nl": "excl. btw", "en": "excl. VAT" }, "delivery": ""
    },
    {
      "id": "portfolio",
      "tagline": { "nl": "Geef jouw werk de ruimte.", "en": "Give your work room to shine." }, "wire": "shop",
      "title": { "nl": "Portfoliowebsite", "en": "Portfolio website" },
      "icon": "layout", "color": "sky", "image": "assets/img/portfolio.jpg", "demo": "https://onlinedesk-portfolio.netlify.app",
      "audience": { "nl": "Fotografen, ontwerpers en andere makers", "en": "Photographers, designers and other creatives" },
      "highlights": { "nl": ["One-page", "Projectoverzicht", "Diensten", "Contactformulier", "NL / EN"], "en": ["One-page", "Project overview", "Services", "Contact form", "NL / EN"] },
      "text": {
        "nl": "Een rustige, moderne portfoliowebsite op één pagina: over jou, je projecten, je diensten en een contactformulier. Ik richt hem in met jouw teksten, foto's en kleuren en lever hem online op.",
        "en": "A calm, modern one-page portfolio website: about you, your projects, your services and a contact form. I set it up with your texts, photos and colours and deliver it online."
      },
      "price": { "nl": "€ 79", "en": "€79" },
      "priceNote": { "nl": "excl. btw", "en": "excl. VAT" },
      "delivery": { "nl": "binnen 1 week na aanlevering", "en": "within 1 week of receiving your content" },
      /* Drie opties met elk een eigen prijs (excl. btw, eenmalig) */
      "tiers": [
        {
          "name": "Basis",
          "text": { "nl": "Je krijgt de template en doet alles zelf.", "en": "You get the template and do everything yourself." },
          "price": { "nl": "€ 79", "en": "€79" },
          "items": {
            "nl": ["Volledige websitebestanden (HTML, CSS, JS)", "Korte Nederlandstalige handleiding", "Uitleg om de site gratis online te zetten", "Geen support of installatie"],
            "en": ["Complete website files (HTML, CSS, JS)", "Short step-by-step guide", "Instructions to put the site online for free", "No support or installation"]
          }
        },
        {
          "name": "Plus",
          "text": { "nl": "Ik zet de site online, jij vult je eigen inhoud in.", "en": "I put the site online, you add your own content." },
          "price": { "nl": "€ 249", "en": "€249" },
          "items": {
            "nl": ["Alles uit Basis", "Domeinnaam registreren en koppelen (1e jaar inbegrepen)", "Gratis hosting instellen met https", "Werkend contactformulier", "Favicon en deelafbeelding", "Je vult zelf je teksten en foto's in"],
            "en": ["Everything in Basis", "Domain name registered and connected (first year included)", "Free hosting set up with https", "Working contact form", "Favicon and sharing image", "You add your own texts and photos"]
          }
        },
        {
          "name": "Compleet", "popular": true,
          "text": { "nl": "Alles geregeld: ik richt de site helemaal voor je in.", "en": "All taken care of: I set up the whole site for you." },
          "price": { "nl": "€ 595", "en": "€595" },
          "items": {
            "nl": ["Alles uit Plus", "Jouw teksten, foto's, projecten en logo's erin verwerkt", "Kleuren en lettertype aangepast aan je stijl", "Basis-SEO: titels, omschrijvingen en Google Search Console", "Getest op mobiel, tablet en desktop", "2 correctierondes", "Online binnen 1 week na aanlevering van je content"],
            "en": ["Everything in Plus", "Your texts, photos, projects and logos added", "Colours and font matched to your style", "Basic SEO: titles, descriptions and Google Search Console", "Tested on mobile, tablet and desktop", "2 rounds of revisions", "Live within 1 week of receiving your content"]
          }
        }
      ],
      "extras": [
        { "name": { "nl": "Extra pagina (bijv. losse projectpagina)", "en": "Extra page (e.g. a separate project page)" }, "price": { "nl": "€ 95 per pagina", "en": "€95 per page" } },
        { "name": { "nl": "Extra taal (naast Nederlands en Engels)", "en": "Extra language (besides Dutch and English)" }, "price": { "nl": "€ 195", "en": "€195" } },
        { "name": { "nl": "Zakelijk e-mailadres instellen (hallo@jouwnaam.nl)", "en": "Business email address set up (hello@yourname.com)" }, "price": { "nl": "€ 49", "en": "€49" } },
        { "name": { "nl": "Extra correctieronde", "en": "Extra round of revisions" }, "price": { "nl": "€ 45", "en": "€45" } },
        { "name": { "nl": "Teksten schrijven of herschrijven", "en": "Writing or rewriting copy" }, "price": { "nl": "€ 65 per uur", "en": "€65 per hour" } },
        { "name": { "nl": "Spoedoplevering (binnen 3 werkdagen)", "en": "Rush delivery (within 3 working days)" }, "price": { "nl": "+ € 150", "en": "+ €150" } }
      ],
      "features": {
        "nl": ["Eén pagina met over mij, klanten, projecten, diensten en contact", "Projectoverzicht met filters", "Tweetalig: Nederlands en Engels", "Contactformulier met spamfilter en social media-links", "Privacyverklaring en eigen 404-pagina", "Werkt perfect op mobiel"],
        "en": ["One page with about, clients, projects, services and contact", "Project overview with filters", "Bilingual: Dutch and English", "Contact form with spam filter and social media links", "Privacy statement and custom 404 page", "Works perfectly on mobile"]
      },
      "recurring": {
        "nl": ["Geen abonnement en geen onderhoudskosten", "Vanaf het 2e jaar betaal je de domeinnaam (± € 10–15 per jaar) zelf bij de provider", "De hosting is gratis"],
        "en": ["No subscription and no maintenance fees", "From the second year you pay for the domain name (about €10–15 a year) directly to the provider", "Hosting is free"]
      },
      "supply": {
        "nl": ["Teksten over jou en je diensten", "Een portretfoto en foto's van je werk", "Logo en huisstijlkleuren (als je die hebt)", "Je gewenste domeinnaam"],
        "en": ["Texts about you and your services", "A portrait and photos of your work", "Logo and brand colours (if you have them)", "Your preferred domain name"]
      },
      "receive": {
        "nl": ["Een werkende portfoliowebsite, online op je domeinnaam (Plus en Compleet)", "Alle inloggegevens: domein, hosting en formulier staan op jouw naam"],
        "en": ["A working portfolio website, live on your domain name (Plus and Compleet)", "All login details: domain, hosting and form are in your name"]
      },
      "terms": {
        "nl": ["Basis betaal je vooraf; Plus en Compleet: 50% bij akkoord, 50% bij oplevering", "Je levert teksten en foto's aan binnen 2 weken na akkoord", "Na volledige betaling is de website helemaal van jou", "Geen onderhoud of support na oplevering", "Alle prijzen zijn exclusief 21% btw en gelden tot en met 31 december 2026"],
        "en": ["Basis is paid in advance; Plus and Compleet: 50% on approval, 50% on delivery", "You supply texts and photos within 2 weeks of approval", "After full payment, the website is entirely yours", "No maintenance or support after delivery", "All prices exclude 21% VAT and are valid until 31 December 2026"]
      }
    },
    {
      "id": "coaching",
      "tagline": { "nl": "Maak persoonlijk contact.", "en": "Make a personal connection." }, "wire": "half",
      "title": { "nl": "Coachingswebsite", "en": "Coaching website" },
      "icon": "chat", "color": "sage", "image": "", "demo": "",
      "audience": { "nl": "Coaches, trainers en adviseurs", "en": "Coaches, trainers and consultants" },
      "highlights": { "nl": ["Persoonlijke introductie", "Trajecten", "Kennismakingsgesprek"], "en": ["Personal introduction", "Programmes", "Introductory call"] },
      "price": "", "priceNote": { "nl": "excl. btw", "en": "excl. VAT" }, "delivery": ""
    }
  ],

  /* Op maat: tekst links, vier gekleurde kaarten rechts. "\n" in een tekst = nieuwe regel. */
  "custom": {
    "title": { "nl": "Jouw idee,\nop maat gebouwd.", "en": "Your idea,\ncustom-built." },
    "text": {
      "nl": "Een eigen website, webshop of app? Ik denk met je mee en bouw wat jij nodig hebt.\n\nVan eerste idee tot werkend product.\nMet een duidelijk plan en heldere afspraken.",
      "en": "Your own website, webshop or app? I'll think along with you and build what you need.\n\nFrom first idea to working product.\nWith a clear plan and clear agreements."
    },
    "services": [
      { "icon": "compass", "color": "sage",
        "title": { "nl": "Strategie", "en": "Strategy" },
        "text": { "nl": "Samen maken we jouw idee concreet.", "en": "Together, we make your idea concrete." } },
      { "icon": "pen", "color": "clay",
        "title": { "nl": "Ontwerp", "en": "Design" },
        "text": { "nl": "Een helder ontwerp dat prettig werkt.", "en": "A clear design that's pleasant to use." } },
      { "icon": "code", "color": "lav",
        "title": { "nl": "Ontwikkeling", "en": "Development" },
        "text": { "nl": "Gebouwd met de functies die jij nodig hebt.", "en": "Built with the features you need." } },
      { "icon": "search", "color": "sand",
        "title": { "nl": "Content & vindbaarheid", "en": "Content & findability" },
        "text": { "nl": "Duidelijke teksten en een goede basis voor Google.", "en": "Clear copy and a solid foundation for Google." } }
    ]
  },

  /* INVULLEN: alleen echte projecten. Leeg laten = het blok "Eigen werk" wordt niet getoond.
     Voorbeeld van één project:
     { "title": "Naam project", "client": "Naam klant", "year": "2026",
       "text": { "nl": "Wat ik heb gemaakt", "en": "What I built" },
       "image": "assets/img/project.png", "link": "https://…" } */
  "work": [],

  "faq": [
    { "q": { "nl": "Kan ik iets laten aanpassen?", "en": "Can I have something changed?" },
      "a": { "nl": "Ja, zeker. Vertel wat je wilt veranderen. Je ontvangt vooraf een voorstel met de kosten.",
             "en": "Yes, of course. Tell me what you'd like to change. You'll receive a proposal with the costs in advance." } },
    { "q": { "nl": "Wat krijg ik bij mijn aankoop?", "en": "What do I get with my purchase?" },
      "a": { "nl": "Dat verschilt per pakket. Op de pagina van elk pakket zie je wat in de prijs zit, wat je zelf aanlevert en wat je bij oplevering ontvangt.",
             "en": "That depends on the package. Each package page shows what's included in the price, what you supply yourself and what you receive on delivery." } },
    { "q": { "nl": "Kan ik zelf aan de slag?", "en": "Can I get started myself?" },
      "a": { "nl": "Ja. De websites en webshops zijn al gebouwd. Wil je hulp met je teksten, huisstijl of het online zetten? Dat regel ik graag voor je.",
             "en": "Yes. The websites and webshops are already built. Would you like help with your copy, brand style or going live? I'm happy to take care of that." } },
    { "q": { "nl": "Hoe werkt maatwerk?", "en": "How does a custom build work?" },
      "a": { "nl": "Je vertelt je idee en we bespreken je wensen. Daarna ontvang je een voorstel met duidelijke kosten en afspraken, en bouw ik volgens de afgesproken planning.",
             "en": "You tell me your idea and we discuss your wishes. You then receive a proposal with clear costs and agreements, and I build according to the agreed planning." } }
  ],

  "contact": {
    "email": "",      /* INVULLEN: je echte e-mailadres. Leeg = aanvraagknoppen verwijzen naar dit contactblok. */
    "phone": "",      /* INVULLEN (optioneel) */
    "linkedin": "",   /* INVULLEN (optioneel): volledige link, bijv. https://www.linkedin.com/in/… */
    "location": "",   /* INVULLEN (optioneel), bijv. { "nl": "Nederland", "en": "The Netherlands" } */
    /* INVULLEN (optioneel): adres van een formulierdienst, bijv. "https://formspree.io/f/xxxxxxx".
       Ingevuld = het formulier verstuurt echt. Leeg = het formulier opent het e-mailprogramma
       (als "email" is ingevuld) of is uitgeschakeld (als ook "email" leeg is). */
    "formEndpoint": ""
  }
};
