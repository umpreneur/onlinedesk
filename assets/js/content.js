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
      "tagline": { "nl": "Breng jouw zaak in beeld.", "en": "Put your business in the spotlight." }, "wire": "arch",
      "title": { "nl": "Horecawebsite", "en": "Hospitality website" },
      "icon": "coffee", "color": "sand", "image": "", "demo": "",
      "audience": { "nl": "Restaurants, cafés en lunchzaken", "en": "Restaurants, cafés and lunchrooms" },
      "highlights": { "nl": ["Grote sfeerfoto", "Menukaart", "Openingstijden", "Reserveren"], "en": ["Large atmosphere photo", "Menu", "Opening hours", "Reservations"] },
      "price": "", "priceNote": { "nl": "excl. btw", "en": "excl. VAT" }, "delivery": ""
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
        "nl": "Zelf aanpassen of laten verzorgen.",
        "en": "Edit it yourself or have it done for you."
      },
      "text": {
        "nl": "Een rustige website van één pagina voor jouw projecten, diensten en verhaal. Met Nederlandse en Engelse voorbeeldteksten.",
        "en": "A clean one-page website for your projects, services and story. With Dutch and English sample text."
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
          "nl": "De werkwijze verschilt per pakket: zelf aan de slag met Basis, de installatie laten regelen met Plus of de invulling laten verzorgen met Compleet.",
          "en": "Choose how much you do yourself: edit and publish with Basic, have the technical setup handled with Plus, or have your content added with Complete."
        },
        "items": [
          {
            "title": {
              "nl": "Kiezen en afspreken",
              "en": "Choose and agree"
            },
            "text": {
              "nl": "Bij Basis betaal je vooraf. Bij Plus en Compleet betaal je 50% bij akkoord. We spreken vooraf af wat wordt geleverd en wanneer.",
              "en": "Basic is paid in full in advance. For Plus and Complete, you pay 50% on approval. We agree on the scope and timing before work starts."
            }
          },
          {
            "title": {
              "nl": "Zelf aanpassen of aanleveren",
              "en": "Edit or supply content"
            },
            "text": {
              "nl": "Bij Basis en Plus pas je de inhoud zelf aan in de websitebestanden. Bij Compleet lever je binnen 2 weken je teksten, foto’s, projecten en logo aan, in de talen die je wilt gebruiken.",
              "en": "With Basic and Plus, you edit the content in the website files yourself. With Complete, you supply your text, photos, projects and logo within 2 weeks, in the languages you want to use."
            }
          },
          {
            "title": {
              "nl": "Bestanden of installatie",
              "en": "Files or technical setup"
            },
            "text": {
              "nl": "Basis ontvang je binnen 1 werkdag na betaling. Bij Plus regel ik de technische installatie. Bij Compleet verwerk ik ook jouw materiaal in het bestaande ontwerp.",
              "en": "You receive Basic within 1 working day of payment. With Plus, I handle the technical setup. With Complete, I also add your content to the existing design."
            }
          },
          {
            "title": {
              "nl": "Controleren en corrigeren",
              "en": "Review and revise"
            },
            "text": {
              "nl": "Compleet bevat 2 correctierondes binnen de afgesproken opdracht. Je verzamelt je feedback per ronde in één overzicht. Extra wijzigingen bespreken we vooraf.",
              "en": "Complete includes 2 revision rounds within the agreed scope. You collect your feedback in one list per round. We discuss additional changes in advance."
            }
          },
          {
            "title": {
              "nl": "Opleveren",
              "en": "Delivery"
            },
            "text": {
              "nl": "Bij Basis zet je de website zelf online. Bij Plus en Compleet verzorg ik de livegang en ontvang je de bijbehorende toegangsgegevens. De resterende 50% betaal je bij oplevering.",
              "en": "With Basic, you publish the site yourself. With Plus and Complete, I publish it and provide the relevant access details. The remaining 50% is due on delivery."
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
            "nl": "Zelf aanpassen en online zetten. Je ontvangt de websitebestanden en een Nederlandstalige handleiding.",
            "en": "Edit and publish it yourself. You receive the website files and a guide in Dutch."
          }
        },
        {
          "name": "Plus",
          "price": {
            "nl": "€ 249",
            "en": "€249"
          },
          "description": {
            "nl": "Jij past de inhoud zelf aan. Ik regel de domeinnaam, technische installatie en het contactformulier.",
            "en": "You edit the content yourself. I arrange the domain name, technical setup and contact form."
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
            "nl": "Laten verzorgen",
            "en": "Done for you"
          },
          "description": {
            "nl": "Jij levert je materiaal aan. Ik verwerk de inhoud, pas kleuren en lettertype aan en zet de website online.",
            "en": "You supply your content. I add it to the website, adjust the colours and font, and publish the site."
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
            "nl": "Nederlandstalige handleiding",
            "en": "Step-by-step guide in Dutch"
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Domeinnaam registreren en koppelen (1e jaar)",
            "en": "Domain name registered and connected (1st year)"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Hosting instellen met https/SSL",
            "en": "Hosting set up with https/SSL"
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
            "nl": "Favicon en deelafbeelding",
            "en": "Favicon and sharing image"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Jouw teksten, foto's, projecten en logo's verwerkt",
            "en": "Your texts, photos, projects and logos added"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Kleuren en lettertype aangepast",
            "en": "Colours and font adjusted"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Basis-SEO en Google Search Console",
            "en": "Basic SEO and Google Search Console"
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
          "Bij Plus en Compleet is domeinregistratie voor het eerste jaar inbegrepen. De gekozen hosting- en formulierdienst, eventuele gebruikslimieten en terugkerende kosten worden vóór akkoord in je voorstel vermeld.",
          "Plus en Compleet staan binnen 1 week online nadat alle benodigde bestanden, content en toegangen compleet zijn. We bevestigen de planning vooraf. Latere aanlevering of extra wijzigingen kunnen de opleverdatum verschuiven.",
          "Na volledige betaling ontvang je de websitebestanden en een gebruikslicentie voor één website. Je mag de inhoud, code en vormgeving aanpassen. De template is niet exclusief en mag niet als template worden doorverkocht of verspreid.",
          "Onderhoud en latere aanpassingen zijn niet inbegrepen. De afgesproken oplevering en inbegrepen correctierondes staan los van later meerwerk.",
          "Alle genoemde prijzen zijn inclusief 21% btw en geldig tot en met 31 december 2026."
        ],
        "en": [
          "Basic is paid in full in advance. For Plus and Complete, you pay 50% on approval and 50% on delivery.",
          "Plus and Complete include domain registration for the first year. The hosting and form services, any usage limits and recurring costs are specified in your proposal before approval.",
          "Plus and Complete go live within 1 week after all required files, content and access details have been received. We confirm the schedule in advance. Late content or additional changes may affect delivery.",
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
          "Alle pakketten gebruiken dezelfde mobielvriendelijke template. De inhoud pas je aan in HTML/CSS/JS-bestanden; een visuele editor of beheersysteem is niet inbegrepen.",
          "De template bevat Nederlandse en Engelse voorbeeldteksten. Het schrijven of vertalen van jouw eigen teksten is niet inbegrepen.",
          "Bij Compleet spreken we vooraf af hoeveel projecten, afbeeldingen en tekst worden verwerkt. Aanpassingen blijven binnen het bestaande ontwerp; extra functies en grotere wijzigingen bespreken we apart."
        ],
        "en": [
          "All packages use the same mobile-friendly template. Content is edited in HTML/CSS/JS files; a visual editor or content management system is not included.",
          "The template contains Dutch and English sample text. Writing or translating your own text is not included.",
          "With Complete, we agree in advance on the amount of text, projects and images to add. Changes stay within the existing design; extra features and larger changes are discussed separately."
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
