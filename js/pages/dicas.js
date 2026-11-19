/* Página de dicas — listagem, busca, favoritos, compartilhar e impressão */
(function () {
  'use strict';
  var PPC = window.PPC;
  var state = { busca: '', cat: '' };

  function categorias() {
    var out = [];
    PPC.tips.forEach(function (t) {
      if (out.indexOf(t.categoria) < 0) out.push(t.categoria);
    });
    return out.sort();
  }

  function corpoHtml(t) {
    return (t.corpo || []).map(function (b) {
      switch (b.tipo) {
        case 'p': return '<p>' + PPC.esc(b.texto) + '</p>';
        case 'h': return '<h4 style="font-size:.95rem;margin:1rem 0 .4rem">' + PPC.esc(b.texto) + '</h4>';
        case 'ul': return '<ul>' + b.itens.map(function (i) { return '<li>' + PPC.esc(i) + '</li>'; }).join('') + '</ul>';
        case 'ol': return '<ol>' + b.itens.map(function (i) { return '<li>' + PPC.esc(i) + '</li>'; }).join('') + '</ol>';
        case 'ex': return '<div class="info-box box-example" style="margin:.8rem 0"><h4>Exemplos</h4>' +
          b.itens.map(function (i) { return '<div class="example-line">' + PPC.esc(i) + '</div>'; }).join('') + '</div>';
        case 'tip': return '<div class="info-box box-tip" style="margin:.8rem 0"><h4>Dica de prova</h4><p style="margin:0">' + PPC.esc(b.texto) + '</p></div>';
        case 'warn': return '<div class="info-box box-warn" style="margin:.8rem 0"><h4>Atenção</h4><p style="margin:0">' + PPC.esc(b.texto) + '</p></div>';
        case 'table': return '<table class="tbl"><thead><tr>' +
          b.cabecalho.map(function (h) { return '<th>' + PPC.esc(h) + '</th>'; }).join('') +
          '</tr></thead><tbody>' + b.linhas.map(function (l) {
            return '<tr>' + l.map(function (c) { return '<td>' + PPC.esc(c) + '</td>'; }).join('') + '</tr>';
          }).join('') + '</tbody></table>';
        default: return '';
      }
    }).join('');
  }

  function card(t, resumido) {
    var fav = PPC.isFavorite(t.id);
    return '<article class="card card-hover tip-card" id="dica-' + t.id + '">' +
      '<div style="display:flex;flex-wrap:wrap;gap:.4rem;align-items:center;margin-bottom:.7rem">' +
        '<span class="badge badge-yellow">' + PPC.esc(t.categoria) + '</span>' +
        (t.destaque ? '<span class="badge badge-green">Destaque</span>' : '') +
        '<button class="fav-btn" type="button" data-favdica="' + t.id + '" style="position:static;margin-left:auto;width:32px;height:32px" ' +
          'aria-label="Favoritar dica" aria-pressed="' + fav + '">' +
          '<svg viewBox="0 0 24 24" fill="' + (fav ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m12 3.5 2.7 5.6 6.1.9-4.4 4.3 1 6.1-5.4-2.9-5.4 2.9 1-6.1L3.2 10l6.1-.9L12 3.5z"/></svg>' +
        '</button>' +
      '</div>' +
      '<h3 style="font-size:1.12rem">' + PPC.esc(t.titulo) + '</h3>' +
      '<p class="tip-body" style="color:var(--text-soft);font-size:.92rem">' + PPC.esc(t.resumo) + '</p>' +
      (resumido
        ? '<div class="tip-body" style="margin-top:.8rem">' + corpoHtml(t) + '</div>'
        : '') +
      '<div class="tip-actions">' +
        (resumido
          ? '<a class="btn btn-sm btn-ghost" href="dicas.html">Recolher</a>'
          : '<a class="btn btn-sm btn-outline" href="dicas.html?dica=' + encodeURIComponent(t.slug) + '">Ler dica completa</a>') +
        '<button class="btn btn-sm btn-ghost" type="button" data-share="' + t.id + '">Compartilhar</button>' +
        '<button class="btn btn-sm btn-ghost" type="button" data-print="' + t.id + '">Imprimir</button>' +
      '</div>' +
    '</article>';
  }

  function render() {
    var host = PPC.qs('#listaDicas');
    var params = new URLSearchParams(location.search);
    var aberta = params.get('dica');
    var lista = PPC.tips.filter(function (t) {
      if (state.cat && t.categoria !== state.cat) return false;
      if (state.busca && PPC.norm(t.titulo + ' ' + t.resumo + ' ' + t.categoria + ' ' + JSON.stringify(t.corpo)).indexOf(PPC.norm(state.busca)) < 0) return false;
      return true;
    });
    if (!lista.length) {
      host.innerHTML = '<div class="empty-state card" style="grid-column:1/-1"><h3>Nenhuma dica encontrada</h3><p>Ajuste a busca ou a categoria.</p></div>';
      return;
    }
    host.innerHTML = lista.map(function (t) {
      return card(t, aberta && t.slug === aberta);
    }).join('');

    PPC.qsa('[data-favdica]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var on = PPC.toggleFavorite(b.getAttribute('data-favdica'));
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', on);
        var svg = b.querySelector('svg');
        if (svg) svg.setAttribute('fill', on ? 'currentColor' : 'none');
        PPC.toast(on ? 'Dica salva nos favoritos.' : 'Dica removida dos favoritos.', 'ok');
      });
    });
    PPC.qsa('[data-share]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var t = PPC.tips.filter(function (x) { return x.id === b.getAttribute('data-share'); })[0];
        if (!t) return;
        PPC.share({
          title: t.titulo + ' — Dica de Português',
          text: t.resumo,
          url: location.origin + location.pathname + '?dica=' + encodeURIComponent(t.slug)
        });
      });
    });
    PPC.qsa('[data-print]', host).forEach(function (b) {
      b.addEventListener('click', function () {
        var t = PPC.tips.filter(function (x) { return x.id === b.getAttribute('data-print'); })[0];
        if (!t) return;
        var w = window.open('', '_blank');
        if (!w) { PPC.print(); return; }
        w.document.write('<!DOCTYPE html><html lang="pt-BR"><head><meta charset="utf-8"><title>' +
          PPC.esc(t.titulo) + '</title><style>body{font-family:Georgia,serif;max-width:720px;margin:2rem auto;padding:0 1.2rem;line-height:1.6;color:#111}h1{font-size:1.5rem}h4{margin:1rem 0 .3rem}table{border-collapse:collapse;width:100%;font-size:.9rem}th,td{border:1px solid #bbb;padding:.4rem}th{background:#eee}.info-box{border-left:3px solid #999;padding:.6rem .8rem;background:#f5f5f5;margin:.8rem 0}ul,ol{padding-left:1.3rem}small{color:#555}</style></head><body>' +
          '<h1>' + PPC.esc(t.titulo) + '</h1><p><em>' + PPC.esc(t.resumo) + '</em></p>' +
          corpoHtml(t) + '<hr><small>Português para Concursos — Estude. Pratique. Conquiste! — conteúdo gratuito</small>' +
          '</body></html>');
        w.document.close();
        setTimeout(function () { w.print(); }, 400);
      });
    });

    if (aberta) {
      var el = document.querySelector('#dica-' + aberta) || PPC.qsa('.tip-card').filter(function (c) {
        return c.id === 'dica-' + aberta;
      })[0];
      var alvo = null;
      PPC.tips.forEach(function (t) { if (t.slug === aberta) alvo = t; });
      if (alvo) {
        var cardEl = document.getElementById('dica-' + alvo.id);
        if (cardEl) setTimeout(function () { cardEl.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 120);
      }
      void el;
    }
  }

  function dicaDoDia() {
    // seleção determinística pelo dia do ano: muda diariamente
    var hoje = new Date();
    var inicio = new Date(hoje.getFullYear(), 0, 0);
    var dia = Math.floor((hoje - inicio) / 86400000);
    var t = PPC.tips[dia % PPC.tips.length];
    var el = PPC.qs('#dicaDoDia');
    el.innerHTML = '<strong>Dica do dia:</strong> <a href="dicas.html?dica=' + encodeURIComponent(t.slug) + '">' + PPC.esc(t.titulo) + '</a> — ' + PPC.esc(t.resumo);
  }

  function init() {
    var sel = PPC.qs('#filtroDicaCat');
    sel.innerHTML = '<option value="">Todas as categorias</option>' + categorias().map(function (c) {
      return '<option value="' + PPC.esc(c) + '">' + PPC.esc(c) + '</option>';
    }).join('');
    PPC.qs('#buscaDica').addEventListener('input', PPC.debounce(function (e) { state.busca = e.target.value; render(); }, 180));
    sel.addEventListener('change', function (e) { state.cat = e.target.value; render(); });
    PPC.qs('#limparDica').addEventListener('click', function () {
      state = { busca: '', cat: '' };
      PPC.qs('#buscaDica').value = '';
      sel.value = '';
      render();
    });
    dicaDoDia();
    render();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
