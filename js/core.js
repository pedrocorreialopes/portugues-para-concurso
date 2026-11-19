/* ==========================================================================
   Português para Concursos — núcleo compartilhado
   Tema, navegação, contas locais, progresso, avisos, busca e utilidades.
   ========================================================================== */
(function () {
  'use strict';

  var PPC = window.PPC = window.PPC || {};

  /* ---------- Registro de conteúdo (módulos, questões, dicas, temas) ---------- */
  PPC.modules = PPC.modules || [];
  PPC.questions = PPC.questions || [];
  PPC.tips = PPC.tips || [];
  PPC.themes = PPC.themes || [];
  PPC.registerData = function (data) {
    if (!data) return;
    ['modules', 'questions', 'tips', 'themes'].forEach(function (key) {
      if (Array.isArray(data[key])) {
        data[key].forEach(function (item) { item._coll = key; PPC[key].push(item); });
      }
    });
  };

  /* ---------- Camada de edição de conteúdo (painel administrativo) ---------- */
  // As edições feitas no painel são guardadas no armazenamento local do
  // navegador e aplicadas sobre o conteúdo original dos arquivos js/data/*.
  // Assim o conteúdo é editável sem alterar o código-fonte.
  var OVERRIDES_KEY = 'ppc.overrides.v1';
  PPC.OVERRIDES_KEY = OVERRIDES_KEY;
  var CONFIG_COLLS = ['modules', 'questions', 'tips', 'themes'];

  PPC.getOverrides = function () {
    var o = PPC.storage.get(OVERRIDES_KEY, null);
    if (!o || typeof o !== 'object') o = {};
    CONFIG_COLLS.forEach(function (c) {
      if (!o[c] || typeof o[c] !== 'object') o[c] = {};
    });
    if (!o.custom || typeof o.custom !== 'object') o.custom = {};
    CONFIG_COLLS.forEach(function (c) {
      if (!Array.isArray(o.custom[c])) o.custom[c] = [];
    });
    if (!o.settings || typeof o.settings !== 'object') o.settings = {};
    return o;
  };
  PPC.saveOverrides = function (o) { return PPC.storage.set(OVERRIDES_KEY, o); };

  function collIdKey(coll) {
    return coll === 'modules' ? 'slug' : (coll === 'questions' ? 'codigo' : 'id');
  }
  PPC.collIdKey = collIdKey;

  PPC.keyOf = function (coll, item) {
    return item[collIdKey(coll)];
  };

  PPC.saveContentPatch = function (coll, id, patch) {
    var o = PPC.getOverrides();
    o[coll][id] = Object.assign({}, o[coll][id] || {}, patch);
    return PPC.saveOverrides(o);
  };
  PPC.resetContentItem = function (coll, id) {
    var o = PPC.getOverrides();
    delete o[coll][id];
    return PPC.saveOverrides(o);
  };
  PPC.addCustomContent = function (coll, item) {
    var o = PPC.getOverrides();
    o.custom[coll].push(item);
    return PPC.saveOverrides(o);
  };
  PPC.removeCustomContent = function (coll, id) {
    var o = PPC.getOverrides();
    var key = collIdKey(coll);
    o.custom[coll] = o.custom[coll].filter(function (x) { return x[key] !== id; });
    delete o[coll][id];
    return PPC.saveOverrides(o);
  };
  PPC.isCustomContent = function (coll, id) {
    var o = PPC.getOverrides();
    var key = collIdKey(coll);
    return o.custom[coll].some(function (x) { return x[key] === id; });
  };

  /** Aplica edições locais sobre o conteúdo carregado dos arquivos. */
  PPC.applyContentOverrides = function () {
    // Snapshot do conteúdo original dos arquivos, capturado na primeira
    // aplicação (quando os js/data/* já foram carregados). Permite restaurar
    // um item editado sem recarregar a página.
    if (!PPC.__contentSnapshot) {
      PPC.__contentSnapshot = {};
      CONFIG_COLLS.forEach(function (coll) {
        if (Array.isArray(PPC[coll])) {
          PPC.__contentSnapshot[coll] = JSON.parse(JSON.stringify(PPC[coll]));
        }
      });
    }
    var o = PPC.getOverrides();
    var changed = false;
    CONFIG_COLLS.forEach(function (coll) {
      var list = PPC[coll];
      var snap = PPC.__contentSnapshot[coll];
      if (!Array.isArray(list) || !Array.isArray(snap)) return;
      var key = collIdKey(coll);
      // 1) restaura o conteúdo original na mesma referência de array
      list.length = 0;
      JSON.parse(JSON.stringify(snap)).forEach(function (item) { list.push(item); });
      // 2) aplica as edições salvas
      list.forEach(function (item) {
        var patch = o[coll][item[key]];
        if (patch) { Object.assign(item, patch); changed = true; }
      });
      // 3) adiciona os itens criados no painel
      o.custom[coll].forEach(function (item) {
        var exists = list.some(function (x) { return x[key] === item[key]; });
        if (exists) {
          list.forEach(function (x, i) {
            if (x[key] === item[key]) list[i] = Object.assign({}, item, { _custom: true });
          });
        } else {
          list.push(Object.assign({}, item, { _custom: true }));
        }
        changed = true;
      });
    });
    // garante campos obrigatórios nos novos módulos
    PPC.modules.forEach(function (m) {
      if (!Array.isArray(m.secoes)) m.secoes = [];
      if (!Array.isArray(m.exemplos)) m.exemplos = [];
      if (!Array.isArray(m.regras)) m.regras = [];
      if (!Array.isArray(m.dicas)) m.dicas = [];
      if (!Array.isArray(m.erros)) m.erros = [];
      if (!Array.isArray(m.resumoFinal)) m.resumoFinal = [];
      if (!m.tag) m.tags = m.tags || [];
    });
    PPC.questions.forEach(function (q) {
      if (!Array.isArray(q.alternativas)) q.alternativas = ['', '', '', '', ''];
      if (typeof q.correta !== 'number') q.correta = 0;
    });
    return changed;
  };

  /* Configurações do site editáveis no painel */
  PPC.siteConfig = function () {
    var o = PPC.getOverrides();
    var s = o.settings || {};
    return {
      nome: s.nome || 'Português para Concursos',
      slogan: s.slogan || 'Estude. Pratique. Conquiste!',
      mensagem: s.mensagem || 'Prepare-se para conquistar sua aprovação! Aprenda Português de maneira simples, pratique com questões e teste seus conhecimentos com simulados gratuitos.',
      contato: s.contato || ''
    };
  };
  PPC.saveSiteConfig = function (patch) {
    var o = PPC.getOverrides();
    o.settings = Object.assign({}, o.settings || {}, patch);
    return PPC.saveOverrides(o);
  };

  /* ---------- Constantes ---------- */
  var KEYS = {
    theme: 'ppc.theme',
    accounts: 'ppc.accounts.v1',
    session: 'ppc.session.v1',
    students: 'ppc.students.v1',
    activeExam: 'ppc.activeExam.v1',
    lastResult: 'ppc.lastResult.v1',
    admin: 'ppc.admin.v1',
    readTools: 'ppc.readtools.v1'
  };
  var GUEST = '__visitante';
  PPC.GUEST = GUEST;
  PPC.KEYS = KEYS;

  PPC.DIFICULDADES = [
    { id: 'facil', label: 'Fácil' },
    { id: 'intermediario', label: 'Intermediário' },
    { id: 'dificil', label: 'Difícil' }
  ];

  /* ---------- Ícones (SVG inline) ---------- */
  var ICONS = {
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11a3 3 0 0 1 3 3v15a2 2 0 0 0-2-2H6a2 2 0 0 1-2-2V5.5z"/><path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H14v18a2 2 0 0 1 2-2h2a2 2 0 0 0 2-2V5.5z"/>',
    question: '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 2.4-3 4"/><path d="M12 17.2h.01"/>',
    exam: '<path d="M8 3h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"/><path d="M9.5 8.5h5M9.5 12h5M9.5 15.5h3"/>',
    essay: '<path d="M4 20h4l10-10a2.8 2.8 0 0 0-4-4L4 16v4z"/><path d="M13.5 6.5 17.5 10.5"/>',
    tip: '<path d="M9 18h6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    home: '<path d="M3 10.5 12 3l9 7.5"/><path d="M5.5 9.5V20h13V9.5"/>',
    star: '<path d="m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 10l6.1-.9L12 3.5z"/>',
    print: '<path d="M7 8V3h10v5"/><path d="M6 18H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 14h12v7H6z"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 10.7 6.8-4M8.6 13.3l6.8 4"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    check: '<path d="m4.5 12.5 5 5 10-11"/>',
    x: '<path d="m6 6 12 12M18 6 6 18"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 2"/>',
    left: '<path d="m14 6-6 6 6 6"/>',
    right: '<path d="m10 6 6 6-6 6"/>',
    download: '<path d="M12 3v12"/><path d="m7.5 11 4.5 4.5L16.5 11"/><path d="M4 20h16"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4.5 21a7.5 7.5 0 0 1 15 0"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="10.5" rx="2.5"/><path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7"/>',
    upload: '<path d="M12 16V4"/><path d="m7.5 8.5 4.5-4.5 4.5 4.5"/><path d="M4 20h16"/>',
    trash: '<path d="M4 7h16"/><path d="M9 7V4.5h6V7"/><path d="M6 7l1 13h10l1-13"/>',
    edit: '<path d="M4 20h4L20 8a2.8 2.8 0 0 0-4-4L4 16v4z"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    filter: '<path d="M3 5h18l-7 8v6l-4-2v-4L3 5z"/>',
    target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4"/>',
    flame: '<path d="M12 22a6 6 0 0 0 6-6c0-4-3-5.5-3-9 0 0-1.5.8-2 2.5-.5-2-1.5-3.5-3-4.5 0 2.5-4 5-4 11a6 6 0 0 0 6 6z"/>',
    trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3"/><path d="M12 13v4M8.5 21h7"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
    flag: '<path d="M5 21V4h9l-.8 3H19l-.8 4H5"/>',
    refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 6v5h-5"/>',
    save: '<path d="M5 4h11l3 3v13H5z"/><path d="M8.5 4v5h6V4M8.5 20v-6h7v6"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
    warn: '<path d="M12 3 2.5 20h19L12 3z"/><path d="M12 9v5M12 17h.01"/>',
    sparkle: '<path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z"/>',
    grid: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    logout: '<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 8l-4 4 4 4M6 12h9"/>'
  };
  PPC.icon = function (name, cls) {
    var d = ICONS[name] || ICONS.info;
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"' +
      (cls ? ' class="' + cls + '"' : '') + '>' + d + '</svg>';
  };

  /* ---------- Utilitários ---------- */
  PPC.esc = function (s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  };
  PPC.qs = function (sel, root) { return (root || document).querySelector(sel); };
  PPC.qsa = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };
  PPC.uid = function (prefix) {
    return (prefix || 'id') + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  };
  PPC.debounce = function (fn, wait) {
    var t;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait || 220);
    };
  };
  PPC.formatDate = function (iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    if (isNaN(d)) return '—';
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };
  PPC.formatDateTime = function (iso) {
    var d = new Date(iso);
    if (isNaN(d)) return '—';
    return d.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }) +
      ' às ' + d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };
  PPC.formatSeconds = function (total) {
    total = Math.max(0, Math.round(total || 0));
    var h = Math.floor(total / 3600), m = Math.floor((total % 3600) / 60), s = total % 60;
    var pad = function (n) { return n < 10 ? '0' + n : '' + n; };
    return (h > 0 ? h + ':' + pad(m) : pad(m)) + ':' + pad(s);
  };
  PPC.formatDuration = function (total) {
    total = Math.max(0, Math.round(total || 0));
    var h = Math.floor(total / 3600), m = Math.round((total % 3600) / 60);
    if (h > 0) return h + 'h' + (m ? ' ' + m + ' min' : '');
    if (m > 0) return m + ' min';
    return total + ' s';
  };
  PPC.pct = function (part, total) {
    if (!total) return 0;
    return Math.round((part / total) * 1000) / 10;
  };
  PPC.norm = function (s) {
    return String(s || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };
  PPC.storage = {
    get: function (key, fallback) {
      try {
        var raw = localStorage.getItem(key);
        return raw == null ? fallback : JSON.parse(raw);
      } catch (e) { return fallback; }
    },
    set: function (key, value) {
      try { localStorage.setItem(key, JSON.stringify(value)); return true; }
      catch (e) { return false; }
    },
    remove: function (key) {
      try { localStorage.removeItem(key); } catch (e) { /* ignora */ }
    }
  };

  /* ---------- Tema ---------- */
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#061426' : '#0b2545');
    PPC.qsa('[data-theme-toggle]').forEach(function (btn) {
      btn.innerHTML = PPC.icon(theme === 'dark' ? 'sun' : 'moon');
      btn.setAttribute('aria-label', theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
      btn.setAttribute('title', theme === 'dark' ? 'Modo claro' : 'Modo escuro');
    });
  }
  PPC.getTheme = function () {
    return document.documentElement.getAttribute('data-theme') || 'light';
  };
  PPC.toggleTheme = function () {
    var next = PPC.getTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    PPC.storage.set(KEYS.theme, next);
  };
  (function initTheme() {
    var stored = PPC.storage.get(KEYS.theme, null);
    if (!stored) {
      stored = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', stored);
  })();

  /* ---------- Avisos (toast) ---------- */
  PPC.toast = function (message, kind) {
    var stack = PPC.qs('.toast-stack');
    if (!stack) {
      stack = document.createElement('div');
      stack.className = 'toast-stack';
      stack.setAttribute('role', 'status');
      stack.setAttribute('aria-live', 'polite');
      document.body.appendChild(stack);
    }
    var iconName = kind === 'err' ? 'warn' : (kind === 'ok' ? 'check' : 'info');
    var t = document.createElement('div');
    t.className = 'toast ' + (kind || '');
    t.innerHTML = PPC.icon(iconName) + '<div>' + PPC.esc(message) + '</div>';
    stack.appendChild(t);
    setTimeout(function () {
      t.classList.add('hide');
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 260);
    }, kind === 'err' ? 5200 : 3600);
  };

  /* ---------- Modal ---------- */
  PPC.openModal = function (html, opts) {
    opts = opts || {};
    var backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    if (opts.label) backdrop.setAttribute('aria-label', opts.label);
    backdrop.innerHTML = '<div class="modal">' + html + '</div>';
    document.body.appendChild(backdrop);
    document.body.style.overflow = 'hidden';
    function close() {
      document.body.style.overflow = '';
      if (backdrop.parentNode) backdrop.parentNode.removeChild(backdrop);
      document.removeEventListener('keydown', onKey);
    }
    function onKey(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) close();
      if (e.target.closest('[data-modal-close]')) close();
    });
    var focusable = backdrop.querySelector('button, [href], input, select, textarea');
    if (focusable) focusable.focus();
    return { close: close, root: backdrop };
  };
  PPC.confirm = function (message, onConfirm, opts) {
    opts = opts || {};
    var m = PPC.openModal(
      '<h2>' + PPC.esc(opts.title || 'Confirmar ação') + '</h2>' +
      '<p>' + PPC.esc(message) + '</p>' +
      '<div class="modal-actions">' +
      '<button class="btn btn-outline" data-modal-close>Cancelar</button>' +
      '<button class="btn ' + (opts.danger ? 'btn-danger' : 'btn-primary') + '" data-confirm>' +
      PPC.esc(opts.confirmLabel || 'Confirmar') + '</button></div>',
      { label: opts.title || 'Confirmar ação' });
    m.root.querySelector('[data-confirm]').addEventListener('click', function () {
      m.close();
      onConfirm();
    });
  };

  /* ---------- Contas locais ---------- */
  function hashText(text) {
    // Hash não criptográfico-forte disponível de forma síncrona; usado apenas
    // para não guardar a senha em texto puro no armazenamento local do aparelho.
    var h1 = 0x811c9dc5, h2 = 0x1000193;
    for (var i = 0; i < text.length; i++) {
      var c = text.charCodeAt(i);
      h1 = (h1 ^ c) * 16777619 >>> 0;
      h2 = ((h2 << 5) + h2 + c) >>> 0;
    }
    return h1.toString(16) + h2.toString(16) + text.length.toString(16);
  }
  PPC.getAccounts = function () { return PPC.storage.get(KEYS.accounts, []) || []; };
  PPC.saveAccounts = function (list) { return PPC.storage.set(KEYS.accounts, list); };
  PPC.getSession = function () {
    var s = PPC.storage.get(KEYS.session, null);
    if (!s || !s.email) return null;
    return s;
  };
  PPC.user = function () {
    var s = PPC.getSession();
    return s ? { email: s.email, name: s.name } : null;
  };
  PPC.isLogged = function () { return !!PPC.getSession(); };
  PPC.register = function (name, email, pass) {
    var accounts = PPC.getAccounts();
    email = String(email || '').trim().toLowerCase();
    if (!name || String(name).trim().length < 2) return { ok: false, error: 'Informe seu nome completo.' };
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(email)) return { ok: false, error: 'Informe um e-mail válido.' };
    if (!pass || String(pass).length < 6) return { ok: false, error: 'A senha deve ter pelo menos 6 caracteres.' };
    if (accounts.some(function (a) { return a.email === email; })) {
      return { ok: false, error: 'Já existe uma conta com este e-mail neste dispositivo. Faça login.' };
    }
    accounts.push({
      id: PPC.uid('acc'), name: String(name).trim(), email: email,
      hash: hashText(pass), createdAt: new Date().toISOString()
    });
    PPC.saveAccounts(accounts);
    PPC.startSession(email, String(name).trim());
    PPC.logActivity('Conta criada', { type: 'conta' });
    return { ok: true };
  };
  PPC.login = function (email, pass) {
    email = String(email || '').trim().toLowerCase();
    var account = PPC.getAccounts().filter(function (a) { return a.email === email; })[0];
    if (!account) return { ok: false, error: 'Não encontramos uma conta com este e-mail neste dispositivo.' };
    if (account.hash !== hashText(pass)) return { ok: false, error: 'Senha incorreta. Verifique e tente novamente.' };
    PPC.startSession(account.email, account.name);
    PPC.logActivity('Login realizado', { type: 'conta' });
    return { ok: true, name: account.name };
  };
  PPC.startSession = function (email, name) {
    PPC.storage.set(KEYS.session, { email: email, name: name, at: new Date().toISOString() });
  };
  PPC.logout = function () {
    PPC.storage.remove(KEYS.session);
  };
  PPC.resetPassword = function (email) {
    // Sem servidor de e-mail: o fluxo é local e transparente para o usuário.
    // Novas credenciais são definidas pelo próprio estudante no aparelho.
    return PPC.getAccounts().some(function (a) { return a.email === String(email || '').trim().toLowerCase(); });
  };
  PPC.changePassword = function (email, pass) {
    var accounts = PPC.getAccounts();
    var account = accounts.filter(function (a) { return a.email === email; })[0];
    if (!account) return { ok: false, error: 'Conta não encontrada neste dispositivo.' };
    if (!pass || String(pass).length < 6) return { ok: false, error: 'A nova senha deve ter pelo menos 6 caracteres.' };
    account.hash = hashText(pass);
    PPC.saveAccounts(accounts);
    return { ok: true };
  };
  PPC.removeAccount = function (email) {
    var students = PPC.storage.get(KEYS.students, {}) || {};
    delete students[email];
    PPC.storage.set(KEYS.students, students);
    PPC.saveAccounts(PPC.getAccounts().filter(function (a) { return a.email !== email; }));
    var s = PPC.getSession();
    if (s && s.email === email) PPC.logout();
  };

  /* ---------- Dados do estudante (progresso) ---------- */
  function emptyBucket() {
    return {
      lessons: {},      // slug -> { status:'em-andamento'|'concluida', at, secs }
      reading: {},      // slug -> percentual lido
      answers: {},      // codigo -> { chosen, correct, at, topico }
      exams: [],        // resumos de simulados
      essays: [],       // redações salvas
      favorites: [],    // slugs de módulos e ids de dicas
      plan: null,       // plano de estudos
      studySeconds: 0,
      activity: [],
      certificates: [],
      createdAt: new Date().toISOString()
    };
  }
  PPC.dataKey = function () {
    var s = PPC.getSession();
    return s ? s.email : GUEST;
  };
  PPC.getData = function () {
    var all = PPC.storage.get(KEYS.students, {}) || {};
    var key = PPC.dataKey();
    var bucket = all[key];
    if (!bucket) { bucket = emptyBucket(); all[key] = bucket; PPC.storage.set(KEYS.students, all); }
    // garante estrutura completa em buckets antigos
    var base = emptyBucket();
    Object.keys(base).forEach(function (k) {
      if (bucket[k] == null) bucket[k] = base[k];
    });
    return bucket;
  };
  PPC.setData = function (bucket) {
    var all = PPC.storage.get(KEYS.students, {}) || {};
    all[PPC.dataKey()] = bucket;
    return PPC.storage.set(KEYS.students, all);
  };
  PPC.updateData = function (mutator) {
    var bucket = PPC.getData();
    mutator(bucket);
    PPC.setData(bucket);
    return bucket;
  };
  PPC.logActivity = function (label, meta) {
    meta = meta || {};
    PPC.updateData(function (d) {
      d.activity.unshift({
        label: label, type: meta.type || 'geral', at: new Date().toISOString(),
        ref: meta.ref || null
      });
      d.activity = d.activity.slice(0, 120);
    });
  };
  PPC.recordAnswer = function (codigo, chosen, correct, topico) {
    PPC.updateData(function (d) {
      d.answers[codigo] = { chosen: chosen, correct: !!correct, at: new Date().toISOString(), topico: topico || null };
    });
  };
  PPC.recordLesson = function (slug, status) {
    PPC.updateData(function (d) {
      var prev = d.lessons[slug] || {};
      d.lessons[slug] = {
        status: status || prev.status || 'em-andamento',
        at: new Date().toISOString(),
        secs: prev.secs || 0
      };
    });
  };
  PPC.toggleFavorite = function (id) {
    var result = false;
    PPC.updateData(function (d) {
      var i = d.favorites.indexOf(id);
      if (i >= 0) { d.favorites.splice(i, 1); result = false; }
      else { d.favorites.push(id); result = true; }
    });
    return result;
  };
  PPC.isFavorite = function (id) {
    return (PPC.getData().favorites || []).indexOf(id) >= 0;
  };
  PPC.addExam = function (summary) {
    PPC.updateData(function (d) {
      d.exams.unshift(summary);
      d.exams = d.exams.slice(0, 60);
    });
    PPC.logActivity('Simulado concluído — ' + summary.correct + '/' + summary.total, { type: 'simulado', ref: summary.id });
  };
  PPC.saveEssay = function (essay) {
    PPC.updateData(function (d) {
      var i = -1;
      d.essays.forEach(function (e, idx) { if (e.id === essay.id) i = idx; });
      if (i >= 0) d.essays[i] = essay; else d.essays.unshift(essay);
    });
  };
  PPC.addStudySeconds = function (secs) {
    if (!secs || secs < 1) return;
    PPC.updateData(function (d) { d.studySeconds += Math.round(secs); });
  };
  PPC.stats = function () {
    var d = PPC.getData();
    var answers = Object.keys(d.answers).map(function (k) { return d.answers[k]; });
    var total = answers.length;
    var correct = answers.filter(function (a) { return a.correct; }).length;
    var lessonsDone = Object.keys(d.lessons).filter(function (k) { return d.lessons[k].status === 'concluida'; }).length;
    var exams = d.exams || [];
    var examAvg = exams.length
      ? Math.round(exams.reduce(function (s, e) { return s + (e.pct || 0); }, 0) / exams.length * 10) / 10
      : 0;
    // desempenho por tópico
    var byTopic = {};
    answers.forEach(function (a) {
      var t = a.topico || 'geral';
      byTopic[t] = byTopic[t] || { total: 0, correct: 0 };
      byTopic[t].total++;
      if (a.correct) byTopic[t].correct++;
    });
    return {
      answered: total, correct: correct, wrong: total - correct,
      accuracy: PPC.pct(correct, total), lessonsDone: lessonsDone,
      lessonsStarted: Object.keys(d.lessons).length,
      exams: exams.length, examAvg: examAvg,
      studySeconds: d.studySeconds, byTopic: byTopic,
      essays: (d.essays || []).length,
      favorites: (d.favorites || []).length
    };
  };
  PPC.resetProgress = function () {
    var key = PPC.dataKey();
    var all = PPC.storage.get(KEYS.students, {}) || {};
    all[key] = emptyBucket();
    PPC.storage.set(KEYS.students, all);
  };

  /* ---------- Tempo de estudo ---------- */
  (function trackStudyTime() {
    var last = Date.now(), acc = 0, active = true;
    function flush() {
      if (acc >= 15) { PPC.addStudySeconds(acc); acc = 0; }
    }
    document.addEventListener('visibilitychange', function () {
      active = !document.hidden;
      last = Date.now();
      if (!active) flush();
    });
    ['click', 'keydown', 'scroll', 'pointerdown'].forEach(function (evt) {
      window.addEventListener(evt, function () { active = true; last = Date.now(); }, { passive: true });
    });
    setInterval(function () {
      var now = Date.now();
      if (active && !document.hidden) acc += (now - last) / 1000;
      last = now;
      if (acc >= 30) flush();
    }, 5000);
    window.addEventListener('beforeunload', flush);
  })();

  /* ---------- Navegação ---------- */
  function initNav() {
    var nav = PPC.qs('#mainNav');
    var toggle = PPC.qs('#navToggle');
    var backdrop = PPC.qs('#navBackdrop');
    var path = location.pathname.split('/').pop() || 'index.html';
    PPC.qsa('#mainNav a').forEach(function (a) {
      var href = (a.getAttribute('href') || '').split('?')[0];
      if (href === path) a.setAttribute('aria-current', 'page');
    });
    function closeNav() {
      if (!nav) return;
      nav.classList.remove('open');
      if (backdrop) { backdrop.classList.remove('open'); backdrop.hidden = true; }
      if (toggle) { toggle.setAttribute('aria-expanded', 'false'); toggle.innerHTML = PPC.icon('menu'); }
    }
    if (toggle && nav) {
      toggle.innerHTML = PPC.icon('menu');
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.innerHTML = PPC.icon(open ? 'close' : 'menu');
        if (backdrop) { backdrop.hidden = !open; backdrop.classList.toggle('open', open); }
      });
    }
    if (backdrop) backdrop.addEventListener('click', closeNav);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeNav(); });
    PPC.qsa('#mainNav a').forEach(function (a) { a.addEventListener('click', closeNav); });

    document.addEventListener('scroll', function () {
      var header = PPC.qs('.site-header');
      if (header) header.classList.toggle('scrolled', window.scrollY > 8);
    }, { passive: true });

    PPC.qsa('[data-theme-toggle]').forEach(function (btn) {
      btn.addEventListener('click', PPC.toggleTheme);
    });
    applyTheme(PPC.getTheme());
  }

  function initAccountChip() {
    var chip = PPC.qs('#accountChip');
    if (!chip) return;
    var user = PPC.user();
    if (user) {
      var initials = user.name.split(' ').filter(Boolean).map(function (p) { return p[0]; }).slice(0, 2).join('').toUpperCase();
      chip.href = 'progresso.html';
      chip.title = 'Abrir meu painel — ' + user.name;
      chip.innerHTML = '<span class="avatar">' + PPC.esc(initials || 'E') + '</span>' +
        '<span class="account-name">' + PPC.esc(user.name.split(' ')[0]) + '</span>';
    } else {
      chip.href = 'login.html';
      chip.title = 'Entrar na minha conta';
      chip.innerHTML = '<span class="avatar">' + PPC.icon('user') + '</span>' +
        '<span class="account-name">Entrar</span>';
    }
  }

  /* ---------- Busca global ---------- */
  var searchIndex = null;
  function buildSearchIndex() {
    if (searchIndex) return searchIndex;
    searchIndex = [];
    PPC.modules.forEach(function (m) {
      searchIndex.push({
        type: 'Aula', icon: 'book', title: m.titulo, desc: m.resumo,
        url: 'aula.html?modulo=' + encodeURIComponent(m.slug),
        text: PPC.norm(m.titulo + ' ' + m.resumo + ' ' + (m.grupo || '') + ' ' + (m.tags || []).join(' '))
      });
    });
    PPC.tips.forEach(function (t) {
      searchIndex.push({
        type: 'Dica', icon: 'tip', title: t.titulo, desc: t.resumo,
        url: 'dicas.html?dica=' + encodeURIComponent(t.slug || t.id || ''),
        text: PPC.norm(t.titulo + ' ' + t.resumo + ' ' + (t.categoria || ''))
      });
    });
    PPC.themes.forEach(function (t) {
      searchIndex.push({
        type: 'Redação', icon: 'essay', title: t.titulo, desc: t.proposta,
        url: 'redacao.html?tema=' + encodeURIComponent(t.slug || t.id || ''),
        text: PPC.norm(t.titulo + ' ' + t.proposta + ' ' + (t.categoria || ''))
      });
    });
    PPC.questions.forEach(function (q) {
      searchIndex.push({
        type: 'Questão', icon: 'question', title: q.enunciado.slice(0, 110) + (q.enunciado.length > 110 ? '…' : ''),
        desc: 'Assunto: ' + (PPC.topicLabel(q.topico) || '—'),
        url: 'questoes.html?assunto=' + encodeURIComponent(q.topico || '') + '&busca=' + encodeURIComponent(q.codigo || ''),
        text: PPC.norm(q.enunciado + ' ' + (q.textoBase || '') + ' ' + PPC.topicLabel(q.topico) + ' ' + (q.codigo || ''))
      });
    });
    return searchIndex;
  }
  PPC.topicLabel = function (slug) {
    var m = PPC.modules.filter(function (x) { return x.slug === slug; })[0];
    if (m) return m.titulo;
    return PPC.topics && PPC.topics[slug] ? PPC.topics[slug] : slug;
  };
  PPC.openSearch = function () {
    var items = buildSearchIndex();
    var modal = PPC.openModal(
      '<h2>Pesquisar na plataforma</h2>' +
      '<div class="search-input-wrap" style="margin-bottom:1rem">' + PPC.icon('search') +
      '<input class="input" type="search" id="ppcSearchInput" placeholder="Aulas, dicas, temas de redação, questões…" aria-label="Termo de busca" autocomplete="off">' +
      '</div><div id="ppcSearchResults" class="search-results" aria-live="polite"></div>',
      { label: 'Pesquisar' });
    var input = modal.root.querySelector('#ppcSearchInput');
    var out = modal.root.querySelector('#ppcSearchResults');
    function render(term) {
      var q = PPC.norm(term).trim();
      if (q.length < 2) {
        var quick = ['crase', 'concordância', 'vírgula', 'interpretação', 'redação', 'porquê'];
        out.innerHTML = '<p class="muted" style="font-size:.85rem">Sugestões rápidas:</p><div class="btn-row">' +
          quick.map(function (s) {
            return '<button class="chip" data-term="' + PPC.esc(s) + '">' + PPC.esc(s) + '</button>';
          }).join('') + '</div>';
        return;
      }
      var hits = items.filter(function (it) { return it.text.indexOf(q) >= 0; }).slice(0, 24);
      if (!hits.length) {
        out.innerHTML = '<div class="empty-state"><h3>Nenhum resultado</h3><p>Tente outra palavra-chave.</p></div>';
        return;
      }
      out.innerHTML = hits.map(function (h) {
        return '<a class="search-hit" href="' + h.url + '">' +
          '<span class="mod-icon" style="width:34px;height:34px;margin:0">' +
          PPC.icon(h.icon).replace('<svg', '<svg style="width:17px;height:17px"') + '</span>' +
          '<span style="min-width:0"><strong>' + PPC.esc(h.title) + '</strong>' +
          '<small>' + h.type + ' — ' + PPC.esc(h.desc || '') + '</small></span></a>';
      }).join('');
    }
    input.addEventListener('input', PPC.debounce(function () { render(input.value); }, 160));
    out.addEventListener('click', function (e) {
      var chip = e.target.closest('[data-term]');
      if (chip) { input.value = chip.getAttribute('data-term'); render(input.value); }
    });
    render('');
    setTimeout(function () { input.focus(); }, 60);
  };

  /* ---------- Compartilhar / imprimir ---------- */
  PPC.share = function (data) {
    var url = data.url || location.href;
    if (navigator.share) {
      navigator.share({ title: data.title || document.title, text: data.text || '', url: url }).catch(function () {});
      return;
    }
    var text = (data.title ? data.title + '\n' : '') + (data.text ? data.text + '\n' : '') + url;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        PPC.toast('Link copiado para a área de transferência.', 'ok');
      }).catch(function () { PPC.toast('Copie o endereço da barra do navegador.', ''); });
    } else {
      PPC.toast('Copie o endereço da barra do navegador.', '');
    }
  };
  PPC.print = function () { window.print(); };

  /* ---------- Cartão de questão (reutilizável) ---------- */
  PPC.questionCard = function (q, opts) {
    opts = opts || {};
    var letters = ['A', 'B', 'C', 'D', 'E'];
    var html = '<article class="question-card" data-codigo="' + PPC.esc(q.codigo) + '">' +
      '<div class="q-head">' +
      '<span class="badge badge-blue">' + PPC.esc(PPC.topicLabel(q.topico) || 'Português') + '</span>' +
      '<span class="badge">' + PPC.esc(PPC.difficultyLabel(q.dificuldade)) + '</span>' +
      '<span class="badge badge-yellow">' + PPC.esc(q.estilo || q.banca || 'Inédita') + '</span>' +
      (q.tipo === 'certo_errado' ? '<span class="badge">Certo/Errado</span>' : '') +
      '<span class="muted" style="font-size:.78rem;margin-left:auto">' + PPC.esc(q.codigo || '') + '</span>' +
      '</div>' +
      (q.textoBase ? '<div class="q-texto-base">' + PPC.esc(q.textoBase) + '</div>' : '') +
      '<p class="q-enunciado">' + PPC.esc(q.enunciado) + '</p>' +
      '<ul class="alternatives">' +
      q.alternativas.map(function (alt, i) {
        return '<li><button type="button" class="alt" data-index="' + i + '">' +
          '<span class="letra">' + letters[i] + '</span><span>' + PPC.esc(alt) + '</span></button></li>';
      }).join('') +
      '</ul>' +
      '<div class="q-feedback" hidden></div>' +
      '<div class="btn-row" style="margin-top:1rem">' +
      '<button class="btn btn-primary btn-sm" data-responder>' + PPC.icon('check') + 'Responder</button>' +
      '<button class="btn btn-ghost btn-sm" data-limpar>Limpar seleção</button>' +
      (opts.showFav !== false ? '<button class="btn btn-ghost btn-sm" data-fav>' + PPC.icon('star') + 'Favoritar</button>' : '') +
      '</div></article>';
    return html;
  };
  PPC.difficultyLabel = function (id) {
    var d = PPC.DIFICULDADES.filter(function (x) { return x.id === id; })[0];
    return d ? d.label : 'Misto';
  };
  /**
   * Ativa o comportamento de um cartão de questão dentro de `root`.
   * onAnswer(codigo, chosenIndex, isCorrect) é chamado após responder.
   */
  PPC.bindQuestionCard = function (root, onAnswer) {
    var card = root.querySelector('.question-card') || root;
    var q = null;
    var codigo = card.getAttribute('data-codigo');
    var all = PPC.questions.concat(PPC.extraQuestions || []);
    all.forEach(function (item) { if (item.codigo === codigo) q = item; });
    if (!q) return;
    var selected = null;
    var answered = false;
    var alts = PPC.qsa('.alt', card);
    var feedback = q_feedback();
    function q_feedback() { return card.querySelector('.q-feedback'); }
    alts.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (answered) return;
        selected = Number(btn.getAttribute('data-index'));
        alts.forEach(function (b) { b.classList.remove('selected'); });
        btn.classList.add('selected');
      });
    });
    card.querySelector('[data-limpar]').addEventListener('click', function () {
      if (answered) return;
      selected = null;
      alts.forEach(function (b) { b.classList.remove('selected'); });
    });
    var favBtn = card.querySelector('[data-fav]');
    if (favBtn) {
      if (PPC.isFavorite(codigo)) favBtn.classList.add('btn-accent');
      favBtn.addEventListener('click', function () {
        var on = PPC.toggleFavorite(codigo);
        favBtn.classList.toggle('btn-accent', on);
        PPC.toast(on ? 'Questão salva nos favoritos.' : 'Questão removida dos favoritos.', 'ok');
      });
    }
    card.querySelector('[data-responder]').addEventListener('click', function () {
      if (answered) return;
      if (selected == null) { PPC.toast('Escolha uma alternativa antes de responder.', 'err'); return; }
      answered = true;
      var isCorrect = selected === q.correta;
      alts.forEach(function (b, i) {
        b.classList.add('disabled');
        if (i === q.correta) b.classList.add('correct');
        else if (i === selected) b.classList.add('wrong');
      });
      feedback.hidden = false;
      feedback.className = 'feedback ' + (isCorrect ? 'ok' : 'err');
      var letters = ['A', 'B', 'C', 'D', 'E'];
      feedback.innerHTML =
        '<h4>' + (isCorrect ? 'Acertou!' : 'Não foi essa. Gabarito: ' + letters[q.correta]) + '</h4>' +
        '<span class="fb-label">Explicação</span><p>' + PPC.esc(q.explicacao) + '</p>' +
        (q.comentario ? '<span class="fb-label">Comentário pedagógico</span><p>' + PPC.esc(q.comentario) + '</p>' : '') +
        (q.origem ? '<p style="font-size:.8rem;opacity:.85;margin-top:.5rem">Origem: ' + PPC.esc(q.origem) + '</p>' : '');
      PPC.recordAnswer(q.codigo, selected, isCorrect, q.topico);
      if (typeof onAnswer === 'function') onAnswer(q, selected, isCorrect);
    });
  };

  /* ---------- Bootstrap ---------- */
  function boot() {
    // aplica edições feitas no painel administrativo antes de qualquer render
    try { PPC.applyContentOverrides(); } catch (e) { /* conteúdo padrão permanece */ }
    initNav();
    initAccountChip();
    var y = PPC.qs('[data-year]');
    if (y) y.textContent = new Date().getFullYear();
    PPC.qsa('[data-search-open]').forEach(function (b) {
      b.addEventListener('click', function (e) { e.preventDefault(); PPC.openSearch(); });
    });
    document.addEventListener('keydown', function (e) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        PPC.openSearch();
      }
    });
    // cartões de questão estáticos
    PPC.qsa('[data-question-card]').forEach(function (el) {
      var codigo = el.getAttribute('data-question-card');
      var q = PPC.questions.filter(function (x) { return x.codigo === codigo; })[0];
      if (!q) return;
      el.innerHTML = PPC.questionCard(q);
      PPC.bindQuestionCard(el);
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
