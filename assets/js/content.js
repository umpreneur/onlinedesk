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
        "en": ["Setting up more than 50 products", "Integrations (such as accounting or stock) and extra features", "Help with product copy and search visibility"]
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
      "tagline": { "nl": "Online bestellen bij jouw zaak.", "en": "Online ordering for your business." }, "wire": "arch",
      "title": { "nl": "Horecawebsite met bestellen", "en": "Hospitality website with ordering" },
      "icon": "coffee", "color": "sand",
      "image": "assets/img/horeca.jpg",
      "demo": "https://aantafel-demo.netlify.app",
      "audience": { "nl": "Lunchrooms, broodjeszaken en kleine afhaalzaken", "en": "Lunchrooms, sandwich shops and small takeaways" },
      "headline": {
        "nl": "Jouw zaak online, met een eigen bestelomgeving.",
        "en": "Your business online, with its own ordering."
      },
      "text": {
        "nl": "Een warme, tweetalige website met menukaart, verhaal, sfeerbeelden en openingstijden. Gasten bestellen rechtstreeks bij jou voor afhalen of bezorgen, zonder bestelplatform ertussen.",
        "en": "A warm, bilingual website with your menu, story, photos and opening hours. Guests order directly from you for pickup or delivery, with no ordering platform in between."
      },
      "textSub": {
        "nl": "Probeer de demo: bestel als voorbeeld bij de fictieve lunchroom Aan Tafel.",
        "en": "Try the demo: place an example order at the fictional lunchroom Aan Tafel."
      },
      "priceText": { "nl": "Prijs op offerte", "en": "Price on quotation" },
      "requestLabel": { "nl": "Offerte aanvragen", "en": "Request a quote" },
      "preview": {
        "desktop": "assets/img/horeca-pagina.jpg",
        "mobile": "assets/img/horeca-pagina-mobiel.jpg"
      },
      "gallery": [
        { "src": "assets/img/horeca-bestellen.jpg", "size": "big",
          "alt": { "nl": "Bestelpagina met menu en winkelwagen", "en": "Order page with menu and cart" },
          "caption": { "nl": "Bestellen met winkelwagen", "en": "Ordering with a cart" } },
        { "src": "assets/img/horeca-beheer.jpg",
          "alt": { "nl": "Beheer met bestellingen en statussen", "en": "Admin with orders and statuses" },
          "caption": { "nl": "Bestellingen in het beheer", "en": "Orders in the admin" } },
        { "src": "assets/img/horeca-bezorgen-mobiel.jpg", "size": "tall",
          "alt": { "nl": "Afrekenen op de telefoon met afhalen of bezorgen", "en": "Checkout on a phone with pickup or delivery" },
          "caption": { "nl": "Afhalen of bezorgen", "en": "Pickup or delivery" } },
        { "src": "assets/img/horeca-beheer-bezorgen.jpg",
          "alt": { "nl": "Bezorggebieden instellen in het beheer", "en": "Setting delivery areas in the admin" },
          "caption": { "nl": "Bezorggebieden instellen", "en": "Setting delivery areas" } }
      ],
      "tiersSub": {
        "nl": "Zelf aan de slag of hulp nodig? Vergelijk hieronder wat je per pakket krijgt. Je ontvangt vooraf een offerte met de kosten.",
        "en": "Do it yourself or need help? Compare what you get with each package below. You receive a quote with the costs in advance."
      },
      "tierNote": { "nl": "eenmalig · offerte vooraf", "en": "one-off · quote in advance" },
      "tiers": [
        {
          "name": { "nl": "Basis", "en": "Basic" },
          "price": { "nl": "Op offerte", "en": "On quotation" },
          "description": {
            "nl": "Je ontvangt de bestanden van de website, bestelomgeving en het beheer, met installatie-instructies en een handleiding in het Nederlands en Engels. Je installeert en vult alles zelf in.",
            "en": "You receive the files for the website, ordering and admin, with setup instructions and a guide in Dutch and English. You install and fill in everything yourself."
          }
        },
        {
          "name": "Plus",
          "price": { "nl": "Op offerte", "en": "On quotation" },
          "description": {
            "nl": "Ik zet de website op jouw hosting, koppel online betalen via Mollie en we doen samen een proefbestelling. Jij vult je menu, tijden en bezorggebieden zelf in via het beheer.",
            "en": "I set up the website on your hosting, connect online payment via Mollie and we place a test order together. You fill in your menu, times and delivery areas yourself in the admin."
          }
        },
        {
          "name": { "nl": "Compleet", "en": "Complete" },
          "price": { "nl": "Op offerte", "en": "On quotation" },
          "popular": true,
          "badge": { "nl": "Met persoonlijke hulp", "en": "With personal help" },
          "description": {
            "nl": "Ik richt ook je menukaart, openingstijden, afhaal- en bezorgtijden en bezorggebieden in en stem de kleuren af op je huisstijl. Je voegt zelf je foto's toe; ik leg uit hoe dat werkt.",
            "en": "I also set up your menu, opening hours, pickup and delivery times and delivery areas, and match the colours to your brand style. You add your photos yourself; I explain how."
          }
        }
      ],
      "compare": [
        { "label": { "nl": "Website met menukaart, bestelomgeving en beheer", "en": "Website with menu, ordering and admin" }, "values": [true, true, true] },
        { "label": { "nl": "Afhalen en bezorgen, online betalen via Mollie", "en": "Pickup and delivery, online payment via Mollie" }, "values": [true, true, true] },
        { "label": { "nl": "Handleiding en installatie-instructies (NL en EN)", "en": "Guide and setup instructions (Dutch and English)" }, "values": [true, true, true] },
        { "label": { "nl": "Hulp bij je domeinnaam, hosting en Mollie-account", "en": "Help with your domain name, hosting and Mollie account" }, "values": [false, true, true] },
        { "label": { "nl": "Installatie op jouw hosting, met HTTPS", "en": "Setup on your hosting, with HTTPS" }, "values": [false, true, true] },
        { "label": { "nl": "Online betalen gekoppeld en proefbestelling met testbetaling", "en": "Online payment connected and test order with a test payment" }, "values": [false, true, true] },
        { "label": { "nl": "Beheeraccount aangemaakt en uitleg van het beheer", "en": "Admin account created and admin walkthrough" }, "values": [false, true, true] },
        { "label": { "nl": "Jouw menukaart, prijzen en allergeneninformatie ingevoerd", "en": "Your menu, prices and allergen information entered" }, "values": [false, false, true] },
        { "label": { "nl": "Openingstijden, afhaal- en bezorgtijden en bezorggebieden ingesteld", "en": "Opening hours, pickup and delivery times and delivery areas set up" }, "values": [false, false, true] },
        { "label": { "nl": "Kleuren naar jouw huisstijl", "en": "Colours to suit your brand style" }, "values": [false, false, true] },
        { "label": { "nl": "Persoonlijke begeleiding", "en": "Personal guidance" },
          "values": [{ "nl": "Geen", "en": "None" }, { "nl": "Bij installatie", "en": "During setup" }, { "nl": "Tot oplevering", "en": "Until delivery" }] }
      ],
      "packageNotes": {
        "nl": [
          "Website en bestellen zijn tweetalig: bezoekers kunnen wisselen tussen Nederlands en Engels. Je levert je eigen teksten aan in de talen die je wilt gebruiken. Teksten schrijven of vertalen is niet inbegrepen.",
          "Je koopt en betaalt zelf je domeinnaam en hosting (met ondersteuning voor Node.js) en maakt zelf een account aan bij Mollie. Bij Plus en Compleet help ik je met de keuze en installatie.",
          "Je voegt zelf je foto's en logo toe via het beheer. Ik lever of plaats geen afbeeldingen, maar kan uitleggen hoe je ze toevoegt.",
          "Jij blijft verantwoordelijk voor je menu, prijzen en allergeneninformatie. De website toont alleen wat jij invult.",
          "Bij bezorgen regel je zelf wie er bezorgt: eigen personeel of een koeriersdienst. De website plant geen ritten.",
          "De kosten hangen af van wat je nodig hebt. Je ontvangt altijd eerst een offerte; een andere indeling, extra pagina's of nieuwe functies bespreken we apart."
        ],
        "en": [
          "The website and ordering are bilingual: visitors can switch between Dutch and English. You supply your text in the languages you want to use. Writing or translation is not included.",
          "You purchase and pay for your own domain name and hosting (with Node.js support) and create your own Mollie account. With Plus and Complete, I help you choose and set them up.",
          "You add your own photos and logo in the admin. I do not supply or add images, but I can explain how to add them.",
          "You remain responsible for your menu, prices and allergen information. The website only shows what you enter.",
          "For delivery, you arrange who delivers: your own staff or a courier service. The website does not plan routes.",
          "The cost depends on what you need. You always receive a quote first; a different layout, extra pages or new features are discussed separately."
        ]
      },
      "steps": {
        "title": { "nl": "Werkwijze", "en": "How it works" },
        "sub": {
          "nl": "Kies wat bij je past: zelf installeren, hulp bij het online zetten of ook je menu en tijden laten inrichten.",
          "en": "Choose what suits you: install it yourself, get help going live, or also have your menu and times set up."
        },
        "items": [
          { "title": { "nl": "Offerte aanvragen", "en": "Request a quote" },
            "text": { "nl": "Vertel welk pakket je zoekt en wat je zaak nodig heeft: afhalen, bezorgen of allebei. Je ontvangt vooraf een offerte met de kosten.", "en": "Tell me which package you're looking for and what your business needs: pickup, delivery or both. You receive a quote with the costs in advance." } },
          { "title": { "nl": "Voorbereiden", "en": "Get ready" },
            "text": { "nl": "Je koopt zelf je domeinnaam en hosting en maakt een account aan bij Mollie. Bij Plus en Compleet help ik je daarbij.", "en": "You purchase your own domain name and hosting and create a Mollie account. With Plus and Complete, I help you with this." } },
          { "title": { "nl": "Inrichten", "en": "Set up" },
            "text": { "nl": "Bij Basis en Plus vul je je menu, tijden en bezorggebieden zelf in. Bij Compleet stuur je mij je gegevens en richt ik het in. Je voegt bij elk pakket zelf je foto's toe.", "en": "With Basic and Plus, you fill in your menu, times and delivery areas yourself. With Complete, you send me your details and I set them up. With every package, you add your own photos." } },
          { "title": { "nl": "Proefbestelling", "en": "Test order" },
            "text": { "nl": "Bij Plus en Compleet doen we samen een proefbestelling met een testbetaling, op jouw eigen domein. Pas als alles werkt, gaat online betalen live.", "en": "With Plus and Complete, we place a test order with a test payment on your own domain. Only when everything works does online payment go live." } },
          { "title": { "nl": "Online", "en": "Live" },
            "text": { "nl": "Je website en bestelomgeving staan online. Bestellingen komen binnen in jouw beheer, ook als een e-mail niet aankomt.", "en": "Your website and ordering are live. Orders arrive in your admin, even if an email does not get through." } }
        ]
      },
      "supply": {
        "nl": ["Bedrijfsgegevens, openingstijden en bezorggebieden", "Menu met prijzen, varianten en allergeneninformatie", "Je eigen foto's en logo", "Een account bij Mollie (voor online betalen)"],
        "en": ["Business details, opening hours and delivery areas", "Menu with prices, variants and allergen information", "Your own photos and logo", "A Mollie account (for online payment)"]
      },
      "recurring": {
        "nl": ["Domeinnaam en hosting (bij een aanbieder naar keuze)", "Transactiekosten van Mollie per betaling", "Eventueel een e-maildienst voor bevestigingsmails", "Deze kosten betaal je zelf rechtstreeks aan de aanbieders; controleer hun actuele tarieven"],
        "en": ["Domain name and hosting (with a provider of your choice)", "Mollie transaction fees per payment", "Optionally an email service for confirmation emails", "You pay these costs directly to the providers; check their current rates"]
      },
      "contactCopy": {
        "heading": { "nl": "Jouw zaak,\nonline bestellen.", "en": "Your business,\nordering online." },
        "lead": {
          "nl": "Wil je een offerte, of eerst weten wat er kan voor jouw zaak? Vertel kort wat je nodig hebt. Ik denk met je mee.",
          "en": "Would you like a quote, or first want to know what's possible for your business? Tell me briefly what you need and I'll help you think it through."
        },
        "soft": {
          "nl": "Vermeld gerust of je afhalen, bezorgen of allebei wilt aanbieden.",
          "en": "Feel free to mention whether you want to offer pickup, delivery or both."
        }
      },
      "price": "", "priceNote": "", "delivery": ""
    },
    {
      "id": "portfolio",
      "tagline": {
        "nl": "Geef jouw werk de ruimte.",
        "en": "Give your work room to shine."
      },
      "wire": "shop",
      "title": {
        "nl": "Portfoliowebsite",
        "en": "Portfolio website"
      },
      "icon": "layout",
      "color": "sky",
      "image": "assets/img/portfolio.jpg",
      "demo": "https://onlinedesk-portfolio.netlify.app",
      "audience": {
        "nl": "Fotografen, ontwerpers en andere makers",
        "en": "Photographers, designers and other creatives"
      },
      "headline": {
        "nl": "Geef jouw werk de ruimte.",
        "en": "Give your work room to shine."
      },
      "textSub": {
        "nl": "Pas de website zelf aan, of laat mij je helpen.",
        "en": "Customise the website yourself, or let me help."
      },
      "text": {
        "nl": "Een rustige, tweetalige website van één pagina voor jouw projecten, diensten en verhaal. Je bezoekers kiezen tussen Nederlands en Engels.",
        "en": "A clean, bilingual one-page website for your projects, services and story. Visitors can switch between Dutch and English."
      },
      "preview": {
        "desktop": "assets/img/portfolio-pagina.jpg",
        "mobile": "assets/img/portfolio-pagina-mobiel.jpg"
      },
      "steps": {
        "title": {
          "nl": "Werkwijze",
          "en": "How it works"
        },
        "sub": {
          "nl": "Kies wat bij je past: zelf aanpassen, hulp bij het online zetten of ook je teksten en huisstijl laten aanpassen.",
          "en": "Choose what suits you: edit it yourself, get help publishing, or also have your text and brand style added."
        },
        "items": [
          {
            "title": {
              "nl": "Pakket kiezen",
              "en": "Choose a package"
            },
            "text": {
              "nl": "Je kiest je pakket. Basis betaal je vooraf. Bij Plus en Compleet betaal je 50% bij akkoord. We bespreken persoonlijk wanneer ik aan je website kan werken.",
              "en": "Choose your package. Basic is paid in advance. With Plus and Complete, you pay 50% on approval. We discuss personally when I can work on your website."
            }
          },
          {
            "title": {
              "nl": "Voorbereiden",
              "en": "Get ready"
            },
            "text": {
              "nl": "Je koopt zelf je domeinnaam en hosting. Bij Plus en Compleet kan ik je daarbij helpen. Je krijgt de handleiding in het Nederlands of Engels, afhankelijk van welke taal je spreekt.",
              "en": "You purchase your own domain name and hosting. With Plus and Complete, I can help you with this. You receive the guide in Dutch or English, depending on which language you speak."
            }
          },
          {
            "title": {
              "nl": "Website aanpassen",
              "en": "Customise your website"
            },
            "text": {
              "nl": "Bij Basis en Plus pas je de inhoud zelf aan. Bij Compleet stuur je mij je teksten en vertel je welke kleuren en welk lettertype je wilt gebruiken. Je voegt bij elk pakket zelf je afbeeldingen toe; ik kan uitleggen hoe.",
              "en": "With Basic and Plus, you edit the content yourself. With Complete, you send me your text and tell me which colours and font you want to use. With every package, you add your own images; I can explain how."
            }
          },
          {
            "title": {
              "nl": "Bekijken en aanpassen",
              "en": "Review and revise"
            },
            "text": {
              "nl": "Bij Compleet krijg je 2 rondes om wijzigingen aan je teksten, kleuren en lettertype door te geven. Stuur je wensen per ronde in één bericht. Wil je extra pagina’s of functies? Dan bespreken we eerst de mogelijkheden en kosten.",
              "en": "Complete includes 2 rounds of changes to your text, colours and font. Send your requests in one message per round. For extra pages or features, we discuss the options and costs first."
            }
          },
          {
            "title": {
              "nl": "Online zetten",
              "en": "Publish your website"
            },
            "text": {
              "nl": "Bij Basis zet je de website zelf online met de handleiding. Bij Plus en Compleet help ik je de website op jouw hosting online te zetten. De resterende 50% betaal je bij oplevering.",
              "en": "With Basic, you publish the site yourself using the guide. With Plus and Complete, I help publish the site on your hosting. The remaining 50% is due on delivery."
            }
          }
        ]
      },
      "price": {
        "nl": "€ 79",
        "en": "€79"
      },
      "priceNote": {
        "nl": "incl. btw",
        "en": "incl. VAT"
      },
      "tiers": [
        {
          "name": {
            "nl": "Basis",
            "en": "Basic"
          },
          "price": {
            "nl": "€ 79",
            "en": "€79"
          },
          "description": {
            "nl": "Je ontvangt de websitebestanden en een handleiding in het Nederlands of Engels. Je past de website zelf aan en zet hem zelf online.",
            "en": "You receive the website files and a guide in Dutch or English. You customise and publish the website yourself."
          }
        },
        {
          "name": "Plus",
          "price": {
            "nl": "€ 249",
            "en": "€249"
          },
          "description": {
            "nl": "Jij past de inhoud aan en koopt je domeinnaam en hosting. Ik help je met de installatie en stel het contactformulier in.",
            "en": "You edit the content and purchase your domain name and hosting. I help with the setup and configure the contact form."
          }
        },
        {
          "name": {
            "nl": "Compleet",
            "en": "Complete"
          },
          "price": {
            "nl": "€ 595",
            "en": "€595"
          },
          "popular": true,
          "badge": {
            "nl": "Met persoonlijke hulp",
            "en": "With personal help"
          },
          "description": {
            "nl": "Ik plaats jouw teksten, stem de kleuren en het lettertype af op jouw voorkeur of huisstijl en zet de website online. Je voegt zelf je afbeeldingen toe; ik leg uit hoe dat werkt.",
            "en": "I add your text, adjust the colours and font to your preferences or brand style, and publish the website. You add your images yourself; I explain how."
          }
        }
      ],
      "compare": [
        {
          "label": {
            "nl": "Websitebestanden (HTML/CSS/JS)",
            "en": "Website files (HTML/CSS/JS)"
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Handleiding in het Nederlands of Engels",
            "en": "Guide in Dutch or English"
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Hulp bij je eigen domeinnaam en hosting",
            "en": "Help with your own domain name and hosting"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Technische installatie op jouw hosting, met HTTPS",
            "en": "Technical setup on your hosting, with HTTPS"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Werkend contactformulier",
            "en": "Working contact form"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Uitleg over zelf toevoegen van een site-icoon en deelafbeelding",
            "en": "Guidance on adding your own site icon and sharing image"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Jouw aangeleverde teksten geplaatst",
            "en": "Your supplied text added"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Kleuren en lettertype naar jouw voorkeur of huisstijl",
            "en": "Colours and font to suit your preferences or brand style"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Basis-SEO en hulp bij Google Search Console",
            "en": "Basic SEO and guidance on Google Search Console"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Controle na persoonlijke invulling op mobiel, tablet en desktop",
            "en": "Checks after personalisation on mobile, tablet and desktop"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "2 correctierondes",
            "en": "2 rounds of revisions"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Persoonlijke begeleiding bij het invullen",
            "en": "Personal guidance on adding your content"
          },
          "values": [
            {
              "nl": "Geen",
              "en": "None"
            },
            {
              "nl": "Geen",
              "en": "None"
            },
            {
              "nl": "Tot oplevering",
              "en": "Until delivery"
            }
          ]
        }
      ],
      "extras": [
        {
          "name": {
            "nl": "Extra pagina in dezelfde stijl",
            "en": "Extra page in the same style"
          },
          "price": {
            "nl": "€ 95",
            "en": "€95"
          }
        },
        {
          "name": {
            "nl": "Extra correctieronde binnen de opdracht",
            "en": "Extra revision round within the agreed scope"
          },
          "price": {
            "nl": "€ 45",
            "en": "€45"
          }
        },
        {
          "name": {
            "nl": "Teksten schrijven",
            "en": "Copywriting"
          },
          "price": {
            "nl": "€ 35 / uur",
            "en": "€35 / hour"
          }
        }
      ],
      "terms": {
        "nl": [
          "Basis betaal je volledig vooraf. Voor Plus en Compleet betaal je 50% bij akkoord en 50% bij oplevering.",
          "Domeinnaam en hosting zijn niet bij de pakketprijs inbegrepen. Je koopt en betaalt deze zelf bij een aanbieder naar keuze. Bij Plus en Compleet kan ik je hierbij helpen. Eventuele kosten van een formulierdienst bespreken we vooraf.",
          "De planning hangt af van mijn lopende projecten en wat je nodig hebt. We bespreken de start en oplevering persoonlijk voordat ik begin.",
          "Na volledige betaling ontvang je de websitebestanden en een gebruikslicentie voor één website. Je mag de inhoud, code en vormgeving aanpassen. De template is niet exclusief en mag niet als template worden doorverkocht of verspreid.",
          "Onderhoud en latere aanpassingen zijn niet inbegrepen. De afgesproken oplevering en inbegrepen correctierondes staan los van later meerwerk.",
          "Alle genoemde prijzen zijn inclusief 21% btw en geldig tot en met 31 december 2026."
        ],
        "en": [
          "Basic is paid in full in advance. For Plus and Complete, you pay 50% on approval and 50% on delivery.",
          "Domain name and hosting are not included in the package price. You purchase and pay for them yourself with a provider of your choice. With Plus and Complete, I can help you with this. We discuss any form service costs in advance.",
          "The schedule depends on my current projects and what you need. We discuss the start and delivery dates personally before I begin.",
          "After full payment, you receive the website files and a licence for one website. You may edit the content, code and design. The template is not exclusive and may not be resold or distributed as a template.",
          "Maintenance and later changes are not included. The agreed delivery and included revision rounds are separate from later additional work.",
          "All listed prices include 21% VAT and are valid until 31 December 2026."
        ]
      },
      "extrasNote": {
        "nl": "Alle bedragen zijn inclusief btw. De inhoud van een extra pagina en het aantal uren voor schrijfwerk spreken we vooraf af.",
        "en": "All amounts include VAT. We agree on the content of an extra page and the estimated copywriting hours in advance."
      },
      "packageNotes": {
        "nl": [
          "De website is tweetalig: bezoekers kunnen wisselen tussen Nederlands en Engels. Je levert je eigen teksten aan in de talen die je wilt gebruiken. Teksten schrijven of vertalen is niet inbegrepen.",
          "Je krijgt een handleiding in het Nederlands of Engels. Je past de website aan in HTML/CSS/JS-bestanden; er is geen visuele editor.",
          "Je koopt en betaalt zelf je domeinnaam en hosting. Bij Plus en Compleet help ik je met de keuze en installatie.",
          "Je voegt zelf je foto’s, logo, site-icoon en deelafbeelding toe. Ik lever of plaats geen afbeeldingen, maar kan uitleggen hoe je ze toevoegt.",
          "Bij Compleet plaats ik je teksten en pas ik kleuren en lettertype aan. Samen bespreken we vooraf wat je op de website wilt zetten. Een andere indeling, extra pagina’s of nieuwe functies bespreken we apart.",
          "Voor Google Search Console maak je zelf een account aan. Bij Compleet help ik je met het koppelen van je website."
        ],
        "en": [
          "The website is bilingual: visitors can switch between Dutch and English. You supply your text in the languages you want to use. Writing or translation is not included.",
          "You receive a guide in Dutch or English. You edit the website in HTML/CSS/JS files; there is no visual editor.",
          "You purchase and pay for your domain name and hosting yourself. With Plus and Complete, I help you choose and set them up.",
          "You add your own photos, logo, site icon and sharing image. I do not supply or add images, but I can explain how to add them.",
          "With Complete, I add your text and adjust the colours and font. We discuss in advance what you want on the website. A different layout, extra pages or new features are discussed separately.",
          "You create your own Google Search Console account. With Complete, I help connect your website."
        ]
      },
      "contactCopy": {
        "heading": {
          "nl": "Jouw portfolio,\nop jouw manier.",
          "en": "Your portfolio,\nyour way."
        },
        "lead": {
          "nl": "Weet je welk pakket bij je past, of twijfel je nog? Vertel kort wat je nodig hebt. Ik denk met je mee.",
          "en": "Know which package you want, or still deciding? Tell me what you need and I’ll help you choose."
        },
        "soft": {
          "nl": "Vermeld gerust het pakket dat je op het oog hebt.",
          "en": "Feel free to mention the package you have in mind."
        }
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
      "en": "Your own website, webshop or app? I'll help you work out what you need and build it.\n\nFrom first idea to working product.\nWith a clear plan and clear agreements."
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
        "title": { "nl": "Content & vindbaarheid", "en": "Content & search visibility" },
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
      "a": { "nl": "Dat kan, afhankelijk van het product en je ervaring. Bij de portfoliowebsite pas je teksten en afbeeldingen aan in HTML/CSS/JS-bestanden; een visuele editor is niet inbegrepen. Wil je hulp met de invulling of het online zetten? Kies dan het passende pakket.",
             "en": "That depends on the product and your experience. For the portfolio website, you edit text and images in HTML/CSS/JS files; a visual editor is not included. If you would like help adding content or publishing the site, choose the appropriate package." } },
    { "q": { "nl": "Hoe werkt maatwerk?", "en": "How does a custom build work?" },
      "a": { "nl": "Je vertelt je idee en we bespreken je wensen. Daarna ontvang je een voorstel met duidelijke kosten en afspraken, en bouw ik volgens de afgesproken planning.",
             "en": "You tell me your idea and we discuss your wishes. You then receive a proposal with clear costs and agreements, and I build according to the agreed schedule." } }
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
