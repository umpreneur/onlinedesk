# OnlineDesk-website

Openbare verkoopwebsite voor kant-en-klare websites en webshops, en websites, webshops en apps op maat. Met daarnaast een afgeschermde **klantomgeving** voor privévoorstellen en klantdemo's. De site draait gratis op **GitHub Pages** en is tweetalig (NL/EN).

## Wat zit erin

| Map / bestand | Wat het is |
| --- | --- |
| `index.html` | De openbare website (vindbaar in zoekmachines) |
| `pakket.html` | Detailpagina per pakket, bijv. `pakket.html?id=webshop` |
| `assets/js/content.js` | **Alle openbare teksten, producten, prijzen en FAQ (NL + EN). Hier pas je de site aan.** |
| `assets/js/site.js` | Bouwt de openbare pagina op uit `content.js` |
| `assets/css/style.css` | Vormgeving (kleuren bovenaan aan te passen) |
| `prive/` | Klantomgeving: alleen te openen met een toegangscode |
| `data/portfolio.js` | Versleutelde inhoud van de klantomgeving |
| `assets/js/prive.js`, `assets/js/vault.js` | Ontsleutelen en tonen van de klantomgeving |
| `beheer/` | Beheerpagina voor de klantomgeving (inhoud + klantcodes) |
| `robots.txt` | Houdt `prive/`, `beheer/` en `data/` buiten zoekmachines |

## Nog in te vullen vóór publicatie

Open `assets/js/content.js` en zoek op **INVULLEN**:

- `contact.email` — je echte e-mailadres. Zolang dit leeg is, verwijzen de aanvraagknoppen naar het contactblok en staat daar "Contactgegevens worden binnenkort toegevoegd".
- `contact.phone`, `contact.linkedin`, `contact.location` — optioneel.
- Per pakket `price` (en `delivery`) — zolang dit leeg is, staat er "Prijs volgt". Nu nog leeg: bedrijfs-, salon-, horeca- en coachingswebsite.
- Per pakket de detaillijsten (`features`, `included`, `extra`, `recurring`, `supply`, `receive`) — zolang die ontbreken, meldt de detailpagina dat de details binnenkort volgen.
- Per product `image` — een echte screenshot (bijv. `assets/img/webshop.png`). Zolang dit leeg is, toont de site een getekende afbeelding met het label "Voorbeeldafbeelding".
- Per product `demo` — link naar een werkende demo. Leeg = geen "Bekijk demo"-knop.
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

Er is geen online betaling. De knoppen **Pakket aanvragen**, **Laten aanpassen** en **Bespreek jouw idee** openen het e-mailprogramma van de bezoeker met een ingevuld bericht (product + gekozen optie). Dat staat ook onder de producten vermeld.

## Online zetten op GitHub (eenmalig)

1. Maak een account op [github.com](https://github.com) als je dat nog niet hebt.
2. Klik rechtsboven op **+ → New repository**. Geef het een naam, kies **Public** en klik **Create repository**.
3. Klik op **uploading an existing file** en sleep de **inhoud** van de map erin: `index.html`, `pakket.html`, `robots.txt`, `.nojekyll` en de mappen `assets`, `beheer`, `data` en `prive`. Klik **Commit changes**.
4. Ga naar **Settings → Pages**. Kies bij *Source*: **Deploy from a branch**, branch **main**, map **/ (root)** en klik **Save**.
5. Na een minuut staat je site op `https://<jouw-gebruikersnaam>.github.io/<naam-repository>/`.

## Klantomgeving (privévoorstellen en demo's)

De klantomgeving staat op `/prive/`. De inhoud is **versleuteld** (AES-256): zonder geldige code onleesbaar, ook op GitHub. Elke klant krijgt een eigen code. Demo-code: `DEMO-2026` (vervang door je eigen codes).

1. Open `/beheer/`.
2. **Stap 1 – Inhoud:** vul een geldige code in en klik *Huidige openen* (of *Voorbeeld laden*). Pas de inhoud aan.
3. **Stap 2 – Klanten:** voeg per klant een naam en een (gegenereerde) code toe. Met **Link NL / Link EN** kopieer je een deellink naar de klantomgeving.
4. **Stap 3 – Publiceren:** sla je **werkbestand** op (bevat je codes onversleuteld, **nooit op GitHub zetten**) en download `portfolio.js`. Vervang daarmee `data/portfolio.js` op GitHub.

**Toegang intrekken:** verwijder de klant in stap 2 en publiceer opnieuw.

## Tweetalig (Nederlands / Engels)

Bezoekers wisselen van taal met de **NL / EN**-knop. Die keuze wordt onthouden; de eerste keer kiest de site de taal van de browser. In de inhoud schrijf je een tekst zo:

```json
"title": { "nl": "Portfoliowebsite", "en": "Portfolio website" }
```

Een gewone tekst, zoals `"Webshop"`, is in beide talen hetzelfde.

## Wat je verder kunt aanpassen

- **Kleuren:** bovenaan `assets/css/style.css`. Kaartkleuren in de inhoud: `sage`, `clay`, `sky`, `lav`, `sand`.
- **Iconen:** `cart`, `layout`, `code`, `cloud`, `compass`, `pen`, `search`, `phone`, `gear`, `users`, `clock`, `spark`.
- **Beschikbaarheid:** `"available": true` of `false` bovenaan `content.js`.
- **Producten:** per product titel, tekst, prijs, levertijd, functies, wat in de prijs zit, wat extra kost, terugkerende kosten, wat de klant aanlevert en wat de klant ontvangt. Met `"popular": true` krijgt een product het label "★ Populair".

## Goed om te weten

- Alles in `assets/js/content.js` is openbaar. Vertrouwelijke voorstellen horen in de klantomgeving.
- De openbare site mag in zoekmachines; `prive/` en `beheer/` staan op `noindex` en in `robots.txt`.
- Gebruik voor de klantomgeving gegenereerde codes (zoals `K7QM-4HXP`), geen korte of voorspelbare codes.
