/* Banco de questões — filtros, paginação e sorteio */
(function () {
  'use strict';
  var PPC = window.PPC;
  var PAGE = 8;
  var state = { busca: '', assunto: '', nivel: '', formato: '', tipo: '', concurso: '', page: 1, sorteados: null };

  function formatos() {
    var out = [];
    PPC.questions.forEach(function (q) {
      var f = q.estilo || 'Inédita';
      if (out.indexOf(f) < 0) out.push(f);
    });
    return out;
  }
  function concursos() {
    var out = [];
    PPC.questions.forEach(function (q) {
      if (q.concurso && out.indexOf(q.concurso) < 0) out.push(q.concurso);
    });
    return out;
  }

  function filtered() {
    var base = state.sorteados || PPC.questions;
    return base.filter(function (q) {
      if (state.assunto && q.topico !== state.assunto) return false;
      if (state.nivel && q.dificuldade !== state.nivel) return false;
      if (state.formato && (q.estilo || 'Inédita') !== state.formato) return false;
      if (state.tipo && q.tipo !== state.tipo) return false;
      if (state.concurso && q.concurso !== state.concurso) return false;
      if (state.busca) {
        var t = PPC.norm(q.codigo + ' ' + q.enunciado + ' ' + (q.textoBase || '') + ' ' + PPC.topicLabel(q.topico));
        if (t.indexOf(PPC.norm(state.busca)) < 0) return false;
      }
      return true;
    });
  }

  function render(reset) {
    var host = PPC.qs('#listaQuestoes');
    var vazio = PPC.qs('#vazio');
    var list = filtered();
    if (reset) { host.innerHTML = ''; state.page = 1; }
    var shown = Math.min(list.length, state.page * PAGE);
    var slice = list.slice(0, shown);

    PPC.qs('#resumo').innerHTML = '<strong>' + list.length + '</strong> questão(ões) encontrada(s)' +
      (list.length ? ' · exibindo ' + shown : '') +
      (state.assunto ? ' · assunto: ' + PPC.esc(PPC.topicLabel(state.assunto)) : '');

    if (!list.length) {
      host.innerHTML = '';
      vazio.hidden = false;
      vazio.innerHTML = '<div class="empty-state">' +
        '<h3>Nenhuma questão com esses filtros</h3>' +
        '<p>Ajuste os filtros ou limpe a busca.</p>' +
        '<button class="btn btn-outline btn-sm" type="button" id="vazioLimpar">Limpar filtros</button></div>';
      var vl = PPC.qs('#vazioLimpar');
      if (vl) vl.addEventListener('click', function () { PPC.qs('#fLimpar').click(); });
      PPC.qs('#btnMais').style.display = 'none';
      return;
    }
    vazio.hidden = true;
    host.innerHTML = slice.map(function (q) { return '<div data-question-card="' + q.codigo + '"></div>'; }).join('');
    PPC.qsa('[data-question-card]', host).forEach(function (el) {
      var codigo = el.getAttribute('data-question-card');
      var q = PPC.questions.filter(function (x) { return x.codigo === codigo; })[0];
      if (!q) return;
      el.innerHTML = PPC.questionCard(q);
      PPC.bindQuestionCard(el);
    });
    PPC.qs('#btnMais').style.display = shown < list.length ? 'inline-flex' : 'none';
  }

  function initFiltros() {
    var ass = PPC.qs('#fAssunto');
    ass.innerHTML = '<option value="">Todos os assuntos</option>' + PPC.modules.map(function (m) {
      return '<option value="' + m.slug + '">' + m.numero + '. ' + PPC.esc(m.titulo) + '</option>';
    }).join('');

    var f = PPC.qs('#fFormato');
    f.innerHTML = '<option value="">Todos os formatos</option>' + formatos().map(function (x) {
      return '<option value="' + PPC.esc(x) + '">' + PPC.esc(x) + '</option>';
    }).join('');

    var c = PPC.qs('#fConcurso');
    c.innerHTML = '<option value="">Todos os concursos</option>' + concursos().map(function (x) {
      return '<option value="' + PPC.esc(x) + '">' + PPC.esc(x) + '</option>';
    }).join('');

    var params = new URLSearchParams(location.search);
    if (params.get('assunto')) { state.assunto = params.get('assunto'); ass.value = state.assunto; }
    if (params.get('nivel')) { state.nivel = params.get('nivel'); PPC.qs('#fNivel').value = state.nivel; }
    if (params.get('busca')) { state.busca = params.get('busca'); PPC.qs('#fBusca').value = state.busca; }
    if (params.get('tipo')) { state.tipo = params.get('tipo'); PPC.qs('#fTipo').value = state.tipo; }

    PPC.qs('#fBusca').addEventListener('input', PPC.debounce(function (e) { state.busca = e.target.value; render(true); }, 180));
    ass.addEventListener('change', function (e) { state.assunto = e.target.value; render(true); });
    PPC.qs('#fNivel').addEventListener('change', function (e) { state.nivel = e.target.value; render(true); });
    f.addEventListener('change', function (e) { state.formato = e.target.value; render(true); });
    PPC.qs('#fTipo').addEventListener('change', function (e) { state.tipo = e.target.value; render(true); });
    c.addEventListener('change', function (e) { state.concurso = e.target.value; render(true); });

    PPC.qs('#fLimpar').addEventListener('click', function () {
      state = { busca: '', assunto: '', nivel: '', formato: '', tipo: '', concurso: '', page: 1, sorteados: null };
      ['#fBusca', '#fAssunto', '#fNivel', '#fFormato', '#fTipo', '#fConcurso'].forEach(function (s) {
        PPC.qs(s).value = '';
      });
      render(true);
    });

    PPC.qs('#btnMais').addEventListener('click', function () { state.page++; render(false); });

    PPC.qs('#btnSortear').addEventListener('click', function () {
      var pool = PPC.questions.slice();
      // embaralha
      for (var i = pool.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
      }
      state.sorteados = pool.slice(0, 10);
      state.page = 1;
      PPC.toast('10 questões sorteadas para você. Bom treino!', 'ok');
      render(true);
    });
  }

  function init() {
    initFiltros();
    render(true);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
