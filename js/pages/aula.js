/* Página de aula — renderiza módulo completo, exercícios, progresso de leitura */
(function () {
  'use strict';
  var PPC = window.PPC;
  var mod = null;

  function bySlug(slug) {
    return PPC.modules.filter(function (m) { return m.slug === slug; })[0];
  }

  function listaModulosHtml(atual) {
    return PPC.modules.map(function (m) {
      return '<a href="aula.html?modulo=' + m.slug + '"' + (m.slug === atual ? ' class="active"' : '') + '>' +
        m.numero + '. ' + PPC.esc(m.titulo) + '</a>';
    }).join('');
  }

  function box(kind, titulo, icon, inner) {
    return '<div class="info-box box-' + kind + '"><h4>' + PPC.icon(icon) + PPC.esc(titulo) + '</h4>' + inner + '</div>';
  }

  function renderExercicios() {
    var qs = PPC.questions.filter(function (q) { return q.topico === mod.slug; });
    if (!qs.length) {
      return '<p class="muted">As questões deste assunto estão disponíveis no <a href="questoes.html?assunto=' + mod.slug + '">banco de questões</a>.</p>';
    }
    return qs.map(function (q) {
      return '<div data-question-card="' + q.codigo + '"></div>';
    }).join('');
  }

  function render() {
    var params = new URLSearchParams(location.search);
    var slug = params.get('modulo');
    mod = bySlug(slug) || PPC.modules[0];
    if (!mod) {
      PPC.qs('#aulaConteudo').innerHTML = '<div class="empty-state"><h3>Aula não encontrada</h3><p>Volte para <a href="conteudos.html">todos os conteúdos</a>.</p></div>';
      return;
    }
    document.title = mod.titulo + ' — Português para Concursos';
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', mod.resumo);
    PPC.qs('#trilhaAtual').textContent = mod.titulo;
    PPC.qs('#listaModulos').innerHTML = listaModulosHtml(mod.slug);

    var idx = PPC.modules.indexOf(mod);
    var anterior = idx > 0 ? PPC.modules[idx - 1] : null;
    var proximo = idx < PPC.modules.length - 1 ? PPC.modules[idx + 1] : null;
    var fav = PPC.isFavorite(mod.slug);
    var qtdQuestoes = PPC.questions.filter(function (q) { return q.topico === mod.slug; }).length;

    var secoesHtml = (mod.secoes || []).map(function (s, i) {
      return '<h2 class="lesson-block" id="' + s.id + '">' + (i + 1) + '. ' + PPC.esc(s.titulo) + '</h2>' +
        '<div class="lesson-block">' + s.html + '</div>';
    }).join('');

    var exemplosHtml = (mod.exemplos || []).map(function (e) {
      return '<div class="example-line">' +
        '<p style="margin-bottom:.2rem"><strong>' + PPC.esc(e.frase) + '</strong></p>' +
        '<p style="margin:0;font-size:.86rem;color:var(--muted)">' + PPC.esc(e.nota) + '</p></div>';
    }).join('');

    var regrasHtml = '<ul>' + (mod.regras || []).map(function (r) {
      return '<li>' + PPC.esc(r) + '</li>';
    }).join('') + '</ul>';

    var dicasHtml = '<ul>' + (mod.dicas || []).map(function (d) {
      return '<li>' + PPC.esc(d) + '</li>';
    }).join('') + '</ul>';

    var errosHtml = (mod.erros || []).map(function (e) {
      return '<div class="info-box box-warn" style="margin:.8rem 0">' +
        '<h4>' + PPC.icon('warn') + 'Erro comum</h4>' +
        '<p style="margin-bottom:.4rem"><span style="color:var(--red-500);font-weight:600">✗ ' + PPC.esc(e.errado) + '</span></p>' +
        '<p style="margin-bottom:.4rem"><span style="color:var(--green-500);font-weight:600">✓ ' + PPC.esc(e.certo) + '</span></p>' +
        '<p style="margin:0;font-size:.88rem;color:var(--muted)">' + PPC.esc(e.porque) + '</p></div>';
    }).join('');

    var resumoHtml = '<ul>' + (mod.resumoFinal || []).map(function (r) {
      return '<li>' + PPC.esc(r) + '</li>';
    }).join('') + '</ul>';

    var html = '' +
      '<div class="card" style="margin-bottom:1.5rem">' +
        '<div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;margin-bottom:.75rem">' +
          '<span class="badge badge-blue">Módulo ' + mod.numero + '</span>' +
          '<span class="badge">' + PPC.esc(mod.grupo) + '</span>' +
          '<span class="badge badge-yellow">' + qtdQuestoes + ' questões</span>' +
          '<button class="btn btn-sm ' + (fav ? 'btn-accent' : 'btn-outline') + '" type="button" id="btnFav" style="margin-left:auto">' +
            PPC.icon('star') + (fav ? 'Favoritado' : 'Favoritar assunto') + '</button>' +
        '</div>' +
        '<h1 style="margin-bottom:.6rem">' + PPC.esc(mod.titulo) + '</h1>' +
        '<p class="lead" style="margin-bottom:1rem">' + PPC.esc(mod.resumo) + '</p>' +
        '<div class="btn-row">' +
          '<button class="btn btn-sm btn-outline" type="button" id="btnPrint">' + PPC.icon('print') + 'Imprimir / PDF</button>' +
          '<button class="btn btn-sm btn-outline" type="button" id="btnShare">' + PPC.icon('share') + 'Compartilhar</button>' +
          '<a class="btn btn-sm btn-primary" href="questoes.html?assunto=' + mod.slug + '">' + PPC.icon('question') + 'Questões do assunto</a>' +
        '</div>' +
      '</div>' +

      '<h2 class="lesson-block" id="introducao">Introdução</h2>' +
      '<div class="lesson-block"><p>' + PPC.esc(mod.introducao) + '</p></div>' +

      '<h2 class="lesson-block" id="indice">Nesta aula</h2>' +
      '<div class="lesson-block">' +
        '<ol>' +
          (mod.secoes || []).map(function (s) {
            return '<li><a href="#' + s.id + '">' + PPC.esc(s.titulo) + '</a></li>';
          }).join('') +
          '<li><a href="#exemplos">Exemplos práticos</a></li>' +
          '<li><a href="#regras">Regras gramaticais</a></li>' +
          '<li><a href="#dicas">Dicas para concursos</a></li>' +
          '<li><a href="#erros">Erros comuns</a></li>' +
          '<li><a href="#resumo">Resumo</a></li>' +
          '<li><a href="#exercicios">Exercícios e gabarito comentado</a></li>' +
        '</ol>' +
      '</div>' +

      secoesHtml +

      '<h2 class="lesson-block" id="exemplos">Exemplos práticos</h2>' +
      '<div class="lesson-block">' + box('example', 'Veja na prática', 'info', exemplosHtml) + '</div>' +

      '<h2 class="lesson-block" id="regras">Regras gramaticais</h2>' +
      '<div class="lesson-block">' + regrasHtml + '</div>' +

      '<h2 class="lesson-block" id="dicas">Dicas para concursos</h2>' +
      '<div class="lesson-block">' + box('tip', 'Dicas que economizam tempo na prova', 'tip', dicasHtml) + '</div>' +

      '<h2 class="lesson-block" id="erros">Erros comuns</h2>' +
      '<div class="lesson-block">' + errosHtml + '</div>' +

      '<h2 class="lesson-block" id="resumo">Resumo</h2>' +
      '<div class="lesson-block">' + box('summary', 'O que memorizar', 'check', resumoHtml) + '</div>' +

      '<h2 class="lesson-block" id="exercicios">Exercícios</h2>' +
      '<div class="lesson-block">' +
        '<p class="muted" style="font-size:.9rem">Resolva as questões abaixo e confira o gabarito comentado. Seu resultado é registrado no <a href="progresso.html">Meu Progresso</a>.</p>' +
        renderExercicios() +
      '</div>' +

      '<div class="lesson-footer-nav no-print">' +
        (anterior ? '<a class="btn btn-outline" href="aula.html?modulo=' + anterior.slug + '">' + PPC.icon('left') + anterior.titulo + '</a>' : '<span></span>') +
        (proximo ? '<a class="btn btn-primary" href="aula.html?modulo=' + proximo.slug + '">' + proximo.titulo + PPC.icon('right') + '</a>' : '<a class="btn btn-primary" href="simulados.html">Fazer um simulado' + PPC.icon('right') + '</a>') +
      '</div>' +
      '<div class="btn-row no-print" style="margin-top:1.5rem;justify-content:center">' +
        '<button class="btn btn-success" type="button" id="btnConcluir">' + PPC.icon('check') + 'Marcar módulo como concluído</button>' +
        '<button class="btn btn-outline" type="button" id="btnCertificado">' + PPC.icon('trophy') + 'Ver certificado do módulo</button>' +
      '</div>';

    PPC.qs('#aulaConteudo').innerHTML = html;

    // exercícios
    PPC.qsa('[data-question-card]').forEach(function (el) {
      var codigo = el.getAttribute('data-question-card');
      var q = PPC.questions.filter(function (x) { return x.codigo === codigo; })[0];
      if (!q) return;
      el.innerHTML = PPC.questionCard(q);
      PPC.bindQuestionCard(el, function () { registrarLeitura(true); });
    });

    // ações
    PPC.qs('#btnFav').addEventListener('click', function () {
      var on = PPC.toggleFavorite(mod.slug);
      this.className = 'btn btn-sm ' + (on ? 'btn-accent' : 'btn-outline');
      this.innerHTML = PPC.icon('star') + (on ? 'Favoritado' : 'Favoritar assunto');
      PPC.toast(on ? 'Assunto salvo nos favoritos.' : 'Assunto removido dos favoritos.', 'ok');
    });
    PPC.qs('#btnPrint').addEventListener('click', function () { PPC.print(); });
    PPC.qs('#btnShare').addEventListener('click', function () {
      PPC.share({ title: mod.titulo + ' — Português para Concursos', text: mod.resumo, url: location.href });
    });
    PPC.qs('#btnConcluir').addEventListener('click', function () {
      PPC.recordLesson(mod.slug, 'concluida');
      PPC.logActivity('Módulo concluído: ' + mod.titulo, { type: 'aula', ref: mod.slug });
      PPC.toast('Módulo marcado como concluído. Bom trabalho!', 'ok');
      this.innerHTML = PPC.icon('check') + 'Concluído';
      this.disabled = true;
      atualizarCertificado();
    });
    if (PPC.getData().lessons[mod.slug] && PPC.getData().lessons[mod.slug].status === 'concluida') {
      var b = PPC.qs('#btnConcluir');
      b.innerHTML = PPC.icon('check') + 'Concluído';
      b.disabled = true;
    }
    PPC.qs('#btnCertificado').addEventListener('click', function () { atualizarCertificado(true); });

    PPC.recordLesson(mod.slug, (PPC.getData().lessons[mod.slug] || {}).status === 'concluida' ? 'concluida' : 'em-andamento');
    registrarLeitura(false);
    atualizarCertificado();
    initScrollSpy();
  }

  function atualizarCertificado(mostrarModal) {
    var done = (PPC.getData().lessons[mod.slug] || {}).status === 'concluida';
    if (!mostrarModal) return;
    if (!done) {
      PPC.toast('Conclua o módulo para gerar o certificado.', 'err');
      return;
    }
    var user = PPC.user();
    var nome = user ? user.name : 'Estudante';
    var qtdQ = PPC.questions.filter(function (q) { return q.topico === mod.slug; }).length;
    var html = '<h2>' + PPC.icon('trophy') + ' Certificado de conclusão</h2>' +
      '<div style="border:2px solid var(--border);border-radius:var(--radius);padding:1.4rem;text-align:center;margin-top:1rem">' +
        '<p style="font-size:.76rem;letter-spacing:.14em;text-transform:uppercase;color:var(--muted);margin-bottom:.4rem">Português para Concursos</p>' +
        '<h3 style="margin-bottom:.3rem">' + PPC.esc(nome) + '</h3>' +
        '<p style="font-size:.92rem;color:var(--text-soft);margin-bottom:.6rem">concluiu o módulo</p>' +
        '<p style="font-weight:700;font-size:1.1rem;margin-bottom:.6rem">' + PPC.esc(mod.titulo) + '</p>' +
        '<p style="font-size:.82rem;color:var(--muted);margin:0">Módulo ' + mod.numero + ' — ' + PPC.esc(mod.grupo) + '<br>' +
        'Concluído em ' + PPC.formatDate(new Date().toISOString()) + ' · ' + qtdQ + ' questões do assunto disponíveis</p>' +
      '</div>' +
      '<div class="modal-actions" style="justify-content:center">' +
        '<button class="btn btn-primary" type="button" id="btnPrintCert">' + PPC.icon('print') + 'Imprimir certificado</button>' +
        '<button class="btn btn-outline" data-modal-close>Fechar</button>' +
      '</div>';
    var m = PPC.openModal(html, { label: 'Certificado de conclusão' });
    m.root.querySelector('#btnPrintCert').addEventListener('click', function () {
      PPC.updateData(function (d) {
        if (d.certificates.indexOf(mod.slug) < 0) d.certificates.push(mod.slug);
      });
      window.print();
    });
  }

  var lastPct = 0;
  function registrarLeitura(final) {
    var doc = document.documentElement;
    var total = doc.scrollHeight - window.innerHeight;
    var pct = total > 0 ? Math.min(100, Math.round((window.scrollY / total) * 100)) : 100;
    var bar = PPC.qs('#readingProgress');
    if (bar) bar.style.width = pct + '%';
    if (!mod) return;
    if (Math.abs(pct - lastPct) >= 8 || final) {
      lastPct = pct;
      PPC.updateData(function (d) { d.reading[mod.slug] = pct; });
    }
  }

  function initScrollSpy() {
    var links = PPC.qsa('#listaModulos a');
    links.forEach(function (a) {
      if (a.classList.contains('active')) {
        setTimeout(function () {
          var parent = a.parentElement;
          var top = a.offsetTop - parent.offsetTop;
          if (top > parent.clientHeight - 60) parent.scrollTop = top - parent.clientHeight / 2;
        }, 60);
      }
    });
  }

  function init() {
    render();
    window.addEventListener('scroll', PPC.debounce(function () { registrarLeitura(false); }, 250), { passive: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
