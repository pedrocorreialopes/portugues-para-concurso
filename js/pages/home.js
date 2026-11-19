/* Página inicial */
(function () {
  'use strict';
  var PPC = window.PPC;

  var GRUPOS = [
    { nome: 'Leitura e produção de textos', icon: 'book', desc: 'Interpretação, tipologia e gêneros textuais: a base de toda prova de Português.', cor: '#1b6ef3' },
    { nome: 'Ortografia e acentuação', icon: 'edit', desc: 'Regras de escrita, acentuação gráfica e hífen segundo o Acordo Ortográfico.', cor: '#17a673' },
    { nome: 'Morfologia', icon: 'grid', desc: 'Classes de palavras: substantivo, adjetivo, advérbio, pronome e verbo.', cor: '#ffc42e' },
    { nome: 'Sintaxe', icon: 'target', desc: 'Concordância, regência, crase, pontuação e estrutura da oração e do período.', cor: '#e0453c' },
    { nome: 'Textualidade', icon: 'sparkle', desc: 'Coesão, coerência, semântica e figuras de linguagem no texto.', cor: '#6b4fbb' },
    { nome: 'Produção e norma', icon: 'essay', desc: 'Reescrita de frases, redação oficial e correspondência oficial.', cor: '#0b2545' }
  ];

  var BENEFICIOS = [
    { icon: 'book', titulo: 'Conteúdo didático completo', desc: 'Trinta módulos com introdução, explicação detalhada, exemplos práticos, regras, dicas, erros comuns, resumo e exercícios comentados.' },
    { icon: 'question', titulo: 'Banco de questões com gabarito', desc: 'Questões inéditas identificadas como tal, com enunciado, cinco alternativas, explicação detalhada e comentário pedagógico.' },
    { icon: 'exam', titulo: 'Simulados configuráveis', desc: 'Escolha de 5 a 100 questões, por nível, assunto ou formato. Cronômetro, marcação para revisão e correção completa com gráficos.' },
    { icon: 'essay', titulo: 'Redação com autoavaliação', desc: 'Temas atuais com textos motivadores, repertório sugerido, editor com contador de palavras e rubrica de autoavaliação.' },
    { icon: 'chart', titulo: 'Acompanhamento de desempenho', desc: 'Painel com acertos, erros, aproveitamento, assuntos com maior dificuldade, histórico e tempo de estudo.' },
    { icon: 'calendar', titulo: 'Plano de estudos personalizado', desc: 'Informe dias por semana, horas disponíveis e data da prova para gerar um cronograma com metas, revisões e simulados.' }
  ];

  function grupoStats(nome) {
    var mods = PPC.modules.filter(function (m) { return m.grupo === nome; });
    var qs = PPC.questions.filter(function (q) {
      return mods.some(function (m) { return m.slug === q.topico; });
    });
    return { mods: mods.length, qs: qs.length };
  }

  function renderContadores() {
    var setAll = function (sel, value) {
      PPC.qsa(sel).forEach(function (el) { el.textContent = value; });
    };
    setAll('[data-count-modules]', PPC.modules.length);
    setAll('[data-count-questions]', PPC.questions.length);
    setAll('[data-count-tips]', PPC.tips.length);
    setAll('[data-count-themes]', PPC.themes.length);
  }

  function renderGrupos() {
    var host = PPC.qs('#gruposGrid');
    if (!host) return;
    host.innerHTML = GRUPOS.map(function (g) {
      var s = grupoStats(g.nome);
      var first = PPC.modules.filter(function (m) { return m.grupo === g.nome; })[0];
      var href = 'conteudos.html?grupo=' + encodeURIComponent(g.nome);
      return '<article class="card card-hover mod-card">' +
        '<span class="mod-icon" style="background:' + g.cor + '1a;color:' + g.cor + '">' + PPC.icon(g.icon) + '</span>' +
        '<h3><a href="' + href + '">' + PPC.esc(g.nome) + '</a></h3>' +
        '<p>' + PPC.esc(g.desc) + '</p>' +
        '<div class="mod-meta">' +
          '<span>' + s.mods + ' módulos</span>' +
          '<span>' + s.qs + ' questões</span>' +
        '</div>' +
        '<div class="btn-row" style="margin-top:.9rem">' +
          '<a class="btn btn-sm btn-outline" href="' + href + '">Explorar área</a>' +
          (first ? '<a class="btn btn-sm btn-ghost" href="aula.html?modulo=' + first.slug + '">Começar pela 1ª aula</a>' : '') +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderQuestoes() {
    var host = PPC.qs('#questoesDestaque');
    if (!host) return;
    // pega 2 questões de assuntos diferentes para mostrar diversidade
    var picks = [];
    var seen = {};
    PPC.questions.forEach(function (q) {
      if (!seen[q.topico] && picks.length < 2) { seen[q.topico] = 1; picks.push(q); }
    });
    host.innerHTML = picks.map(function (q) {
      return '<div data-question-card="' + q.codigo + '"></div>';
    }).join('');
    PPC.qsa('[data-question-card]', host).forEach(function (el) {
      var codigo = el.getAttribute('data-question-card');
      var q = PPC.questions.filter(function (x) { return x.codigo === codigo; })[0];
      if (!q) return;
      el.innerHTML = PPC.questionCard(q);
      PPC.bindQuestionCard(el);
    });
  }

  function renderDicas() {
    var host = PPC.qs('#dicasDestaque');
    if (!host) return;
    var picks = PPC.tips.filter(function (t) { return t.destaque; }).slice(0, 3);
    if (picks.length < 3) picks = PPC.tips.slice(0, 3);
    host.innerHTML = picks.map(function (t) {
      return '<article class="card card-hover tip-card">' +
        '<span class="badge badge-yellow">' + PPC.esc(t.categoria) + '</span>' +
        '<h3 style="margin-top:.7rem"><a href="dicas.html?dica=' + encodeURIComponent(t.slug) + '">' + PPC.esc(t.titulo) + '</a></h3>' +
        '<p class="tip-body">' + PPC.esc(t.resumo) + '</p>' +
        '<div class="tip-actions">' +
          '<a class="btn btn-sm btn-outline" href="dicas.html?dica=' + encodeURIComponent(t.slug) + '">Ler dica</a>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  function renderBeneficios() {
    var host = PPC.qs('#beneficiosGrid');
    if (!host) return;
    host.innerHTML = BENEFICIOS.map(function (b) {
      return '<div class="card card-hover">' +
        '<span class="mod-icon">' + PPC.icon(b.icon) + '</span>' +
        '<h3 style="font-size:1.05rem">' + PPC.esc(b.titulo) + '</h3>' +
        '<p style="font-size:.92rem;color:var(--muted);margin:0">' + PPC.esc(b.desc) + '</p>' +
      '</div>';
    }).join('');
  }

  function init() {
    renderContadores();
    renderGrupos();
    renderQuestoes();
    renderDicas();
    renderBeneficios();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
