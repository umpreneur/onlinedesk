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
      "tagline": {
        "nl": "Zakelijk, rustig en compleet.",
        "en": "Professional, calm and complete."
      },
      "wire": "split",
      "title": {
        "nl": "Bedrijfswebsite",
        "en": "Business website"
      },
      "icon": "briefcase",
      "color": "sage",
      "image": "assets/img/bedrijf.jpg",
      "demo": "https://koersvast-advies-demo.netlify.app",
      "audience": {
        "nl": "Adviesbureaus en zakelijke dienstverleners",
        "en": "Consultancies and professional service firms"
      },
      "highlights": {
        "nl": [
          "Groot beeld bovenaan",
          "Diensten",
          "Cases",
          "Nieuws",
          "Vacatures",
          "Contactformulier"
        ],
        "en": [
          "Large hero image",
          "Services",
          "Case studies",
          "News",
          "Vacancies",
          "Contact form"
        ]
      },
      "headline": {
        "nl": "Laat zien wat je doet, en waarom klanten voor je kiezen.",
        "en": "Show what you do, and why clients choose you."
      },
      "text": {
        "nl": "Een strakke, zakelijke website met zeven pagina's: Home, Over ons, Diensten, Cases, Nieuws, Werken bij en Contact. Met een groot beeld of video bovenaan, kerncijfers, filterbare cases, nieuwsberichten en vacatures. Gemaakt voor mobiel, tablet en desktop.",
        "en": "A clean, professional website with seven pages: Home, About, Services, Case studies, News, Careers and Contact. With a large image or video at the top, key figures, filterable case studies, news and vacancies. Built for mobile, tablet and desktop."
      },
      "textSub": {
        "nl": "Zelf starten of hulp bij de inrichting? Kies jouw pakket en bekijk de demo van het fictieve adviesbureau Koersvast.",
        "en": "Start yourself or get help with setup? Choose your package and explore the demo of the fictional consultancy Koersvast."
      },
      "preview": {
        "desktop": "assets/img/bedrijf-pagina.jpg",
        "mobile": "assets/img/bedrijf-pagina-mobiel.jpg"
      },
      "steps": {
        "title": {
          "nl": "Van template naar jouw website",
          "en": "From template to your website"
        },
        "sub": {
          "nl": "Basic: de code binnen 1 werkdag na betaling. Plus en Compleet: online binnen 2 weken na ontvangst van alle benodigde gegevens. Zo pakken we het aan:",
          "en": "Basic: code delivered within 1 working day of payment. Plus and Complete: live within 2 weeks of receiving all required details. Here is how we get started:"
        },
        "items": [
          {
            "title": {
              "nl": "Akkoord",
              "en": "Approval"
            },
            "text": {
              "nl": "Kies je pakket. Bij Plus en Compleet betaal je 50% vooraf; Basic betaal je volledig vooraf.",
              "en": "Choose your package. Plus and Complete require a 50% deposit; Basic is paid in full upfront."
            }
          },
          {
            "title": {
              "nl": "Jouw bedrijf in beeld",
              "en": "Tell me about your business"
            },
            "text": {
              "nl": "Stuur je bedrijfsgegevens en contactgegevens. Bij Compleet lever je ook je teksten over diensten, cases, nieuws en vacatures aan. Afbeeldingen voeg je zelf toe.",
              "en": "Send your business and contact details. For Complete, also supply your text for services, case studies, news and vacancies. You add images yourself."
            }
          },
          {
            "title": {
              "nl": "Website inrichten",
              "en": "Website setup"
            },
            "text": {
              "nl": "Bij Plus regel ik de techniek en het contactformulier. Bij Compleet plaats ik ook je inhoud en stem ik kleuren en lettertype af op je huisstijl.",
              "en": "With Plus, I handle the technical setup and the contact form. With Complete, I also add your content and match the colours and font to your brand style."
            }
          },
          {
            "title": {
              "nl": "Testen en correcties",
              "en": "Test and revise"
            },
            "text": {
              "nl": "Je bekijkt de website voor de livegang. Bij Compleet zijn 2 correctierondes inbegrepen.",
              "en": "Review your website before launch. Complete includes 2 rounds of revisions."
            }
          },
          {
            "title": {
              "nl": "Online",
              "en": "Live"
            },
            "text": {
              "nl": "Je website gaat online op je eigen domein. Je krijgt de toegang tot je accounts en betaalt de resterende 50%.",
              "en": "Your website goes live on your own domain. You receive access to your accounts and pay the remaining 50%."
            }
          }
        ]
      },
      "price": {
        "nl": "€ 149",
        "en": "€149"
      },
      "priceNote": {
        "nl": "incl. btw",
        "en": "incl. VAT"
      },
      "tiers": [
        {
          "name": {
            "nl": "Basic",
            "en": "Basic"
          },
          "price": {
            "nl": "€ 149",
            "en": "€149"
          },
          "description": {
            "nl": "Voor wie zelf bouwt. Je ontvangt de code van de template en een Nederlandstalige handleiding. Inhoud aanpassen, het formulier koppelen en online zetten doe je zelf.",
            "en": "For the DIY builder. You receive the template code and a guide in Dutch. You edit the content, connect the form and publish the website yourself."
          }
        },
        {
          "name": "Plus",
          "price": {
            "nl": "€ 449",
            "en": "€449"
          },
          "description": {
            "nl": "Jij vult in, ik regel de techniek. Ik zet je website online op je eigen domein en stel het contactformulier in. Jij vult je teksten zelf in.",
            "en": "You add the content; I handle the technical setup. I publish your website on your own domain and set up the contact form. You add your text yourself."
          }
        },
        {
          "name": {
            "nl": "Compleet",
            "en": "Complete"
          },
          "price": {
            "nl": "€ 899",
            "en": "€899"
          },
          "popular": true,
          "badge": {
            "nl": "Voor je ingericht",
            "en": "Set up for you"
          },
          "description": {
            "nl": "Jij runt je bedrijf, ik regel de inrichting, teksten, huisstijl en livegang. Alleen afbeeldingen voeg je zelf toe; ik leg uit hoe je ze toevoegt.",
            "en": "You run your business; I handle setup, text, brand style and launch. You add the images yourself; I explain how to add them."
          }
        }
      ],
      "compare": [
        {
          "label": {
            "nl": "Templatecode met 7 pagina's (HTML/CSS/JS)",
            "en": "Template code with 7 pages (HTML/CSS/JS)"
          },
          "values": [true, true, true]
        },
        {
          "label": {
            "nl": "Nederlandstalige handleiding (teksten, kleuren, nieuws, cases, vacatures)",
            "en": "Guide in Dutch (text, colours, news, case studies, vacancies)"
          },
          "values": [true, true, true]
        },
        {
          "label": {
            "nl": "Code zelf aanpassen en op eigen hosting gebruiken",
            "en": "Edit the code and use your own hosting"
          },
          "values": [true, true, true]
        },
        {
          "label": {
            "nl": "Domeinnaam registreren en koppelen (1e jaar)",
            "en": "Domain name registered and connected (1st year)"
          },
          "values": [false, true, true]
        },
        {
          "label": {
            "nl": "Hosting instellen met HTTPS/SSL",
            "en": "Hosting set up with HTTPS/SSL"
          },
          "values": [false, true, true]
        },
        {
          "label": {
            "nl": "Werkend contactformulier",
            "en": "Working contact form"
          },
          "values": [false, true, true]
        },
        {
          "label": {
            "nl": "Contactgegevens, adres en openingstijden ingesteld",
            "en": "Contact details, address and opening hours set up"
          },
          "values": [false, true, true]
        },
        {
          "label": {
            "nl": "Uitleg over zelf toevoegen van site-icoon, deelafbeelding en grote foto of video bovenaan",
            "en": "Guidance on adding your own site icon, sharing image and large hero image or video"
          },
          "values": [false, true, true]
        },
        {
          "label": {
            "nl": "Jouw aangeleverde teksten geplaatst: diensten, cases, nieuws en vacatures",
            "en": "Your supplied text added: services, case studies, news and vacancies"
          },
          "values": [false, false, true]
        },
        {
          "label": {
            "nl": "Kleuren en lettertype aangepast aan je huisstijl",
            "en": "Colours and font matched to your brand style"
          },
          "values": [false, false, true]
        },
        {
          "label": {
            "nl": "Basis voor Google: SEO, Search Console en Bedrijfsprofiel",
            "en": "Google basics: SEO, Search Console and Business Profile"
          },
          "values": [false, false, true]
        },
        {
          "label": {
            "nl": "Controle op mobiel, tablet en desktop",
            "en": "Checks on mobile, tablet and desktop"
          },
          "values": [false, false, true]
        },
        {
          "label": {
            "nl": "2 correctierondes",
            "en": "2 rounds of revisions"
          },
          "values": [false, false, true]
        },
        {
          "label": {
            "nl": "Support",
            "en": "Support"
          },
          "values": [
            { "nl": "Geen", "en": "None" },
            { "nl": "Geen", "en": "None" },
            { "nl": "Tot oplevering", "en": "Until delivery" }
          ]
        }
      ],
      "packageNotes": {
        "nl": [
          "Je koopt een bestaande template. Bij Basic doe je het zelf; bij Plus regel ik de techniek; bij Compleet ook je teksten en huisstijl.",
          "Afbeeldingen voeg je zelf toe, ook bij Compleet. Ik lever of plaats ze niet, maar leg uit hoe je ze toevoegt.",
          "De website is Nederlandstalig. Je past hem aan in HTML/CSS/JS-bestanden; er is geen visuele editor.",
          "Bij Plus en Compleet staan domein en hosting op jouw naam. Je betaalt geen verplicht abonnement aan mij.",
          "Het eerste jaar domein is inbegrepen bij Plus en Compleet. Daarna betaal je de verlenging zelf. Eventuele hosting- en formulierkosten staan vooraf in je offerte.",
          "Een extra pagina of aanvullende wens? Bekijk de extra's; we spreken de kosten vooraf af."
        ],
        "en": [
          "You are buying an existing template. With Basic you do it yourself; with Plus I handle the technical setup; with Complete I also add your text and brand style.",
          "You add images yourself, including with Complete. I do not supply or add them, but I explain how to add them.",
          "The website is in Dutch. You edit it in HTML/CSS/JS files; there is no visual editor.",
          "With Plus and Complete, the domain and hosting are in your name. There is no mandatory subscription to me.",
          "The first year of the domain is included with Plus and Complete. You pay for renewals afterwards. Any hosting and form service costs are stated in your quote upfront.",
          "Need an extra page or something extra? Explore the extras; we agree on costs in advance."
        ]
      },
      "extras": [
        {
          "name": { "nl": "Extra pagina in dezelfde stijl", "en": "Extra page in the same style" },
          "price": { "nl": "€ 95", "en": "€95" }
        },
        {
          "name": { "nl": "Extra taal (bijv. Engels)", "en": "Extra language (e.g. English)" },
          "price": { "nl": "€ 235,95", "en": "€235.95" }
        },
        {
          "name": { "nl": "Zakelijk e-mailadres instellen", "en": "Setting up a business email address" },
          "price": { "nl": "€ 59,29", "en": "€59.29" }
        },
        {
          "name": { "nl": "Nieuwsbericht, case of vacature plaatsen na oplevering", "en": "Adding a news item, case study or vacancy after delivery" },
          "price": { "nl": "€ 29 / stuk", "en": "€29 / item" }
        },
        {
          "name": { "nl": "Extra correctieronde", "en": "Extra revision round" },
          "price": { "nl": "€ 54,45", "en": "€54.45" }
        },
        {
          "name": { "nl": "Teksten schrijven of herschrijven", "en": "Writing or rewriting text" },
          "price": { "nl": "€ 78,65 / uur", "en": "€78.65 / hour" }
        },
        {
          "name": { "nl": "Spoedoplevering (binnen 5 werkdagen)", "en": "Rush delivery (within 5 working days)" },
          "price": { "nl": "€ 235,95", "en": "€235.95" }
        }
      ],
      "extrasNote": {
        "nl": "Extra's kies je zelf. We spreken de inhoud en kosten vooraf af. Alle bedragen zijn inclusief btw.",
        "en": "Choose the extras you need. We agree on the scope and costs upfront. All amounts include VAT."
      },
      "terms": {
        "nl": [
          "Basic betaal je volledig vooraf. Je ontvangt de templatecode en handleiding binnen 1 werkdag na betaling.",
          "Voor Plus en Compleet betaal je 50% bij akkoord en 50% bij oplevering, binnen 14 dagen na factuurdatum.",
          "De planning start zodra alle benodigde gegevens binnen zijn. Lever je later aan, dan schuift de oplevering mee.",
          "Na volledige betaling ontvang je de websitebestanden en een gebruikslicentie voor één website. Je mag de inhoud, code en vormgeving aanpassen. De template is niet exclusief en mag niet als template worden doorverkocht of verspreid.",
          "Er is geen onderhoud of support inbegrepen na oplevering.",
          "Werk buiten de offerte gebeurt alleen na akkoord en tegen de genoemde tarieven.",
          "Een offerte is 30 dagen geldig. Alle genoemde prijzen zijn inclusief 21% btw."
        ],
        "en": [
          "Basic is paid in full upfront. You receive the template code and guide within 1 working day of payment.",
          "For Plus and Complete, you pay 50% on approval and 50% on delivery, within 14 days of the invoice date.",
          "The schedule starts once all required details have arrived. Later delivery of your content moves the launch date accordingly.",
          "After full payment, you receive the website files and a licence for one website. You may edit the content, code and design. The template is not exclusive and may not be resold or distributed as a template.",
          "No maintenance or support is included after delivery.",
          "Work outside the quote is only done after approval and at the stated rates.",
          "A quote is valid for 30 days. All listed prices include 21% VAT."
        ]
      },
      "contactCopy": {
        "heading": {
          "nl": "Jouw bedrijf,\nzakelijk online.",
          "en": "Your business,\nprofessionally online."
        },
        "lead": {
          "nl": "Zelf starten of je website laten inrichten? Vertel kort over je bedrijf. Je ontvangt een helder voorstel voor jouw pakket.",
          "en": "Start yourself or have your website set up? Tell me about your business and receive a clear proposal for your package."
        },
        "soft": {
          "nl": "Kies Basic, Plus of Compleet en vermeld welke pagina's je nodig hebt.",
          "en": "Choose Basic, Plus or Complete and mention which pages you need."
        }
      },
      "delivery": ""
    },
    {
      "id": "webshop",
      "tagline": {
        "nl": "Verkoop jouw producten online.",
        "en": "Sell your products online."
      },
      "wire": "shop",
      "title": "Webshop",
      "icon": "cart",
      "color": "clay",
      "popular": true,
      "image": "",
      "demo": "",
      "audience": {
        "nl": "Ondernemers die producten verkopen",
        "en": "Entrepreneurs who sell products"
      },
      "highlights": {
        "nl": [
          "Productfoto's",
          "Categorieën",
          "Productpagina",
          "Winkelwagen"
        ],
        "en": [
          "Product photos",
          "Categories",
          "Product page",
          "Shopping cart"
        ]
      },
      "text": {
        "nl": "Een complete online winkel, klaar om te verkopen. Ik richt hem in met jouw producten en lever hem online op.",
        "en": "A complete online store, ready to sell. I set it up with your products and deliver it online."
      },
      "price": {
        "nl": "€ 1.495",
        "en": "€1,495"
      },
      "priceNote": {
        "nl": "excl. btw",
        "en": "excl. VAT"
      },
      "delivery": {
        "nl": "2–3 weken",
        "en": "2–3 weeks"
      },
      "features": {
        "nl": [
          "Productpagina's en winkelwagen",
          "Veilig betalen met iDEAL, creditcard en meer",
          "Geschikt voor mobiel, tablet en desktop"
        ],
        "en": [
          "Product pages and shopping cart",
          "Secure payments with iDEAL, credit card and more",
          "Suitable for mobile, tablet and desktop"
        ]
      },
      "included": {
        "nl": [
          "Professioneel ontwerp in jouw huisstijl",
          "Tot 50 producten voor je ingericht",
          "Domeinnaam en hosting voor 1 jaar",
          "Korte uitleg, zodat je zelf verder kunt",
          "Oplevering: ik zet de webshop online",
          "Afbeeldingen voeg je zelf toe, ook bij Compleet. Ik lever of plaats ze niet, maar leg uit hoe je ze toevoegt."
        ],
        "en": [
          "Professional design in your brand style",
          "Up to 50 products set up for you",
          "Domain name and hosting for 1 year",
          "A short walkthrough so you can carry on yourself",
          "Delivery: I put the webshop online",
          "You add images yourself, including with Complete. I do not supply or add them, but I explain how to add them."
        ]
      },
      "extra": {
        "nl": [
          "Meer dan 50 producten inrichten",
          "Koppelingen (zoals boekhouding of voorraad) en extra functies",
          "Hulp bij productteksten en vindbaarheid"
        ],
        "en": [
          "Setting up more than 50 products",
          "Integrations (such as accounting or stock) and extra features",
          "Help with product copy and search visibility"
        ]
      },
      "recurring": {
        "nl": [
          "Domeinnaam en hosting na het eerste jaar — de kosten staan in je voorstel",
          "Transactiekosten van je betaalprovider (rechtstreeks via de provider)"
        ],
        "en": [
          "Domain name and hosting after the first year — the costs are in your proposal",
          "Transaction fees from your payment provider (charged directly by the provider)"
        ]
      },
      "supply": {
        "nl": [
          "Productgegevens: namen, prijzen en omschrijvingen",
          "Je huisstijl en voorkeuren",
          "Je bedrijfsgegevens voor op de webshop (zoals KvK-nummer en adres)",
          "Een account bij een betaalprovider"
        ],
        "en": [
          "Product details: names, prices and descriptions",
          "Your brand style and preferences",
          "Your business details for the webshop (such as company number and address)",
          "An account with a payment provider"
        ]
      },
      "receive": {
        "nl": [
          "Een werkende webshop, online op je domeinnaam",
          "Een korte uitleg om zelf producten en bestellingen te beheren"
        ],
        "en": [
          "A working webshop, live on your domain name",
          "A short walkthrough to manage products and orders yourself"
        ]
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
      "tagline": {
        "nl": "Jouw menukaart. Jouw gasten. Jouw website.",
        "en": "Your menu. Your guests. Your website."
      },
      "wire": "arch",
      "title": {
        "nl": "Horecawebsite met bestellen & reserveren",
        "en": "Hospitality website with ordering & reservations"
      },
      "icon": "coffee",
      "color": "sand",
      "image": "assets/img/horeca.jpg",
      "demo": "https://aantafel-demo.netlify.app",
      "audience": {
        "nl": "Lunchrooms, broodjeszaken en kleine afhaalzaken",
        "en": "Lunchrooms, sandwich shops and small takeaways"
      },
      "headline": {
        "nl": "Laat gasten reserveren, bestellen en aanschuiven.",
        "en": "Let guests book a table, order and enjoy."
      },
      "text": {
        "nl": "Maak van bezoekers gasten. Met deze template presenteer je jouw zaak en menukaart én bied je reserveren, afhalen en bezorgen op één plek. Gasten bestellen rechtstreeks bij jou en betalen online.",
        "en": "Turn visitors into guests. This template brings your business, menu, table reservations, pickup and delivery together. Guests order directly from you and pay online."
      },
      "textSub": {
        "nl": "Zelf starten of hulp bij de inrichting? Kies jouw pakket en ontdek de Aan Tafel-demo.",
        "en": "Start yourself or get help with setup? Choose your package and explore the Aan Tafel demo."
      },
      "preview": {
        "desktop": "assets/img/horeca-pagina.jpg",
        "mobile": "assets/img/horeca-pagina-mobiel.jpg"
      },
      "steps": {
        "title": {
          "nl": "Van template naar jouw website",
          "en": "From template to your website"
        },
        "sub": {
          "nl": "Basic: de code binnen 1 werkdag na betaling. Plus en Compleet: online binnen 2 weken na ontvangst van alle benodigde gegevens. Zo pakken we het aan:",
          "en": "Basic: code delivered within 1 working day of payment. Plus and Complete: live within 2 weeks of receiving all required details. Here is how we get started:"
        },
        "items": [
          {
            "title": {
              "nl": "Akkoord",
              "en": "Approval"
            },
            "text": {
              "nl": "Kies je pakket. Bij Plus en Compleet betaal je 50% vooraf; Basic betaal je volledig vooraf.",
              "en": "Choose your package. Plus and Complete require a 50% deposit; Basic is paid in full upfront."
            }
          },
          {
            "title": {
              "nl": "Jouw zaak in beeld",
              "en": "Tell me about your business"
            },
            "text": {
              "nl": "Stuur je bedrijfsgegevens, openingstijden en bestelwensen. Bij Compleet lever je ook je menukaart en teksten aan. Afbeeldingen voeg je zelf toe.",
              "en": "Send your business details, opening hours and ordering preferences. For Complete, also supply your menu and text. You add images yourself."
            }
          },
          {
            "title": {
              "nl": "Website inrichten",
              "en": "Website setup"
            },
            "text": {
              "nl": "Bij Plus regel ik de techniek. Bij Compleet plaats ik ook je inhoud en stem ik kleuren en lettertype af op jouw zaak.",
              "en": "With Plus, I handle the technical setup. With Complete, I also add your content and match the colours and font to your business."
            }
          },
          {
            "title": {
              "nl": "Testen en correcties",
              "en": "Test and revise"
            },
            "text": {
              "nl": "Je bekijkt de website voor de livegang. Bij Compleet testen we samen een bestelling en zijn 2 correctierondes inbegrepen.",
              "en": "Review your website before launch. Complete includes a test order together and 2 rounds of revisions."
            }
          },
          {
            "title": {
              "nl": "Klaar voor je gasten",
              "en": "Ready for your guests"
            },
            "text": {
              "nl": "Je website gaat online op je eigen domein. Je krijgt de toegang tot je accounts en betaalt de resterende 50%.",
              "en": "Your website goes live on your own domain. You receive access to your accounts and pay the remaining 50%."
            }
          }
        ]
      },
      "price": {
        "nl": "€ 199",
        "en": "€199"
      },
      "priceNote": {
        "nl": "incl. btw",
        "en": "incl. VAT"
      },
      "tiers": [
        {
          "name": {
            "nl": "Basic",
            "en": "Basic"
          },
          "price": {
            "nl": "€ 199",
            "en": "€199"
          },
          "description": {
            "nl": "Voor wie zelf bouwt. Je ontvangt alleen de code van de template. Inhoud aanpassen, koppelingen instellen en online zetten doe je zelf.",
            "en": "For the DIY builder. You receive only the template code. You edit the content, configure integrations and publish the website yourself."
          }
        },
        {
          "name": "Plus",
          "price": {
            "nl": "€ 599",
            "en": "€599"
          },
          "description": {
            "nl": "Jij vult in, ik regel de techniek. Ik zet je website online en stel reserveren, afhalen, bezorgen en online betalen in. Jij vult je menukaart en teksten in.",
            "en": "You add the content; I handle the technical setup. I publish your website and configure reservations, pickup, delivery and online payments. You add your menu and text."
          }
        },
        {
          "name": {
            "nl": "Compleet",
            "en": "Complete"
          },
          "price": {
            "nl": "€ 1.199",
            "en": "€1,199"
          },
          "popular": true,
          "badge": {
            "nl": "Voor je ingericht",
            "en": "Set up for you"
          },
          "description": {
            "nl": "Jij runt je zaak, ik regel de inrichting, menukaart, teksten, koppelingen en livegang. Alleen afbeeldingen voeg je zelf toe; ik leg uit hoe je ze toevoegt.",
            "en": "You run your business; I handle setup, your menu, text, integrations and launch. You add the images yourself; I explain how to add them."
          }
        }
      ],
      "compare": [
        {
          "label": {
            "nl": "Templatecode voor menukaart, reserveren en bestellen",
            "en": "Template code for menus, reservations and ordering"
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Code zelf aanpassen en op eigen hosting gebruiken",
            "en": "Edit the code and use your own hosting"
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
            "nl": "Hosting instellen met HTTPS/SSL",
            "en": "Hosting set up with HTTPS/SSL"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Reserveren en bestellen voor afhalen ingesteld",
            "en": "Reservations and pickup ordering configured"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Bezorggebieden, bezorgkosten en minimumbedrag ingesteld",
            "en": "Delivery areas, fees and minimum order configured"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Online betalen gekoppeld (account op jouw naam)",
            "en": "Online payment connected (account in your name)"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Openingstijden, adres, route en contact ingesteld",
            "en": "Opening hours, address, directions and contact set up"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Uitleg over zelf toevoegen van site-icoon en deelafbeelding",
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
            "nl": "Menukaart ingevuld met jouw gerechten, prijzen en allergenen",
            "en": "Menu populated with your dishes, prices and allergens"
          },
          "values": [
            false,
            false,
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
            "nl": "Kleuren en lettertype aangepast aan je huisstijl",
            "en": "Colours and font matched to your brand style"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Basis voor Google: SEO, Search Console en Bedrijfsprofiel",
            "en": "Google basics: SEO, Search Console and Business Profile"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Samen een testbestelling en controle op mobiel, tablet en desktop",
            "en": "Test order together and checks on mobile, tablet and desktop"
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
            "nl": "Support",
            "en": "Support"
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
      "packageNotes": {
        "nl": [
          "Je koopt een bestaande template. Bij Basic doe je het zelf; bij Plus regel ik de techniek; bij Compleet ook je menukaart en teksten.",
          "Afbeeldingen voeg je zelf toe, ook bij Compleet. Ik lever of plaats ze niet, maar leg uit hoe je ze toevoegt.",
          "Bij Plus en Compleet staan domein, hosting en betaalaccount op jouw naam. Je betaalt geen verplicht abonnement aan mij.",
          "Het eerste jaar domein is inbegrepen bij Plus en Compleet. Daarna betaal je de verlenging zelf. Eventuele hosting- en dienstkosten staan vooraf in je offerte.",
          "Transactiekosten betaal je rechtstreeks aan je betaalprovider. Jij controleert de prijzen, gerechten en allergeneninformatie.",
          "Een extra taal of aanvullende wens? Bekijk de extra's; we spreken de kosten vooraf af."
        ],
        "en": [
          "You are buying an existing template. With Basic you do it yourself; with Plus I handle the technical setup; with Complete I also add your menu and text.",
          "You add images yourself, including with Complete. I do not supply or add them, but I explain how to add them.",
          "With Plus and Complete, the domain, hosting and payment account are in your name. There is no mandatory subscription to me.",
          "The first year of the domain is included with Plus and Complete. You pay for renewals afterwards. Any hosting and service costs are stated in your quote upfront.",
          "You pay transaction fees directly to your payment provider. You check the prices, dishes and allergen information.",
          "Need another language or something extra? Explore the extras; we agree on costs in advance."
        ]
      },
      "extras": [
        {
          "name": {
            "nl": "Extra taal (bijv. Engels, voor toeristen)",
            "en": "Extra language (e.g. English, for tourists)"
          },
          "price": {
            "nl": "€ 235,95",
            "en": "€235.95"
          }
        },
        {
          "name": {
            "nl": "QR-code menukaart voor op tafel (printklaar ontwerp)",
            "en": "QR code menu for the table (print-ready design)"
          },
          "price": {
            "nl": "€ 42,35",
            "en": "€42.35"
          }
        },
        {
          "name": {
            "nl": "Zakelijk e-mailadres instellen",
            "en": "Setting up a business email address"
          },
          "price": {
            "nl": "€ 59,29",
            "en": "€59.29"
          }
        },
        {
          "name": {
            "nl": "Menukaart bijwerken na oplevering",
            "en": "Updating the menu after delivery"
          },
          "price": {
            "nl": "€ 42,35 / keer",
            "en": "€42.35 / time"
          }
        },
        {
          "name": {
            "nl": "Extra correctieronde",
            "en": "Extra revision round"
          },
          "price": {
            "nl": "€ 54,45",
            "en": "€54.45"
          }
        },
        {
          "name": {
            "nl": "Teksten schrijven of herschrijven",
            "en": "Writing or rewriting text"
          },
          "price": {
            "nl": "€ 78,65 / uur",
            "en": "€78.65 / hour"
          }
        },
        {
          "name": {
            "nl": "Spoedoplevering (binnen 5 werkdagen)",
            "en": "Rush delivery (within 5 working days)"
          },
          "price": {
            "nl": "€ 235,95",
            "en": "€235.95"
          }
        }
      ],
      "extrasNote": {
        "nl": "Extra's kies je zelf. We spreken de inhoud en kosten vooraf af. Alle bedragen zijn inclusief btw.",
        "en": "Choose the extras you need. We agree on the scope and costs upfront. All amounts include VAT."
      },
      "terms": {
        "nl": [
          "Basic betaal je volledig vooraf. Je ontvangt alleen de templatecode, binnen 1 werkdag na betaling.",
          "Voor Plus en Compleet betaal je 50% bij akkoord en 50% bij oplevering, binnen 14 dagen na factuurdatum.",
          "De planning start zodra alle benodigde gegevens binnen zijn. Lever je later aan, dan schuift de oplevering mee.",
          "Bij Plus en Compleet komen domein, hosting en betaalaccount op jouw naam. Na volledige betaling ontvang je de websitebestanden.",
          "Er is geen onderhoud of support inbegrepen na oplevering.",
          "Werk buiten de offerte gebeurt alleen na akkoord en tegen de genoemde tarieven.",
          "Een offerte is 30 dagen geldig. Alle genoemde prijzen zijn inclusief 21% btw."
        ],
        "en": [
          "Basic is paid in full upfront. You receive only the template code within 1 working day of payment.",
          "For Plus and Complete, you pay 50% on approval and 50% on delivery, within 14 days of the invoice date.",
          "The schedule starts once all required details have arrived. Later delivery of your content moves the launch date accordingly.",
          "With Plus and Complete, the domain, hosting and payment account are in your name. You receive the website files after full payment.",
          "No maintenance or support is included after delivery.",
          "Work outside the quote is only done after approval and at the stated rates.",
          "A quote is valid for 30 days. All listed prices include 21% VAT."
        ]
      },
      "contactCopy": {
        "heading": {
          "nl": "Maak jouw zaak\nonline compleet.",
          "en": "Bring your business\nonline."
        },
        "lead": {
          "nl": "Zelf starten of je website laten inrichten? Vertel kort over je zaak. Je ontvangt een helder voorstel voor jouw pakket.",
          "en": "Start yourself or have your website set up? Tell me about your business and receive a clear proposal for your package."
        },
        "soft": {
          "nl": "Kies Basic, Plus of Compleet en vermeld je wensen voor reserveren, afhalen en bezorgen.",
          "en": "Choose Basic, Plus or Complete and share your needs for reservations, pickup and delivery."
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
              "nl": "Je kiest je pakket. Basic betaal je vooraf. Bij Plus en Compleet betaal je 50% bij akkoord. We bespreken persoonlijk wanneer ik aan je website kan werken.",
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
              "nl": "Bij Basic en Plus pas je de inhoud zelf aan. Bij Compleet stuur je mij je teksten en vertel je welke kleuren en welk lettertype je wilt gebruiken. Je voegt bij elk pakket zelf je afbeeldingen toe; ik kan uitleggen hoe.",
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
              "nl": "Bij Basic zet je de website zelf online met de handleiding. Bij Plus en Compleet help ik je de website op jouw hosting online te zetten. De resterende 50% betaal je bij oplevering.",
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
            "nl": "Basic",
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
            "nl": "Ik plaats je teksten, pas kleuren en lettertype aan en zet je website online. Afbeeldingen voeg je zelf toe; ik leg uit hoe je ze toevoegt.",
            "en": "I add your text, adjust colours and font, and publish your website. You add images yourself; I explain how to add them."
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
          "Basic betaal je volledig vooraf. Voor Plus en Compleet betaal je 50% bij akkoord en 50% bij oplevering.",
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
          "Afbeeldingen voeg je zelf toe, ook bij Compleet. Ik lever of plaats ze niet, maar leg uit hoe je ze toevoegt.",
          "Bij Compleet plaats ik je teksten en pas ik kleuren en lettertype aan. Samen bespreken we vooraf wat je op de website wilt zetten. Een andere indeling, extra pagina’s of nieuwe functies bespreken we apart.",
          "Voor Google Search Console maak je zelf een account aan. Bij Compleet help ik je met het koppelen van je website."
        ],
        "en": [
          "The website is bilingual: visitors can switch between Dutch and English. You supply your text in the languages you want to use. Writing or translation is not included.",
          "You receive a guide in Dutch or English. You edit the website in HTML/CSS/JS files; there is no visual editor.",
          "You purchase and pay for your domain name and hosting yourself. With Plus and Complete, I help you choose and set them up.",
          "You add images yourself, including with Complete. I do not supply or add them, but I explain how to add them.",
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
      "tagline": {
        "nl": "Maak persoonlijk contact.",
        "en": "Make a personal connection."
      },
      "wire": "half",
      "title": {
        "nl": "Coachingswebsite",
        "en": "Coaching website"
      },
      "icon": "chat",
      "color": "sage",
      "image": "assets/img/coaching.jpg",
      "demo": "",
      "audience": {
        "nl": "Coaches, trainers en adviseurs",
        "en": "Coaches, trainers and consultants"
      },
      "highlights": {
        "nl": [
          "Persoonlijke introductie",
          "Aanbod en trajecten",
          "Online afspraak maken",
          "Blog",
          "Veelgestelde vragen",
          "Contactformulier"
        ],
        "en": [
          "Personal introduction",
          "Services and programmes",
          "Online booking",
          "Blog",
          "FAQ",
          "Contact form"
        ]
      },
      "headline": {
        "nl": "Laat zien wie je bent, en maak de eerste stap makkelijk.",
        "en": "Show who you are, and make the first step easy."
      },
      "text": {
        "nl": "Een warme, rustige website voor coaches met twaalf pagina's: Home, Over mij, een overzicht van je aanbod met drie detailpagina's (losse gesprekken, traject en online coaching), Blog met artikelpagina, Afspraak maken, Contact, Privacy, Voorwaarden en een 404-pagina. Bezoekers kiezen zelf een gesprekstype, datum en tijd. Gemaakt voor mobiel, tablet en desktop.",
        "en": "A warm, calm website for coaches with twelve pages: Home, About me, an overview of your services with three detail pages (single sessions, programme and online coaching), Blog with article page, Book an appointment, Contact, Privacy, Terms and a 404 page. Visitors choose a session type, date and time themselves. Built for mobile, tablet and desktop."
      },
      "textSub": {
        "nl": "Zelf starten of hulp bij de inrichting? Kies jouw pakket en vraag een offerte aan. De voorbeeldsite is van het fictieve Koers Coaching.",
        "en": "Start yourself or get help with setup? Choose your package and request a quote. The sample site belongs to the fictional Koers Coaching."
      },
      "preview": {
        "desktop": "assets/img/coaching-pagina.jpg",
        "mobile": "assets/img/coaching-pagina-mobiel.jpg"
      },
      "steps": {
        "title": {
          "nl": "Van template naar jouw website",
          "en": "From template to your website"
        },
        "sub": {
          "nl": "Zo pakken we het aan. De planning en prijs staan in je offerte.",
          "en": "Here is how we get started. Your quote states the schedule and price."
        },
        "items": [
          {
            "title": {
              "nl": "Offerte en akkoord",
              "en": "Quote and approval"
            },
            "text": {
              "nl": "Kies je pakket en vraag een offerte aan. Na je akkoord gaan we van start.",
              "en": "Choose your package and request a quote. Once you approve, we get started."
            }
          },
          {
            "title": {
              "nl": "Jouw praktijk in beeld",
              "en": "Tell me about your practice"
            },
            "text": {
              "nl": "Stuur je praktijkgegevens, contactgegevens en gesprekstypen. Bij Compleet lever je ook je teksten over jezelf, je aanbod en de veelgestelde vragen aan. Afbeeldingen voeg je zelf toe.",
              "en": "Send your practice details, contact details and session types. For Complete, also supply your text about yourself, your services and the FAQ. You add images yourself."
            }
          },
          {
            "title": {
              "nl": "Website inrichten",
              "en": "Website setup"
            },
            "text": {
              "nl": "Bij Plus regel ik de techniek, het contactformulier en de koppeling met je online agenda. Bij Compleet plaats ik ook je inhoud en stem ik kleuren en lettertype af op je huisstijl.",
              "en": "With Plus, I handle the technical setup, the contact form and the link to your online calendar. With Complete, I also add your content and match the colours and font to your brand style."
            }
          },
          {
            "title": {
              "nl": "Testen en correcties",
              "en": "Test and revise"
            },
            "text": {
              "nl": "Je bekijkt de website voor de livegang, inclusief het afspraak maken.",
              "en": "Review your website before launch, including the booking flow."
            }
          },
          {
            "title": {
              "nl": "Online",
              "en": "Live"
            },
            "text": {
              "nl": "Je website gaat online op je eigen domein en je krijgt de toegang tot je accounts.",
              "en": "Your website goes live on your own domain and you receive access to your accounts."
            }
          }
        ]
      },
      "price": "",
      "priceText": {
        "nl": "Prijs op offerte",
        "en": "Price on request"
      },
      "priceNote": {
        "nl": "incl. btw",
        "en": "incl. VAT"
      },
      "requestLabel": {
        "nl": "Vraag een offerte aan",
        "en": "Request a quote"
      },
      "tiersSub": {
        "nl": "Kies wat bij je past. De prijs voor jouw pakket ontvang je in een offerte.",
        "en": "Choose what suits you. You receive the price for your package in a quote."
      },
      "tierNote": {
        "nl": "Prijs in je offerte",
        "en": "Price in your quote"
      },
      "tiers": [
        {
          "name": "Basic",
          "price": {
            "nl": "Op offerte",
            "en": "On request"
          },
          "description": {
            "nl": "Voor wie zelf bouwt. Je ontvangt de code van de template. Inhoud aanpassen, formulieren en agenda koppelen en online zetten doe je zelf.",
            "en": "For the DIY builder. You receive the template code. You edit the content, connect the forms and calendar and publish the website yourself."
          }
        },
        {
          "name": "Plus",
          "price": {
            "nl": "Op offerte",
            "en": "On request"
          },
          "description": {
            "nl": "Jij vult in, ik regel de techniek. Ik zet je website online op je eigen domein en koppel het contactformulier en je online agenda. Jij vult je teksten zelf in.",
            "en": "You add the content; I handle the technical setup. I publish your website on your own domain and connect the contact form and your online calendar. You add your text yourself."
          }
        },
        {
          "name": {
            "nl": "Compleet",
            "en": "Complete"
          },
          "price": {
            "nl": "Op offerte",
            "en": "On request"
          },
          "popular": true,
          "badge": {
            "nl": "Voor je ingericht",
            "en": "Set up for you"
          },
          "description": {
            "nl": "Jij coacht, ik regel de inrichting, teksten, huisstijl en livegang. Alleen afbeeldingen voeg je zelf toe; ik leg uit hoe je ze toevoegt.",
            "en": "You coach; I handle setup, text, brand style and launch. You add the images yourself; I explain how to add them."
          }
        }
      ],
      "compare": [
        {
          "label": {
            "nl": "Templatecode met 12 pagina's (HTML/CSS/JS)",
            "en": "Template code with 12 pages (HTML/CSS/JS)"
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Alle inhoud en instellingen in één configuratiebestand",
            "en": "All content and settings in one configuration file"
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Afspraakmodule: aanvraagformulier, link of ingesloten agenda (bijv. Calendly of Cal.com)",
            "en": "Booking module: request form, link or embedded calendar (e.g. Calendly or Cal.com)"
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Code zelf aanpassen en op eigen hosting gebruiken",
            "en": "Edit the code and use your own hosting"
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Domeinnaam registreren en koppelen",
            "en": "Domain name registered and connected"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Hosting instellen met HTTPS/SSL",
            "en": "Hosting set up with HTTPS/SSL"
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
            "nl": "Afspraak maken gekoppeld aan jouw online agenda",
            "en": "Booking connected to your online calendar"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Contactgegevens, gesprekstypen en tijden ingesteld",
            "en": "Contact details, session types and hours set up"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Uitleg over zelf toevoegen van portretfoto, sfeerfoto's en site-icoon",
            "en": "Guidance on adding your own portrait, mood photos and site icon"
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Jouw aangeleverde teksten geplaatst: over mij, aanbod, vragen en blog",
            "en": "Your supplied text added: about me, services, FAQ and blog"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Kleuren en lettertype aangepast aan je huisstijl",
            "en": "Colours and font matched to your brand style"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Basis voor Google: SEO, Search Console en Bedrijfsprofiel",
            "en": "Google basics: SEO, Search Console and Business Profile"
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Controle op mobiel, tablet en desktop",
            "en": "Checks on mobile, tablet and desktop"
          },
          "values": [
            false,
            false,
            true
          ]
        }
      ],
      "packageNotes": {
        "nl": [
          "Je koopt een bestaande template. Bij Basic doe je het zelf; bij Plus regel ik de techniek; bij Compleet ook je teksten en huisstijl.",
          "Afbeeldingen voeg je zelf toe, ook bij Compleet. Ik lever of plaats ze niet, maar leg uit hoe je ze toevoegt.",
          "Reviews op de voorbeeldsite zijn gemarkeerde voorbeeldinhoud. Plaats alleen echte reviews, met toestemming van je cliënt.",
          "Voor online afspraken gebruik je je eigen account bij een agendadienst naar keuze. Eventuele kosten daarvan staan vooraf in je offerte.",
          "De website is Nederlandstalig. Je past hem aan in HTML/CSS/JS-bestanden; er is geen visuele editor."
        ],
        "en": [
          "You are buying an existing template. With Basic you do it yourself; with Plus I handle the technical setup; with Complete I also add your text and brand style.",
          "You add images yourself, including with Complete. I do not supply or add them, but I explain how to add them.",
          "Reviews on the sample site are marked sample content. Only publish genuine reviews, with your client's permission.",
          "For online booking you use your own account with a calendar service of your choice. Any costs are stated in your quote upfront.",
          "The website is in Dutch. You edit it in HTML/CSS/JS files; there is no visual editor."
        ]
      },
      "contactCopy": {
        "heading": {
          "nl": "Jouw praktijk,\npersoonlijk online.",
          "en": "Your practice,\npersonally online."
        },
        "lead": {
          "nl": "Zelf starten of je website laten inrichten? Vertel kort over je praktijk. Je ontvangt een helder voorstel met prijs voor jouw pakket.",
          "en": "Start yourself or have your website set up? Tell me about your practice and receive a clear proposal with a price for your package."
        },
        "soft": {
          "nl": "Kies Basic, Plus of Compleet en vermeld met welke agenda je werkt.",
          "en": "Choose Basic, Plus or Complete and mention which calendar you use."
        }
      },
      "delivery": ""
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
    {
      "q": {
        "nl": "Kan ik iets laten aanpassen?",
        "en": "Can I have something changed?"
      },
      "a": {
        "nl": "Ja, zeker. Vertel wat je wilt veranderen. Je ontvangt vooraf een voorstel met de kosten.",
        "en": "Yes, of course. Tell me what you'd like to change. You'll receive a proposal with the costs in advance."
      }
    },
    {
      "q": {
        "nl": "Wat krijg ik bij mijn aankoop?",
        "en": "What do I get with my purchase?"
      },
      "a": {
        "nl": "Dat verschilt per pakket. Op de pagina van elk pakket zie je wat in de prijs zit, wat je zelf aanlevert en wat je bij oplevering ontvangt.",
        "en": "That depends on the package. Each package page shows what's included in the price, what you supply yourself and what you receive on delivery."
      }
    },
    {
      "q": {
        "nl": "Kan ik zelf aan de slag?",
        "en": "Can I get started myself?"
      },
      "a": {
        "nl": "Dat kan, afhankelijk van het product en je ervaring. Bij de portfoliowebsite pas je teksten en afbeeldingen aan in HTML/CSS/JS-bestanden; een visuele editor is niet inbegrepen. Wil je hulp met de invulling of het online zetten? Kies dan het passende pakket.",
        "en": "That depends on the product and your experience. For the portfolio website, you edit text and images in HTML/CSS/JS files; a visual editor is not included. If you would like help adding content or publishing the site, choose the appropriate package."
      }
    },
    {
      "q": {
        "nl": "Hoe werkt maatwerk?",
        "en": "How does a custom build work?"
      },
      "a": {
        "nl": "Je vertelt je idee en we bespreken je wensen. Daarna ontvang je een voorstel met duidelijke kosten en afspraken, en bouw ik volgens de afgesproken planning.",
        "en": "You tell me your idea and we discuss your wishes. You then receive a proposal with clear costs and agreements, and I build according to the agreed schedule."
      }
    },
    {
      "q": {
        "nl": "Wie voegt de afbeeldingen toe?",
        "en": "Who adds the images?"
      },
      "a": {
        "nl": "Afbeeldingen voeg je zelf toe, ook bij Compleet. Ik lever of plaats ze niet, maar leg uit hoe je ze toevoegt.",
        "en": "You add images yourself, including with Complete. I do not supply or add them, but I explain how to add them."
      }
    }
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
