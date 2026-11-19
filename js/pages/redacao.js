/* Módulo de redação — temas, técnicas, editor com contador e autoavaliação */
(function () {
  'use strict';
  var PPC = window.PPC;
  var CRITERIOS = [
    { id: 'gramatica', label: 'Gramática e norma padrão', desc: 'Ortografia, acentuação, concordância, regência, pontuação.' },
    { id: 'coesao', label: 'Coesão', desc: 'Uso adequado de conectivos, retomadas e progressão entre parágrafos.' },
    { id: 'coerencia', label: 'Coerência', desc: 'Ausência de contradições, pertinência das informações e progressão de ideias.' },
    { id: 'argumentacao', label: 'Argumentação', desc: 'Tese clara, argumentos fundamentados e repertório pertinente.' },
    { id: 'estrutura', label: 'Estrutura textual', desc: 'Introdução, desenvolvimento e conclusão com proposta de intervenção.' }
  ];
  var currentTema = null;
  var currentEssayId = null;

  /* ---------- Temas ---------- */
  function categorias() {
    var out = [];
    PPC.themes.forEach(function (t) {
      if (out.indexOf(t.categoria) < 0) out.push(t.categoria);
    });
    return out.sort();
  }

  function renderTemas(filtroCat, busca) {
    var host = PPC.qs('#temasGrid');
    var lista = PPC.themes.filter(function (t) {
      if (filtroCat && t.categoria !== filtroCat) return false;
      if (busca && PPC.norm(t.titulo + ' ' + t.proposta + ' ' + t.categoria).indexOf(PPC.norm(busca)) < 0) return false;
      return true;
    });
    if (!lista.length) {
      host.innerHTML = '<div class="empty-state card" style="grid-column:1/-1"><h3>Nenhum tema encontrado</h3><p>Ajuste a busca ou a categoria.</p></div>';
      return;
    }
    host.innerHTML = lista.map(function (t) {
      return '<article class="card card-hover">' +
        '<div style="display:flex;flex-wrap:wrap;gap:.4rem;align-items:center;margin-bottom:.6rem">' +
          '<span class="badge badge-blue">' + PPC.esc(t.categoria) + '</span>' +
          (t.atualidade ? '<span class="badge badge-green">Atualidade</span>' : '') +
          '<span class="badge">' + PPC.esc(PPC.difficultyLabel(t.nivel)) + '</span>' +
        '</div>' +
        '<h3 style="font-size:1.06rem"><a href="#tema-' + t.id + '">' + PPC.esc(t.titulo) + '</a></h3>' +
        '<p style="font-size:.9rem;color:var(--muted)">' + PPC.esc(t.proposta.slice(0, 165)) + (t.proposta.length > 165 ? '…' : '') + '</p>' +
        '<div class="btn-row">' +
          '<button class="btn btn-sm btn-primary" type="button" data-tema="' + t.id + '">Ver proposta</button>' +
          '<button class="btn btn-sm btn-outline" type="button" data-escrever="' + t.id + '">Escrever sobre este tema</button>' +
        '</div>' +
      '</article>';
    }).join('');

    PPC.qsa('[data-tema]', host).forEach(function (b) {
      b.addEventListener('click', function () { abrirTema(b.getAttribute('data-tema')); });
    });
    PPC.qsa('[data-escrever]', host).forEach(function (b) {
      b.addEventListener('click', function () { irParaEditor(b.getAttribute('data-escrever')); });
    });
  }

  function abrirTema(id) {
    var t = PPC.themes.filter(function (x) { return x.id === id; })[0];
    if (!t) return;
    var html = '<h2>' + PPC.esc(t.titulo) + '</h2>' +
      '<div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:1rem">' +
        '<span class="badge badge-blue">' + PPC.esc(t.categoria) + '</span>' +
        '<span class="badge">' + PPC.esc(PPC.difficultyLabel(t.nivel)) + '</span>' +
      '</div>' +
      '<h3 style="font-size:.95rem">Proposta</h3>' +
      '<p style="font-size:.92rem">' + PPC.esc(t.proposta) + '</p>' +
      '<h3 style="font-size:.95rem;margin-top:1rem">Textos motivadores</h3>' +
      '<ul style="font-size:.9rem">' + t.motivadores.map(function (m) { return '<li>' + PPC.esc(m) + '</li>'; }).join('') + '</ul>' +
      '<h3 style="font-size:.95rem;margin-top:1rem">Caminhos argumentativos sugeridos</h3>' +
      '<ul style="font-size:.9rem">' + (t.argumentos || []).map(function (a) { return '<li>' + PPC.esc(a) + '</li>'; }).join('') + '</ul>' +
      '<h3 style="font-size:.95rem;margin-top:1rem">Repertório possível</h3>' +
      '<ul style="font-size:.9rem">' + (t.repertorio || []).map(function (r) { return '<li>' + PPC.esc(r) + '</li>'; }).join('') + '</ul>' +
      '<div class="modal-actions">' +
        '<button class="btn btn-outline" data-modal-close>Fechar</button>' +
        '<button class="btn btn-primary" type="button" id="modalEscrever">Escrever sobre este tema</button>' +
      '</div>';
    var m = PPC.openModal(html, { label: t.titulo });
    m.root.querySelector('#modalEscrever').addEventListener('click', function () {
      m.close();
      irParaEditor(t.id);
    });
  }

  /* ---------- Editor ---------- */
  function preencherSelectTemas() {
    var sel = PPC.qs('#selTemaEditor');
    sel.innerHTML = '<option value="">Tema livre (sem proposta específica)</option>' +
      PPC.themes.map(function (t) {
        return '<option value="' + t.id + '">' + PPC.esc(t.titulo) + ' — ' + PPC.esc(t.categoria) + '</option>';
      }).join('');
    sel.addEventListener('change', function () { setTema(sel.value || null); });
  }

  function setTema(id) {
    currentTema = id ? PPC.themes.filter(function (t) { return t.id === id; })[0] : null;
    var host = PPC.qs('#propostaTema');
    if (!currentTema) {
      host.innerHTML = '<p class="muted" style="margin:0">Nenhum tema selecionado. Escolha um tema na lista para ver a proposta, os textos motivadores e o repertório sugerido.</p>';
      return;
    }
    host.innerHTML =
      '<p style="margin-bottom:.6rem">' + PPC.esc(currentTema.proposta) + '</p>' +
      '<h3 style="font-size:.9rem;margin-top:.8rem">Textos motivadores</h3>' +
      '<ul style="margin-bottom:.6rem">' + currentTema.motivadores.map(function (m) { return '<li>' + PPC.esc(m) + '</li>'; }).join('') + '</ul>' +
      '<h3 style="font-size:.9rem">Repertório possível</h3>' +
      '<ul style="margin:0">' + (currentTema.repertorio || []).map(function (r) { return '<li>' + PPC.esc(r) + '</li>'; }).join('') + '</ul>';
  }

  function irParaEditor(id) {
    var tab = PPC.qs('[data-tab="editor"]');
    if (tab) tab.click();
    var sel = PPC.qs('#selTemaEditor');
    if (id && sel) { sel.value = id; setTema(id); }
    setTimeout(function () { PPC.qs('#textoRedacao').focus(); }, 120);
  }

  function contar() {
    var txt = PPC.qs('#textoRedacao').value || '';
    var palavras = txt.trim() ? txt.trim().split(/\s+/).filter(function (w) { return w.length; }).length : 0;
    var chars = txt.length;
    var paragrafos = txt.trim() ? txt.trim().split(/\n\s*\n|\n/).filter(function (p) { return p.trim().length; }).length : 0;
    // ~55 caracteres por linha manuscrita em folha de redação
    var linhas = Math.max(0, Math.ceil(chars / 55));
    PPC.qs('#contadorInline').textContent = palavras + ' palavras · ' + chars + ' caracteres';
    PPC.qs('#contLinhas').textContent = linhas + ' linhas estimadas';
    PPC.qs('#contParagrafos').textContent = paragrafos + ' parágrafos';
  }

  function salvar() {
    var txt = PPC.qs('#textoRedacao').value.trim();
    if (txt.split(/\s+/).filter(Boolean).length < 20) {
      PPC.toast('Escreva ao menos algumas frases antes de salvar.', 'err');
      return;
    }
    var d = PPC.getData();
    var existente = currentEssayId ? d.essays.filter(function (e) { return e.id === currentEssayId; })[0] : null;
    var essay = {
      id: existente ? existente.id : PPC.uid('red'),
      temaId: currentTema ? currentTema.id : null,
      temaTitulo: currentTema ? currentTema.titulo : 'Tema livre',
      titulo: PPC.qs('#tituloRedacao').value.trim(),
      texto: txt,
      palavras: txt.split(/\s+/).filter(Boolean).length,
      updatedAt: new Date().toISOString(),
      createdAt: existente ? existente.createdAt : new Date().toISOString(),
      avaliacao: existente ? existente.avaliacao || null : null
    };
    PPC.saveEssay(essay);
    currentEssayId = essay.id;
    PPC.logActivity('Redação salva: ' + (essay.titulo || essay.temaTitulo), { type: 'redacao', ref: essay.id });
    PPC.toast('Redação salva no seu progresso.', 'ok');
    renderMinhas();
  }

  function renderRubrica() {
    var host = PPC.qs('#rubrica');
    host.innerHTML = CRITERIOS.map(function (c) {
      return '<div class="rubric-item">' +
        '<div style="flex:1;min-width:180px"><strong style="font-size:.88rem">' + PPC.esc(c.label) + '</strong>' +
        '<p class="muted" style="font-size:.78rem;margin:0">' + PPC.esc(c.desc) + '</p></div>' +
        '<select class="select" data-crit="' + c.id + '" aria-label="Nota para ' + PPC.esc(c.label) + '">' +
          '<option value="0">0 — ausente</option>' +
          '<option value="1">1 — insuficiente</option>' +
          '<option value="2">2 — regular</option>' +
          '<option value="3">3 — bom</option>' +
          '<option value="4">4 — excelente</option>' +
        '</select>' +
      '</div>';
    }).join('');
  }

  function avaliar() {
    var notas = {};
    var total = 0;
    PPC.qsa('[data-crit]').forEach(function (sel) {
      var v = Number(sel.value);
      notas[sel.getAttribute('data-crit')] = v;
      total += v;
    });
    var max = CRITERIOS.length * 4;
    var pct = Math.round((total / max) * 100);
    var nivel = pct >= 85 ? { t: 'Excelente', c: 'var(--green-500)' } :
                pct >= 65 ? { t: 'Bom', c: 'var(--blue-600)' } :
                pct >= 45 ? { t: 'Regular', c: 'var(--yellow-500)' } :
                            { t: 'Precisa de revisão', c: 'var(--red-500)' };
    var fracos = CRITERIOS.filter(function (c) { return notas[c.id] <= 2; });
    var out = PPC.qs('#resultadoAvaliacao');
    out.innerHTML = '<div class="feedback" style="margin-top:1rem;background:var(--surface-3);border-left:4px solid ' + nivel.c + ';color:var(--text)">' +
      '<h4 style="color:' + nivel.c + '">Autoavaliação: ' + total + '/' + max + ' pontos (' + pct + '%) — ' + nivel.t + '</h4>' +
      '<div class="progress-bar" style="margin:.6rem 0 .8rem;height:7px"><i style="width:' + pct + '%;background:' + nivel.c + '"></i></div>' +
      (fracos.length
        ? '<p style="margin:0;font-size:.88rem"><strong>Priorize:</strong> ' + fracos.map(function (c) { return c.label.toLowerCase(); }).join(', ') + '.</p>'
        : '<p style="margin:0;font-size:.88rem">Nenhum critério crítico. Mantenha a revisão e aumente a exigência do seu repertório.</p>') +
      '<p style="margin:.7rem 0 0;font-size:.82rem;opacity:.85">Esta é uma ferramenta de autoavaliação orientativa. Ela não substitui a correção de um professor nem reproduz os critérios específicos de uma banca.</p>' +
    '</div>';
    // salva avaliação na redação atual, se houver
    if (currentEssayId) {
      PPC.updateData(function (d) {
        d.essays.forEach(function (e) {
          if (e.id === currentEssayId) e.avaliacao = { notas: notas, total: total, max: max, pct: pct, at: new Date().toISOString() };
        });
      });
    }
    PPC.logActivity('Autoavaliação de redação: ' + total + '/' + max, { type: 'redacao' });
  }

  function carregarRedacao(id) {
    var d = PPC.getData();
    var e = d.essays.filter(function (x) { return x.id === id; })[0];
    if (!e) return;
    currentEssayId = e.id;
    PPC.qs('[data-tab="editor"]').click();
    PPC.qs('#tituloRedacao').value = e.titulo || '';
    PPC.qs('#textoRedacao').value = e.texto || '';
    var sel = PPC.qs('#selTemaEditor');
    sel.value = e.temaId || '';
    setTema(e.temaId || null);
    contar();
    PPC.toast('Redação carregada no editor.', 'ok');
  }

  function renderMinhas() {
    var host = PPC.qs('#minhasRedacoes');
    var d = PPC.getData();
    var list = d.essays || [];
    if (!list.length) {
      host.innerHTML = '<div class="empty-state card"><h2>Nenhuma redação salva</h2>' +
        '<p>Escreva sua primeira redação no editor. O texto fica salvo neste navegador, junto com o seu progresso.</p>' +
        '<button class="btn btn-primary" type="button" id="btnIrEditor">Abrir editor</button></div>';
      var b = PPC.qs('#btnIrEditor');
      if (b) b.addEventListener('click', function () { PPC.qs('[data-tab="editor"]').click(); });
      return;
    }
    host.innerHTML = '<div class="grid grid-2">' + list.map(function (e) {
      var av = e.avaliacao ? e.avaliacao.total + '/' + e.avaliacao.max + ' (' + e.avaliacao.pct + '%)' : 'Não avaliada';
      return '<article class="card">' +
        '<div style="display:flex;gap:.4rem;flex-wrap:wrap;margin-bottom:.6rem">' +
          '<span class="badge badge-blue">' + PPC.esc(e.temaTitulo || 'Tema livre') + '</span>' +
          '<span class="badge">' + (e.palavras || 0) + ' palavras</span>' +
          (e.avaliacao ? '<span class="badge badge-green">' + PPC.esc(av) + '</span>' : '') +
        '</div>' +
        '<h3 style="font-size:1.02rem">' + PPC.esc(e.titulo || 'Sem título') + '</h3>' +
        '<p style="font-size:.88rem;color:var(--muted)">' + PPC.esc(e.texto.slice(0, 190)) + (e.texto.length > 190 ? '…' : '') + '</p>' +
        '<p class="muted" style="font-size:.78rem">Salva em ' + PPC.formatDateTime(e.updatedAt) + '</p>' +
        '<div class="btn-row">' +
          '<button class="btn btn-sm btn-primary" type="button" data-abrir="' + e.id + '">Continuar escrevendo</button>' +
          '<button class="btn btn-sm btn-outline" type="button" data-baixar="' + e.id + '">Baixar .txt</button>' +
          '<button class="btn btn-sm btn-ghost" type="button" data-excluir="' + e.id + '">Excluir</button>' +
        '</div>' +
      '</article>';
    }).join('') + '</div>';

    PPC.qsa('[data-abrir]', host).forEach(function (b) {
      b.addEventListener('click', function () { carregarRedacao(b.getAttribute('data-abrir')); });
    });
    PPC.qsa('[data-baixar]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var e = d.essays.filter(function (x) { return x.id === b.getAttribute('data-baixar'); })[0];
        if (!e) return;
        var blob = new Blob([(e.titulo ? e.titulo + '\n\n' : '') + e.texto], { type: 'text/plain;charset=utf-8' });
        var url = URL.createObjectURL(blob);
        var a = document.createElement('a');
        a.href = url;
        a.download = 'redacao-' + (e.titulo || e.id).replace(/[^\w\-]+/g, '-').slice(0, 40) + '.txt';
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
      });
    });
    PPC.qsa('[data-excluir]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var id = b.getAttribute('data-excluir');
        PPC.confirm('Excluir esta redação? A ação não pode ser desfeita.', function () {
          PPC.updateData(function (data) {
            data.essays = data.essays.filter(function (x) { return x.id !== id; });
          });
          if (currentEssayId === id) currentEssayId = null;
          renderMinhas();
          PPC.toast('Redação excluída.', 'ok');
        }, { title: 'Excluir redação', danger: true, confirmLabel: 'Excluir' });
      });
    });
  }

  /* ---------- Conectivos ---------- */
  function renderConectivos() {
    var linhas = [
      ['Adição', 'além disso, ademais, outrossim, ainda, somado a isso'],
      ['Causa', 'porquanto, visto que, uma vez que, em razão de, dado que'],
      ['Consequência', 'por conseguinte, desse modo, assim, em decorrência disso'],
      ['Oposição', 'entretanto, contudo, todavia, não obstante, em contrapartida'],
      ['Conclusão', 'portanto, em síntese, diante disso, conclui-se que'],
      ['Exemplificação', 'a exemplo de, como ilustra, tal como'],
      ['Finalidade', 'a fim de, com o intuito de, para que'],
      ['Concessão', 'embora, se por um lado, ainda que'],
      ['Explicação', 'isto é, ou seja, vale dizer, a saber'],
      ['Tempo', 'quando, enquanto, logo que, à medida que']
    ];
    var host = PPC.qs('#tabelaConectivos');
    host.innerHTML = '<table class="tbl"><thead><tr><th>Função</th><th>Conectivos</th></tr></thead><tbody>' +
      linhas.map(function (l) {
        return '<tr><td><strong>' + l[0] + '</strong></td><td>' + l[1] + '</td></tr>';
      }).join('') + '</tbody></table>';
  }

  /* ---------- Tabs ---------- */
  function initTabs() {
    var tabs = PPC.qsa('[data-tab]');
    var panels = PPC.qsa('.tab-panel');
    function show(name) {
      tabs.forEach(function (t) {
        var on = t.getAttribute('data-tab') === name;
        t.classList.toggle('active', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
      });
      panels.forEach(function (p) { p.hidden = p.id !== 'tab-' + name; });
    }
    tabs.forEach(function (t) {
      t.addEventListener('click', function () { show(t.getAttribute('data-tab')); });
    });
    var hash = (location.hash || '').replace('#', '');
    if (hash === 'editor') show('editor');
    else if (hash === 'temas') show('temas');
  }

  function init() {
    renderTemas('', '');
    renderConectivos();
    renderRubrica();
    preencherSelectTemas();
    renderMinhas();
    initTabs();
    setTema(null);
    contar();

    var cat = PPC.qs('#filtroCategoria');
    cat.innerHTML = '<option value="">Todas as categorias</option>' + categorias().map(function (c) {
      return '<option value="' + PPC.esc(c) + '">' + PPC.esc(c) + '</option>';
    }).join('');

    var busca = PPC.qs('#buscaTema');
    function refiltrar() { renderTemas(cat.value, busca.value); }
    cat.addEventListener('change', refiltrar);
    busca.addEventListener('input', PPC.debounce(refiltrar, 180));

    var params = new URLSearchParams(location.search);
    var temaParam = params.get('tema');
    if (temaParam) {
      var t = PPC.themes.filter(function (x) { return x.slug === temaParam || x.id === temaParam; })[0];
      if (t) setTimeout(function () { abrirTema(t.id); }, 200);
    }

    PPC.qs('#textoRedacao').addEventListener('input', contar);
    PPC.qs('#btnLimparTexto').addEventListener('click', function () {
      if (!PPC.qs('#textoRedacao').value.trim()) return;
      PPC.confirm('Limpar o texto do editor? Se não salvou, o conteúdo será perdido.', function () {
        PPC.qs('#textoRedacao').value = '';
        PPC.qs('#tituloRedacao').value = '';
        currentEssayId = null;
        contar();
      }, { title: 'Limpar texto', danger: true, confirmLabel: 'Limpar' });
    });
    PPC.qs('#btnSalvarRedacao').addEventListener('click', salvar);
    PPC.qs('#btnAvaliar').addEventListener('click', avaliar);

    // salvamento automático a cada 30s se houver texto novo
    setInterval(function () {
      var txt = PPC.qs('#textoRedacao').value.trim();
      if (txt.length > 80) {
        PPC.updateData(function (d) {
          d.draft = d.draft || {};
          d.draft.essay = { texto: txt, titulo: PPC.qs('#tituloRedacao').value, temaId: currentTema ? currentTema.id : null, at: new Date().toISOString() };
        });
      }
    }, 30000);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
