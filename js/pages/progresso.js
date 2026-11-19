/* Meu Progresso — painel do estudante e plano de estudos */
(function () {
  'use strict';
  var PPC = window.PPC;
  var charts = [];

  function cor(pct) {
    if (pct >= 70) return 'var(--green-500)';
    if (pct >= 50) return 'var(--yellow-500)';
    return 'var(--red-500)';
  }

  function kpi(label, value, sub) {
    return '<div class="kpi"><span>' + PPC.esc(label) + '</span><strong>' + value + '</strong>' +
      (sub ? '<small class="muted" style="font-size:.76rem">' + PPC.esc(sub) + '</small>' : '') + '</div>';
  }

  function renderPainel() {
    var user = PPC.user();
    var stats = PPC.stats();
    var d = PPC.getData();
    var host = PPC.qs('#painel');
    var nome = user ? user.name : 'Estudante visitante';

    var exams = d.exams || [];
    var ultimo = exams[0];

    host.innerHTML = '' +
      '<nav aria-label="Trilha de navegação" style="font-size:.84rem;color:var(--muted);margin-bottom:.8rem">' +
        '<a href="index.html">Início</a> <span aria-hidden="true">›</span> <span>Meu Progresso</span>' +
      '</nav>' +

      (user ? '' :
        '<div class="info-box box-tip" style="margin-bottom:1.2rem">' +
          '<h4>' + PPC.icon('info') + ' Você está estudando como visitante</h4>' +
          '<p style="font-size:.92rem;margin-bottom:.6rem">Seu progresso é salvo apenas neste navegador. Crie uma conta gratuita para ter um nome no painel, certificados e continuar de onde parou neste dispositivo.</p>' +
          '<div class="btn-row"><a class="btn btn-sm btn-primary" href="cadastro.html">Criar conta grátis</a>' +
          '<a class="btn btn-sm btn-outline" href="login.html">Já tenho conta</a></div>' +
        '</div>') +

      '<div class="card" style="margin-bottom:1.4rem;display:flex;flex-wrap:wrap;gap:1rem;align-items:center;justify-content:space-between">' +
        '<div style="display:flex;align-items:center;gap:.9rem">' +
          '<span class="avatar" style="width:52px;height:52px;font-size:1.1rem">' +
            PPC.esc((nome.split(' ').filter(Boolean).map(function (p) { return p[0]; }).slice(0, 2).join('') || 'E').toUpperCase()) +
          '</span>' +
          '<div>' +
            '<h1 style="font-size:1.45rem;margin:0">' + PPC.esc(nome) + '</h1>' +
            '<p class="muted" style="font-size:.88rem;margin:.15rem 0 0">' +
              (user ? PPC.esc(user.email) : 'Progresso local, sem conta') + ' · Estude. Pratique. Conquiste!' +
            '</p>' +
          '</div>' +
        '</div>' +
        '<div class="btn-row">' +
          '<a class="btn btn-sm btn-primary" href="simulados.html">Novo simulado</a>' +
          '<a class="btn btn-sm btn-outline" href="conteudos.html">Continuar estudando</a>' +
          (user ? '<button class="btn btn-sm btn-ghost" type="button" id="btnSair">' + PPC.icon('logout') + 'Sair</button>' : '') +
        '</div>' +
      '</div>' +

      '<div class="kpi-grid" style="margin-bottom:1.4rem">' +
        kpi('Assuntos estudados', stats.lessonsDone + '<span style="font-size:.9rem;color:var(--muted)">/' + PPC.modules.length + '</span>', stats.lessonsStarted + ' iniciados') +
        kpi('Questões respondidas', stats.answered, (PPC.questions.length) + ' disponíveis') +
        kpi('Total de acertos', stats.correct, stats.wrong + ' erros') +
        kpi('Aproveitamento', stats.accuracy + '%', 'nas questões respondidas') +
        kpi('Simulados realizados', stats.exams, stats.exams ? 'média ' + stats.examAvg + '%' : 'faça o primeiro') +
        kpi('Tempo de estudo', PPC.formatDuration(stats.studySeconds), 'neste dispositivo') +
      '</div>' +

      '<div class="grid grid-2" style="margin-bottom:1.4rem">' +
        '<div class="card">' +
          '<h2 style="font-size:1.1rem">Desempenho por área</h2>' +
          '<p class="muted" style="font-size:.84rem">Aproveitamento nas questões respondidas, agrupado por área do conteúdo.</p>' +
          '<div class="chart-wrap"><canvas id="chartAreas" role="img" aria-label="Gráfico de desempenho por área"></canvas></div>' +
        '</div>' +
        '<div class="card">' +
          '<h2 style="font-size:1.1rem">Últimos simulados</h2>' +
          (exams.length
            ? '<div class="chart-wrap sm"><canvas id="chartEvolucao" role="img" aria-label="Gráfico de evolução dos simulados"></canvas></div>'
            : '<div class="empty-state" style="padding:2rem 0"><h3>Nenhum simulado realizado</h3><p>Seus resultados aparecerão aqui com gráfico de evolução.</p><a class="btn btn-primary btn-sm" href="simulados.html">Fazer simulado</a></div>') +
        '</div>' +
      '</div>' +

      '<div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(min(100%,330px),1fr));gap:1.15rem;margin-bottom:1.4rem">' +
        '<div class="card">' +
          '<h2 style="font-size:1.05rem">Assuntos estudados</h2>' +
          '<div id="listaAssuntos"></div>' +
        '</div>' +
        '<div class="card">' +
          '<h2 style="font-size:1.05rem">Histórico de simulados</h2>' +
          '<div id="listaExams"></div>' +
        '</div>' +
        '<div class="card">' +
          '<h2 style="font-size:1.05rem">Favoritos</h2>' +
          '<div id="listaFavoritos"></div>' +
        '</div>' +
        '<div class="card">' +
          '<h2 style="font-size:1.05rem">Redações salvas</h2>' +
          '<div id="listaRedacoes"></div>' +
        '</div>' +
      '</div>' +

      '<div class="grid grid-2" style="margin-bottom:1.4rem">' +
        '<div class="card">' +
          '<h2 style="font-size:1.05rem">Histórico de atividades</h2>' +
          '<div id="listaAtividades"></div>' +
        '</div>' +
        '<div class="card">' +
          '<h2 style="font-size:1.05rem">Certificados de conclusão</h2>' +
          '<div id="listaCertificados"></div>' +
        '</div>' +
      '</div>' +

      '<div id="plano"></div>' +

      '<div class="card" style="margin-top:1.4rem;border-color:var(--red-500)">' +
        '<h2 style="font-size:1rem;color:var(--red-500)">Zona de cuidado com seus dados</h2>' +
        '<p class="muted" style="font-size:.88rem">Você pode apagar todo o progresso salvo neste navegador para este perfil. A exclusão é permanente e não pode ser desfeita.</p>' +
        '<button class="btn btn-sm btn-danger" type="button" id="btnResetarProgresso">Apagar meu progresso deste dispositivo</button>' +
      '</div>';

    renderAssuntos(d);
    renderExams(exams);
    renderFavoritos(d);
    renderRedacoes(d);
    renderAtividades(d);
    renderCertificados(d);
    renderPlano();
    setTimeout(function () { renderCharts(stats, exams); }, 150);

    var sair = PPC.qs('#btnSair');
    if (sair) sair.addEventListener('click', function () {
      PPC.confirm('Sair da conta? Seu progresso continua salvo neste dispositivo e volta quando você entrar novamente.',
        function () {
          PPC.logout();
          location.href = 'index.html';
        }, { title: 'Sair da conta', confirmLabel: 'Sair' });
    });

    PPC.qs('#btnResetarProgresso').addEventListener('click', function () {
      PPC.confirm('Isso apagará assuntos estudados, questões respondidas, simulados, favoritos e redações deste perfil. Continuar?',
        function () {
          PPC.resetProgress();
          PPC.toast('Progresso apagado neste dispositivo.', 'ok');
          setTimeout(function () { location.reload(); }, 700);
        }, { title: 'Apagar progresso', danger: true, confirmLabel: 'Apagar tudo' });
    });
    void ultimo;
  }

  function renderAssuntos(d) {
    var host = PPC.qs('#listaAssuntos');
    var slugs = Object.keys(d.lessons);
    if (!slugs.length) {
      host.innerHTML = '<p class="muted" style="font-size:.88rem">Nenhuma aula aberta ainda. <a href="conteudos.html">Comece pelos fundamentos</a>.</p>';
      return;
    }
    host.innerHTML = slugs.map(function (slug) {
      var m = PPC.modules.filter(function (x) { return x.slug === slug; })[0];
      if (!m) return '';
      var l = d.lessons[slug];
      var done = l.status === 'concluida';
      return '<div class="result-line" style="font-size:.87rem">' +
        '<a href="aula.html?modulo=' + slug + '">' + PPC.esc(m.titulo) + '</a>' +
        '<span class="badge ' + (done ? 'badge-green' : 'badge-yellow') + '">' + (done ? 'Concluído' : 'Em andamento') + '</span>' +
      '</div>';
    }).join('');
  }

  function renderExams(exams) {
    var host = PPC.qs('#listaExams');
    if (!exams.length) {
      host.innerHTML = '<p class="muted" style="font-size:.88rem">Nenhum simulado concluído ainda.</p>';
      return;
    }
    host.innerHTML = exams.slice(0, 8).map(function (e) {
      return '<div class="result-line" style="font-size:.85rem">' +
        '<span>' + PPC.formatDate(e.finishedAt) + ' · ' + e.total + ' questões · ' + PPC.formatDuration(e.seconds) + '</span>' +
        '<strong style="color:' + cor(e.pct) + '">' + e.correct + '/' + e.total + ' · ' + e.pct + '%</strong>' +
      '</div>';
    }).join('');
  }

  function renderFavoritos(d) {
    var host = PPC.qs('#listaFavoritos');
    var favs = d.favorites || [];
    if (!favs.length) {
      host.innerHTML = '<p class="muted" style="font-size:.88rem">Nenhum favorito. Use a estrela nas aulas, dicas e questões para salvar aqui.</p>';
      return;
    }
    host.innerHTML = favs.map(function (id) {
      var m = PPC.modules.filter(function (x) { return x.slug === id; })[0];
      if (m) {
        return '<div class="result-line" style="font-size:.86rem"><a href="aula.html?modulo=' + m.slug + '">' +
          PPC.icon('book').replace('<svg', '<svg style="width:14px;height:14px;display:inline;vertical-align:-2px"') + ' ' +
          PPC.esc(m.titulo) + '</a><span class="badge badge-blue">Aula</span></div>';
      }
      var t = PPC.tips.filter(function (x) { return x.id === id; })[0];
      if (t) {
        return '<div class="result-line" style="font-size:.86rem"><a href="dicas.html?dica=' + encodeURIComponent(t.slug) + '">' +
          PPC.esc(t.titulo) + '</a><span class="badge badge-yellow">Dica</span></div>';
      }
      var q = PPC.questions.filter(function (x) { return x.codigo === id; })[0];
      if (q) {
        return '<div class="result-line" style="font-size:.86rem"><a href="questoes.html?busca=' + q.codigo + '">' +
          PPC.esc(q.codigo + ' — ' + q.enunciado.slice(0, 48)) + '…</a><span class="badge">Questão</span></div>';
      }
      return '';
    }).join('');
  }

  function renderRedacoes(d) {
    var host = PPC.qs('#listaRedacoes');
    var list = d.essays || [];
    if (!list.length) {
      host.innerHTML = '<p class="muted" style="font-size:.88rem">Nenhuma redação salva. <a href="redacao.html#editor">Abrir editor</a>.</p>';
      return;
    }
    host.innerHTML = list.map(function (e) {
      return '<div class="result-line" style="font-size:.86rem">' +
        '<span>' + PPC.esc(e.titulo || e.temaTitulo || 'Sem título') + '<br><small class="muted">' + PPC.formatDate(e.updatedAt) + ' · ' + (e.palavras || 0) + ' palavras</small></span>' +
        (e.avaliacao ? '<span class="badge badge-green">' + e.avaliacao.pct + '%</span>' : '<span class="badge">Não avaliada</span>') +
      '</div>';
    }).join('') + '<a class="btn btn-sm btn-outline btn-block" href="redacao.html#editor" style="margin-top:.8rem">Ir para o editor</a>';
  }

  function renderAtividades(d) {
    var host = PPC.qs('#listaAtividades');
    var list = (d.activity || []).slice(0, 12);
    if (!list.length) {
      host.innerHTML = '<p class="muted" style="font-size:.88rem">Nenhuma atividade registrada ainda.</p>';
      return;
    }
    host.innerHTML = list.map(function (a) {
      return '<div class="result-line" style="font-size:.85rem">' +
        '<span>' + PPC.esc(a.label) + '</span>' +
        '<small class="muted" style="white-space:nowrap">' + PPC.formatDateTime(a.at) + '</small>' +
      '</div>';
    }).join('');
  }

  function renderCertificados(d) {
    var host = PPC.qs('#listaCertificados');
    var concluidos = Object.keys(d.lessons).filter(function (k) { return d.lessons[k].status === 'concluida'; });
    if (!concluidos.length) {
      host.innerHTML = '<p class="muted" style="font-size:.88rem">Conclua um módulo para gerar seu certificado. Marque a conclusão ao final de cada aula.</p>';
      return;
    }
    host.innerHTML = concluidos.map(function (slug) {
      var m = PPC.modules.filter(function (x) { return x.slug === slug; })[0];
      if (!m) return '';
      return '<div class="result-line" style="font-size:.86rem">' +
        '<span>' + PPC.esc(m.titulo) + '</span>' +
        '<a class="btn btn-sm btn-outline" href="aula.html?modulo=' + slug + '#exercicios">Ver certificado</a>' +
      '</div>';
    }).join('');
  }

  /* ---------- Plano de estudos ---------- */
  function renderPlano() {
    var host = PPC.qs('#plano');
    var d = PPC.getData();
    var plano = d.plan;
    var html = '<div class="card">' +
      '<h2 style="font-size:1.2rem">Plano de estudos personalizado</h2>' +
      '<p class="muted" style="font-size:.9rem">Informe sua disponibilidade e os assuntos que quer priorizar. A plataforma gera uma sugestão de cronograma com conteúdo diário, revisões, exercícios, simulados e metas semanais — e você pode editar livremente.</p>';

    if (!plano) {
      html += '<form id="formPlano" style="margin-top:1.2rem">' +
        '<div class="form-grid">' +
          '<div class="field"><label for="pDias">Dias por semana</label>' +
            '<select class="select" id="pDias">' +
              [2, 3, 4, 5, 6, 7].map(function (n) { return '<option value="' + n + '"' + (n === 4 ? ' selected' : '') + '>' + n + ' dias</option>'; }).join('') +
            '</select></div>' +
          '<div class="field"><label for="pHoras">Horas por dia</label>' +
            '<select class="select" id="pHoras">' +
              [1, 1.5, 2, 2.5, 3, 4, 5, 6].map(function (n) {
                return '<option value="' + n + '"' + (n === 2 ? ' selected' : '') + '>' + String(n).replace('.', ',') + ' h</option>';
              }).join('') +
            '</select></div>' +
          '<div class="field"><label for="pData">Data prevista da prova (opcional)</label>' +
            '<input class="input" type="date" id="pData"></div>' +
          '<div class="field"><label for="pIntensidade">Ritmo de cobertura</label>' +
            '<select class="select" id="pIntensidade">' +
              '<option value="equilibrado" selected>Equilibrado (teoria + prática)</option>' +
              '<option value="teoria">Foco em teoria e revisão</option>' +
              '<option value="pratica">Foco em questões e simulados</option>' +
            '</select></div>' +
        '</div>' +
        '<div class="field"><span class="field-label">Assuntos que deseja estudar</span>' +
          '<p class="muted" style="font-size:.82rem;margin:.2rem 0 .5rem">Deixe tudo desmarcado para incluir todos os 30 módulos.</p>' +
          '<div id="pAssuntos" style="max-height:240px;overflow-y:auto;border:1px solid var(--border);border-radius:8px;padding:.7rem;background:var(--surface-2)"></div>' +
        '</div>' +
        '<button class="btn btn-primary" type="submit">Gerar meu cronograma</button>' +
      '</form>';
      html += '</div>';
      host.innerHTML = html;
      montarAssuntosPlano();
      PPC.qs('#formPlano').addEventListener('submit', function (e) {
        e.preventDefault();
        gerarPlano();
      });
      return;
    }

    // plano existente
    html += '<div style="display:flex;flex-wrap:wrap;gap:.6rem;align-items:center;justify-content:space-between;margin:1rem 0">' +
      '<div style="display:flex;flex-wrap:wrap;gap:.5rem">' +
        '<span class="badge badge-blue">' + plano.diasSemana + ' dias/semana</span>' +
        '<span class="badge badge-blue">' + String(plano.horasDia).replace('.', ',') + ' h/dia</span>' +
        '<span class="badge">' + PPC.esc(plano.intensidade) + '</span>' +
        (plano.dataProva ? '<span class="badge badge-yellow">Prova: ' + PPC.formatDate(plano.dataProva) + '</span>' : '') +
        '<span class="badge badge-green">' + plano.semanas.length + ' semana(s)</span>' +
      '</div>' +
      '<div class="btn-row">' +
        '<button class="btn btn-sm btn-outline" type="button" id="btnEditarPlano">Editar plano</button>' +
        '<button class="btn btn-sm btn-outline" type="button" id="btnImprimirPlano">' + PPC.icon('print') + 'Imprimir</button>' +
        '<button class="btn btn-sm btn-ghost" type="button" id="btnNovoPlano">Refazer</button>' +
      '</div>' +
    '</div>';

    if (plano.metaSemanal) {
      html += '<div class="info-box box-summary" style="margin-bottom:1.2rem"><h4>' + PPC.icon('target') + ' Meta semanal</h4>' +
        '<p style="margin:0;font-size:.92rem">' + PPC.esc(plano.metaSemanal) + '</p></div>';
    }

    html += '<div class="grid" style="gap:1rem">' + plano.semanas.map(function (sem, i) {
      return '<div class="card card-flat" style="border-left:4px solid var(--blue-600)">' +
        '<div style="display:flex;justify-content:space-between;gap:.6rem;flex-wrap:wrap;align-items:center">' +
          '<h3 style="font-size:1.02rem;margin:0">Semana ' + (i + 1) + (sem.periodo ? ' <span class="muted" style="font-size:.8rem;font-weight:400">' + PPC.esc(sem.periodo) + '</span>' : '') + '</h3>' +
          '<span class="badge">' + sem.dias.length + ' dia(s)</span>' +
        '</div>' +
        '<div style="margin-top:.7rem">' + sem.dias.map(function (dia) {
          return '<div class="result-line" style="font-size:.86rem;align-items:flex-start">' +
            '<span style="flex:1"><strong style="color:var(--text)">' + PPC.esc(dia.diaSemana) + '</strong> — ' +
              dia.tarefas.map(function (t) { return PPC.esc(t); }).join(' · ') + '</span>' +
            '<span class="muted" style="white-space:nowrap;font-size:.8rem">' + PPC.esc(dia.duracao) + '</span>' +
          '</div>';
        }).join('') + '</div>' +
      '</div>';
    }).join('') + '</div>';

    host.innerHTML = html;

    PPC.qs('#btnNovoPlano').addEventListener('click', function () {
      PPC.confirm('Isso apagará o cronograma atual para gerar outro. Continuar?', function () {
        PPC.updateData(function (data) { data.plan = null; });
        renderPlano();
      }, { title: 'Refazer plano', confirmLabel: 'Refazer' });
    });
    PPC.qs('#btnEditarPlano').addEventListener('click', function () {
      PPC.updateData(function (data) { data.plan = null; });
      renderPlano();
      PPC.toast('Você pode gerar um novo cronograma com outras configurações.', '');
    });
    PPC.qs('#btnImprimirPlano').addEventListener('click', function () { PPC.print(); });
  }

  function montarAssuntosPlano() {
    var host = PPC.qs('#pAssuntos');
    var grupos = [];
    PPC.modules.forEach(function (m) { if (grupos.indexOf(m.grupo) < 0) grupos.push(m.grupo); });
    host.innerHTML = grupos.map(function (g) {
      return '<fieldset style="border:0;padding:0;margin:0 0 .7rem">' +
        '<legend style="font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);font-weight:700">' + PPC.esc(g) + '</legend>' +
        PPC.modules.filter(function (m) { return m.grupo === g; }).map(function (m) {
          return '<label class="checkbox-row" for="pp-' + m.slug + '" style="margin-bottom:.2rem">' +
            '<input type="checkbox" id="pp-' + m.slug + '" value="' + m.slug + '"><span>' + m.numero + '. ' + PPC.esc(m.titulo) + '</span></label>';
        }).join('') +
      '</fieldset>';
    }).join('');
  }

  function gerarPlano() {
    var dias = Number(PPC.qs('#pDias').value);
    var horas = Number(PPC.qs('#pHoras').value);
    var dataProva = PPC.qs('#pData').value;
    var intensidade = PPC.qs('#pIntensidade').value;
    var assuntos = PPC.qsa('#pAssuntos input:checked').map(function (c) { return c.value; });
    var mods = assuntos.length
      ? PPC.modules.filter(function (m) { return assuntos.indexOf(m.slug) >= 0; })
      : PPC.modules.slice();
    mods.sort(function (a, b) { return a.numero - b.numero; });

    var DIAS = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

    // quantas semanas?
    var semanas = 4;
    if (dataProva) {
      var diff = Math.ceil((new Date(dataProva + 'T12:00:00') - new Date()) / (7 * 86400000));
      semanas = Math.max(1, Math.min(16, diff || 1));
    } else {
      semanas = Math.max(2, Math.ceil(mods.length / Math.max(1, Math.floor(dias / 2))));
      semanas = Math.min(12, semanas);
    }

    var porSemana = Math.max(1, Math.floor(mods.length / semanas));
    var idx = 0;
    var listaSemanas = [];

    for (var s = 0; s < semanas; s++) {
      var diasArr = [];
      var blocos = mods.slice(idx, idx + porSemana);
      if (!blocos.length) blocos = mods.slice(0, porSemana);
      idx += porSemana;
      if (idx >= mods.length) idx = 0;

      for (var i = 0; i < dias; i++) {
        var mod = blocos[i % blocos.length];
        var tarefas;
        var duracao = String(horas).replace('.', ',') + ' h';
        if (i === dias - 1) {
          // último dia da semana: revisão + simulado
          tarefas = intensidade === 'teoria'
            ? ['Revisão ativa dos resumos', 'Flashcards dos erros', 'Leitura de 1 dica de Português']
            : ['Simulado curto de 10 questões', 'Correção comentada', 'Estudar os erros do simulado'];
        } else if (intensidade === 'pratica') {
          tarefas = ['Aula: ' + mod.titulo, (10 + i * 3) + ' questões sobre ' + (mod.grupo.toLowerCase()), 'Anotar os erros'];
        } else if (intensidade === 'teoria') {
          tarefas = ['Aula completa: ' + mod.titulo, 'Fazer resumo em 5 linhas', 'Revisar a aula anterior'];
        } else {
          tarefas = ['Aula: ' + mod.titulo, 'Exercícios do módulo', i % 2 === 0 ? 'Revisão espaçada' : 'Fichamento de erros'];
        }
        diasArr.push({ diaSemana: DIAS[i] || ('Dia ' + (i + 1)), tarefas: tarefas, duracao: duracao });
      }
      listaSemanas.push({ dias: diasArr, periodo: dataProva ? '' : ('Semana ' + (s + 1)) });
    }

    var meta = 'Concluir ' + Math.min(mods.length, porSemana * semanas) + ' módulo(s) em ' + semanas +
      ' semana(s), com pelo menos ' + (dias * horas) + ' horas de estudo semanais e um simulado por semana.';

    var plano = {
      diasSemana: dias, horasDia: horas, dataProva: dataProva || null,
      intensidade: intensidade,
      assuntos: mods.map(function (m) { return m.slug; }),
      semanas: listaSemanas,
      metaSemanal: meta,
      criadoEm: new Date().toISOString()
    };
    PPC.updateData(function (data) { data.plan = plano; });
    PPC.logActivity('Plano de estudos gerado: ' + dias + ' dias/semana, ' + horas + ' h/dia', { type: 'plano' });
    renderPlano();
    PPC.toast('Cronograma gerado! Você pode refazer com outros parâmetros.', 'ok');
  }

  /* ---------- Gráficos ---------- */
  function renderCharts(stats, exams) {
    if (typeof Chart === 'undefined') return;
    charts.forEach(function (c) { try { c.destroy(); } catch (e) {} });
    charts = [];
    var dark = PPC.getTheme() === 'dark';
    var textColor = dark ? '#c3d6ec' : '#33547a';
    var gridColor = dark ? 'rgba(148,174,203,.16)' : 'rgba(91,118,153,.16)';

    var areas = document.getElementById('chartAreas');
    if (areas) {
      var grupos = [];
      PPC.modules.forEach(function (m) { if (grupos.indexOf(m.grupo) < 0) grupos.push(m.grupo); });
      var dados = grupos.map(function (g) {
        var slugs = PPC.modules.filter(function (m) { return m.grupo === g; }).map(function (m) { return m.slug; });
        var t = 0, c = 0;
        Object.keys(stats.byTopic).forEach(function (k) {
          if (slugs.indexOf(k) >= 0) { t += stats.byTopic[k].total; c += stats.byTopic[k].correct; }
        });
        return { g: g, pct: t ? Math.round(c / t * 1000) / 10 : 0, total: t };
      });
      charts.push(new Chart(areas, {
        type: 'radar',
        data: {
          labels: dados.map(function (d) { return d.g.length > 22 ? d.g.slice(0, 20) + '…' : d.g; }),
          datasets: [{
            label: 'Aproveitamento (%)',
            data: dados.map(function (d) { return d.pct; }),
            backgroundColor: 'rgba(47,134,255,.22)',
            borderColor: '#2f86ff',
            borderWidth: 2,
            pointBackgroundColor: '#1b6ef3',
            pointRadius: 4
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return c.parsed.r + '% (' + dados[c.dataIndex].total + ' questões)'; } } } },
          scales: {
            r: {
              min: 0, max: 100,
              ticks: { display: false, stepSize: 25 },
              grid: { color: gridColor },
              angleLines: { color: gridColor },
              pointLabels: { color: textColor, font: { size: 10 } }
            }
          }
        }
      }));
    }

    var evol = document.getElementById('chartEvolucao');
    if (evol && exams.length) {
      var ord = exams.slice().reverse();
      charts.push(new Chart(evol, {
        type: 'line',
        data: {
          labels: ord.map(function (e, i) { return '#' + (i + 1); }),
          datasets: [{
            label: '% de acerto',
            data: ord.map(function (e) { return e.pct; }),
            borderColor: '#17a673',
            backgroundColor: 'rgba(23,166,115,.16)',
            fill: true, tension: .32,
            pointBackgroundColor: '#17a673', pointRadius: 3
          }]
        },
        options: {
          responsive: true, maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { callbacks: { label: function (c) { return c.parsed.y + '% (' + ord[c.dataIndex].total + ' questões)'; } } } },
          scales: {
            y: { min: 0, max: 100, ticks: { color: textColor, font: { size: 11 }, callback: function (v) { return v + '%'; } }, grid: { color: gridColor } },
            x: { ticks: { color: textColor, font: { size: 10 } }, grid: { display: false } }
          }
        }
      }));
    }
  }

  function init() {
    renderPainel();
    var observer = new MutationObserver(PPC.debounce(function () {
      var s = PPC.stats();
      renderCharts(s, PPC.getData().exams || []);
    }, 250));
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
