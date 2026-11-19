# Português para Concursos

**Estude. Pratique. Conquiste!**

Plataforma educacional **100% gratuita** de Língua Portuguesa para concursos públicos brasileiros. Site estático em HTML5, CSS3 e JavaScript puro (sem back-end, sem dependências obrigatórias de CDN para o conteúdo), com interface responsiva, modo claro e escuro e todo o progresso salvo localmente no navegador.

> Não há planos pagos, assinaturas, cobranças, área Premium, período de teste, paywall, Stripe ou qualquer forma de monetização. Todos os recursos estão liberados para qualquer visitante, sem cadastro obrigatório.

---

## 1. Entradas e páginas

| Arquivo | Descrição |
|---|---|
| `index.html` | Página inicial: hero, slogan, indicadores, áreas de conhecimento, questões recentes, dicas, benefícios |
| `conteudos.html` | Listagem dos 30 módulos, com busca, filtro por área/status/favoritos |
| `aula.html?modulo=<slug>` | Aula individual: introdução, índice, seções, exemplos, regras, dicas, erros comuns, resumo, exercícios com gabarito comentado, certificado |
| `questoes.html` | Banco de questões com filtros (busca, assunto, nível, formato, tipo, concurso), paginação e sorteio |
| `simulados.html` | Configuração: 5–100 questões, nível, assuntos, formato, concurso |
| `simulado.html` | Execução: uma questão por tela, cronômetro, progresso, mapa de questões, marcação para revisão |
| `resultado.html` | Correção: total, acertos, erros, aproveitamento, nota 0–100, tempo, gráficos, gabarito comentado |
| `redacao.html` | Temas, técnicas, conectivos/repertório, editor com contador e autoavaliação, minhas redações |
| `dicas.html` | Dicas de Português (`?dica=<slug>` abre uma específica) |
| `progresso.html` | Painel do estudante + plano de estudos personalizado (`#plano`) |
| `login.html` | Entrar na conta local |
| `cadastro.html` | Criar conta gratuita (LGPD) |
| `sobre.html` | Objetivo, compromissos, metodologia, privacidade/LGPD (`#lgpd`), FAQ |
| `admin.html` | Painel administrativo (senha padrão `portugues2026`) |

## 2. Estrutura de arquivos

```
index.html, conteudos.html, aula.html, questoes.html, simulados.html,
simulado.html, resultado.html, redacao.html, dicas.html, progresso.html,
login.html, cadastro.html, sobre.html, admin.html

css/styles.css          Design system completo (tokens, claro/escuro, responsivo, impressão)
images/logo.svg         Logotipo vetorial
images/favicon.svg      Favicon

js/core.js              Núcleo: tema, contas, progresso, busca, cartão de questão, edições de conteúdo
js/layout.js            Header e footer compartilhados (injetados em #siteHeader / #siteFooter)
js/data/modules-1..3.js 30 módulos de conteúdo (9 blocos cada)
js/data/questions-1..3.js 93 questões inéditas comentadas
js/data/tips.js         20 dicas de Português
js/data/redacao.js      14 temas de redação com motivadores e repertório
js/pages/*.js           Scripts por página
```

## 3. Conteúdo disponível

- **30 módulos** (interpretação, tipologia, gêneros, ortografia, acentuação, hífen, classes de palavras, substantivos, adjetivos, advérbios, pronomes, verbos, tempos e modos, concordância verbal e nominal, regência verbal e nominal, crase, pontuação, sintaxe, termos da oração, coordenadas, subordinadas, vozes verbais, coesão, semântica, figuras de linguagem, reescrita, redação oficial, correspondência oficial). Cada um com 9 blocos: introdução, seções detalhadas, exemplos práticos, regras, dicas para concursos, erros comuns, resumo, exercícios e gabarito comentado.
- **93 questões inéditas** — todas identificadas como autorais na própria questão. O campo "formato" descreve apenas o estilo de redação de cada banca; **nenhuma é apresentada como prova oficial**.
- **20 dicas** e **14 temas de redação** com textos motivadores, argumentos e repertório.

## 4. Armazenamento (sem servidor)

Todo o estado é local, via `localStorage`:

| Chave | Conteúdo |
|---|---|
| `ppc.theme` | Tema claro/escuro |
| `ppc.accounts.v1` | Contas locais (senha como hash, nunca texto puro) |
| `ppc.session.v1` | Sessão ativa |
| `ppc.students.v1` | Progresso por perfil: `lessons`, `reading`, `answers`, `exams`, `essays`, `favorites`, `plan`, `studySeconds`, `activity`, `certificates` |
| `ppc.activeExam.v1` | Simulado em andamento (retomável ao recarregar) |
| `ppc.lastResult.v1` | Último resultado para a página `resultado.html` |
| `ppc.overrides.v1` | Edições do painel administrativo (patches + itens criados) |
| `ppc.admin.v1` / `ppc.adminSession.v1` | Senha administrativa e sessão do painel |

Perfil visitante usa a chave `__visitante`; ao entrar com conta, o progresso passa a ser gravado sob o e-mail.

## 5. Funcionalidades verificadas

- Correção de simulado: `nota = round(acertos/total × 100)`, `aproveitamento` com 1 casa decimal, tempo real, questões em branco contabilizadas como erro (com confirmação antes de finalizar).
- Gráficos com Chart.js (CDN): donut acertos/erros, barras horizontais por assunto (resultado) e radar por área + linha de evolução (progresso). Há fallback textual se o CDN não carregar.
- Edições do painel são aplicadas sobre o conteúdo original via snapshot, permitindo editar e restaurar sem recarregar.

## 6. Acessibilidade, SEO e desempenho

- HTML semântico, `aria-*`, `aria-current`, skip link, foco visível, contraste adequado em ambos os temas.
- `meta description` por página, Open Graph na home, títulos únicos, `noindex` em páginas privadas (login, progresso, resultado, admin).
- CSS/JS próprios; sem imagens raster; impressão otimizada (`@media print`) para aulas, dicas e resultados (exportação em PDF pela impressão do navegador).
- `prefers-reduced-motion` respeitado.

## 7. Limitações conhecidas / próximos passos

- **Sem back-end**: não há autenticação em servidor, banco de dados central nem recuperação de senha por e-mail. O cadastro e as edições valem por navegador/dispositivo.
- O painel administrativo é uma área de gestão **local** (senha padrão `portugues2026`, alterável no próprio painel). Não deve ser usado para conteúdo sigiloso. Para publicar alterações a todos os visitantes, edite `js/data/*.js` e os HTMLs no projeto.
- O painel cobre os campos de uso mais frequente; seções detalhadas de aula, exemplos e erros comuns são editados nos arquivos `js/data/modules-*.js`.
- Possíveis evoluções: sincronização de progresso entre dispositivos (exigiria backend), mais questões por assunto, banco de redações corrigidas, exportação nativa em PDF.

## 8. Como usar

Abra `index.html`. Navegue pelos conteúdos sem conta; crie uma conta gratuita em `cadastro.html` se quiser identificar o progresso. Para administrar conteúdo, abra `admin.html`.
