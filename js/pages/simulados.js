/* Configuração de simulados */
(function () {
  'use strict';
  var PPC = window.PPC;
  var QTD = [5, 10, 15, 20, 30, 40, 50, 100];
  var state = { qtd: 20, nivel: 'misto', assuntos: [], formato: '', concurso: '' };

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

  function pool() {
    return PPC.questions.filter(function (q) {
      if (state.nivel !== 'misto' && q.dificuldade !== state.nivel) return false;
      if (state.assuntos.length && state.assuntos.indexOf(q.topico) < 0) return false;
      if (state.formato && (q.estilo || 'Inédita') !== state.formato) return false;
      if (state.concurso && q.concurso !== state.concurso) return false;
      return true;
    });
  }

  function renderQtd() {
    var host = PPC.qs('#qtdOpcoes');
    host.innerHTML = QTD.map(function (n) {
      return '<button type="button" class="chip ' + (state.qtd === n ? 'active' : '') + '" data-qtd="' + n + '">' + n + ' questões</button>';
    }).join('');
    PPC.qsa('[data-qtd]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        state.qtd = Number(b.getAttribute('data-qtd'));
        renderQtd();
        atualizarResumo();
      });
    });
  }

  function renderAssuntos() {
    var host = PPC.qs('#assuntosGrupos');
    var grupos = [];
    PPC.modules.forEach(function (m) {
      if (grupos.indexOf(m.grupo) < 0) grupos.push(m.grupo);
    });
    host.innerHTML = grupos.map(function (g) {
      var mods = PPC.modules.filter(function (m) { return m.grupo === g; });
      return '<fieldset style="border:0;padding:0;margin:0 0 .8rem">' +
        '<legend style="font-size:.76rem;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);font-weight:700;margin-bottom:.35rem">' + PPC.esc(g) + '</legend>' +
        mods.map(function (m) {
          var id = 'as-' + m.slug;
          return '<label class="checkbox-row" for="' + id + '" style="margin-bottom:.28rem">' +
            '<input type="checkbox" id="' + id + '" value="' + m.slug + '" data-assunto>' +
            '<span>' + m.numero + '. ' + PPC.esc(m.titulo) + '</span></label>';
        }).join('') +
      '</fieldset>';
    }).join('');
    PPC.qsa('[data-assunto]', host).forEach(function (cb) {
      cb.addEventListener('change', function () {
        var v = cb.value;
        var i = state.assuntos.indexOf(v);
        if (cb.checked && i < 0) state.assuntos.push(v);
        if (!cb.checked && i >= 0) state.assuntos.splice(i, 1);
        atualizarResumo();
      });
    });
  }

  function atualizarResumo() {
    var p = pool();
    PPC.qs('#resQtd').textContent = state.qtd;
    PPC.qs('#resNivel').textContent = state.nivel === 'misto' ? 'Misto' : PPC.difficultyLabel(state.nivel);
    PPC.qs('#resAssuntos').textContent = state.assuntos.length
      ? state.assuntos.length + (state.assuntos.length === 1 ? ' assunto' : ' assuntos')
      : 'Todos';
    PPC.qs('#resDisp').textContent = p.length + ' questões';
    PPC.qs('#resTempo').textContent = PPC.formatDuration(state.qtd * 90);
    var btn = PPC.qs('#btnIniciar');
    if (p.length < state.qtd) {
      btn.textContent = 'Iniciar com ' + p.length + ' questões';
    } else {
      btn.textContent = 'Iniciar simulado';
    }
    btn.disabled = p.length === 0;
  }

  function renderHistorico() {
    var host = PPC.qs('#historicoRecente');
    var exams = PPC.getData().exams || [];
    if (!exams.length) {
      host.innerHTML = '<p class="muted" style="font-size:.84rem;margin:.5rem 0 0">Nenhum simulado concluído ainda. Seu histórico aparecerá aqui.</p>';
      return;
    }
    host.innerHTML = exams.slice(0, 5).map(function (e) {
      return '<div class="result-line" style="font-size:.82rem">' +
        '<span>' + PPC.formatDate(e.finishedAt) + ' · ' + e.total + ' questões</span>' +
        '<strong style="color:' + (e.pct >= 70 ? 'var(--green-500)' : (e.pct >= 50 ? 'var(--yellow-500)' : 'var(--red-500)')) + '">' + e.pct + '%</strong>' +
      '</div>';
    }).join('') + '<a class="btn btn-sm btn-outline btn-block" href="progresso.html" style="margin-top:.8rem">Ver histórico completo</a>';
  }

  function iniciar() {
    var p = pool();
    if (!p.length) { PPC.toast('Nenhuma questão com esses filtros. Ajuste a configuração.', 'err'); return; }
    // embaralha e corta
    var arr = p.slice();
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
    }
    var n = Math.min(state.qtd, arr.length);
    var selecionadas = arr.slice(0, n).map(function (q) { return q.codigo; });
    var exam = {
      id: PPC.uid('exam'),
      codigos: selecionadas,
      config: { nivel: state.nivel, assuntos: state.assuntos.slice(), formato: state.formato, concurso: state.concurso },
      startedAt: new Date().toISOString(),
      current: 0,
      answers: {},
      flagged: [],
      finished: false
    };
    PPC.storage.set(PPC.KEYS.activeExam, exam);
    location.href = 'simulado.html';
  }

  function init() {
    renderQtd();
    renderAssuntos();

    var f = PPC.qs('#selFormato');
    f.innerHTML = '<option value="">Todos os formatos</option>' + formatos().map(function (x) {
      return '<option value="' + PPC.esc(x) + '">' + PPC.esc(x) + '</option>';
    }).join('');
    f.addEventListener('change', function () { state.formato = f.value; atualizarResumo(); });

    var c = PPC.qs('#selConcurso');
    c.innerHTML = '<option value="">Todos</option>' + concursos().map(function (x) {
      return '<option value="' + PPC.esc(x) + '">' + PPC.esc(x) + '</option>';
    }).join('');
    c.addEventListener('change', function () { state.concurso = c.value; atualizarResumo(); });

    PPC.qs('#selNivel').addEventListener('change', function (e) {
      state.nivel = e.target.value;
      atualizarResumo();
    });

    PPC.qs('#btnTodosAssuntos').addEventListener('click', function () {
      state.assuntos = PPC.modules.map(function (m) { return m.slug; });
      PPC.qsa('[data-assunto]').forEach(function (cb) { cb.checked = true; });
      atualizarResumo();
    });
    PPC.qs('#btnNenhumAssunto').addEventListener('click', function () {
      state.assuntos = [];
      PPC.qsa('[data-assunto]').forEach(function (cb) { cb.checked = false; });
      atualizarResumo();
    });

    PPC.qs('#formSimulado').addEventListener('submit', function (e) {
      e.preventDefault();
      iniciar();
    });
    PPC.qs('#btnResetar').addEventListener('click', function () {
      state = { qtd: 20, nivel: 'misto', assuntos: [], formato: '', concurso: '' };
      PPC.qsa('[data-assunto]').forEach(function (cb) { cb.checked = false; });
      PPC.qs('#selNivel').value = 'misto';
      f.value = ''; c.value = '';
      renderQtd();
      atualizarResumo();
    });

    atualizarResumo();
    renderHistorico();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
