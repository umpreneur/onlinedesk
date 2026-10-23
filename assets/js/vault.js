/*
 * Vault: versleuteling van de portfolio-inhoud.
 *
 * De inhoud wordt versleuteld met een willekeurige sleutel (AES-GCM 256).
 * Die sleutel wordt per klantcode apart "ingepakt" met een sleutel die uit
 * de code wordt afgeleid (PBKDF2-SHA256). Zonder geldige code is de inhoud
 * dus onleesbaar, ook al staat het bestand openbaar op GitHub.
 */
(function (global) {
  'use strict';

  const enc = new TextEncoder();
  const dec = new TextDecoder();
  const ITERATIONS = 250000;

  const toB64 = (buf) => {
    const bytes = new Uint8Array(buf);
    let s = '';
    for (let i = 0; i < bytes.length; i++) s += String.fromCharCode(bytes[i]);
    return btoa(s);
  };
  const fromB64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const random = (n) => crypto.getRandomValues(new Uint8Array(n));

  // Hoofdletters, spaties en streepjes maken niet uit: "abcd 2345" == "ABCD-2345".
  const normalize = (code) => String(code || '').toUpperCase().replace(/[\s\-_.]/g, '');

  async function deriveKey(code, salt, iterations) {
    const base = await crypto.subtle.importKey('raw', enc.encode(normalize(code)), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey(
      { name: 'PBKDF2', salt, iterations, hash: 'SHA-256' },
      base,
      { name: 'AES-GCM', length: 256 },
      false,
      ['encrypt', 'decrypt']
    );
  }

  /** Probeer de kluis te openen. Geeft { data, name } terug, of null bij een onjuiste code. */
  async function open(vault, code) {
    if (!vault || !vault.slots || !normalize(code)) return null;
    const codeKey = await deriveKey(code, fromB64(vault.salt), vault.iter);

    for (const slot of vault.slots) {
      let unwrapped;
      try {
        unwrapped = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromB64(slot.iv) }, codeKey, fromB64(slot.key));
      } catch (_) {
        continue; // deze code hoort niet bij dit slot
      }
      const { k, n } = JSON.parse(dec.decode(unwrapped));
      const dataKey = await crypto.subtle.importKey('raw', fromB64(k), 'AES-GCM', false, ['decrypt']);
      const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromB64(vault.iv) }, dataKey, fromB64(vault.data));
      return { data: JSON.parse(dec.decode(plain)), name: n || '' };
    }
    return null;
  }

  /** Versleutel inhoud voor een lijst klanten: [{ name, code }]. */
  async function seal(content, clients) {
    const salt = random(16);
    const iv = random(12);
    const dataKey = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt']);
    const rawKey = toB64(await crypto.subtle.exportKey('raw', dataKey));
    const data = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, dataKey, enc.encode(JSON.stringify(content)));

    const slots = [];
    for (const client of clients) {
      const codeKey = await deriveKey(client.code, salt, ITERATIONS);
      const slotIv = random(12);
      const payload = enc.encode(JSON.stringify({ k: rawKey, n: client.name || '' }));
      const key = await crypto.subtle.encrypt({ name: 'AES-GCM', iv: slotIv }, codeKey, payload);
      slots.push({ iv: toB64(slotIv), key: toB64(key) });
    }
    // Volgorde husselen zodat de volgorde van klanten niets prijsgeeft.
    for (let i = slots.length - 1; i > 0; i--) {
      const j = crypto.getRandomValues(new Uint32Array(1))[0] % (i + 1);
      [slots[i], slots[j]] = [slots[j], slots[i]];
    }

    return {
      v: 1,
      iter: ITERATIONS,
      salt: toB64(salt),
      iv: toB64(iv),
      data: toB64(data),
      slots,
      updated: new Date().toISOString().slice(0, 10)
    };
  }

  /** Willekeurige, goed leesbare code zoals "K7QM-4HXP" (zonder 0/O en 1/I/L). */
  function generateCode(groups = 2, size = 4) {
    const alphabet = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
    const parts = [];
    for (let g = 0; g < groups; g++) {
      let part = '';
      const bytes = crypto.getRandomValues(new Uint32Array(size));
      for (let i = 0; i < size; i++) part += alphabet[bytes[i] % alphabet.length];
      parts.push(part);
    }
    return parts.join('-');
  }

  global.Vault = { open, seal, generateCode, normalize };
})(window);
