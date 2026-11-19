/* Página de conteúdos — listagem, filtros e favoritos */
(function () {
  'use strict';
  var PPC = window.PPC;

  var state = { busca: '', grupo: '', status: '' };

  function gruposDisponiveis() {
    var seen = [];
    PPC.modules.forEach(function (m) {
      if (seen.indexOf(m.grupo) < 0) seen.push(m.grupo);
    });
    return seen;
  }

  function progressoModulo(slug) {
    var d = PPC.getData();
    var l = d.lessons[slug];
    if (!l) return { status: 'nao-iniciado', label: 'Não iniciado', pct: 0 };
    if (l.status === 'concluida') return { status: 'concluida', label: 'Concluído', pct: 100 };
    return { status: 'em-andamento', label: 'Em andamento', pct: 45 };
  }

  function card(m) {
    var p = progressoModulo(m.slug);
    var qtd = PPC.questions.filter(function (q) { return q.topico === m.slug; }).length;
    var fav = PPC.isFavorite(m.slug);
    var badge = p.status === 'concluida' ? 'badge-green' : (p.status === 'em-andamento' ? 'badge-yellow' : '');
    return '<div class="mod-card-wrap">' +
      '<article class="card card-hover mod-card">' +
        '<button class="fav-btn ' + (fav ? 'active' : '') + '" type="button" data-fav="' + m.slug + '" ' +
          'aria-label="' + (fav ? 'Remover dos favoritos' : 'Adicionar aos favoritos') + '" aria-pressed="' + fav + '" title="Favoritar assunto">' +
          '<svg viewBox="0 0 24 24" fill="' + (fav ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 10l6.1-.9L12 3.5z"/></svg>' +
        '</button>' +
        '<span class="badge ' + badge + '" style="align-self:flex-start;margin-bottom:.6rem">Módulo ' + m.numero + '</span>' +
        '<h3><a href="aula.html?modulo=' + m.slug + '">' + PPC.esc(m.titulo) + '</a></h3>' +
        '<p>' + PPC.esc(m.resumo) + '</p>' +
        '<div class="mod-meta">' +
          '<span style="display:inline-flex;align-items:center;gap:.3rem">' + qtd + ' questões</span>' +
          '<span class="progress-mini" title="' + PPC.esc(p.label) + '"><i style="width:' + p.pct + '%"></i></span>' +
        '</div>' +
        '<div class="btn-row" style="margin-top:.85rem">' +
          '<a class="btn btn-sm btn-primary" href="aula.html?modulo=' + m.slug + '">Estudar</a>' +
          '<a class="btn btn-sm btn-ghost" href="questoes.html?assunto=' + m.slug + '">Questões</a>' +
        '</div>' +
      '</article>' +
    '</div>';
  }

  function render() {
    var host = PPC.qs('#modulosGrid');
    var vazio = PPC.qs('#vazio');
    var d = PPC.getData();
    var lista = PPC.modules.filter(function (m) {
      if (state.grupo && m.grupo !== state.grupo) return false;
      if (state.busca) {
        var hay = PPC.norm(m.titulo + ' ' + m.resumo + ' ' + m.grupo + ' ' + (m.tags || []).join(' '));
        if (hay.indexOf(PPC.norm(state.busca)) < 0) return false;
      }
      if (state.status) {
        var p = progressoModulo(m.slug);
        if (state.status === 'favoritos') {
          if (!PPC.isFavorite(m.slug)) return false;
        } else if (p.status !== state.status) return false;
      }
      return true;
    });
    lista.sort(function (a, b) { return a.numero - b.numero; });

    PPC.qs('#resumoFiltro').textContent = lista.length + ' de ' + PPC.modules.length +
      ' módulos exibidos' + (state.grupo ? ' — área: ' + state.grupo : '');

    if (!lista.length) {
      host.innerHTML = '';
      vazio.hidden = false;
      vazio.innerHTML = '<div class="empty-state">' +
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/></svg>' +
        '<h3>Nenhum módulo encontrado</h3>' +
        '<p>tente outros termos ou limpe os filtros.</p>' +
        '<button class="btn btn-outline btn-sm" type="button" onclick="document.getElementById(\'limparFiltros\').click()">Limpar filtros</button>' +
      '</div>';
      return;
    }
    vazio.hidden = true;
    host.innerHTML = lista.map(card).join('');

    PPC.qsa('[data-fav]', host).forEach(function (btn) {
      btn.addEventListener('click', function () {
        var slug = btn.getAttribute('data-fav');
        var on = PPC.toggleFavorite(slug);
        btn.classList.toggle('active', on);
        btn.setAttribute('aria-pressed', on);
        var svg = btn.querySelector('svg');
        if (svg) svg.setAttribute('fill', on ? 'currentColor' : 'none');
        PPC.toast(on ? 'Assunto salvo nos favoritos.' : 'Assunto removido dos favoritos.', 'ok');
        if (state.status === 'favoritos') render();
      });
    });
    void d;
  }

  function initFiltros() {
    var sel = PPC.qs('#filtroGrupo');
    sel.innerHTML = '<option value="">Todas as áreas</option>' +
      gruposDisponiveis().map(function (g) {
        return '<option value="' + PPC.esc(g) + '">' + PPC.esc(g) + '</option>';
      }).join('');

    var params = new URLSearchParams(location.search);
    if (params.get('grupo')) { state.grupo = params.get('grupo'); sel.value = state.grupo; }
    if (params.get('busca')) { state.busca = params.get('busca'); PPC.qs('#filtroBusca').value = state.busca; }

    PPC.qs('#filtroBusca').addEventListener('input', PPC.debounce(function (e) {
      state.busca = e.target.value;
      render();
    }, 180));
    sel.addEventListener('change', function (e) { state.grupo = e.target.value; render(); });
    PPC.qs('#filtroStatus').addEventListener('change', function (e) { state.status = e.target.value; render(); });
    PPC.qs('#limparFiltros').addEventListener('click', function () {
      state = { busca: '', grupo: '', status: '' };
      PPC.qs('#filtroBusca').value = '';
      sel.value = '';
      PPC.qs('#filtroStatus').value = '';
      render();
    });
  }

  function init() {
    initFiltros();
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
