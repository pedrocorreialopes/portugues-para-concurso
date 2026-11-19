/* Resultado do simulado — métricas, gráficos, gabarito e comentários */
(function () {
  'use strict';
  var PPC = window.PPC;
  var result = null;
  var charts = [];

  function cor(pct) {
    if (pct >= 70) return 'var(--green-500)';
    if (pct >= 50) return 'var(--yellow-500)';
    return 'var(--red-500)';
  }
  function mensagem(pct) {
    if (pct >= 90) return { t: 'Excelente desempenho!', d: 'Você domina a maior parte do conteúdo. Mantenha as revisões espaçadas e aumente gradualmente o nível de dificuldade.' };
    if (pct >= 70) return { t: 'Bom desempenho!', d: 'Você está no caminho certo. Revise os assuntos com menor aproveitamento e refaça as questões erradas.' };
    if (pct >= 50) return { t: 'Desempenho intermediário', d: 'Você já domina parte do conteúdo. Priorize os assuntos com maior índice de erro e volte às aulas correspondentes.' };
    if (pct >= 30) return { t: 'Precisa de reforço', d: 'Revise os conceitos básicos das aulas indicadas abaixo antes de fazer um novo simulado. Estude os erros um por um.' };
    return { t: 'Vamos recomeçar com método', d: 'Comece pelas aulas de fundamentos (interpretação, ortografia, classes de palavras) e refaça este simulado depois de estudar os assuntos com erro.' };
  }

  function linhaResumo(label, value, extra) {
    return '<div class="result-line"><span>' + label + '</span><strong' + (extra ? ' style="' + extra + '"' : '') + '>' + value + '</strong></div>';
  }

  function render() {
    result = PPC.storage.get(PPC.KEYS.lastResult, null);
    if (!result || !result.details) {
      PPC.qs('#semResultado').hidden = false;
      PPC.qs('#resultado').hidden = true;
      return;
    }
    PPC.qs('#semResultado').hidden = true;
    var host = PPC.qs('#resultado');
    host.hidden = false;
    var msg = mensagem(result.pct);
    var erradas = result.details.filter(function (d) { return !d.isCorrect; });

    host.innerHTML = '' +
      '<nav aria-label="Trilha de navegação" style="font-size:.84rem;color:var(--muted);margin-bottom:.8rem">' +
        '<a href="index.html">Início</a> <span aria-hidden="true">›</span> <a href="simulados.html">Simulados</a> <span aria-hidden="true">›</span> <span>Resultado</span>' +
      '</nav>' +
      '<div class="section-head" style="max-width:none;margin-bottom:1.4rem">' +
        '<span class="eyebrow">Resultado do simulado</span>' +
        '<h1>Seu desempenho</h1>' +
        '<p class="lead">Simulado concluído em ' + PPC.formatDateTime(result.finishedAt) + '. Confira abaixo o resumo, os gráficos e o gabarito comentado de todas as questões.</p>' +
      '</div>' +

      /* Resumo principal */
      '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));gap:1.15rem;margin-bottom:1.4rem">' +
        '<div class="card text-center">' +
          '<div class="score-ring" id="scoreRing" style="--pct:' + result.pct + ';--ring-color:' + cor(result.pct) + '">' +
            '<div class="score-inner"><div class="score-num">' + result.pct + '%</div><div class="score-sub">Aproveitamento</div></div>' +
          '</div>' +
          '<h2 style="font-size:1.05rem;margin:1rem 0 .4rem">' + PPC.esc(msg.t) + '</h2>' +
          '<p class="muted" style="font-size:.88rem;margin:0">' + PPC.esc(msg.d) + '</p>' +
        '</div>' +
        '<div class="card">' +
          '<h3 style="font-size:1rem">Resumo</h3>' +
          linhaResumo('Total de questões', result.total) +
          linhaResumo('Acertos', result.correct, 'color:var(--green-500)') +
          linhaResumo('Erros', result.wrong, 'color:var(--red-500)') +
          (result.blank ? linhaResumo('Em branco', result.blank, 'color:var(--muted)') : '') +
          linhaResumo('Aproveitamento', result.pct + '%') +
          linhaResumo('Nota (0 a 100)', result.nota + '/100', 'color:' + cor(result.pct)) +
          linhaResumo('Tempo utilizado', PPC.formatDuration(result.seconds)) +
          linhaResumo('Média por questão', PPC.formatDuration(result.total ? result.seconds / result.total : 0)) +
        '</div>' +
        '<div class="card">' +
          '<h3 style="font-size:1rem">Acertos x Erros</h3>' +
          '<div class="chart-wrap sm"><canvas id="chartPizza" role="img" aria-label="Gráfico de acertos e erros"></canvas></div>' +
        '</div>' +
      '</div>' +

      /* Gráficos */
      '<div class="grid grid-2" style="margin-bottom:1.4rem">' +
        '<div class="card">' +
          '<h3 style="font-size:1.05rem">Aproveitamento por assunto</h3>' +
          '<p class="muted" style="font-size:.84rem">Percentual de acerto em cada assunto do simulado. Assuntos mais baixos exigem revisão prioritária.</p>' +
          '<div class="chart-wrap"><canvas id="chartAssuntos" role="img" aria-label="Gráfico de aproveitamento por assunto"></canvas></div>' +
        '</div>' +
        '<div class="card">' +
          '<h3 style="font-size:1.05rem">Assuntos com maior dificuldade</h3>' +
          '<p class="muted" style="font-size:.84rem">Ordenados do pior para o melhor desempenho. Clique para estudar a aula correspondente.</p>' +
          '<div id="listaDificuldade"></div>' +
        '</div>' +
      '</div>' +

      /* Ações */
      '<div class="card" style="margin-bottom:1.6rem;display:flex;flex-wrap:wrap;gap:.7rem;align-items:center;justify-content:space-between">' +
        '<div><h3 style="font-size:1rem;margin-bottom:.2rem">E agora?</h3>' +
        '<p class="muted" style="font-size:.86rem;margin:0">Refaça o simulado com novas questões ou estude os erros para consolidar.</p></div>' +
        '<div class="btn-row">' +
          '<button class="btn btn-primary" type="button" id="btnRefazer">' + PPC.icon('refresh') + 'Refazer simulado</button>' +
          '<button class="btn btn-accent" type="button" id="btnEstudarErros">' + PPC.icon('book') + 'Estudar meus erros</button>' +
          '<button class="btn btn-outline" type="button" id="btnExportar">' + PPC.icon('download') + 'Exportar em PDF</button>' +
        '</div>' +
      '</div>' +

      /* Gabarito */
      '<h2 style="font-size:1.35rem">Gabarito e comentários</h2>' +
      '<p class="muted" style="font-size:.9rem;margin-bottom:1.1rem">Todas as ' + result.total + ' questões com a alternativa correta destacada, sua resposta, explicação e comentário pedagógico.</p>' +
      '<div id="gabarito" class="grid" style="gap:1.1rem"></div>';

    renderDificuldade();
    renderGabarito();
    setTimeout(function () { renderCharts(); }, 120);
    bindAcoes(erradas);
  }

  function renderDificuldade() {
    var host = PPC.qs('#listaDificuldade');
    var list = (result.topics || []).slice(0, 8);
    host.innerHTML = list.map(function (t) {
      return '<div style="margin-bottom:.75rem">' +
        '<div style="display:flex;justify-content:space-between;gap:.6rem;font-size:.86rem;margin-bottom:.25rem">' +
          '<a href="aula.html?modulo=' + t.topico + '" style="font-weight:600">' + PPC.esc(t.label) + '</a>' +
          '<span style="color:' + cor(t.pct) + ';font-weight:700">' + t.correct + '/' + t.total + ' · ' + t.pct + '%</span>' +
        '</div>' +
        '<div class="progress-bar" style="height:6px"><i style="width:' + t.pct + '%;background:' + cor(t.pct) + '"></i></div>' +
      '</div>';
    }).join('');
    var piores = (result.topics || []).filter(function (t) { return t.pct < 100; }).slice(0, 3);
    if (piores.length) {
      host.innerHTML += '<div class="info-box box-tip" style="margin-top:1rem">' +
        '<h4>' + PPC.icon('target') + 'Prioridade de revisão</h4>' +
        '<ul style="margin:0">' + piores.map(function (t) {
          return '<li><a href="aula.html?modulo=' + t.topico + '">' + PPC.esc(t.label) + '</a> — ' + t.pct + '% de acerto</li>';
        }).join('') + '</ul></div>';
    }
  }

  function renderGabarito() {
    var host = PPC.qs('#gabarito');
    var letters = ['A', 'B', 'C', 'D', 'E'];
    host.innerHTML = result.details.map(function (d, idx) {
      var cls = d.isCorrect ? 'ok' : 'err';
      var titulo = d.isCorrect ? 'Acertou' : (d.chosen == null ? 'Em branco — gabarito: ' + letters[d.correctIndex] : 'Errou — gabarito: ' + letters[d.correctIndex]);
      return '<article class="question-card">' +
        '<div class="q-head">' +
          '<span class="badge ' + (d.isCorrect ? 'badge-green' : 'badge-red') + '">Questão ' + (idx + 1) + ' — ' + titulo + '</span>' +
          '<span class="badge badge-blue">' + PPC.esc(PPC.topicLabel(d.topico)) + '</span>' +
          '<span class="badge">' + PPC.esc(PPC.difficultyLabel(d.dificuldade)) + '</span>' +
          '<span class="muted" style="font-size:.76rem;margin-left:auto">' + PPC.esc(d.codigo) + '</span>' +
        '</div>' +
        (d.textoBase ? '<div class="q-texto-base">' + PPC.esc(d.textoBase) + '</div>' : '') +
        '<p class="q-enunciado">' + PPC.esc(d.enunciado) + '</p>' +
        '<ul class="alternatives">' +
          d.alternativas.map(function (alt, i) {
            var c = 'alt disabled';
            if (i === d.correctIndex) c += ' correct';
            else if (i === d.chosen) c += ' wrong';
            return '<li><button type="button" class="' + c + '" tabindex="-1"><span class="letra">' + letters[i] + '</span><span>' + PPC.esc(alt) + '</span></button></li>';
          }).join('') +
        '</ul>' +
        '<div class="feedback ' + cls + '" style="margin-top:1rem">' +
          '<h4>' + (d.isCorrect ? 'Sua resposta está correta' : 'Sua resposta: ' + (d.chosen == null ? 'em branco' : letters[d.chosen])) + '</h4>' +
          '<span class="fb-label">Explicação</span><p>' + PPC.esc(d.explicacao) + '</p>' +
          (d.comentario ? '<span class="fb-label">Comentário pedagógico</span><p>' + PPC.esc(d.comentario) + '</p>' : '') +
          (d.origem ? '<p style="font-size:.78rem;opacity:.85;margin:.5rem 0 0">' + PPC.esc(d.origem) + '</p>' : '') +
        '</div>' +
        '<div class="btn-row" style="margin-top:.8rem">' +
          '<a class="btn btn-sm btn-outline" href="aula.html?modulo=' + d.topico + '">Estudar este assunto</a>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderCharts() {
    if (typeof Chart === 'undefined') {
      PPC.qsa('.chart-wrap').forEach(function (w) {
        w.innerHTML = '<p class="muted" style="font-size:.85rem">Gráfico indisponível (sem conexão). Os números estão no resumo ao lado.</p>';
      });
      return;
    }
    charts.forEach(function (c) { try { c.destroy(); } catch (e) {} });
    charts = [];
    var dark = PPC.getTheme() === 'dark';
    var textColor = dark ? '#c3d6ec' : '#33547a';
    var gridColor = dark ? 'rgba(148,174,203,.16)' : 'rgba(91,118,153,.16)';

    var pizza = document.getElementById('chartPizza');
    if (pizza) {
      charts.push(new Chart(pizza, {
        type: 'doughnut',
        data: {
          labels: ['Acertos', 'Erros'],
          datasets: [{
            data: [result.correct, result.wrong],
            backgroundColor: ['#17a673', '#e0453c'],
            borderWidth: 0,
            hoverOffset: 6
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          cutout: '62%',
          plugins: {
            legend: { position: 'bottom', labels: { color: textColor, font: { size: 12 }, padding: 14, usePointStyle: true } },
            tooltip: {
              callbacks: {
                label: function (ctx) {
                  var total = result.total || 1;
                  return ctx.label + ': ' + ctx.parsed + ' (' + Math.round(ctx.parsed / total * 100) + '%)';
                }
              }
            }
          }
        }
      }));
    }

    var ass = document.getElementById('chartAssuntos');
    if (ass) {
      var topics = (result.topics || []).slice().sort(function (a, b) { return b.pct - a.pct; });
      charts.push(new Chart(ass, {
        type: 'bar',
        data: {
          labels: topics.map(function (t) { return t.label.length > 26 ? t.label.slice(0, 24) + '…' : t.label; }),
          datasets: [{
            label: 'Aproveitamento (%)',
            data: topics.map(function (t) { return t.pct; }),
            backgroundColor: topics.map(function (t) {
              return t.pct >= 70 ? 'rgba(23,166,115,.85)' : (t.pct >= 50 ? 'rgba(255,196,46,.9)' : 'rgba(224,69,60,.85)');
            }),
            borderRadius: 6,
            maxBarThickness: 26
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return c.parsed.x + '% de acerto'; } } } },
          scales: {
            x: { min: 0, max: 100, ticks: { color: textColor, font: { size: 11 }, callback: function (v) { return v + '%'; } }, grid: { color: gridColor } },
            y: { ticks: { color: textColor, font: { size: 11 } }, grid: { display: false } }
          }
        }
      }));
    }
  }

  function bindAcoes(erradas) {
    PPC.qs('#btnRefazer').addEventListener('click', function () {
      var cfg = result.config || {};
      var pool = PPC.questions.filter(function (q) {
        if (cfg.nivel && cfg.nivel !== 'misto' && q.dificuldade !== cfg.nivel) return false;
        if (cfg.assuntos && cfg.assuntos.length && cfg.assuntos.indexOf(q.topico) < 0) return false;
        if (cfg.formato && (q.estilo || 'Inédita') !== cfg.formato) return false;
        if (cfg.concurso && q.concurso !== cfg.concurso) return false;
        return true;
      });
      var arr = pool.slice();
      for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var t = arr[i]; arr[i] = arr[j]; arr[j] = t;
      }
      var n = Math.min(result.total, arr.length);
      var exam = {
        id: PPC.uid('exam'),
        codigos: arr.slice(0, n).map(function (q) { return q.codigo; }),
        config: cfg,
        startedAt: new Date().toISOString(),
        current: 0, answers: {}, flagged: [], finished: false
      };
      PPC.storage.set(PPC.KEYS.activeExam, exam);
      location.href = 'simulado.html';
    });

    PPC.qs('#btnEstudarErros').addEventListener('click', function () {
      if (!erradas.length) {
        PPC.toast('Você não teve erros neste simulado. Parabéns!', 'ok');
        return;
      }
      var porTopico = {};
      erradas.forEach(function (d) {
        porTopico[d.topico] = porTopico[d.topico] || [];
        porTopico[d.topico].push(d);
      });
      var html = '<h2>' + PPC.icon('book') + ' Estude seus erros</h2>' +
        '<p style="font-size:.9rem;color:var(--muted)">Você errou ' + erradas.length + ' questão(ões) em ' + Object.keys(porTopico).length + ' assunto(s). Comece pelo assunto com mais erros e leia a aula antes de refazer as questões.</p>';
      Object.keys(porTopico).sort(function (a, b) { return porTopico[b].length - porTopico[a].length; }).forEach(function (t) {
        html += '<div style="border-top:1px solid var(--border);padding-top:.8rem;margin-top:.8rem">' +
          '<div style="display:flex;justify-content:space-between;gap:.6rem;align-items:center;flex-wrap:wrap">' +
            '<strong>' + PPC.esc(PPC.topicLabel(t)) + '</strong>' +
            '<span class="badge badge-red">' + porTopico[t].length + ' erro(s)</span>' +
          '</div>' +
          '<ul style="font-size:.85rem;margin:.5rem 0 0">' + porTopico[t].map(function (d) {
            return '<li><span class="muted" style="font-size:.78rem">' + PPC.esc(d.codigo) + '</span> ' + PPC.esc(d.enunciado.slice(0, 96)) + (d.enunciado.length > 96 ? '…' : '') + '</li>';
          }).join('') + '</ul>' +
          '<div class="btn-row" style="margin-top:.6rem">' +
            '<a class="btn btn-sm btn-primary" href="aula.html?modulo=' + t + '">Estudar a aula</a>' +
            '<a class="btn btn-sm btn-outline" href="questoes.html?assunto=' + t + '">Refazer questões</a>' +
          '</div>' +
        '</div>';
      });
      html += '<div class="modal-actions"><button class="btn btn-outline" data-modal-close>Fechar</button></div>';
      PPC.openModal(html, { label: 'Estudar meus erros' });
    });

    PPC.qs('#btnExportar').addEventListener('click', function () {
      PPC.toast('Abrindo a janela de impressão: escolha "Salvar como PDF" no destino.', '');
      setTimeout(function () { window.print(); }, 400);
    });
  }

  function init() {
    render();
    // redesenha gráficos quando o tema muda
    var observer = new MutationObserver(PPC.debounce(function () {
      if (result) renderCharts();
    }, 200));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
