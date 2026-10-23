# OnlineDesk-website

Openbare verkoopwebsite voor kant-en-klare websites en webshops, en websites, webshops en apps op maat. De site draait gratis op **GitHub Pages** en is tweetalig (NL/EN).

Live: https://umpreneur.github.io/onlinedesk/

## Wat zit erin

| Map / bestand | Wat het is |
| --- | --- |
| `index.html` | De website (vindbaar in zoekmachines) |
| `pakket.html` | Detailpagina per pakket, bijv. `pakket.html?id=webshop` |
| `assets/js/content.js` | **Alle teksten, pakketten, prijzen en FAQ (NL + EN). Hier pas je de site aan.** |
| `assets/js/site.js` | Bouwt de pagina's op uit `content.js` |
| `assets/css/style.css` | Vormgeving (kleuren bovenaan aan te passen) |
| `robots.txt` | Zoekmachines mogen de hele site bekijken |

## Nog in te vullen

Open `assets/js/content.js` en zoek op **INVULLEN**:

- `contact.email` — je echte e-mailadres. Zolang dit leeg is, verwijzen de aanvraagknoppen naar het contactblok en staat het contactformulier uit.
- `contact.phone`, `contact.linkedin`, `contact.location` — optioneel.
- Per pakket `price` (en `delivery`) — zolang dit leeg is, staat er "Prijs volgt". Nu nog leeg: bedrijfs-, salon-, horeca- en coachingswebsite.
- Per pakket de detaillijsten (`features`, `included`, `extra`, `recurring`, `supply`, `receive`) — zolang die ontbreken, meldt de detailpagina dat de details binnenkort volgen.
- Per pakket `image` — een echte screenshot (bijv. `assets/img/webshop.png`). Zolang dit leeg is, toont de site een rustige schets.
- Per pakket `demo` — link naar een werkende demo. Leeg = geen "Bekijk demo"-knop.
- `work` — echte projecten. Leeg = het blok "Eigen werk" wordt niet getoond.

## Contactformulier

Het formulier onderaan de pagina werkt op drie manieren, afhankelijk van wat je invult in `content.js` bij `contact`:

| Ingevuld | Wat het formulier doet |
| --- | --- |
| `formEndpoint` (bijv. een gratis [Formspree](https://formspree.io)-adres) | Verstuurt het bericht echt en toont "Bedankt! Je bericht is verstuurd." |
| Alleen `email` | De knop heet "Verstuur via e-mail" en opent het e-mailprogramma van de bezoeker met het bericht ingevuld |
| Niets | Het formulier staat uit met de melding "Het contactformulier wordt binnenkort geactiveerd" |

Zo doet het formulier nooit alsof een bericht is verstuurd terwijl dat niet zo is. Een onzichtbaar extra veld houdt eenvoudige spam-robots tegen.

## Aanvragen

Er is geen online betaling. De knoppen **Pakket aanvragen**, **Laten aanpassen** en **Vertel je idee** openen het e-mailprogramma van de bezoeker met een ingevuld bericht (pakket + gekozen optie).

## Bijwerken op GitHub

De site staat in de repository `umpreneur/onlinedesk` en wordt via **Settings → Pages** (branch **main**, map **/ (root)**) online gezet. Na elke wijziging die op GitHub komt, is de site binnen ongeveer een minuut bijgewerkt.

## Tweetalig (Nederlands / Engels)

Bezoekers wisselen van taal met de **NL / EN**-knop. Die keuze wordt onthouden; de eerste keer kiest de site de taal van de browser. In de inhoud schrijf je een tekst zo:

```json
"title": { "nl": "Portfoliowebsite", "en": "Portfolio website" }
```

Een gewone tekst, zoals `"Webshop"`, is in beide talen hetzelfde.

## Wat je verder kunt aanpassen

- **Kleuren:** bovenaan `assets/css/style.css`. Kaartkleuren in de inhoud: `sage`, `clay`, `sky`, `lav`, `sand`.
- **Iconen:** `cart`, `layout`, `briefcase`, `scissors`, `coffee`, `chat`, `code`, `cloud`, `compass`, `pen`, `search`, `phone`, `gear`, `users`, `clock`, `spark`.
- **Beschikbaarheid:** `"available": true` of `false` bovenaan `content.js`.
- **Pakketten:** per pakket titel, korte zin, prijs, levertijd, functies, wat in de prijs zit, wat extra kost, terugkerende kosten, wat de klant aanlevert en wat de klant ontvangt. Met `"popular": true` krijgt een pakket het label "★ Populair" op de detailpagina.

## Goed om te weten

- Alles in deze repository is openbaar. Zet hier geen vertrouwelijke klantinformatie in.
