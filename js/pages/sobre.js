/* Página Sobre — recursos e perguntas frequentes */
(function () {
  'use strict';
  var PPC = window.PPC;

  var RECURSOS = [
    { icon: 'book', t: '30 módulos de conteúdo', d: 'Do zero à redação oficial: 30 aulas completas com introdução, explicação detalhada, exemplos, regras, dicas, erros comuns, resumo e exercícios.' },
    { icon: 'question', t: 'Banco de questões comentadas', d: 'Questões inéditas com cinco alternativas, botão Responder, acerto/erro, alternativa correta, explicação e comentário pedagógico.' },
    { icon: 'exam', t: 'Simulados configuráveis', d: 'De 5 a 100 questões, por nível, assunto e formato. Cronômetro, marcação para revisão, mapa de questões e finalização antecipada.' },
    { icon: 'chart', t: 'Resultado com gráficos', d: 'Total, acertos, erros, aproveitamento, nota de 0 a 100, tempo, gabarito, comentários e assuntos com maior dificuldade.' },
    { icon: 'essay', t: 'Redação com método', d: 'Temas atuais com textos motivadores, modelos de introdução, desenvolvimento e conclusão, técnicas argumentativas e conectivos.' },
    { icon: 'edit', t: 'Editor com contador', d: 'Contagem de palavras, caracteres, parágrafos e linhas estimadas, com salvamento do texto e exportação em arquivo.' },
    { icon: 'target', t: 'Autoavaliação de redação', d: 'Rubrica em cinco critérios: gramática, coesão, coerência, argumentação e estrutura textual, com devolutiva automática.' },
    { icon: 'tip', t: 'Dicas de Português', d: 'Crase, mas e mais, há e a, porquês, vírgula, concordância, erros frequentes e palavras que causam dúvidas.' },
    { icon: 'calendar', t: 'Plano de estudos', d: 'Informe dias por semana, horas por dia, assuntos e data da prova para gerar cronograma com revisões, exercícios e simulados.' },
    { icon: 'star', t: 'Favoritos e histórico', d: 'Salve assuntos, dicas e questões; acompanhe leitura, atividades recentes e certificados de conclusão de módulos.' },
    { icon: 'search', t: 'Pesquisa e navegação', d: 'Busca global em aulas, dicas, temas e questões, com atalho de teclado e navegação rápida entre aulas.' },
    { icon: 'sun', t: 'Modo claro e escuro', d: 'Interface responsiva para computador, tablet e celular, com excelente legibilidade, animações suaves e ícones modernos.' }
  ];

  var FAQ = [
    { q: 'O site é realmente gratuito?', a: 'Sim. Não há planos, assinaturas, cobranças, área premium, período de teste nem paywall. Todo o conteúdo e todas as ferramentas estão liberados para qualquer visitante, sem cadastro obrigatório.' },
    { q: 'Preciso criar conta para estudar?', a: 'Não. Aulas, questões, simulados, dicas e redação estão disponíveis sem conta. O cadastro é opcional e serve apenas para identificar seu progresso neste dispositivo.' },
    { q: 'As questões são de concursos oficiais?', a: 'Não. Todas as questões do banco são inéditas, elaboradas para esta plataforma, e isso está indicado em cada questão. O campo "formato" descreve apenas o estilo de redação de cada banca (por exemplo, itens Certo/Errado). Não apresentamos conteúdo autoral como prova oficial.' },
    { q: 'Onde fica salvo o meu progresso?', a: 'No armazenamento local do seu navegador. Ele não é enviado a servidores. Se você limpar os dados do navegador ou trocar de aparelho, o progresso local não é recuperado pelo site.' },
    { q: 'Esqueci minha senha. Como recuperar?', a: 'Como não há envio de e-mail, use a opção "Esqueci minha senha" na tela de login para definir uma nova senha local a partir do e-mail cadastrado neste dispositivo.' },
    { q: 'Como funciona a autoavaliação de redação?', a: 'É uma rubrica orientativa com cinco critérios, de 0 a 4 pontos cada. Ela ajuda a identificar pontos fortes e fracos, mas não substitui a correção de um professor nem reproduz critérios específicos de uma banca.' },
    { q: 'O site funciona no celular?', a: 'Sim. A interface é responsiva, com menu próprio para telas pequenas, tipografia ajustada e componentes adaptados para toque.' },
    { q: 'Posso imprimir ou exportar o conteúdo?', a: 'Sim. Todas as aulas e dicas podem ser impressas (ou salvas em PDF). Resultados de simulado também possuem exportação por impressão, e as redações podem ser baixadas em arquivo de texto.' }
  ];

  function renderRecursos() {
    var host = PPC.qs('#recursosGrid');
    if (!host) return;
    host.innerHTML = RECURSOS.map(function (r) {
      return '<div class="card card-hover">' +
        '<span class="mod-icon">' + PPC.icon(r.icon) + '</span>' +
        '<h3 style="font-size:1.02rem">' + PPC.esc(r.t) + '</h3>' +
        '<p style="font-size:.9rem;color:var(--muted);margin:0">' + PPC.esc(r.d) + '</p>' +
      '</div>';
    }).join('');
  }

  function renderFaq() {
    var host = PPC.qs('#faq');
    if (!host) return;
    host.innerHTML = FAQ.map(function (f, i) {
      return '<details class="card" style="margin-bottom:.8rem;padding:1.1rem 1.25rem"' + (i === 0 ? ' open' : '') + '>' +
        '<summary style="cursor:pointer;font-weight:600;font-size:.97rem;list-style-position:outside">' + PPC.esc(f.q) + '</summary>' +
        '<p style="font-size:.92rem;color:var(--text-soft);margin:.7rem 0 0">' + PPC.esc(f.a) + '</p>' +
      '</details>';
    }).join('');
  }

  function init() {
    renderRecursos();
    renderFaq();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
