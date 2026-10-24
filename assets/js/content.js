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
      "headline": { "nl": "Geef jouw werk de ruimte.", "en": "Give your work room to shine." },
      "textSub": { "nl": "Zelf aanpassen of laten verzorgen.", "en": "Edit it yourself or have it done for you." },
      "text": {
        "nl": "Een rustige website van één pagina voor jouw projecten, diensten en verhaal. In het Nederlands en Engels.",
        "en": "A calm one-page website for your projects, services and story. In Dutch and English."
      },
      /* Scrollbare preview van de hele pagina */
      "preview": { "desktop": "assets/img/portfolio-pagina.jpg", "mobile": "assets/img/portfolio-pagina-mobiel.jpg" },
      /* Werkwijze na de pakketten (uit de offerte) */
      "steps": {
        "title": { "nl": "Werkwijze", "en": "How it works" },
        "sub": { "nl": "Basis ontvang je binnen 1 werkdag na betaling. Plus en Compleet staan online binnen 1 week na je content.", "en": "You receive Basis within 1 working day of payment. Plus and Compleet go live within 1 week of receiving your content." },
        "items": [
          { "title": { "nl": "Akkoord", "en": "Approval" }, "text": { "nl": "Je kiest je pakket en betaalt 50% aanbetaling.", "en": "You choose your package and pay a 50% deposit." } },
          { "title": { "nl": "Content aanleveren", "en": "Send your content" }, "text": { "nl": "Binnen 2 weken stuur je je teksten, foto's, projecten en logo.", "en": "Within 2 weeks you send your texts, photos, projects and logo." } },
          { "title": { "nl": "Bouwen", "en": "Build" }, "text": { "nl": "Ik richt de website in en stuur je een voorbeeldlink.", "en": "I set up the website and send you a preview link." } },
          { "title": { "nl": "Correcties", "en": "Revisions" }, "text": { "nl": "Je geeft feedback in maximaal 2 rondes.", "en": "You give feedback in up to 2 rounds." } },
          { "title": { "nl": "Oplevering", "en": "Delivery" }, "text": { "nl": "De site gaat live, je krijgt alle inloggegevens en betaalt de rest.", "en": "The site goes live, you get all login details and pay the rest." } }
        ]
      },
      "price": { "nl": "€ 79", "en": "€79" },
      "priceNote": { "nl": "incl. btw", "en": "incl. VAT" },
      /* Drie pakketten (excl. btw, eenmalig) */
      "tiers": [
        { "name": "Basis", "price": { "nl": "€ 79", "en": "€79" } },
        { "name": "Plus", "price": { "nl": "€ 249", "en": "€249" } },
        { "name": "Compleet", "price": { "nl": "€ 595", "en": "€595" }, "popular": true }
      ],
      /* Vergelijkingstabel: per rij een onderdeel, waarden voor Basis / Plus / Compleet */
      "compare": [
        { "label": { "nl": "Websitebestanden (HTML/CSS/JS)", "en": "Website files (HTML/CSS/JS)" }, "values": [true, true, true] },
        { "label": { "nl": "Nederlandstalige handleiding", "en": "Step-by-step guide" }, "values": [true, true, true] },
        { "label": { "nl": "Domeinnaam registreren en koppelen (1e jaar)", "en": "Domain name registered and connected (1st year)" }, "values": [false, true, true] },
        { "label": { "nl": "Hosting instellen met https/SSL", "en": "Hosting set up with https/SSL" }, "values": [false, true, true] },
        { "label": { "nl": "Werkend contactformulier", "en": "Working contact form" }, "values": [false, true, true] },
        { "label": { "nl": "Favicon en deelafbeelding", "en": "Favicon and sharing image" }, "values": [false, true, true] },
        { "label": { "nl": "Jouw teksten, foto's, projecten en logo's verwerkt", "en": "Your texts, photos, projects and logos added" }, "values": [false, false, true] },
        { "label": { "nl": "Kleuren en lettertype aangepast", "en": "Colours and font adjusted" }, "values": [false, false, true] },
        { "label": { "nl": "Basis-SEO en Google Search Console", "en": "Basic SEO and Google Search Console" }, "values": [false, false, true] },
        { "label": { "nl": "Getest op mobiel, tablet en desktop", "en": "Tested on mobile, tablet and desktop" }, "values": [false, false, true] },
        { "label": { "nl": "2 correctierondes", "en": "2 rounds of revisions" }, "values": [false, false, true] },
        { "label": "Support", "values": [{ "nl": "Geen", "en": "None" }, { "nl": "Geen", "en": "None" }, { "nl": "Tot oplevering", "en": "Until delivery" }] }
      ],
      "extras": [
        { "name": { "nl": "Extra pagina", "en": "Extra page" }, "price": { "nl": "€ 95", "en": "€95" } },
        { "name": { "nl": "Extra correctieronde", "en": "Extra revision round" }, "price": { "nl": "€ 45", "en": "€45" } },
        { "name": { "nl": "Teksten schrijven", "en": "Copywriting" }, "price": { "nl": "€ 35 / uur", "en": "€35 / hour" } }
      ],
      "terms": {
        "nl": ["Basis vooraf; Plus en Compleet 50% bij akkoord, 50% bij oplevering", "Na betaling is de website helemaal van jou", "Prijzen incl. 21% btw, geldig t/m 31-12-2026"],
        "en": ["Basis paid in advance; Plus and Compleet 50% on approval, 50% on delivery", "After payment, the website is entirely yours", "Prices include 21% VAT, valid until 31-12-2026"]
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
