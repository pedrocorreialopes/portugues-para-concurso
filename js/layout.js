/* Layout compartilhado — header, footer e navegação consistente */
window.PPC = window.PPC || {};
(function () {
  'use strict';
  var PPC = window.PPC;

  var NAV = [
    { href: 'index.html', label: 'Início' },
    { href: 'conteudos.html', label: 'Conteúdos' },
    { href: 'questoes.html', label: 'Questões' },
    { href: 'simulados.html', label: 'Simulados' },
    { href: 'redacao.html', label: 'Redação' },
    { href: 'dicas.html', label: 'Dicas' },
    { href: 'progresso.html', label: 'Meu Progresso' },
    { href: 'sobre.html', label: 'Sobre' }
  ];

  function header() {
    return '' +
      '<a class="skip-link" href="#conteudo">Ir para o conteúdo principal</a>' +
      '<header class="site-header">' +
        '<div class="header-inner">' +
          '<a class="brand" href="index.html" aria-label="Português para Concursos — página inicial">' +
            '<img src="images/logo.svg" alt="" width="40" height="40">' +
            '<span class="brand-text">' +
              '<span class="brand-name">Português para Concursos</span>' +
              '<span class="brand-tag">Estude. Pratique. Conquiste!</span>' +
            '</span>' +
          '</a>' +
          '<nav class="main-nav" id="mainNav" aria-label="Navegação principal">' +
            NAV.map(function (n) {
              return '<a href="' + n.href + '">' + n.label + '</a>';
            }).join('') +
          '</nav>' +
          '<div class="header-actions">' +
            '<button class="icon-btn" type="button" data-search-open aria-label="Pesquisar na plataforma" title="Pesquisar (Ctrl+K)">' +
              PPC.icon('search') +
            '</button>' +
            '<button class="icon-btn" type="button" data-theme-toggle aria-label="Alternar modo claro e escuro"></button>' +
            '<a class="account-chip" id="accountChip" href="login.html" aria-label="Minha conta"></a>' +
            '<button class="icon-btn nav-toggle" id="navToggle" type="button" aria-label="Abrir menu" aria-expanded="false" aria-controls="mainNav"></button>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="nav-backdrop" id="navBackdrop" hidden></div>';
  }

  function footer() {
    var mods = (PPC.modules || []).slice(0, 5);
    return '' +
      '<footer class="site-footer">' +
        '<div class="container">' +
          '<div class="footer-grid">' +
            '<div class="footer-about">' +
              '<div class="footer-brand">' +
                '<img src="images/logo.svg" alt="" width="40" height="40">' +
                '<div><strong>Português para Concursos</strong>' +
                '<span>Estude. Pratique. Conquiste!</span></div>' +
              '</div>' +
              '<p>Plataforma educacional gratuita para quem estuda Língua Portuguesa para concursos públicos no Brasil.</p>' +
              '<span class="footer-free">' + PPC.icon('check') + ' 100% gratuito — sem planos, sem cobranças</span>' +
            '</div>' +
            '<div>' +
              '<h4>Estudar</h4>' +
              '<a href="conteudos.html">Conteúdos</a>' +
              '<a href="questoes.html">Banco de questões</a>' +
              '<a href="simulados.html">Simulados</a>' +
              '<a href="redacao.html">Redação</a>' +
              '<a href="dicas.html">Dicas de Português</a>' +
            '</div>' +
            '<div>' +
              '<h4>Aulas em destaque</h4>' +
              mods.map(function (m) {
                return '<a href="aula.html?modulo=' + m.slug + '">' + PPC.esc(m.titulo) + '</a>';
              }).join('') +
            '</div>' +
            '<div>' +
              '<h4>Plataforma</h4>' +
              '<a href="progresso.html">Meu Progresso</a>' +
              '<a href="progresso.html#plano">Plano de estudos</a>' +
              '<a href="login.html">Entrar</a>' +
              '<a href="cadastro.html">Criar conta grátis</a>' +
              '<a href="sobre.html">Sobre o projeto</a>' +
              '<a href="admin.html">Administração</a>' +
            '</div>' +
          '</div>' +
          '<div class="footer-bottom">' +
            '<span>© <span data-year></span> Português para Concursos. Conteúdo didático original, gratuito e aberto.</span>' +
            '<span>Todas as questões são inéditas ou de domínio público, com indicação de origem.</span>' +
          '</div>' +
        '</div>' +
      '</footer>';
  }

  function render() {
    // aplica edições locais do painel antes de desenhar o rodapé com títulos de aulas
    if (typeof PPC.applyContentOverrides === 'function') {
      try { PPC.applyContentOverrides(); } catch (e) { /* mantém conteúdo padrão */ }
    }
    var h = document.getElementById('siteHeader');
    if (h) h.innerHTML = header();
    var f = document.getElementById('siteFooter');
    if (f) f.innerHTML = footer();
  }

  render();
})();
