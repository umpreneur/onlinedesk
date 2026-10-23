(function () {
  'use strict';

  const $ = (s) => document.querySelector(s);
  const jsonEl = $('#json');
  const jsonStatus = $('#json-status');
  const buildStatus = $('#build-status');
  const clientsEl = $('#clients');
  const siteUrl = $('#site-url');

  function status(el, text, ok) {
    el.textContent = text;
    el.className = 'status ' + (ok ? 'ok' : 'err');
  }

  function setContent(obj) {
    jsonEl.value = JSON.stringify(obj, null, 2);
    validate();
  }

  function validate() {
    try {
      const data = JSON.parse(jsonEl.value);
      const n = (data.products || []).length;
      status(jsonStatus, `✓ Geldige inhoud — ${n} product${n === 1 ? '' : 'en'}.`, true);
      return data;
    } catch (e) {
      status(jsonStatus, `Fout in de inhoud: ${e.message}`, false);
      return null;
    }
  }
  jsonEl.addEventListener('input', validate);

  /* ---------- Klanten ---------- */

  // Deellinks wijzen naar de klantomgeving (/prive/), niet naar de openbare site.
  function shareLink(code, lang) {
    const base = (siteUrl.value.trim() || defaultSiteUrl()).replace(/#.*$/, '').replace(/\/?$/, '/');
    return `${base}prive/#code=${encodeURIComponent(code)}&lang=${lang}`;
  }

  function defaultSiteUrl() {
    return location.href.replace(/beheer\/.*$/, '');
  }

  function addClient(name = '', code = Vault.generateCode()) {
    const row = document.createElement('div');
    row.className = 'client';
    row.innerHTML = `
      <input class="field name" placeholder="Naam klant (voor de begroeting)" aria-label="Naam klant">
      <input class="field code" placeholder="CODE" aria-label="Toegangscode" autocomplete="off" spellcheck="false">
      <button class="btn btn-ghost btn-sm" type="button" data-act="gen" title="Nieuwe code">↻</button>
      <button class="btn btn-ghost btn-sm" type="button" data-act="link" data-lang="nl" title="Kopieer Nederlandse deellink">Link NL</button>
      <button class="btn btn-ghost btn-sm" type="button" data-act="link" data-lang="en" title="Kopieer Engelse deellink">Link EN</button>
      <button class="btn btn-ghost btn-sm" type="button" data-act="del" title="Verwijderen" aria-label="Verwijderen">✕</button>`;
    row.querySelector('.name').value = name;
    row.querySelector('.code').value = code;
    row.addEventListener('click', async (e) => {
      const button = e.target.closest('[data-act]');
      const act = button?.dataset.act;
      if (act === 'gen') row.querySelector('.code').value = Vault.generateCode();
      if (act === 'del') row.remove();
      if (act === 'link') {
        const lang = button.dataset.lang;
        const link = shareLink(row.querySelector('.code').value.trim(), lang);
        try {
          await navigator.clipboard.writeText(link);
          button.textContent = 'Gekopieerd';
        } catch (_) {
          prompt('Kopieer deze link:', link);
        }
        setTimeout(() => (button.textContent = `Link ${lang.toUpperCase()}`), 1600);
      }
    });
    clientsEl.append(row);
  }

  function readClients() {
    return Array.from(clientsEl.querySelectorAll('.client'))
      .map((r) => ({ name: r.querySelector('.name').value.trim(), code: r.querySelector('.code').value.trim() }))
      .filter((c) => c.code);
  }

  function setClients(list) {
    clientsEl.replaceChildren();
    (list || []).forEach((c) => addClient(c.name, c.code));
    if (!clientsEl.children.length) addClient();
  }

  $('#add-client').addEventListener('click', () => addClient());

  /* ---------- Inhoud laden ---------- */

  $('#load-example').addEventListener('click', () => {
    if (jsonEl.value.trim() && !confirm('De huidige inhoud in het tekstvak vervangen door het voorbeeld?')) return;
    setContent(window.PORTFOLIO_EXAMPLE);
  });

  $('#open-current').addEventListener('click', async () => {
    const code = $('#open-code').value;
    if (!window.PORTFOLIO_VAULT) return status(jsonStatus, 'Er is nog geen data/portfolio.js gevonden.', false);
    status(jsonStatus, 'Bezig met openen…', true);
    const res = await Vault.open(window.PORTFOLIO_VAULT, code).catch(() => null);
    if (!res) return status(jsonStatus, 'Deze code past niet op de huidige portfolio.', false);
    setContent(res.data);
    status(jsonStatus, `✓ Huidige portfolio geopend (bijgewerkt ${window.PORTFOLIO_VAULT.updated || 'onbekend'}). Vul hieronder alle klantcodes opnieuw in, of open je werkbestand.`, true);
  });

  $('#open-work').addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    try {
      const work = JSON.parse(await file.text());
      setContent(work.content);
      setClients(work.clients);
      if (work.siteUrl) siteUrl.value = work.siteUrl;
      status(jsonStatus, `✓ Werkbestand "${file.name}" geopend.`, true);
    } catch (err) {
      status(jsonStatus, 'Dit is geen geldig werkbestand.', false);
    }
    e.target.value = '';
  });

  /* ---------- Opslaan & publiceren ---------- */

  function download(name, text, type) {
    const url = URL.createObjectURL(new Blob([text], { type }));
    const a = Object.assign(document.createElement('a'), { href: url, download: name });
    document.body.append(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  $('#save-work').addEventListener('click', () => {
    const content = validate();
    if (!content) return;
    const work = { content, clients: readClients(), siteUrl: siteUrl.value.trim() };
    download(`portfolio-werkbestand-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify(work, null, 2), 'application/json');
    status(buildStatus, '✓ Werkbestand opgeslagen. Bewaar het op een veilige plek (niet op GitHub).', true);
  });

  $('#build').addEventListener('click', async () => {
    const content = validate();
    if (!content) return status(buildStatus, 'Los eerst de fout in de inhoud op (stap 1).', false);
    const clients = readClients();
    if (!clients.length) return status(buildStatus, 'Voeg minstens één klant met een code toe (stap 2).', false);
    const short = clients.find((c) => Vault.normalize(c.code).length < 6);
    if (short && !confirm(`De code "${short.code}" is kort en daardoor makkelijker te raden. Toch doorgaan?`)) return;
    const seen = new Set();
    for (const c of clients) {
      const n = Vault.normalize(c.code);
      if (seen.has(n)) return status(buildStatus, `De code "${c.code}" komt dubbel voor.`, false);
      seen.add(n);
    }

    status(buildStatus, 'Bezig met versleutelen…', true);
    const vault = await Vault.seal(content, clients);
    const file = '/* Versleutelde portfolio — gemaakt met beheer/index.html. Niet met de hand aanpassen. */\n' +
      `window.PORTFOLIO_VAULT = ${JSON.stringify(vault)};\n`;
    download('portfolio.js', file, 'text/javascript');
    status(buildStatus, `✓ portfolio.js gemaakt voor ${clients.length} klant${clients.length === 1 ? '' : 'en'}. Upload het naar de map data/ op GitHub.`, true);
  });

  /* ---------- Start ---------- */

  siteUrl.value = /^https?:/.test(location.href) ? defaultSiteUrl() : '';
  setClients([]);
  if (!window.PORTFOLIO_VAULT) setContent(window.PORTFOLIO_EXAMPLE);
  else status(jsonStatus, 'Open je huidige portfolio met een code, of laad het voorbeeld om te beginnen.', true);
})();
