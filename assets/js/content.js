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
        "nl": "Een warme website met menukaart, verhaal, sfeerbeelden, openingstijden, route en contact. Gasten bestellen zonder account rechtstreeks bij jou, voor afhalen of bezorgen, en rekenen online af.",
        "en": "A warm website with your menu, story, photos, opening hours, directions and contact. Guests order directly from you without an account, for pickup or delivery, and pay online."
      },
      "textSub": {
        "nl": "Probeer de demo: bestel als voorbeeld bij de fictieve lunchroom Aan Tafel.",
        "en": "Try the demo: place an example order at the fictional lunchroom Aan Tafel."
      },
      "preview": {
        "desktop": "assets/img/horeca-pagina.jpg",
        "mobile": "assets/img/horeca-pagina-mobiel.jpg"
      },
      "steps": {
        "title": { "nl": "Werkwijze", "en": "How it works" },
        "sub": {
          "nl": "Basis lever ik binnen 1 werkdag na betaling. Plus en Compleet staan online binnen 2 weken nadat ik je menukaart en content heb ontvangen. Voor Plus en Compleet werkt het zo:",
          "en": "I deliver Basic within 1 working day of payment. Plus and Complete are live within 2 weeks of receiving your menu and content. For Plus and Complete, it works like this:"
        },
        "items": [
          { "title": { "nl": "Akkoord", "en": "Approval" },
            "text": { "nl": "Je tekent de offerte en betaalt de aanbetaling van 50%.", "en": "You sign the quote and pay the 50% deposit." } },
          { "title": { "nl": "Content aanleveren", "en": "Supply your content" },
            "text": { "nl": "Binnen 2 weken stuur je je menukaart (met prijzen, opties en allergenen), openingstijden, bezorggebieden, teksten, foto's en logo.", "en": "Within 2 weeks you send your menu (with prices, options and allergens), opening hours, delivery areas, text, photos and logo." } },
          { "title": { "nl": "Bouwen", "en": "Build" },
            "text": { "nl": "Ik richt de website en bestelomgeving in en stuur je een voorbeeldlink.", "en": "I set up the website and ordering and send you a preview link." } },
          { "title": { "nl": "Testen en correcties", "en": "Test and revise" },
            "text": { "nl": "We doen samen een testbestelling en je geeft je feedback in maximaal 2 rondes.", "en": "We place a test order together and you give your feedback in up to 2 rounds." } },
          { "title": { "nl": "Oplevering", "en": "Delivery" },
            "text": { "nl": "De site gaat live en je krijgt alle inloggegevens. Daarna betaal je de resterende 50%.", "en": "The site goes live and you receive all login details. Then you pay the remaining 50%." } }
        ]
      },
      "price": { "nl": "€ 180,29", "en": "€180.29" },
      "priceNote": { "nl": "incl. btw", "en": "incl. VAT" },
      "tiers": [
        {
          "name": { "nl": "Basis", "en": "Basic" },
          "price": { "nl": "€ 180,29", "en": "€180.29" },
          "description": {
            "nl": "Je ontvangt de websitebestanden met menukaart- en bestelpagina en een Nederlandstalige handleiding. Je zet de website zelf online en vult alles zelf in.",
            "en": "You receive the website files with menu and order pages and a guide in Dutch. You publish the website and fill in everything yourself."
          }
        },
        {
          "name": "Plus",
          "price": { "nl": "€ 543,29", "en": "€543.29" },
          "description": {
            "nl": "Ik zet de website en bestelomgeving online, met afhalen, bezorgen en online betalen. Jij vult je menukaart zelf in.",
            "en": "I put the website and ordering online, with pickup, delivery and online payment. You fill in your menu yourself."
          }
        },
        {
          "name": { "nl": "Compleet", "en": "Complete" },
          "price": { "nl": "€ 1.203,95", "en": "€1,203.95" },
          "popular": true,
          "badge": { "nl": "Meest gekozen", "en": "Most popular" },
          "description": {
            "nl": "Ik regel alles. Jij levert alleen je menukaart, teksten en foto's aan.",
            "en": "I take care of everything. You only supply your menu, text and photos."
          }
        }
      ],
      "compare": [
        { "label": { "nl": "Websitebestanden met menukaart- en bestelpagina", "en": "Website files with menu and order pages" }, "values": [true, true, true] },
        { "label": { "nl": "Nederlandstalige handleiding (menu, prijzen, openingstijden, uitverkocht zetten)", "en": "Guide in Dutch (menu, prices, opening hours, marking sold out)" }, "values": [true, true, true] },
        { "label": { "nl": "Domeinnaam registreren en koppelen (1e jaar)", "en": "Domain name registered and connected (1st year)" }, "values": [false, true, true] },
        { "label": { "nl": "Hosting instellen met HTTPS/SSL", "en": "Hosting set up with HTTPS/SSL" }, "values": [false, true, true] },
        { "label": { "nl": "Online bestellen voor afhalen ingesteld", "en": "Online ordering for pickup set up" }, "values": [false, true, true] },
        { "label": { "nl": "Bezorgen per postcodegebied met bezorgkosten en minimumbedrag", "en": "Delivery by postcode area with delivery fee and minimum order" }, "values": [false, true, true] },
        { "label": { "nl": "Online betalen gekoppeld (account op jouw naam)", "en": "Online payment connected (account in your name)" }, "values": [false, true, true] },
        { "label": { "nl": "Openingstijden, adres, route en contact ingesteld", "en": "Opening hours, address, directions and contact set up" }, "values": [false, true, true] },
        { "label": { "nl": "Favicon en deelafbeelding", "en": "Favicon and sharing image" }, "values": [false, true, true] },
        { "label": { "nl": "Jouw menukaart ingevoerd: gerechten, prijzen, opties en allergenen", "en": "Your menu entered: dishes, prices, options and allergens" }, "values": [false, false, true] },
        { "label": { "nl": "Jouw teksten, foto's en logo verwerkt", "en": "Your text, photos and logo added" }, "values": [false, false, true] },
        { "label": { "nl": "Kleuren en lettertype aangepast aan je huisstijl", "en": "Colours and font matched to your brand style" }, "values": [false, false, true] },
        { "label": { "nl": "Basis-SEO, Google Search Console en Google Bedrijfsprofiel gekoppeld", "en": "Basic SEO, Google Search Console and Google Business Profile connected" }, "values": [false, false, true] },
        { "label": { "nl": "Testbestelling samen doorlopen, getest op mobiel, tablet en desktop", "en": "Test order together, tested on mobile, tablet and desktop" }, "values": [false, false, true] },
        { "label": { "nl": "2 correctierondes", "en": "2 rounds of revisions" }, "values": [false, false, true] },
        { "label": { "nl": "Support", "en": "Support" },
          "values": [{ "nl": "Geen", "en": "None" }, { "nl": "Geen", "en": "None" }, { "nl": "Tot oplevering", "en": "Until delivery" }] }
      ],
      "packageNotes": {
        "nl": [
          "Bij oplevering staat alles op jouw naam: domein, hosting, bestelomgeving en betaalaccount. Je hebt geen lopende kosten aan mij.",
          "De betaalprovider rekent zelf een klein bedrag per online betaling. Die kosten betaal je rechtstreeks aan de provider.",
          "Vanaf het 2e jaar betaal je het domein zelf bij de provider (± € 10–15 per jaar).",
          "Jij bent verantwoordelijk voor juiste prijzen en allergeneninformatie op de menukaart.",
          "De website is standaard Nederlandstalig. Een extra taal, zoals Engels voor toeristen, is een optie."
        ],
        "en": [
          "On delivery, everything is in your name: domain, hosting, ordering and payment account. You have no ongoing costs to me.",
          "The payment provider charges a small fee per online payment. You pay these costs directly to the provider.",
          "From the 2nd year, you pay for the domain yourself at the provider (approx. €10–15 per year).",
          "You are responsible for correct prices and allergen information on the menu.",
          "The website is in Dutch as standard. An extra language, such as English for tourists, is available as an option."
        ]
      },
      "extras": [
        { "name": { "nl": "Extra taal (bijv. Engels, voor toeristen)", "en": "Extra language (e.g. English, for tourists)" }, "price": { "nl": "€ 235,95", "en": "€235.95" } },
        { "name": { "nl": "Foto per gerecht verwerken in de menukaart", "en": "Adding a photo per dish to the menu" }, "price": { "nl": "€ 6,05 / gerecht", "en": "€6.05 / dish" } },
        { "name": { "nl": "QR-code menukaart voor op tafel (printklaar ontwerp)", "en": "QR code menu for the table (print-ready design)" }, "price": { "nl": "€ 42,35", "en": "€42.35" } },
        { "name": { "nl": "Zakelijk e-mailadres instellen", "en": "Setting up a business email address" }, "price": { "nl": "€ 59,29", "en": "€59.29" } },
        { "name": { "nl": "Menukaart bijwerken na oplevering", "en": "Updating the menu after delivery" }, "price": { "nl": "€ 42,35 / keer", "en": "€42.35 / time" } },
        { "name": { "nl": "Extra correctieronde", "en": "Extra revision round" }, "price": { "nl": "€ 54,45", "en": "€54.45" } },
        { "name": { "nl": "Teksten schrijven of herschrijven", "en": "Writing or rewriting text" }, "price": { "nl": "€ 78,65 / uur", "en": "€78.65 / hour" } },
        { "name": { "nl": "Spoedoplevering (binnen 5 werkdagen)", "en": "Rush delivery (within 5 working days)" }, "price": { "nl": "€ 235,95", "en": "€235.95" } }
      ],
      "extrasNote": {
        "nl": "Alle bedragen zijn inclusief 21% btw. Extra's zitten niet in de pakketprijs; je kiest ze bij je akkoord.",
        "en": "All amounts include 21% VAT. Extras are not included in the package price; you choose them when you approve."
      },
      "terms": {
        "nl": [
          "Basis betaal je volledig vooraf. De bestanden lever ik na ontvangst van de betaling.",
          "Voor Plus en Compleet betaal je 50% bij akkoord en 50% bij oplevering, binnen 14 dagen na factuurdatum.",
          "Als de menukaart en content niet binnen 2 weken binnen zijn, schuift de planning op.",
          "Domein, hosting, bestelomgeving en betaalaccount worden aangemaakt op jouw naam en account. Na volledige betaling is de website van jou.",
          "Er is geen onderhoud of support inbegrepen na oplevering.",
          "Werk buiten de offerte gebeurt alleen na akkoord en tegen de genoemde tarieven.",
          "Een offerte is 30 dagen geldig. Alle genoemde prijzen zijn inclusief 21% btw."
        ],
        "en": [
          "Basic is paid in full in advance. I deliver the files once payment is received.",
          "For Plus and Complete, you pay 50% on approval and 50% on delivery, within 14 days of the invoice date.",
          "If the menu and content have not arrived within 2 weeks, the schedule moves accordingly.",
          "Domain, hosting, ordering and payment account are created in your name and account. After full payment, the website is yours.",
          "No maintenance or support is included after delivery.",
          "Work outside the quote is only done after approval and at the stated rates.",
          "A quote is valid for 30 days. All listed prices include 21% VAT."
        ]
      },
      "contactCopy": {
        "heading": { "nl": "Jouw zaak,\nonline bestellen.", "en": "Your business,\nordering online." },
        "lead": {
          "nl": "Weet je welk pakket bij je past, of twijfel je nog? Vertel kort wat je nodig hebt. Ik denk met je mee.",
          "en": "Know which package you want, or still deciding? Tell me what you need and I'll help you choose."
        },
        "soft": {
          "nl": "Vermeld gerust het pakket en de extra's die je op het oog hebt.",
          "en": "Feel free to mention the package and extras you have in mind."
        }
      },
      "delivery": ""
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
