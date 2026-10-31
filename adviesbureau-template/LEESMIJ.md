# Adviesbureau-template "Koersvast"

Een rustige, zakelijke website voor een adviesbureau of zakelijke dienstverlener, in mat petrol met warm gebroken wit. Het is één HTML-bestand zonder build-stap of bibliotheken. Hij werkt op mobiel, tablet en desktop, en heeft een uitklapmenu op mobiel.

## Inhoud

- `index.html`: de complete website
- `LEESMIJ.md`: deze handleiding

## Pagina's

De website heeft zeven pagina's, die je via het menu opent. Ze staan allemaal in `index.html`, elk in een blok met `data-view`:

- **Home** (`#home`): groot beeld bovenaan met kop en knoppen, kerncijfers, diensten, de laatste 3 cases, de laatste 3 nieuwsberichten, een blok over werken bij en een oproep om een afspraak te maken.
- **Over ons** (`#over-ons`): wie het bedrijf is, de waarden, de keurmerken en het team.
- **Diensten** (`#diensten`): vier diensten met prijs en looptijd, en de werkwijze in vier stappen.
- **Cases** (`#cases`): klantcases met resultaat, en filterknoppen per dienst.
- **Nieuws** (`#nieuws`): de nieuwste berichten als kaarten, met de oudere berichten als lijst eronder.
- **Werken bij** (`#werken-bij`): arbeidsvoorwaarden en openstaande vacatures met salaris.
- **Contact** (`#contact`): contactgegevens en een contactformulier.

Je kunt direct naar een pagina linken, bijvoorbeeld `jouwsite.nl/#cases`.

## Aanpassen

Open `index.html` in een teksteditor (bijvoorbeeld VS Code). Zoek naar `AANPASSEN` om alle plekken te vinden die je kunt aanpassen.

**Bedrijfsnaam:** zoek naar `Koersvast` en vervang die naam overal, ook in `<title>`.

**Kleuren en lettertype:** bovenaan in `<style>`, in het blok `:root`:
- `--petrol`: de merkkleur voor knoppen en belangrijke vlakken (standaard `#28565B`)
- `--petrol-deep`: een donkerdere tint voor de hover van knoppen
- `--petrol-light`: een lichte tint voor achtergronden van kleine elementen
- `--bg`: de achtergrond (standaard warm gebroken wit `#F5F3EE`)
- `--fg`: de tekstkleur (standaard antraciet `#252A2D`)

Werk met effen kleuren. Dan blijft de matte, rustige uitstraling behouden. Pas ook `theme-color` in de `<head>` aan: dat is de kleur van de browserbalk op mobiel.

Wil je een ander lettertype, vervang dan `Archivo` in de Google Fonts-link en in `--font`.

**Grote foto of video bovenaan:** de template bevat een getekende skyline als tijdelijk beeld. Vervang in het blok `hero-media` het `<canvas>` door een eigen beeld:

```html
<img src="images/hero.jpg" alt="">
```

of door een video:

```html
<video autoplay muted loop playsinline poster="images/hero.jpg">
  <source src="video/hero.mp4" type="video/mp4">
</video>
```

Gebruik een breed beeld van minimaal 1920 × 1080 pixels. Er ligt automatisch een egale donkere laag over, zodat de tekst leesbaar blijft. Op dezelfde manier vervang je de andere tijdelijke beelden (`<canvas data-scene="...">`) door een `<img>`.

**Cases en nieuws:** beide staan onderaan in het script, in de lijsten `CASES` en `NEWS`. Zet nieuwe items bovenaan. De categorie van een case moet gelijk zijn aan een filterknop (`Strategie`, `Organisatie`, `Financiën` of `Data`).

**Vacatures:** pas de blokken `<a class="job">` aan op de pagina Werken bij, of verwijder ze.

**Teamfoto's:** vervang een blok met initialen door `<img class="avatar" src="images/naam.jpg" alt="Naam">`.

**Keurmerken:** pas de lijst aan in het blok `certs` op de pagina Over ons. Vermeld alleen keurmerken die het bedrijf echt heeft.

**Een pagina toevoegen:** kopieer een blok `<div class="view" data-view="...">`, geef het een nieuwe naam en zet een link `<a href="#nieuwe-naam">` in het menu.

**Contactformulier:** zonder koppeling toont het formulier alleen een demo-melding. Om echte berichten te ontvangen:

1. Maak een formulier aan bij een formulierdienst, bijvoorbeeld Formspree, Basin of Netlify Forms.
2. Zet het adres dat je krijgt in de `<form>`-tag: `<form class="form" id="contactForm" action="https://formspree.io/f/JOUWCODE" method="post" novalidate>`.

## Beelden en licenties

De template bevat geen stockfoto's. Alle tijdelijke beelden worden in de browser getekend. Gebruik eigen foto's of beelden waarvoor je een licentie hebt.

## Online zetten

Upload `index.html` (en eventueel de mappen `images` en `video`) naar een webhost, of sleep de map naar Netlify Drop, Vercel of GitHub Pages.
