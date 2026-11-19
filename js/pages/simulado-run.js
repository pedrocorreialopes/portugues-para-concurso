/* Execução do simulado — navegação, cronômetro, marcação, finalização */
(function () {
  'use strict';
  var PPC = window.PPC;
  var exam = null;
  var questions = [];
  var timerId = null;
  var elapsed = 0;

  function load() {
    exam = PPC.storage.get(PPC.KEYS.activeExam, null);
    if (!exam || !exam.codigos || !exam.codigos.length) return false;
    var map = {};
    PPC.questions.forEach(function (q) { map[q.codigo] = q; });
    questions = exam.codigos.map(function (c) { return map[c]; }).filter(Boolean);
    if (!questions.length) return false;
    // tempo decorrido desde o início (persistente entre recarregamentos)
    elapsed = Math.max(0, Math.round((Date.now() - new Date(exam.startedAt).getTime()) / 1000));
    return true;
  }

  function save() {
    if (!exam) return;
    exam.current = exam.current || 0;
    PPC.storage.set(PPC.KEYS.activeExam, exam);
  }

  function startTimer() {
    var text = PPC.qs('#timerText');
    var wrap = PPC.qs('#timer');
    function tick() {
      elapsed++;
      text.textContent = PPC.formatSeconds(elapsed);
      if (elapsed > 5400) wrap.classList.add('low');
    }
    text.textContent = PPC.formatSeconds(elapsed);
    timerId = setInterval(tick, 1000);
  }

  function progress() {
    var total = questions.length;
    var answered = questions.filter(function (q) { return exam.answers[q.codigo] != null; }).length;
    var pct = Math.round((answered / total) * 100);
    PPC.qs('#progressFill').style.width = pct + '%';
    PPC.qs('#progressText').textContent = answered + ' de ' + total + ' respondidas';
    PPC.qs('#progressPct').textContent = pct + '%';
  }

  function renderMap() {
    var host = PPC.qs('#qmap');
    host.innerHTML = questions.map(function (q, i) {
      var cls = '';
      if (exam.answers[q.codigo] != null) cls += ' answered';
      if ((exam.flagged || []).indexOf(q.codigo) >= 0) cls += ' flagged';
      if (i === exam.current) cls += ' current';
      return '<button type="button" class="' + cls + '" data-go="' + i + '" aria-label="Ir para questão ' + (i + 1) + '"' +
        (i === exam.current ? ' aria-current="true"' : '') + '>' + (i + 1) + '</button>';
    }).join('');
    PPC.qsa('[data-go]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        exam.current = Number(b.getAttribute('data-go'));
        save(); renderQuestion();
      });
    });
  }

  function renderQuestion() {
    var q = questions[exam.current];
    if (!q) return;
    var letters = ['A', 'B', 'C', 'D', 'E'];
    var chosen = exam.answers[q.codigo];
    var flagged = (exam.flagged || []).indexOf(q.codigo) >= 0;

    PPC.qs('#examCard').innerHTML =
      '<div class="q-head">' +
        '<span class="badge badge-blue">Questão ' + (exam.current + 1) + ' de ' + questions.length + '</span>' +
        '<span class="badge">' + PPC.esc(PPC.topicLabel(q.topico)) + '</span>' +
        '<span class="badge badge-yellow">' + PPC.esc(PPC.difficultyLabel(q.dificuldade)) + '</span>' +
        (flagged ? '<span class="badge badge-red">Para revisão</span>' : '') +
      '</div>' +
      (q.textoBase ? '<div class="q-texto-base">' + PPC.esc(q.textoBase) + '</div>' : '') +
      '<p class="q-enunciado" style="font-size:1.05rem">' + PPC.esc(q.enunciado) + '</p>' +
      '<ul class="alternatives">' +
        q.alternativas.map(function (alt, i) {
          return '<li><button type="button" class="alt' + (chosen === i ? ' selected' : '') + '" data-alt="' + i + '">' +
            '<span class="letra">' + letters[i] + '</span><span>' + PPC.esc(alt) + '</span></button></li>';
        }).join('') +
      '</ul>' +
      '<div class="btn-row" style="margin-top:1rem">' +
        (chosen != null ? '<button class="btn btn-ghost btn-sm" type="button" id="btnLimparAlt">Limpar resposta</button>' : '') +
      '</div>';

    PPC.qsa('[data-alt]').forEach(function (b) {
      b.addEventListener('click', function () {
        var i = Number(b.getAttribute('data-alt'));
        exam.answers[q.codigo] = i;
        save();
        renderQuestion();
        progress();
      });
    });
    var limpar = PPC.qs('#btnLimparAlt');
    if (limpar) limpar.addEventListener('click', function () {
      delete exam.answers[q.codigo];
      save(); renderQuestion(); progress();
    });

    var btnFlag = PPC.qs('#btnFlag');
    btnFlag.textContent = flagged ? 'Remover marcação' : 'Marcar para revisão';
    btnFlag.className = 'btn ' + (flagged ? 'btn-accent' : 'btn-outline');

    PPC.qs('#btnAnterior').disabled = exam.current === 0;
    PPC.qs('#btnProxima').textContent = exam.current === questions.length - 1 ? 'Última questão' : 'Próxima →';
    PPC.qs('#btnProxima').disabled = exam.current === questions.length - 1;

    var info = PPC.qs('#examInfo');
    if (info) {
      var cfg = exam.config || {};
      var niveis = cfg.nivel === 'misto' ? 'Nível misto' : 'Nível ' + PPC.difficultyLabel(cfg.nivel).toLowerCase();
      var ass = cfg.assuntos && cfg.assuntos.length ? cfg.assuntos.length + ' assunto(s) selecionado(s)' : 'Todas as matérias';
      info.textContent = questions.length + ' questões · ' + niveis + ' · ' + ass;
    }

    renderMap();
    progress();
  }

  function finalizar(force) {
    var pendentes = questions.filter(function (q) { return exam.answers[q.codigo] == null; }).length;
    var doFinish = function () {
      clearInterval(timerId);
      var result = buildResult();
      PPC.storage.set(PPC.KEYS.lastResult, result);
      PPC.storage.remove(PPC.KEYS.activeExam);
      // registra cada resposta no progresso do estudante
      questions.forEach(function (q) {
        var chosen = exam.answers[q.codigo];
        if (chosen != null) PPC.recordAnswer(q.codigo, chosen, chosen === q.correta, q.topico);
      });
      PPC.addStudySeconds(elapsed);
      PPC.addExam({
        id: result.id, total: result.total, correct: result.correct, wrong: result.wrong,
        pct: result.pct, nota: result.nota, seconds: result.seconds,
        finishedAt: result.finishedAt,
        topics: result.topics
      });
      location.href = 'resultado.html';
    };
    if (pendentes > 0) {
      PPC.confirm('Você ainda tem ' + pendentes + ' questão(ões) sem resposta. As questões em branco serão contabilizadas como erro. Deseja finalizar?',
        doFinish, { title: 'Finalizar simulado', confirmLabel: 'Finalizar agora' });
    } else {
      doFinish();
    }
    void force;
  }

  function buildResult() {
    var details = questions.map(function (q) {
      var chosen = exam.answers[q.codigo];
      return {
        codigo: q.codigo, topico: q.topico, dificuldade: q.dificuldade,
        chosen: chosen == null ? null : chosen,
        correctIndex: q.correta,
        isCorrect: chosen === q.correta,
        enunciado: q.enunciado,
        textoBase: q.textoBase || '',
        alternativas: q.alternativas,
        explicacao: q.explicacao,
        comentario: q.comentario || '',
        origem: q.origem || ''
      };
    });
    var correct = details.filter(function (d) { return d.isCorrect; }).length;
    var total = details.length;
    var pct = PPC.pct(correct, total);
    var topics = {};
    details.forEach(function (d) {
      var t = d.topico;
      topics[t] = topics[t] || { total: 0, correct: 0 };
      topics[t].total++;
      if (d.isCorrect) topics[t].correct++;
    });
    return {
      id: PPC.uid('res'),
      total: total,
      correct: correct,
      wrong: total - correct,
      blank: details.filter(function (d) { return d.chosen == null; }).length,
      pct: pct,
      nota: Math.round(pct),
      seconds: elapsed,
      finishedAt: new Date().toISOString(),
      startedAt: exam.startedAt,
      config: exam.config,
      details: details,
      topics: Object.keys(topics).map(function (k) {
        return { topico: k, label: PPC.topicLabel(k), total: topics[k].total, correct: topics[k].correct, pct: PPC.pct(topics[k].correct, topics[k].total) };
      }).sort(function (a, b) { return a.pct - b.pct; })
    };
  }

  function init() {
    if (!load()) {
      PPC.qs('#semSimulado').hidden = false;
      PPC.qs('#simuladoAtivo').hidden = true;
      return;
    }
    PPC.qs('#semSimulado').hidden = true;
    PPC.qs('#simuladoAtivo').hidden = false;
    if (exam.current >= questions.length) exam.current = 0;
    renderQuestion();
    startTimer();

    PPC.qs('#btnAnterior').addEventListener('click', function () {
      if (exam.current > 0) { exam.current--; save(); renderQuestion(); }
    });
    PPC.qs('#btnProxima').addEventListener('click', function () {
      if (exam.current < questions.length - 1) { exam.current++; save(); renderQuestion(); }
    });
    PPC.qs('#btnFlag').addEventListener('click', function () {
      var q = questions[exam.current];
      exam.flagged = exam.flagged || [];
      var i = exam.flagged.indexOf(q.codigo);
      if (i >= 0) exam.flagged.splice(i, 1); else exam.flagged.push(q.codigo);
      save(); renderQuestion();
    });
    ['#btnFinalizar', '#btnFinalizarTopo', '#btnFinalizarLado'].forEach(function (sel) {
      var el = PPC.qs(sel);
      if (el) el.addEventListener('click', function () { finalizar(true); });
    });
    PPC.qs('#btnAbortar').addEventListener('click', function () {
      PPC.confirm('O simulado atual será descartado e não será registrado no seu histórico. Deseja abandonar?', function () {
        clearInterval(timerId);
        PPC.storage.remove(PPC.KEYS.activeExam);
        location.href = 'simulados.html';
      }, { title: 'Abandonar simulado', danger: true, confirmLabel: 'Abandonar' });
    });

    document.addEventListener('keydown', function (e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') PPC.qs('#btnAnterior').click();
      if (e.key === 'ArrowRight') PPC.qs('#btnProxima').click();
      var n = parseInt(e.key, 10);
      if (n >= 1 && n <= 5) {
        var alts = PPC.qsa('[data-alt]');
        if (alts[n - 1]) alts[n - 1].click();
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
