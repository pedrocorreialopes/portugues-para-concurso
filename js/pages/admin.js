/* Painel administrativo — edição de conteúdo no armazenamento local */
(function () {
  'use strict';
  var PPC = window.PPC;
  var ADMIN_KEY = 'ppc.admin.v1';
  var DEFAULT_PASS = 'portugues2026';
  var sessionKey = 'ppc.adminSession.v1';

  var state = { coll: 'modules', editId: null, busca: '', page: 1 };

  function hash(text) {
    var h1 = 0x811c9dc5, h2 = 0x1000193;
    for (var i = 0; i < text.length; i++) {
      var c = text.charCodeAt(i);
      h1 = (h1 ^ c) * 16777619 >>> 0;
      h2 = ((h2 << 5) + h2 + c) >>> 0;
    }
    return h1.toString(16) + h2.toString(16) + text.length.toString(16);
  }

  function adminConfig() {
    var c = PPC.storage.get(ADMIN_KEY, null);
    if (!c || !c.passHash) {
      c = { passHash: hash(DEFAULT_PASS), changedAt: null, isDefault: true };
      PPC.storage.set(ADMIN_KEY, c);
    }
    return c;
  }
  function isLogged() {
    return PPC.storage.get(sessionKey, null) === 'on';
  }
  function login(pass) {
    var c = adminConfig();
    if (hash(String(pass)) === c.passHash) {
      PPC.storage.set(sessionKey, 'on');
      return true;
    }
    return false;
  }
  function logout() { PPC.storage.remove(sessionKey); }

  /* ---------------- Tela de acesso ---------------- */
  function renderLogin() {
    var host = PPC.qs('#adminArea');
    var c = adminConfig();
    host.innerHTML =
      '<div class="container-narrow" style="margin-inline:auto">' +
        '<div class="auth-card" style="margin-inline:auto">' +
          '<img class="auth-logo" src="images/logo.svg" alt="" width="54" height="54">' +
          '<h1>Painel administrativo</h1>' +
          '<p class="muted" style="font-size:.9rem">Área de gestão de conteúdos da plataforma.</p>' +
          '<div class="info-box box-warn" style="margin:1rem 0">' +
            '<h4>' + PPC.icon('lock') + ' Sobre esta proteção</h4>' +
            '<p style="font-size:.88rem;margin:0">Esta é uma área administrativa <strong>local</strong>: a senha e as edições ficam apenas neste navegador, e o que você editar vale para este dispositivo. Como o site é estático e gratuito, não existe autenticação em servidor — por isso a área não deve ser usada para conteúdo confidencial. Para publicar alterações para todos os visitantes, é necessário editar os arquivos do projeto.</p>' +
          '</div>' +
          (c.isDefault
            ? '<div class="info-box box-tip" style="margin-bottom:1rem"><h4>Acesso inicial</h4><p style="font-size:.9rem;margin:0">Senha padrão: <strong>' + DEFAULT_PASS + '</strong>. Troque-a imediatamente após entrar.</p></div>'
            : '') +
          '<form id="formAdminLogin" novalidate>' +
            '<input type="text" name="username" autocomplete="username" value="admin" hidden aria-hidden="true" tabindex="-1">' +
            '<div class="field"><label for="adminPass">Senha de administração</label>' +
            '<input class="input" type="password" id="adminPass" autocomplete="current-password" placeholder="Digite a senha" required></div>' +
            '<div id="adminErro" hidden></div>' +
            '<button class="btn btn-primary btn-block" type="submit">Entrar no painel</button>' +
          '</form>' +
        '</div>' +
      '</div>';

    PPC.qs('#formAdminLogin').addEventListener('submit', function (e) {
      e.preventDefault();
      var el = PPC.qs('#adminErro');
      if (login(PPC.qs('#adminPass').value)) {
        renderPainel();
        PPC.toast('Acesso liberado ao painel administrativo.', 'ok');
      } else {
        el.hidden = false;
        el.className = 'feedback err';
        el.innerHTML = '<p style="margin:0">Senha incorreta. Tente novamente.</p>';
      }
    });
  }

  /* ---------------- Painel ---------------- */
  var TABS = [
    { id: 'conteudos', label: 'Conteúdos', icon: 'book' },
    { id: 'questoes', label: 'Questões', icon: 'question' },
    { id: 'dicas', label: 'Dicas', icon: 'tip' },
    { id: 'temas', label: 'Temas de redação', icon: 'essay' },
    { id: 'importar', label: 'Importar planilha', icon: 'upload' },
    { id: 'stats', label: 'Estatísticas', icon: 'chart' },
    { id: 'config', label: 'Configurações', icon: 'edit' }
  ];

  function renderPainel() {
    var host = PPC.qs('#adminArea');
    host.innerHTML =
      '<div style="display:flex;flex-wrap:wrap;gap:.8rem;align-items:center;justify-content:space-between;margin-bottom:1rem">' +
        '<div>' +
          '<h1 style="font-size:1.5rem;margin:0">Painel administrativo</h1>' +
          '<p class="muted" style="font-size:.86rem;margin:.2rem 0 0">Edite conteúdos, questões, dicas e temas sem alterar o código-fonte.</p>' +
        '</div>' +
        '<div class="btn-row">' +
          '<a class="btn btn-sm btn-outline" href="index.html">Ver site</a>' +
          '<button class="btn btn-sm btn-ghost" type="button" id="btnAdminLogout">' + PPC.icon('logout') + 'Sair do painel</button>' +
        '</div>' +
      '</div>' +
      '<div class="info-box box-warn" style="margin-bottom:1.2rem">' +
        '<h4>' + PPC.icon('info') + ' Como as edições funcionam</h4>' +
        '<p style="font-size:.88rem;margin:0">As alterações são gravadas no armazenamento local deste navegador e aplicadas imediatamente sobre o conteúdo padrão do site. Elas valem para este dispositivo e não são enviadas a servidores. Para alterar o conteúdo de todos os visitantes, edite os arquivos <code>js/data/*.js</code> do projeto.</p>' +
      '</div>' +
      '<div class="tabs" role="tablist" aria-label="Seções administrativas">' +
        TABS.map(function (t, i) {
          return '<button class="tab' + (i === 0 ? ' active' : '') + '" role="tab" data-atab="' + t.id + '" aria-selected="' + (i === 0) + '">' + PPC.esc(t.label) + '</button>';
        }).join('') +
      '</div>' +
      '<div id="adminPanel"></div>';

    PPC.qs('#btnAdminLogout').addEventListener('click', function () {
      logout();
      renderLogin();
      PPC.toast('Sessão administrativa encerrada.', 'ok');
    });

    PPC.qsa('[data-atab]').forEach(function (b) {
      b.addEventListener('click', function () {
        PPC.qsa('[data-atab]').forEach(function (x) {
          x.classList.remove('active');
          x.setAttribute('aria-selected', 'false');
        });
        b.classList.add('active');
        b.setAttribute('aria-selected', 'true');
        renderSecao(b.getAttribute('data-atab'));
      });
    });
    renderSecao('conteudos');
  }

  function renderSecao(id) {
    var host = PPC.qs('#adminPanel');
    if (id === 'conteudos') return secaoConteudos(host);
    if (id === 'questoes') return secaoQuestoes(host);
    if (id === 'dicas') return secaoDicas(host);
    if (id === 'temas') return secaoTemas(host);
    if (id === 'importar') return secaoImportar(host);
    if (id === 'stats') return secaoStats(host);
    if (id === 'config') return secaoConfig(host);
  }

  /* ---------- Listas genéricas ---------- */
  function listaEditor(host, coll, titulo, renderItem, formFn, novoFn) {
    var items = PPC[coll];
    var key = PPC.collIdKey(coll);
    var filtro = PPC.norm(state.busca);
    var lista = items.filter(function (it) {
      if (!filtro) return true;
      var txt = PPC.norm((it.titulo || it.enunciado || it.codigo || '') + ' ' + (it.grupo || it.categoria || it.topico || ''));
      return txt.indexOf(filtro) >= 0;
    });

    host.innerHTML =
      '<div class="card" style="margin-bottom:1.2rem">' +
        '<div style="display:flex;flex-wrap:wrap;gap:.7rem;align-items:center;justify-content:space-between">' +
          '<h2 style="font-size:1.05rem;margin:0">' + PPC.esc(titulo) + ' <span class="badge">' + items.length + '</span></h2>' +
          '<div class="btn-row">' +
            '<button class="btn btn-sm btn-primary" type="button" id="btnNovo">' + PPC.icon('plus') + 'Novo item</button>' +
          '</div>' +
        '</div>' +
        '<div class="filter-bar" style="margin-top:.9rem">' +
          '<div class="search-input-wrap">' + PPC.icon('search') +
            '<input class="input" type="search" id="adminBusca" placeholder="Buscar…" value="' + PPC.esc(state.busca) + '">' +
          '</div>' +
        '</div>' +
        '<div id="listaItens" style="margin-top:1rem"></div>' +
      '</div>' +
      '<div id="formArea"></div>';

    PPC.qs('#adminBusca').addEventListener('input', PPC.debounce(function (e) {
      state.busca = e.target.value;
      listaEditor(host, coll, titulo, renderItem, formFn, novoFn);
    }, 200));

    PPC.qs('#btnNovo').addEventListener('click', function () { formFn(null); });

    var listHost = PPC.qs('#listaItens');
    if (!lista.length) {
      listHost.innerHTML = '<p class="muted" style="font-size:.88rem">Nenhum item encontrado.</p>';
      return;
    }
    listHost.innerHTML = lista.map(function (it) {
      var id = it[key];
      var custom = PPC.isCustomContent(coll, id);
      var edited = !!PPC.getOverrides()[coll][id];
      return '<div class="result-line" style="font-size:.87rem;align-items:center">' +
        '<span style="flex:1;min-width:0">' +
          '<strong>' + PPC.esc(it.titulo || it.enunciado || id) + '</strong>' +
          (custom ? ' <span class="badge badge-green">Criado aqui</span>' : '') +
          (edited ? ' <span class="badge badge-yellow">Editado</span>' : '') +
          '<br><small class="muted">' + PPC.esc(id) + (it.grupo ? ' · ' + PPC.esc(it.grupo) : '') + (it.topico ? ' · ' + PPC.esc(PPC.topicLabel(it.topico)) : '') + '</small>' +
        '</span>' +
        '<span class="btn-row" style="flex-shrink:0">' +
          '<button class="btn btn-sm btn-outline" type="button" data-edit="' + PPC.esc(id) + '">Editar</button>' +
          (custom ? '<button class="btn btn-sm btn-ghost" type="button" data-del="' + PPC.esc(id) + '">Excluir</button>' : '') +
          (edited ? '<button class="btn btn-sm btn-ghost" type="button" data-restore="' + PPC.esc(id) + '">Restaurar</button>' : '') +
        '</span>' +
      '</div>';
    }).join('');

    PPC.qsa('[data-edit]', listHost).forEach(function (b) {
      b.addEventListener('click', function () {
        var it = items.filter(function (x) { return String(x[key]) === b.getAttribute('data-edit'); })[0];
        formFn(it);
      });
    });
    PPC.qsa('[data-del]', listHost).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-del');
        PPC.confirm('Excluir este item criado no painel?', function () {
          PPC.removeCustomContent(coll, id);
          location.reload();
        }, { title: 'Excluir item', danger: true, confirmLabel: 'Excluir' });
      });
    });
    PPC.qsa('[data-restore]', listHost).forEach(function (b) {
      b.addEventListener('click', function () {
        PPC.resetContentItem(coll, b.getAttribute('data-restore'));
        location.reload();
      });
    });
    void renderItem;
    void novoFn;
  }

  function formWrap(titulo, camposHtml, onSave, opts) {
    opts = opts || {};
    var m = PPC.openModal(
      '<h2>' + PPC.esc(titulo) + '</h2>' +
      '<div id="adminForm" style="margin-top:1rem">' + camposHtml + '</div>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-outline" data-modal-close>Cancelar</button>' +
        '<button class="btn btn-primary" type="button" id="btnSalvarForm">' + PPC.esc(opts.saveLabel || 'Salvar alterações') + '</button>' +
      '</div>', { label: titulo });
    m.root.querySelector('#btnSalvarForm').addEventListener('click', function () {
      var ok = onSave(m.root);
      if (ok !== false) {
        m.close();
        PPC.toast('Alteração salva neste dispositivo.', 'ok');
        setTimeout(function () { location.reload(); }, 500);
      }
    });
    return m;
  }

  function campo(label, id, valor, tipo, hint) {
    if (tipo === 'textarea') {
      return '<div class="field"><label for="' + id + '">' + PPC.esc(label) + '</label>' +
        '<textarea class="textarea" id="' + id + '">' + PPC.esc(valor || '') + '</textarea>' +
        (hint ? '<p class="hint">' + PPC.esc(hint) + '</p>' : '') + '</div>';
    }
    if (tipo === 'select-options') return '';
    return '<div class="field"><label for="' + id + '">' + PPC.esc(label) + '</label>' +
      '<input class="input" type="' + (tipo || 'text') + '" id="' + id + '" value="' + PPC.esc(valor || '') + '">' +
      (hint ? '<p class="hint">' + PPC.esc(hint) + '</p>' : '') + '</div>';
  }

  /* ---------- Conteúdos (módulos) ---------- */
  function secaoConteudos(host) {
    listaEditor(host, 'modules', 'Módulos de conteúdo', null, formModulo);
  }
  function formModulo(m) {
    var novo = !m;
    var base = m || { slug: '', numero: PPC.modules.length + 1, titulo: '', grupo: 'Morfologia', resumo: '', introducao: '', secoes: [], exemplos: [], regras: [], dicas: [], erros: [], resumoFinal: [] };
    var grupos = [];
    PPC.modules.forEach(function (x) { if (grupos.indexOf(x.grupo) < 0) grupos.push(x.grupo); });

    var html =
      campo('Título do módulo', 'mTitulo', base.titulo) +
      (novo ? '' : campo('Identificador (slug) — usado nas URLs', 'mSlug', base.slug, 'text', 'Alterar o slug quebra links existentes para esta aula.')) +
      campo('Número', 'mNumero', base.numero, 'number') +
      '<div class="field"><label for="mGrupo">Área</label><select class="select" id="mGrupo">' +
        grupos.map(function (g) { return '<option value="' + PPC.esc(g) + '"' + (g === base.grupo ? ' selected' : '') + '>' + PPC.esc(g) + '</option>'; }).join('') +
      '</select></div>' +
      campo('Resumo (aparece nos cartões)', 'mResumo', base.resumo, 'textarea') +
      campo('Introdução', 'mIntro', base.introducao, 'textarea') +
      campo('Regras (uma por linha)', 'mRegras', (base.regras || []).join('\n'), 'textarea') +
      campo('Dicas para concursos (uma por linha)', 'mDicas', (base.dicas || []).join('\n'), 'textarea') +
      campo('Resumo final (uma por linha)', 'mResumoFinal', (base.resumoFinal || []).join('\n'), 'textarea') +
      '<p class="hint">Para editar as seções detalhadas, exemplos práticos e erros comuns, use o arquivo <code>js/data/modules-*.js</code> do projeto — a interface do painel cobre os campos de uso mais frequente.</p>';

    formWrap(novo ? 'Novo módulo' : 'Editar módulo', html, function (root) {
      var titulo = root.querySelector('#mTitulo').value.trim();
      if (!titulo) { PPC.toast('Informe o título do módulo.', 'err'); return false; }
      var patch = {
        titulo: titulo,
        numero: Number(root.querySelector('#mNumero').value) || base.numero,
        grupo: root.querySelector('#mGrupo').value,
        resumo: root.querySelector('#mResumo').value.trim(),
        introducao: root.querySelector('#mIntro').value.trim(),
        regras: root.querySelector('#mRegras').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean),
        dicas: root.querySelector('#mDicas').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean),
        resumoFinal: root.querySelector('#mResumoFinal').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean)
      };
      if (novo) {
        patch.slug = PPC.norm(titulo).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || PPC.uid('mod');
        patch.secoes = [{ id: 'conteudo', titulo: titulo, html: '<p>' + PPC.esc(patch.introducao || 'Conteúdo em elaboração.') + '</p>' }];
        patch.exemplos = [];
        patch.erros = [];
        patch.tags = [];
        PPC.addCustomContent('modules', patch);
      } else {
        if (PPC.isCustomContent('modules', base.slug)) {
          PPC.removeCustomContent('modules', base.slug);
          PPC.addCustomContent('modules', Object.assign({}, base, patch));
        } else {
          PPC.saveContentPatch('modules', base.slug, patch);
        }
      }
    }, { saveLabel: novo ? 'Criar módulo' : 'Salvar alterações' });
  }

  /* ---------- Questões ---------- */
  function secaoQuestoes(host) {
    listaEditor(host, 'questions', 'Banco de questões', null, formQuestao);
  }
  function formQuestao(q) {
    var novo = !q;
    var base = q || {
      codigo: '', topico: PPC.modules[0].slug, dificuldade: 'intermediario',
      estilo: 'Inédita', concurso: 'Simulado geral', tipo: 'multipla',
      textoBase: '', enunciado: '', alternativas: ['', '', '', '', ''], correta: 0,
      explicacao: '', comentario: '', origem: 'Questão inédita, elaborada para esta plataforma.'
    };
    var alts = base.alternativas || ['', '', '', '', ''];

    var html =
      campo('Enunciado', 'qEnunciado', base.enunciado, 'textarea') +
      campo('Texto base (opcional)', 'qTextoBase', base.textoBase, 'textarea', 'Use quando a questão depender de um trecho ou situação.') +
      '<div class="field"><label for="qTopico">Assunto</label><select class="select" id="qTopico">' +
        PPC.modules.map(function (m) {
          return '<option value="' + m.slug + '"' + (m.slug === base.topico ? ' selected' : '') + '>' + m.numero + '. ' + PPC.esc(m.titulo) + '</option>';
        }).join('') +
      '</select></div>' +
      '<div class="form-grid">' +
        '<div class="field"><label for="qDificuldade">Nível</label><select class="select" id="qDificuldade">' +
          PPC.DIFICULDADES.map(function (d) {
            return '<option value="' + d.id + '"' + (d.id === base.dificuldade ? ' selected' : '') + '>' + d.label + '</option>';
          }).join('') +
        '</select></div>' +
        '<div class="field"><label for="qTipo">Tipo</label><select class="select" id="qTipo">' +
          '<option value="multipla"' + (base.tipo === 'multipla' ? ' selected' : '') + '>Múltipla escolha (A–E)</option>' +
          '<option value="certo_errado"' + (base.tipo === 'certo_errado' ? ' selected' : '') + '>Certo / Errado</option>' +
        '</select></div>' +
      '</div>' +
      '<div class="field"><label for="qEstilo">Formato / estilo de banca</label>' +
        '<input class="input" type="text" id="qEstilo" value="' + PPC.esc(base.estilo) + '"></div>' +
      ['A', 'B', 'C', 'D', 'E'].map(function (L, i) {
        return '<div class="field"><label for="qAlt' + i + '">Alternativa ' + L + '</label>' +
          '<input class="input" type="text" id="qAlt' + i + '" value="' + PPC.esc(alts[i] || '') + '"></div>';
      }).join('') +
      '<div class="field"><label for="qCorreta">Alternativa correta</label><select class="select" id="qCorreta">' +
        ['A', 'B', 'C', 'D', 'E'].map(function (L, i) {
          return '<option value="' + i + '"' + (Number(base.correta) === i ? ' selected' : '') + '>' + L + '</option>';
        }).join('') +
      '</select></div>' +
      campo('Explicação (por que a resposta está correta)', 'qExplicacao', base.explicacao, 'textarea') +
      campo('Comentário pedagógico (por que as outras estão erradas)', 'qComentario', base.comentario, 'textarea') +
      campo('Origem', 'qOrigem', base.origem);

    formWrap(novo ? 'Nova questão' : 'Editar questão', html, function (root) {
      var enunciado = root.querySelector('#qEnunciado').value.trim();
      if (!enunciado) { PPC.toast('Informe o enunciado da questão.', 'err'); return false; }
      var alternativas = [0, 1, 2, 3, 4].map(function (i) {
        return root.querySelector('#qAlt' + i).value.trim();
      });
      if (alternativas.filter(Boolean).length < 2) {
        PPC.toast('Preencha ao menos duas alternativas.', 'err');
        return false;
      }
      var patch = {
        topico: root.querySelector('#qTopico').value,
        dificuldade: root.querySelector('#qDificuldade').value,
        tipo: root.querySelector('#qTipo').value,
        estilo: root.querySelector('#qEstilo').value.trim() || 'Inédita',
        textoBase: root.querySelector('#qTextoBase').value.trim(),
        enunciado: enunciado,
        alternativas: alternativas,
        correta: Number(root.querySelector('#qCorreta').value),
        explicacao: root.querySelector('#qExplicacao').value.trim(),
        comentario: root.querySelector('#qComentario').value.trim(),
        origem: root.querySelector('#qOrigem').value.trim() || 'Questão inédita, elaborada para esta plataforma.'
      };
      if (novo) {
        patch.codigo = 'QP-USR-' + String(Date.now()).slice(-6);
        patch.concurso = 'Simulado geral';
        PPC.addCustomContent('questions', patch);
      } else {
        patch.codigo = base.codigo;
        if (PPC.isCustomContent('questions', base.codigo)) {
          PPC.removeCustomContent('questions', base.codigo);
          PPC.addCustomContent('questions', Object.assign({}, base, patch));
        } else {
          PPC.saveContentPatch('questions', base.codigo, patch);
        }
      }
    }, { saveLabel: novo ? 'Criar questão' : 'Salvar alterações' });
  }

  /* ---------- Dicas ---------- */
  function secaoDicas(host) {
    listaEditor(host, 'tips', 'Dicas de Português', null, formDica);
  }
  function formDica(t) {
    var novo = !t;
    var base = t || { id: '', slug: '', titulo: '', categoria: 'Ortografia', resumo: '', destaque: false, corpo: [] };
    var corpoTexto = (base.corpo || []).map(function (b) {
      if (b.tipo === 'p') return '[p] ' + b.texto;
      if (b.tipo === 'h') return '[h] ' + b.texto;
      if (b.tipo === 'ul' || b.tipo === 'ol') return '[' + b.tipo + '] ' + b.itens.join(' | ');
      if (b.tipo === 'ex') return '[ex] ' + b.itens.join(' | ');
      if (b.tipo === 'tip') return '[tip] ' + b.texto;
      if (b.tipo === 'warn') return '[warn] ' + b.texto;
      return '';
    }).filter(Boolean).join('\n');

    var html =
      campo('Título da dica', 'dTitulo', base.titulo) +
      campo('Resumo em uma linha', 'dResumo', base.resumo, 'textarea') +
      '<div class="form-grid">' +
        '<div class="field"><label for="dCategoria">Categoria</label>' +
          '<input class="input" type="text" id="dCategoria" value="' + PPC.esc(base.categoria) + '"></div>' +
        '<div class="field"><label class="checkbox-row" for="dDestaque" style="margin-top:1.9rem">' +
          '<input type="checkbox" id="dDestaque"' + (base.destaque ? ' checked' : '') + '><span>Exibir em destaque na página inicial</span></label></div>' +
      '</div>' +
      campo('Conteúdo', 'dCorpo', corpoTexto, 'textarea',
        'Uma marcação por linha: [p] parágrafo · [h] subtítulo · [ul] item1 | item2 · [ol] item1 | item2 · [ex] exemplo1 | exemplo2 · [tip] dica · [warn] atenção');

    formWrap(novo ? 'Nova dica' : 'Editar dica', html, function (root) {
      var titulo = root.querySelector('#dTitulo').value.trim();
      if (!titulo) { PPC.toast('Informe o título da dica.', 'err'); return false; }
      var corpo = root.querySelector('#dCorpo').value.split('\n').map(function (linha, i) {
        var m = linha.match(/^\[(p|h|ul|ol|ex|tip|warn)\]\s*(.*)$/);
        if (!m) return null;
        var tipo = m[1], resto = m[2];
        if (tipo === 'p' || tipo === 'h' || tipo === 'tip' || tipo === 'warn') return { tipo: tipo, texto: resto };
        return { tipo: tipo, itens: resto.split('|').map(function (s) { return s.trim(); }).filter(Boolean) };
      }).filter(Boolean);

      var patch = {
        titulo: titulo,
        resumo: root.querySelector('#dResumo').value.trim(),
        categoria: root.querySelector('#dCategoria').value.trim() || 'Revisão',
        destaque: root.querySelector('#dDestaque').checked,
        corpo: corpo,
        categoriaTema: root.querySelector('#dCategoria').value.trim() || 'Revisão'
      };
      if (novo) {
        patch.id = PPC.uid('dica');
        patch.slug = PPC.norm(titulo).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        PPC.addCustomContent('tips', patch);
      } else {
        if (PPC.isCustomContent('tips', base.id)) {
          PPC.removeCustomContent('tips', base.id);
          PPC.addCustomContent('tips', Object.assign({}, base, patch));
        } else {
          PPC.saveContentPatch('tips', base.id, patch);
        }
      }
    }, { saveLabel: novo ? 'Criar dica' : 'Salvar alterações' });
  }

  /* ---------- Temas de redação ---------- */
  function secaoTemas(host) {
    listaEditor(host, 'themes', 'Temas de redação', null, formTema);
  }
  function formTema(t) {
    var novo = !t;
    var base = t || { id: '', slug: '', titulo: '', categoria: 'Educação', nivel: 'intermediario', proposta: '', motivadores: [], argumentos: [], repertorio: [], atualidade: true };
    var html =
      campo('Título do tema', 'tTitulo', base.titulo) +
      '<div class="form-grid">' +
        '<div class="field"><label for="tCategoria">Categoria</label>' +
          '<input class="input" type="text" id="tCategoria" value="' + PPC.esc(base.categoria) + '"></div>' +
        '<div class="field"><label for="tNivel">Nível</label><select class="select" id="tNivel">' +
          PPC.DIFICULDADES.map(function (d) {
            return '<option value="' + d.id + '"' + (d.id === base.nivel ? ' selected' : '') + '>' + d.label + '</option>';
          }).join('') +
        '</select></div>' +
      '</div>' +
      campo('Proposta (enunciado da redação)', 'tProposta', base.proposta, 'textarea') +
      campo('Textos motivadores (um por linha)', 'tMotivadores', (base.motivadores || []).join('\n'), 'textarea') +
      campo('Caminhos argumentativos (um por linha)', 'tArgumentos', (base.argumentos || []).join('\n'), 'textarea') +
      campo('Repertório sugerido (um por linha)', 'tRepertorio', (base.repertorio || []).join('\n'), 'textarea');

    formWrap(novo ? 'Novo tema de redação' : 'Editar tema', html, function (root) {
      var titulo = root.querySelector('#tTitulo').value.trim();
      if (!titulo) { PPC.toast('Informe o título do tema.', 'err'); return false; }
      var patch = {
        titulo: titulo,
        categoria: root.querySelector('#tCategoria').value.trim() || 'Educação',
        nivel: root.querySelector('#tNivel').value,
        proposta: root.querySelector('#tProposta').value.trim(),
        motivadores: root.querySelector('#tMotivadores').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean),
        argumentos: root.querySelector('#tArgumentos').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean),
        repertorio: root.querySelector('#tRepertorio').value.split('\n').map(function (s) { return s.trim(); }).filter(Boolean),
        atualidade: true
      };
      if (novo) {
        patch.id = PPC.uid('tema');
        patch.slug = PPC.norm(titulo).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        PPC.addCustomContent('themes', patch);
      } else {
        if (PPC.isCustomContent('themes', base.id)) {
          PPC.removeCustomContent('themes', base.id);
          PPC.addCustomContent('themes', Object.assign({}, base, patch));
        } else {
          PPC.saveContentPatch('themes', base.id, patch);
        }
      }
    }, { saveLabel: novo ? 'Criar tema' : 'Salvar alterações' });
  }

  /* ---------- Importar planilha ---------- */
  var MODELO = 'assunto;enunciado;texto_base;alt_a;alt_b;alt_c;alt_d;alt_e;correta;dificuldade;explicacao;comentario\n' +
    'crase;Assinale a alternativa em que a crase é obrigatória.;;Fui à Bahia.;Fui a Salvador.;Vou à Brasília.;Começou à estudar.;Entreguei a ela.;A;intermediario;Bahia admite artigo.;As demais violam regras de crase.';

  function secaoImportar(host) {
    host.innerHTML =
      '<div class="card">' +
        '<h2 style="font-size:1.1rem">Importar questões por planilha (CSV)</h2>' +
        '<p class="muted" style="font-size:.9rem">Cole o conteúdo de uma planilha em formato CSV separado por ponto e vírgula, ou envie o arquivo. A primeira linha deve ser o cabeçalho. As questões importadas ficam salvas neste dispositivo e entram imediatamente no banco de questões.</p>' +
        '<div class="info-box box-tip" style="margin:1rem 0">' +
          '<h4>Colunas esperadas</h4>' +
          '<p style="font-size:.88rem;margin:0"><code>assunto; enunciado; texto_base; alt_a; alt_b; alt_c; alt_d; alt_e; correta; dificuldade; explicacao; comentario</code></p>' +
          '<ul style="font-size:.86rem;margin:.6rem 0 0">' +
            '<li><strong>assunto:</strong> slug do módulo (ex.: <code>crase</code>, <code>regencia-verbal</code>).</li>' +
            '<li><strong>correta:</strong> letra A, B, C, D ou E.</li>' +
            '<li><strong>dificuldade:</strong> facil, intermediario ou dificil.</li>' +
            '<li><strong>texto_base:</strong> opcional (pode ficar vazio).</li>' +
          '</ul>' +
        '</div>' +
        '<div class="field"><label for="csvTexto">Conteúdo CSV</label>' +
          '<textarea class="textarea" id="csvTexto" style="min-height:180px;font-family:ui-monospace,monospace;font-size:.84rem"></textarea></div>' +
        '<div class="field"><label for="csvArquivo">Ou envie um arquivo .csv / .txt</label>' +
          '<input class="input" type="file" id="csvArquivo" accept=".csv,.txt,text/csv,text/plain"></div>' +
        '<div id="importResultado"></div>' +
        '<div class="btn-row" style="margin-top:1rem">' +
          '<button class="btn btn-primary" type="button" id="btnImportar">Importar questões</button>' +
          '<button class="btn btn-outline" type="button" id="btnModelo">Preencher com exemplo</button>' +
          '<button class="btn btn-ghost" type="button" id="btnBaixarModelo">Baixar modelo CSV</button>' +
        '</div>' +
      '</div>';

    PPC.qs('#btnModelo').addEventListener('click', function () {
      PPC.qs('#csvTexto').value = MODELO;
    });
    PPC.qs('#btnBaixarModelo').addEventListener('click', function () {
      var blob = new Blob(['\ufeff' + MODELO], { type: 'text/csv;charset=utf-8' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url; a.download = 'modelo-questoes.csv';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
    });
    PPC.qs('#csvArquivo').addEventListener('change', function (e) {
      var f = e.target.files && e.target.files[0];
      if (!f) return;
      var reader = new FileReader();
      reader.onload = function () {
        PPC.qs('#csvTexto').value = String(reader.result || '').replace(/^\ufeff/, '');
        PPC.toast('Arquivo carregado. Revise o conteúdo e clique em Importar.', 'ok');
      };
      reader.readAsText(f, 'utf-8');
    });

    PPC.qs('#btnImportar').addEventListener('click', function () {
      var txt = PPC.qs('#csvTexto').value.trim();
      var out = PPC.qs('#importResultado');
      if (!txt) { PPC.toast('Cole o conteúdo da planilha ou envie um arquivo.', 'err'); return; }
      var linhas = txt.split(/\r?\n/).filter(function (l) { return l.trim(); });
      if (linhas.length < 2) { PPC.toast('Inclua o cabeçalho e ao menos uma linha de dados.', 'err'); return; }
      var validos = [];
      var erros = [];
      linhas.slice(1).forEach(function (linha, i) {
        var c = linha.split(';').map(function (x) { return x.trim(); });
        if (c.length < 9) { erros.push('Linha ' + (i + 2) + ': colunas insuficientes.'); return; }
        var assunto = c[0], enunciado = c[1];
        if (!enunciado) { erros.push('Linha ' + (i + 2) + ': enunciado vazio.'); return; }
        var mod = PPC.modules.filter(function (m) { return m.slug === assunto; })[0];
        if (!mod) { erros.push('Linha ' + (i + 2) + ': assunto "' + assunto + '" não encontrado (use o slug do módulo).'); return; }
        var letra = (c[8] || '').toUpperCase().replace(/[^A-E]/g, '');
        if (!letra) { erros.push('Linha ' + (i + 2) + ': coluna correta deve ser A, B, C, D ou E.'); return; }
        var dif = (c[9] || 'intermediario').toLowerCase();
        if (['facil', 'intermediario', 'dificil'].indexOf(dif) < 0) dif = 'intermediario';
        validos.push({
          codigo: 'QP-IMP-' + String(Date.now()).slice(-5) + '-' + i,
          topico: assunto,
          dificuldade: dif,
          estilo: 'Inédita — importada',
          concurso: 'Simulado geral',
          tipo: 'multipla',
          textoBase: c[2] || '',
          enunciado: enunciado,
          alternativas: [c[3], c[4], c[5], c[6], c[7]],
          correta: 'ABCDE'.indexOf(letra),
          explicacao: c[10] || 'Explicação não informada na importação.',
          comentario: c[11] || '',
          origem: 'Questão inédita importada pelo painel administrativo.'
        });
      });

      if (validos.length) {
        var o = PPC.getOverrides();
        o.custom.questions = o.custom.questions.concat(validos);
        PPC.saveOverrides(o);
      }
      out.innerHTML = '<div class="feedback ' + (validos.length ? 'ok' : 'err') + '" style="margin-top:1rem">' +
        '<h4>' + validos.length + ' questão(ões) importada(s)</h4>' +
        (erros.length ? '<p style="margin:.4rem 0 .2rem"><strong>Linhas ignoradas (' + erros.length + '):</strong></p><ul style="margin:0;font-size:.86rem">' + erros.slice(0, 12).map(function (e) { return '<li>' + PPC.esc(e) + '</li>'; }).join('') + '</ul>' : '') +
        (validos.length ? '<p style="margin:.6rem 0 0;font-size:.88rem"><a href="questoes.html">Ver as questões no banco</a> · <a href="admin.html">Recarregar o painel</a></p>' : '') +
      '</div>';
      if (validos.length) PPC.toast(validos.length + ' questão(ões) importada(s).', 'ok');
    });
  }

  /* ---------- Estatísticas ---------- */
  function secaoStats(host) {
    var all = PPC.storage.get(PPC.KEYS.students, {}) || {};
    var perfis = Object.keys(all);
    var totalAnswers = 0, totalCorrect = 0, totalExams = 0, totalEssays = 0, totalSecs = 0;
    perfis.forEach(function (k) {
      var b = all[k] || {};
      var ans = Object.keys(b.answers || {});
      totalAnswers += ans.length;
      ans.forEach(function (c) { if (b.answers[c].correct) totalCorrect++; });
      totalExams += (b.exams || []).length;
      totalEssays += (b.essays || []).length;
      totalSecs += b.studySeconds || 0;
    });

    var porAssunto = {};
    perfis.forEach(function (k) {
      var b = all[k] || {};
      Object.keys(b.answers || {}).forEach(function (c) {
        var t = b.answers[c].topico || 'geral';
        porAssunto[t] = porAssunto[t] || { total: 0, correct: 0 };
        porAssunto[t].total++;
        if (b.answers[c].correct) porAssunto[t].correct++;
      });
    });
    var ranking = Object.keys(porAssunto).map(function (t) {
      return { t: t, label: PPC.topicLabel(t), total: porAssunto[t].total, correct: porAssunto[t].correct, pct: PPC.pct(porAssunto[t].correct, porAssunto[t].total) };
    }).sort(function (a, b) { return b.total - a.total; }).slice(0, 12);

    var o = PPC.getOverrides();
    var customCount = ['modules', 'questions', 'tips', 'themes'].reduce(function (s, c) { return s + o.custom[c].length; }, 0);
    var editedCount = ['modules', 'questions', 'tips', 'themes'].reduce(function (s, c) { return s + Object.keys(o[c]).length; }, 0);

    host.innerHTML =
      '<div class="kpi-grid" style="margin-bottom:1.2rem">' +
        '<div class="kpi"><span>Módulos</span><strong>' + PPC.modules.length + '</strong></div>' +
        '<div class="kpi"><span>Questões</span><strong>' + PPC.questions.length + '</strong></div>' +
        '<div class="kpi"><span>Dicas</span><strong>' + PPC.tips.length + '</strong></div>' +
        '<div class="kpi"><span>Temas</span><strong>' + PPC.themes.length + '</strong></div>' +
        '<div class="kpi"><span>Perfis locais</span><strong>' + perfis.length + '</strong></div>' +
        '<div class="kpi"><span>Itens editados aqui</span><strong>' + (customCount + editedCount) + '</strong></div>' +
      '</div>' +
      '<div class="grid grid-2" style="margin-bottom:1.2rem">' +
        '<div class="card">' +
          '<h2 style="font-size:1.02rem">Uso registrado neste dispositivo</h2>' +
          '<p class="muted" style="font-size:.84rem">Como o site não possui servidor, estes números refletem apenas os dados salvos localmente neste navegador.</p>' +
          '<div class="result-line"><span>Questões respondidas</span><strong>' + totalAnswers + '</strong></div>' +
          '<div class="result-line"><span>Acertos</span><strong>' + totalCorrect + '</strong></div>' +
          '<div class="result-line"><span>Aproveitamento</span><strong>' + PPC.pct(totalCorrect, totalAnswers) + '%</strong></div>' +
          '<div class="result-line"><span>Simulados concluídos</span><strong>' + totalExams + '</strong></div>' +
          '<div class="result-line"><span>Redações salvas</span><strong>' + totalEssays + '</strong></div>' +
          '<div class="result-line"><span>Tempo de estudo acumulado</span><strong>' + PPC.formatDuration(totalSecs) + '</strong></div>' +
        '</div>' +
        '<div class="card">' +
          '<h2 style="font-size:1.02rem">Assuntos mais praticados</h2>' +
          (ranking.length
            ? ranking.map(function (r) {
                return '<div style="margin-bottom:.7rem">' +
                  '<div style="display:flex;justify-content:space-between;font-size:.85rem;gap:.6rem">' +
                    '<span>' + PPC.esc(r.label) + '</span>' +
                    '<strong>' + r.correct + '/' + r.total + ' · ' + r.pct + '%</strong>' +
                  '</div>' +
                  '<div class="progress-bar" style="height:5px;margin-top:.25rem"><i style="width:' + r.pct + '%"></i></div>' +
                '</div>';
              }).join('')
            : '<p class="muted" style="font-size:.88rem">Nenhuma questão respondida neste dispositivo ainda.</p>') +
        '</div>' +
      '</div>' +
      '<div class="card">' +
        '<h2 style="font-size:1.02rem">Gerenciamento de imagens e mídia</h2>' +
        '<p class="muted" style="font-size:.9rem">A plataforma usa um logotipo em SVG (vetorial, leve e nítido em qualquer tela). Para trocar a identidade visual, substitua o arquivo <code>images/logo.svg</code> e o favicon <code>images/favicon.svg</code> no projeto.</p>' +
        '<div style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;margin-top:.8rem">' +
          '<img src="images/logo.svg" alt="Logotipo atual" width="56" height="56" style="border-radius:14px;box-shadow:var(--shadow-sm)">' +
          '<img src="images/favicon.svg" alt="Favicon atual" width="32" height="32" style="border-radius:8px">' +
          '<span class="muted" style="font-size:.84rem">Logotipo e favicon em uso</span>' +
        '</div>' +
      '</div>';
  }

  /* ---------- Configurações ---------- */
  function secaoConfig(host) {
    var cfg = PPC.siteConfig();
    var adm = adminConfig();
    host.innerHTML =
      '<div class="grid grid-2" style="align-items:start">' +
        '<div class="card">' +
          '<h2 style="font-size:1.05rem">Informações do site</h2>' +
          '<div class="field"><label for="cNome">Nome da plataforma</label>' +
            '<input class="input" type="text" id="cNome" value="' + PPC.esc(cfg.nome) + '"></div>' +
          '<div class="field"><label for="cSlogan">Slogan</label>' +
            '<input class="input" type="text" id="cSlogan" value="' + PPC.esc(cfg.slogan) + '"></div>' +
          '<div class="field"><label for="cMensagem">Mensagem de apresentação</label>' +
            '<textarea class="textarea" id="cMensagem">' + PPC.esc(cfg.mensagem) + '</textarea></div>' +
          '<div class="field"><label for="cContato">E-mail de contato (opcional)</label>' +
            '<input class="input" type="email" id="cContato" value="' + PPC.esc(cfg.contato) + '"></div>' +
          '<button class="btn btn-primary" type="button" id="btnSalvarCfg">Salvar informações</button>' +
          '<p class="hint">Estas informações são armazenadas neste dispositivo. Para alterar o site para todos os visitantes, edite os arquivos HTML do projeto.</p>' +
        '</div>' +
        '<div>' +
          '<div class="card" style="margin-bottom:1.15rem">' +
            '<h2 style="font-size:1.05rem">Senha administrativa</h2>' +
            '<div class="field"><label for="aAtual">Senha atual</label>' +
              '<input class="input" type="password" id="aAtual" autocomplete="current-password"></div>' +
            '<div class="field"><label for="aNova">Nova senha (mínimo 8 caracteres)</label>' +
              '<input class="input" type="password" id="aNova" autocomplete="new-password"></div>' +
            '<div class="field"><label for="aNova2">Confirmar nova senha</label>' +
              '<input class="input" type="password" id="aNova2" autocomplete="new-password"></div>' +
            '<button class="btn btn-primary" type="button" id="btnTrocarSenha">Alterar senha</button>' +
            '<p class="hint">Última alteração: ' + (adm.changedAt ? PPC.formatDateTime(adm.changedAt) : 'nunca (usando senha padrão)') + '</p>' +
          '</div>' +
          '<div class="card" style="border-color:var(--red-500)">' +
            '<h2 style="font-size:1.05rem;color:var(--red-500)">Exportar / limpar edições</h2>' +
            '<p class="muted" style="font-size:.88rem">Faça backup do conteúdo editado neste painel antes de limpar, ou apague todas as edições para voltar ao conteúdo original dos arquivos.</p>' +
            '<div class="btn-row">' +
              '<button class="btn btn-sm btn-outline" type="button" id="btnExportarEdicoes">' + PPC.icon('download') + 'Baixar backup (JSON)</button>' +
              '<button class="btn btn-sm btn-danger" type="button" id="btnLimparEdicoes">Apagar todas as edições</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</div>';

    PPC.qs('#btnSalvarCfg').addEventListener('click', function () {
      PPC.saveSiteConfig({
        nome: PPC.qs('#cNome').value.trim(),
        slogan: PPC.qs('#cSlogan').value.trim(),
        mensagem: PPC.qs('#cMensagem').value.trim(),
        contato: PPC.qs('#cContato').value.trim()
      });
      PPC.toast('Informações do site salvas neste dispositivo.', 'ok');
    });

    PPC.qs('#btnTrocarSenha').addEventListener('click', function () {
      var atual = PPC.qs('#aAtual').value;
      var n1 = PPC.qs('#aNova').value;
      var n2 = PPC.qs('#aNova2').value;
      var c = adminConfig();
      if (hash(atual) !== c.passHash) { PPC.toast('A senha atual está incorreta.', 'err'); return; }
      if (n1.length < 8) { PPC.toast('A nova senha deve ter ao menos 8 caracteres.', 'err'); return; }
      if (n1 !== n2) { PPC.toast('As senhas não coincidem.', 'err'); return; }
      PPC.storage.set(ADMIN_KEY, { passHash: hash(n1), changedAt: new Date().toISOString(), isDefault: false });
      PPC.toast('Senha administrativa alterada.', 'ok');
      PPC.qs('#aAtual').value = ''; PPC.qs('#aNova').value = ''; PPC.qs('#aNova2').value = '';
    });

    PPC.qs('#btnExportarEdicoes').addEventListener('click', function () {
      var blob = new Blob([JSON.stringify(PPC.getOverrides(), null, 2)], { type: 'application/json' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = 'backup-edicoes-ppc-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(a); a.click(); a.remove();
      setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
      PPC.toast('Backup gerado.', 'ok');
    });

    PPC.qs('#btnLimparEdicoes').addEventListener('click', function () {
      PPC.confirm('Isso apagará todas as edições e itens criados neste painel, voltando ao conteúdo original. Continuar?',
        function () {
          PPC.saveOverrides({ modules: {}, questions: {}, tips: {}, themes: {}, custom: { modules: [], questions: [], tips: [], themes: [] }, settings: {} });
          PPC.toast('Edições apagadas. Conteúdo original restaurado.', 'ok');
          setTimeout(function () { location.reload(); }, 800);
        }, { title: 'Apagar edições', danger: true, confirmLabel: 'Apagar tudo' });
    });
  }

  function init() {
    if (isLogged()) renderPainel();
    else renderLogin();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
