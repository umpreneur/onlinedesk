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
    "headline": { "nl": "Van idee tot online succes.", "en": "From idea to online success." },
    "accent": { "nl": "online succes", "en": "online success" },
    "intro": {
      "nl": "Vertel me wat je wilt bereiken. Ik denk met je mee en bouw wat je nodig hebt. Een website om je bedrijf te laten zien, een webshop om online te verkopen of een app die je werk makkelijker maakt.",
      "en": "Tell me what you want to achieve. I'll think along with you and build what you need. A website to showcase your business, a webshop to sell online or an app that makes your work easier."
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
      "image": "assets/img/bedrijf.jpg?v=20261104",
      "demo": "https://umpreneur.github.io/koersvast-advies-demo/",
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
          "Contactformulier",
          "Nederlands en Engels"
        ],
        "en": [
          "Large hero image",
          "Services",
          "Case studies",
          "News",
          "Vacancies",
          "Contact form",
          "Dutch and English"
        ]
      },
      "headline": {
        "nl": "Een professionele website voor jouw bedrijf.",
        "en": "A professional website for your business."
      },
      "text": {
        "nl": "Een website die vertrouwen uitstraalt en je helpt nieuwe klanten te bereiken.",
        "en": "A website that inspires trust and helps you reach new clients."
      },
      "textSub": {
        "nl": "Een eigen plek online waar je bedrijf tot zijn recht komt en bezoekers zich welkom voelen.",
        "en": "Start yourself or get help with setup? Choose your package and explore the demo of the fictional consultancy Koersvast."
      },
      "preview": {
        "desktop": "assets/img/bedrijf-pagina.jpg?v=20261104",
        "mobile": "assets/img/bedrijf-pagina-mobiel.jpg?v=20261104"
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
            "nl": "Zelf aan de slag met de websitebestanden.",
            "en": "Work on the website files yourself."
          }
        },
        {
          "name": "Plus",
          "price": {
            "nl": "€ 449",
            "en": "€449"
          },
          "description": {
            "nl": "Hulp bij installatie en het plaatsen van je teksten.",
            "en": "Help with setup and adding your text."
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
          "description": {
            "nl": "Plus, met kleuren en lettertype aangepast aan jouw huisstijl en een correctieronde.",
            "en": "Plus, with colours and font adapted to your brand and one revision round."
          },
          "popular": true,
          "badge": {
            "nl": "Met persoonlijke hulp",
            "en": "With personal help"
          }
        }
      ],
      "compare": [
        {
          "label": {
            "nl": "De website is gemaakt met HTML, CSS en JavaScript. Aanpassen gaat via de code; er is geen visuele editor.",
            "en": "Website files in HTML, CSS and JavaScript. You edit the website in code; there is no visual editor."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "De website werkt op mobiel, tablet en desktop.",
            "en": "The website works on mobile, tablet and desktop."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Website met taalkeuze Nederlands en Engels, inclusief handleiding in beide talen.",
            "en": "Website with a choice of Dutch or English, including a guide in both languages."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Hulp bij het kiezen van je domeinnaam en hosting, inclusief installatie met HTTPS. Domein en hosting staan op jouw naam.",
            "en": "Help choosing your domain name and hosting, including setup with HTTPS. The domain and hosting are in your name."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Installatie van het bestaande contactformulier via Formspree of Web3Forms. De dienst kan eigen kosten of gebruikslimieten hebben.",
            "en": "Setup of the existing contact form using Formspree or Web3Forms. The service may have its own charges or usage limits."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "We spreken vooraf af hoeveel tekst en afbeeldingen binnen het pakket vallen; extra werk alleen in overleg.",
            "en": "We agree in advance how much text and how many images are included in the package; additional work only by arrangement."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Ik plaats foto's in overleg.",
            "en": "I add photos by arrangement."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Ik pas de kleuren en het lettertype aan jouw voorkeur of huisstijl aan.",
            "en": "I adjust the colours and font to suit your preferences or brand style."
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Na de eerste aanpassing kun je nog één keer wijzigingen in de huisstijl doorgeven.",
            "en": "After the initial customisation, you can request changes to your brand styling one more time."
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
          "De website is tweetalig: bezoekers wisselen tussen Nederlands en Engels. Je past hem aan in HTML/CSS/JS-bestanden; er is geen visuele editor.",
          "Bij Plus en Compleet staan domein en hosting op jouw naam. Je betaalt geen verplicht abonnement aan mij.",
          "Het eerste jaar domein is inbegrepen bij Plus en Compleet. Daarna betaal je de verlenging zelf. Eventuele hosting- en formulierkosten staan vooraf in je offerte.",
          "Een extra pagina of aanvullende wens? Bekijk de extra's; we spreken de kosten vooraf af."
        ],
        "en": [
          "You are buying an existing template. With Basic you do it yourself; with Plus I handle the technical setup; with Complete I also add your text and brand style.",
          "You add images yourself, including with Complete. I do not supply or add them, but I explain how to add them.",
          "The website is bilingual: visitors switch between Dutch and English. You edit it in HTML/CSS/JS files; there is no visual editor.",
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
          "name": { "nl": "Extra taal naast Nederlands en Engels", "en": "Extra language besides Dutch and English" },
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
      "tierNote": {
            "nl": "incl. btw",
            "en": "incl. VAT"
      },
      "compare": [
            {
                  "label": {
                        "nl": "Bestaand webshopontwerp met productpagina’s en winkelmand.",
                        "en": "Existing webshop design with product pages and a shopping cart."
                  },
                  "values": [
                        true,
                        true,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Geschikt voor mobiel, tablet en desktop.",
                        "en": "Suitable for mobile, tablet and desktop."
                  },
                  "values": [
                        true,
                        true,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Templatebestanden en handleiding om zelf aan de slag te gaan.",
                        "en": "Template files and a guide to get started yourself."
                  },
                  "values": [
                        true,
                        true,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Installatie en online zetten op jouw domein.",
                        "en": "Installation and publishing on your domain."
                  },
                  "values": [
                        false,
                        true,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Een standaard betaalprovider aansluiten en instellen.",
                        "en": "Connect and configure a standard payment provider."
                  },
                  "values": [
                        false,
                        true,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Bestelbeheer en automatische bevestigingsmails aansluiten.",
                        "en": "Set up order management and automatic confirmation emails."
                  },
                  "values": [
                        false,
                        true,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Standaard verzendinstellingen inrichten.",
                        "en": "Configure standard shipping settings."
                  },
                  "values": [
                        false,
                        true,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Je voert zelf producten in met de aangeleverde uitleg.",
                        "en": "You add products yourself using the supplied instructions."
                  },
                  "values": [
                        true,
                        true,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Kleuren en lettertype aanpassen aan jouw huisstijl.",
                        "en": "Adapt colours and font to your brand."
                  },
                  "values": [
                        false,
                        false,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Maximaal 10 producten invoeren met jouw aangeleverde teksten en beelden.",
                        "en": "Add up to 10 products using the text and images you supply."
                  },
                  "values": [
                        false,
                        false,
                        true
                  ]
            },
            {
                  "label": {
                        "nl": "Eén correctieronde op de afgesproken inrichting.",
                        "en": "One revision round on the agreed setup."
                  },
                  "values": [
                        false,
                        false,
                        true
                  ]
            }
      ],
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
                  "description": ""
            },
            {
                  "name": "Plus",
                  "price": {
                        "nl": "€ 1.999",
          "en": "€1,999"
                  },
                  "description": ""
            },
            {
                  "name": {
                        "nl": "Compleet",
                        "en": "Complete"
                  },
                  "price": {
                        "nl": "€ 2.999",
          "en": "€2,999"
                  },
                  "description": "",
                  "popular": true,
                  "badge": {
                        "nl": "Met persoonlijke hulp",
                        "en": "With personal help"
                  }
            }
      ],
      "tagline": {
            "nl": "Verkoop jouw producten online.",
            "en": "Sell your products online."
      },
      "wire": "shop",
      "title": "Webshop",
      "icon": "cart",
      "color": "clay",
      "popular": true,
      "image": "assets/img/webshop.jpg",
      "demo": "https://umpreneur.github.io/linde-wonen/",
      "audience": {
            "nl": "Ondernemers die producten verkopen",
            "en": "Entrepreneurs who sell products"
      },
      "highlights": {
            "nl": [],
            "en": []
      },
      "headline": {
            "nl": "Een eigen webshop voor jouw merk.",
            "en": "Your own webshop for your brand."
      },
      "text": {
            "nl": "Een webshop die vertrouwen uitstraalt en je helpt jouw producten te verkopen.",
            "en": "A webshop that inspires trust and helps you sell your products."
      },
      "textSub": {
            "nl": "Een eigen plek online waar je merk tot zijn recht komt en klanten gemakkelijk bestellen.",
            "en": "Your own place online where your brand shines and customers can order with ease."
      },
      "price": {
            "nl": "€ 199",
            "en": "€199"
      },
      "priceNote": {
            "nl": "incl. btw",
            "en": "incl. VAT"
      },
      "delivery": "",
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
      "preview": {
            "desktop": "assets/img/webshop-pagina.jpg",
            "mobile": "assets/img/webshop-pagina-mobiel.jpg"
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
      },
      "tiersSub": {
            "nl": "Voorstel voor de pakketindeling. Alle prijzen zijn inclusief btw. Basic is een template; Plus en Compleet omvatten het aansluiten van een bestaande webshopoplossing.",
            "en": "Proposed package structure. All prices include VAT. Basic is a template; Plus and Complete include connecting an existing e-commerce solution."
      },
      "packageNotes": {
            "nl": [
                  "Basic bevat geen aangesloten betalingen of bestelbeheer. Voor echte verkoop moet je die zelf laten aansluiten.",
                  "Bij Plus en Compleet maak je de benodigde accounts op eigen naam aan. We spreken vooraf af welk webshopplatform en welke betaalprovider we gebruiken.",
                  "Platformabonnementen, hosting, domein en transactiekosten zijn niet inbegrepen.",
                  "Extra producten invoeren, teksten schrijven, extra correctierondes en bijzondere koppelingen zijn meerwerk op afspraak."
            ],
            "en": [
                  "Basic does not include connected payments or order management. You arrange these yourself before selling.",
                  "With Plus and Complete, you create the required accounts in your own name. We agree on the platform and payment provider in advance.",
                  "Platform subscriptions, hosting, domain and transaction fees are not included.",
                  "Additional product entry, copywriting, extra revisions and special integrations are additional work by agreement."
            ]
      }
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
      "demo": "https://umpreneur.github.io/aantafel-demo/",
      "audience": {
        "nl": "Lunchrooms, broodjeszaken en kleine afhaalzaken",
        "en": "Lunchrooms, sandwich shops and small takeaways"
      },
      "headline": {
        "nl": "Jouw zaak online net zo gastvrij.",
        "en": "Let guests book a table, order and enjoy."
      },
      "text": {
        "nl": "Laat mensen meteen denken: daar wil ik naartoe.",
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
          "description": ""
        },
        {
          "name": "Plus",
          "price": {
            "nl": "€ 599",
            "en": "€599"
          },
          "description": ""
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
          "description": "",
          "popular": true,
          "badge": {
            "nl": "Met persoonlijke hulp",
            "en": "With personal help"
          }
        }
      ],
      "compare": [
        {
          "label": {
            "nl": "De website is gemaakt met HTML, CSS en JavaScript. Aanpassen gaat via de code; er is geen visuele editor.",
            "en": "Website files in HTML, CSS and JavaScript. You edit the website in code; there is no visual editor."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "De website werkt op mobiel, tablet en desktop.",
            "en": "The website works on mobile, tablet and desktop."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Website met taalkeuze Nederlands en Engels, inclusief handleiding in beide talen.",
            "en": "Website with a choice of Dutch or English, including a guide in both languages."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Hulp bij het kiezen van je domeinnaam en hosting, inclusief installatie met HTTPS. Domein en hosting staan op jouw naam.",
            "en": "Help choosing your domain name and hosting, including setup with HTTPS. The domain and hosting are in your name."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Installatie van het bestaande contactformulier via Formspree of Web3Forms. De dienst kan eigen kosten of gebruikslimieten hebben.",
            "en": "Setup of the existing contact form using Formspree or Web3Forms. The service may have its own charges or usage limits."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Menukaart, informatie over je zaak, openingstijden en contact.",
            "en": "Menu, business information, opening hours and contact details."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Werkend bestellen voor afhalen.",
            "en": "Working online ordering for pickup."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Online betalen bij je bestelling.",
            "en": "Online payment for orders."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Bestellen voor bezorgen, met bezorggebied en bezorgkosten.",
            "en": "Delivery ordering, including delivery areas and fees."
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Tafelreserveringen; de werkwijze spreken we vooraf af.",
            "en": "Table reservations; we agree on the booking process in advance."
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "We spreken vooraf af hoeveel tekst en afbeeldingen binnen het pakket vallen; extra werk alleen in overleg.",
            "en": "We agree in advance how much text and how many images are included in the package; additional work only by arrangement."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Ik plaats foto's in overleg.",
            "en": "I add photos by arrangement."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Ik pas de kleuren en het lettertype aan jouw voorkeur of huisstijl aan.",
            "en": "I adjust the colours and font to suit your preferences or brand style."
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Na de eerste aanpassing kun je nog één keer wijzigingen in de huisstijl doorgeven.",
            "en": "After the initial customisation, you can request changes to your brand styling one more time."
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
      "image": "assets/img/portfolio.jpg?v=20261104",
      "demo": "https://umpreneur.github.io/onlinedesk-portfolio/",
      "audience": {
        "nl": "Fotografen, ontwerpers en andere makers",
        "en": "Photographers, designers and other creatives"
      },
      "headline": {
        "nl": "Geef jouw werk een plek.",
        "en": "Give your work a place."
      },
      "textSub": {
        "nl": "Met een portfolio dat bij jou past, geef je jouw verhaal de ruimte en kunnen bezoekers ontdekken wie je bent en wat je doet.",
        "en": "With a portfolio that feels like you, you give your story room to shine and invite visitors to discover who you are and what you do."
      },
      "text": {
        "nl": "Je hebt iets te laten zien. Projecten waar je trots op bent, ideeën die je wilt delen of diensten waarmee je anderen helpt.",
        "en": "You have something to share. Projects you’re proud of, ideas you want to share, or services that help others."
      },
      "preview": {
        "desktop": "assets/img/portfolio-pagina.jpg?v=20261104",
        "mobile": "assets/img/portfolio-pagina-mobiel.jpg?v=20261104"
      },
      "steps": {
        "title": {
          "nl": "Werkwijze",
          "en": "How it works"
        },
        "sub": {
          "nl": "Van aanvraag tot oplevering, in vijf stappen.",
          "en": "From enquiry to delivery, in five steps."
        },
        "items": [
          {
            "title": {
              "nl": "Aanvraag",
              "en": "Enquiry"
            },
            "text": {
              "nl": "Kies een pakket en stuur je aanvraag. Binnen vijf werkdagen ontvang je een reactie per e-mail. We communiceren per e-mail, zodat afspraken schriftelijk vastliggen.",
              "en": "Choose a package and send your enquiry. You will receive an email within five working days. We communicate by email so agreements are recorded in writing."
            }
          },
          {
            "title": {
              "nl": "Afspraken en betaling",
              "en": "Agreement and payment"
            },
            "text": {
              "nl": "We bespreken je wensen en bevestigen de afspraken en prijs per e-mail. De planning spreken we samen af zodra duidelijk is wat je nodig hebt en wanneer je alles kunt aanleveren. Na akkoord betaal je Basic volledig vooraf; bij Plus en Compleet betaal je 50% vooraf en 50% bij oplevering.",
              "en": "We discuss your needs and confirm the agreement and price by email. We agree on a schedule once we know what you need and when you can provide everything. After approval, Basic is paid in full in advance; for Plus and Complete, 50% is due in advance and 50% on delivery."
            }
          },
          {
            "title": {
              "nl": "Voorbereiding",
              "en": "Preparation"
            },
            "text": {
              "nl": "Bij Plus en Compleet lever je je teksten en eventuele beelden aan. Je regelt zelf je domeinnaam en hosting. De kosten voor je domeinnaam en hosting betaal je zelf. Deze zijn niet inbegrepen in de pakketprijs. Bij Plus en Compleet kan ik je helpen.",
              "en": "For Plus and Complete, you provide your text and any images. You arrange and pay for your own domain and hosting; these costs are not included in the package price. With Plus and Complete, I can help."
            }
          },
          {
            "title": {
              "nl": "Aan de slag",
              "en": "Getting started"
            },
            "text": {
              "nl": "Je past de website zelf aan of ik maak hem voor je klaar, afhankelijk van je pakket.",
              "en": "Depending on your package, you customise the website yourself or I prepare it for you."
            }
          },
          {
            "title": {
              "nl": "Oplevering",
              "en": "Delivery"
            },
            "text": {
              "nl": "Je ontvangt de bestanden. Bij Plus en Compleet help ik de website online te zetten. Onderhoud is niet inbegrepen. Hulp of wijzigingen na oplevering zijn mogelijk in overleg en tegen meerprijs.",
              "en": "You receive the files. With Plus and Complete, I help publish the website. Maintenance is not included. Help or changes after delivery are available by arrangement for an additional charge."
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
          "description": { "nl": "Zelf aan de slag met de websitebestanden.", "en": "Work on the website files yourself." }
        },
        {
          "name": "Plus",
          "price": {
            "nl": "€ 249",
            "en": "€249"
          },
          "description": { "nl": "Hulp bij installatie en het plaatsen van je teksten.", "en": "Help with setup and adding your text." }
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
          "description": { "nl": "Plus, met kleuren en lettertype aangepast aan jouw huisstijl en een correctieronde.", "en": "Plus, with colours and font adapted to your brand and one revision round." },
          "popular": true,
          "badge": {
            "nl": "Met persoonlijke hulp",
            "en": "With personal help"
          }
        }
      ],
      "compare": [
        {
          "label": {
            "nl": "De website is gemaakt met HTML, CSS en JavaScript. Aanpassen gaat via de code; er is geen visuele editor.",
            "en": "Website files in HTML, CSS and JavaScript. You edit the website in code; there is no visual editor."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "De website werkt op mobiel, tablet en desktop.",
            "en": "The website works on mobile, tablet and desktop."
          },
          "values": [true, true, true]
        },
        {
          "label": {
            "nl": "Website met taalkeuze Nederlands en Engels, inclusief handleiding in beide talen.",
            "en": "Website with a choice of Dutch or English, including a guide in both languages."
          },
          "values": [true, true, true]
        },
        {
          "label": {
            "nl": "Hulp bij het kiezen van je domeinnaam en hosting, inclusief installatie met HTTPS. Domein en hosting staan op jouw naam.",
            "en": "Help choosing your domain name and hosting, including setup with HTTPS. The domain and hosting are in your name."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Installatie van het bestaande contactformulier via Formspree of Web3Forms. De dienst kan eigen kosten of gebruikslimieten hebben.",
            "en": "Setup of the existing contact form using Formspree or Web3Forms. The service may have its own charges or usage limits."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "We spreken vooraf af hoeveel tekst en afbeeldingen binnen het pakket vallen; extra werk alleen in overleg.",
            "en": "We agree in advance how much text and how many images are included in the package; additional work only by arrangement."
          },
          "values": [false, true, true]
        },
        {
          "label": {
            "nl": "Ik plaats foto's in overleg.",
            "en": "I add photos by arrangement."
          },
          "values": [false, true, true]
        },
        {
          "label": {
            "nl": "Ik pas de kleuren en het lettertype aan jouw voorkeur of huisstijl aan.",
            "en": "I adjust the colours and font to suit your preferences or brand style."
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Na de eerste aanpassing kun je nog één keer wijzigingen in de huisstijl doorgeven.",
            "en": "After the initial customisation, you can request changes to your brand styling one more time."
          },
          "values": [
            false,
            false,
            true
          ]
        }
      ],
      "extras": [
        {
          "name": { "nl": "Contactformulier op maat", "en": "Custom contact form" },
          "price": { "nl": "Op aanvraag", "en": "On request" },
          "description": {
            "nl": "Een contactformulier op maat laten maken kan in overleg en tegen meerprijs.",
            "en": "A custom contact form can be created by arrangement for an additional charge."
          }
        },
        {
          "name": {
            "nl": "Webteksten schrijven",
            "en": "Website copywriting"
          },
          "price": {
            "nl": "€ 54,45 per uur incl. btw",
            "en": "€54.45 per hour incl. VAT"
          },
          "description": {
            "nl": "Heldere teksten die passen bij jou en je website.",
            "en": "Clear text suited to you and your website."
          }
        },
        {
          "name": {
            "nl": "Vertalen",
            "en": "Translation"
          },
          "price": {
            "nl": "€ 54,45 per uur incl. btw",
            "en": "€54.45 per hour incl. VAT"
          },
          "description": {
            "nl": "Je webteksten vertaald tussen Nederlands en Engels.",
            "en": "Your website text translated between Dutch and English."
          }
        },
        {
          "name": {
            "nl": "Advies over online vindbaarheid",
            "en": "Online visibility advice"
          },
          "price": {
            "nl": "€ 54,45 per uur incl. btw",
            "en": "€54.45 per hour incl. VAT"
          },
          "description": {
            "nl": "Praktisch advies over SEO en hoe je jezelf online en op social media presenteert.",
            "en": "Practical advice on SEO and how you present yourself online and on social media."
          }
        },
        {
          "name": {
            "nl": "Zakelijke e-mail instellen",
            "en": "Business email setup"
          },
          "price": {
            "nl": "Op aanvraag",
            "en": "On request"
          },
          "description": {
            "nl": "Hulp bij een e-mailadres met je eigen domeinnaam, als je aanbieder dit ondersteunt.",
            "en": "Help setting up an email address on your domain, if supported by your provider."
          }
        }
      ],
      "extrasNote": {
        "nl": "Deze extra diensten zijn beschikbaar tegen een meerprijs. De kosten bespreken we vooraf. Voor schrijven en vertalen krijg je vooraf een ureninschatting.",
        "en": "These optional services cost extra. We discuss the price in advance. For writing and translation, you receive an estimated number of hours beforehand."
      },
      "contactCopy": {
        "heading": {
          "nl": "Jouw portfolio,\nop jouw manier.",
          "en": "Your portfolio,\nyour way."
        },
        "lead": {
          "nl": "Weet je al welk pakket bij je past, of twijfel je nog? Vertel me wat je zoekt. Ik denk graag met je mee.",
          "en": "Know which package suits you, or still deciding? Tell me what you need. I’m happy to help."
        },
        "soft": {
          "nl": "Binnen vijf werkdagen ontvang je een reactie per e-mail.",
          "en": "You’ll receive an email reply within five working days."
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
      "demo": "https://umpreneur.github.io/koers-coaching-demo/",
      "audience": {
        "nl": "Coaches, trainers en adviseurs",
        "en": "Coaches, trainers and consultants"
      },
      "highlights": {
        "nl": [
          "Het onderwerp centraal",
          "Onderwerpen met eigen pagina",
          "Persoonlijke introductie",
          "Aanbod en trajecten",
          "Online afspraak maken",
          "Blog",
          "Nieuwsbrief",
          "Veelgestelde vragen",
          "Contactformulier"
        ],
        "en": [
          "Topic-led home page",
          "Topics with their own page",
          "Personal introduction",
          "Services and programmes",
          "Online booking",
          "Blog",
          "Newsletter",
          "FAQ",
          "Contact form"
        ]
      },
      "headline": {
        "nl": "Ruimte voor jouw begeleiding.",
        "en": "Space for your coaching."
      },
      "text": {
        "nl": "Een website die de rust en aandacht van jouw praktijk uitstraalt.",
        "en": "A website that reflects the calm and care of your practice."
      },
      "textSub": {
        "nl": "Waar bezoekers zich herkennen in wat je schrijft en vertrouwd raken met jouw manier van begeleiden.",
        "en": "Where visitors recognise themselves in your words and become familiar with your approach to coaching."
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
              "nl": "Stuur je praktijkgegevens, contactgegevens en gesprekstypen. Bij Compleet lever je ook je teksten over je onderwerpen, jezelf, je aanbod en de veelgestelde vragen aan. Afbeeldingen voeg je zelf toe.",
              "en": "Send your practice details, contact details and session types. For Complete, also supply your text about your topics, yourself, your services and the FAQ. You add images yourself."
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
      "price": { "nl": "€ 149", "en": "€149" },
      "priceText": "",
      "priceNote": {
        "nl": "incl. btw",
        "en": "incl. VAT"
      },
      "requestLabel": { "nl": "Vraag dit pakket aan", "en": "Request this package" },
      "tiersSub": { "nl": "Alle prijzen zijn eenmalig en inclusief btw.", "en": "All prices are one-off and include VAT." },
      "tierNote": { "nl": "incl. btw · eenmalig", "en": "incl. VAT · one-off" },
      "tiers": [
        {
          "name": {
            "nl": "Basic",
            "en": "Basic"
          },
          "price": {
            "nl": "€ 149", "en": "€149"
          },
          "description": {
            "nl": "Zelf aan de slag met de websitebestanden.",
            "en": "Work on the website files yourself."
          }
        },
        {
          "name": "Plus",
          "price": {
            "nl": "€ 599", "en": "€599"
          },
          "description": {
            "nl": "Hulp bij installatie en het plaatsen van je teksten.",
            "en": "Help with setup and adding your text."
          }
        },
        {
          "name": {
            "nl": "Compleet",
            "en": "Complete"
          },
          "price": {
            "nl": "€ 1.049", "en": "€1,049"
          },
          "description": {
            "nl": "Plus, met kleuren en lettertype aangepast aan jouw huisstijl en een correctieronde.",
            "en": "Plus, with colours and font adapted to your brand and one revision round."
          },
          "popular": true,
          "badge": {
            "nl": "Met persoonlijke hulp",
            "en": "With personal help"
          }
        }
      ],
      "compare": [
        {
          "label": {
            "nl": "Afspraken",
            "en": "Appointments"
          },
          "values": [
            {
              "nl": "Aanvraagformulier; je bevestigt zelf.",
              "en": "Request form; you confirm manually."
            },
            {
              "nl": "Ik sluit een bestaande boekingsapplicatie aan.",
              "en": "I connect an existing booking app."
            },
            {
              "nl": "Ik sluit een bestaande boekingsapplicatie aan.",
              "en": "I connect an existing booking app."
            }
          ]
        },
        {
          "label": {
            "nl": "De website is gemaakt met HTML, CSS en JavaScript. Aanpassen gaat via de code; er is geen visuele editor.",
            "en": "Website files in HTML, CSS and JavaScript. You edit the website in code; there is no visual editor."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "De website werkt op mobiel, tablet en desktop.",
            "en": "The website works on mobile, tablet and desktop."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Website met taalkeuze Nederlands en Engels, inclusief handleiding in beide talen.",
            "en": "Website with a choice of Dutch or English, including a guide in both languages."
          },
          "values": [
            true,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Hulp bij het kiezen van je domeinnaam en hosting, inclusief installatie met HTTPS. Domein en hosting staan op jouw naam.",
            "en": "Help choosing your domain name and hosting, including setup with HTTPS. The domain and hosting are in your name."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Installatie van het bestaande contactformulier via Formspree of Web3Forms. De dienst kan eigen kosten of gebruikslimieten hebben.",
            "en": "Setup of the existing contact form using Formspree or Web3Forms. The service may have its own charges or usage limits."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "We spreken vooraf af hoeveel tekst en afbeeldingen binnen het pakket vallen; extra werk alleen in overleg.",
            "en": "We agree in advance how much text and how many images are included in the package; additional work only by arrangement."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Ik plaats foto's in overleg.",
            "en": "I add photos by arrangement."
          },
          "values": [
            false,
            true,
            true
          ]
        },
        {
          "label": {
            "nl": "Ik pas de kleuren en het lettertype aan jouw voorkeur of huisstijl aan.",
            "en": "I adjust the colours and font to suit your preferences or brand style."
          },
          "values": [
            false,
            false,
            true
          ]
        },
        {
          "label": {
            "nl": "Na de eerste aanpassing kun je nog één keer wijzigingen in de huisstijl doorgeven.",
            "en": "After the initial customisation, you can request changes to your brand styling one more time."
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
          "Bij Basic bevestig je afspraakaanvragen zelf. Bij Plus en Compleet sluit ik een bestaande boekingsapplicatie aan.",
          "De website is Nederlandstalig. Je past hem aan in HTML/CSS/JS-bestanden; er is geen visuele editor."
        ],
        "en": [
          "You are buying an existing template. With Basic you do it yourself; with Plus I handle the technical setup; with Complete I also add your text and brand style.",
          "You add images yourself, including with Complete. I do not supply or add them, but I explain how to add them.",
          "Reviews on the sample site are marked sample content. Only publish genuine reviews, with your client's permission.",
          "With Basic, you confirm appointment requests manually. With Plus and Complete, I connect an existing booking app.",
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
    "title": { "nl": "Jouw onderneming,\nonline tot leven.", "en": "Your business,\nbrought to life online." },
    "text": {
      "nl": "Vertel me wat je wilt bereiken, dan kijken we samen wat je nodig hebt.",
      "en": "Tell me what you want to achieve, and together we'll work out what you need."
    },
    "services": [
      { "icon": "compass", "color": "sage",
        "title": { "nl": "Strategie", "en": "Strategy" },
        "text": { "nl": "Van jouw idee naar een duidelijk plan.", "en": "From your idea to a clear plan." } },
      { "icon": "pen", "color": "clay",
        "title": { "nl": "Ontwerp", "en": "Design" },
        "text": { "nl": "Een ontwerp dat bij je past en makkelijk te gebruiken is.", "en": "A design that suits you and is easy to use." } },
      { "icon": "code", "color": "lav",
        "title": { "nl": "Ontwikkeling", "en": "Development" },
        "text": { "nl": "Ik bouw websites, webshops en apps met functies zoals afspraken boeken, bestellen of een contactformulier.", "en": "I build websites, webshops and apps with features such as booking appointments, ordering or a contact form." } },
      { "icon": "search", "color": "sand",
        "title": { "nl": "Content & vindbaarheid", "en": "Content & search visibility" },
        "text": { "nl": "Heldere teksten voor je bezoekers en een goede basis voor Google.", "en": "Clear copy for your visitors and a solid foundation for Google." } }
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
    "formEndpoint": "https://formspree.io/f/mldqgory"
  }
};

// De pakketpagina's delen dezelfde basis; prijzen en productbeelden blijven per product.
(() => {
  const products = window.SITE_CONTENT.products || [];
  const portfolio = products.find(p => p.id === 'portfolio');
  if (!portfolio) return;
  const copy = {
    heading: { nl: 'Jouw website,\nop jouw manier.', en: 'Your website,\nyour way.' },
    lead: portfolio.contactCopy.lead,
    soft: portfolio.contactCopy.soft
  };
  const sharedExtras = portfolio.extras;
  products.forEach(p => {
    p.extras = ['bedrijf', 'portfolio'].includes(p.id) ? [...sharedExtras, {
      name: { nl: 'Hostingbeheer in overleg', en: 'Hosting management by arrangement' },
      description: {
        nl: 'Hostingbeheer na oplevering, in overleg afgestemd op jouw website en wensen. Werkzaamheden en kosten spreken we vooraf af.',
        en: 'Hosting management after delivery, tailored by agreement to your website and needs. We agree on the work and costs in advance.'
      },
      price: { nl: 'Op aanvraag', en: 'On request' }
    }] : sharedExtras;
    p.extrasNote = portfolio.extrasNote;
    p.steps = portfolio.steps;
    p.contactCopy = copy;
    if (p.id !== 'webshop') {
      p.packageNotes = portfolio.packageNotes;
      p.tiersSub = portfolio.tiersSub;
      p.tierNote = p.id === 'horeca' ? { nl: 'incl. btw', en: 'incl. VAT' } : portfolio.tierNote;
      p.priceNote = portfolio.priceNote;
    }
  });
})();
