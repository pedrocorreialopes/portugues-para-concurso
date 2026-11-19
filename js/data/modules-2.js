/* Conteúdo programático — módulos 11 a 20 */
window.PPC = window.PPC || {};
window.PPC.registerData({
  modules: [
    /* ================= 11 ================= */
    {
      slug: 'pronomes',
      numero: 11,
      titulo: 'Pronomes',
      grupo: 'Morfologia',
      resumo: 'Pronomes pessoais, de tratamento, possessivos, demonstrativos, indefinidos e relativos.',
      tags: ['pronome', 'pessoal', 'relativo', 'demonstrativo'],
      introducao: 'Pronome substitui ou acompanha o substantivo, indicando a pessoa do discurso. É conteúdo de alto rendimento em provas: aparece em questões de colocação pronominal, regência, coesão referencial e reescrita.',
      secoes: [
        {
          id: 'pessoais',
          titulo: 'Pronomes pessoais',
          html: '<table class="tbl"><thead><tr><th>Pessoa</th><th>Reto</th><th>Oblíquo átono</th><th>Oblíquo tônico</th></tr></thead><tbody>' +
            '<tr><td>1ª sing.</td><td>eu</td><td>me</td><td>mim, comigo</td></tr>' +
            '<tr><td>2ª sing.</td><td>tu</td><td>te</td><td>ti, contigo</td></tr>' +
            '<tr><td>3ª sing.</td><td>ele/ela</td><td>o, a, lhe</td><td>ele, ela, si, consigo</td></tr>' +
            '<tr><td>1ª plural</td><td>nós</td><td>nos</td><td>nós, conosco</td></tr>' +
            '<tr><td>2ª plural</td><td>vós</td><td>vos</td><td>vós, convosco</td></tr>' +
            '<tr><td>3ª plural</td><td>eles/elas</td><td>os, as, lhes</td><td>eles, elas, si, consigo</td></tr>' +
            '</tbody></table>' +
            '<p><strong>Função:</strong> o pronome reto é sujeito; o oblíquo átono é complemento sem preposição (o, a, os, as = objeto direto; lhe, lhes = objeto indireto).</p>' +
            '<p><strong>Regras críticas:</strong></p><ul>' +
            '<li>Não se usa pronome oblíquo átono como sujeito: errado "Não é possível <em>lhe</em> ajudar" → correto "ajudá-lo".</li>' +
            '<li>Depois de preposição, usa-se pronome tônico: "entre mim e você" (não "entre eu e você").</li>' +
            '<li>"Consigo" é reflexivo: "Ele falou consigo mesmo". Para outra pessoa: "com você".</li>' +
            '<li>Concordância com o verbo no futuro: "Far-lhe-ei" (mesóclise).</li></ul>' +
            '<div class="info-box box-warn"><h4>Erro clássico</h4><p>"Para eu fazer" (sujeito) x "para mim" (complemento). "Este livro é para <strong>eu</strong> ler" — o pronome é sujeito do verbo ler. "Trouxe o livro para <strong>mim</strong>" — complemento.</p></div>'
        },
        {
          id: 'tratamento',
          titulo: 'Pronomes de tratamento',
          html: '<table class="tbl"><thead><tr><th>Pronome</th><th>Uso</th><th>Concordância</th></tr></thead><tbody>' +
            '<tr><td>Você / vocês</td><td>Informal, tratamento direto</td><td>3ª pessoa (você estuda)</td></tr>' +
            '<tr><td>Senhor / Senhora</td><td>Respeitoso</td><td>3ª pessoa</td></tr>' +
            '<tr><td>Vossa Excelência (V. Ex.ª)</td><td>Altas autoridades (Presidente, Ministros, Deputados, Juízes)</td><td>3ª pessoa (Vossa Excelência <strong>deve</strong>)</td></tr>' +
            '<tr><td>Vossa Senhoria (V. Sa.)</td><td>Autoridades menores, particulares</td><td>3ª pessoa</td></tr>' +
            '<tr><td>Vossa Magnificência</td><td>Reitores</td><td>3ª pessoa</td></tr>' +
            '<tr><td>Vossa Eminência</td><td>Cardeais</td><td>3ª pessoa</td></tr>' +
            '<tr><td>Vossa Reverendíssima</td><td>Sacerdotes</td><td>3ª pessoa</td></tr>' +
            '</tbody></table>' +
            '<p><strong>Vossa</strong> usa-se ao falar <em>com</em> a autoridade; <strong>Sua</strong> ao falar <em>sobre</em> ela. Todos os pronomes de tratamento concordam com a 3ª pessoa, embora se dirijam à 2ª.</p>'
        },
        {
          id: 'possessivos-demonstrativos',
          titulo: 'Possessivos e demonstrativos',
          html: '<p><strong>Possessivos:</strong> meu/minha, teu/tua, seu/sua, nosso/nossa, vosso/vossa; dele/dela (dele, deles). Atenção ao gerúndio: "Ele aceitou <em>seu</em> pedido" é ambíguo — prefira "o pedido dele".</p>' +
            '<p><strong>Demonstrativos:</strong> este/esta/estes/estas (perto de quem fala); esse/essa (perto de quem ouve); aquele/aquela (longe de ambos). Também o mesmo, próprio, semelhante, tal.</p>' +
            '<p><strong>Em relação ao tempo:</strong> <em>este</em> = presente/futuro próximo ("este mês"); <em>esse</em> = passado próximo ("esse mês que passou").</p>' +
            '<p><strong>Em relação ao que se vai dizer:</strong> <em>este</em> anuncia ("Este é o ponto:"), <em>esse</em> retoma ("Esse ponto é o problema").</p>' +
            '<div class="info-box box-tip"><h4>Regra prática</h4><p>Se o referente já apareceu no texto, usa-se <em>esse</em> (anáfora). Se será apresentado, usa-se <em>este</em> (catáfora).</p></div>'
        },
        {
          id: 'relativos',
          titulo: 'Pronomes relativos',
          html: '<p>Retomam um termo anterior (antecedente) e iniciam oração subordinada adjetiva: <em>que, quem, o qual, a qual, os quais, as quais, cujo, cuja, onde, como, quanto</em>.</p>' +
            '<ul><li><strong>que</strong> — o mais versátil, para pessoa ou coisa.</li>' +
            '<li><strong>quem</strong> — pessoa, geralmente com preposição.</li>' +
            '<li><strong>cujo/cuja</strong> — indica posse; <strong>nunca</strong> admitido artigo após ele: "cujo o autor" é errado.</li>' +
            '<li><strong>onde</strong> — apenas lugar, com verbo que não exija preposição obrigatória; "onde" = "em que". "A situação onde isso ocorreu" é aceitável, mas "a empresa onde trabalha" é o uso clássico.</li>' +
            '<li><strong>o qual</strong> — evita ambiguidade e admite preposição: "sobre o qual".</li></ul>' +
            '<div class="info-box box-warn"><h4>Erros frequentes</h4><p>"Elaborei um projeto <em>cujo o</em> objetivo é..." → "cujo objetivo é". "A pessoa <em>que eu</em> falei" → "a pessoa <em>com quem</em> falei".</p></div>'
        },
        {
          id: 'indefinidos',
          titulo: 'Pronomes indefinidos',
          html: '<p>Dão ideia vaga, imprecisa: <em>algum, algum, nenhum, todo, outro, certo, muito, pouco, vários, tanto, quanto, qualquer, alguém, ninguém, outrem, tudo, nada, algo, cada</em>.</p>' +
            '<p>Alguns variam em gênero e número (alguns, algumas); outros são invariáveis (alguém, ninguém, cada, tudo, nada).</p>' +
            '<p><strong>Observação:</strong> <em>cada</em> exige verbo no singular: "Cada um dos alunos <em>recebeu</em> a prova".</p>'
        },
        {
          id: 'colocacao',
          titulo: 'Colocação pronominal em resumo',
          html: '<p><strong>Próclise</strong> (pronome antes do verbo) obrigatória com:<br>→ palavras atrativas: <em>não, nunca, jamais, ninguém, nada, que, quem, onde, quando, se, embora, talvez, já, aqui, todos, alguém</em>.</p>' +
            '<p><strong>Ênclise</strong> (depois do verbo): verbo no início da oração, verbo no imperativo afirmativo, gerúndio (sem "em"), infinitivo (regra geral, mas facultativa).</p>' +
            '<p><strong>Mesóclise</strong> (no meio do verbo): futuro do presente e futuro do pretérito, quando não houver atrativo: "Dir-lhe-ei".</p>' +
            '<div class="info-box box-tip"><h4>Hierarquia</h4><p>Atrativo &gt; mesóclise &gt; ênclise. Se houver palavra atrativa, a próclise vence até sobre o futuro do presente.</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Entre mim e você há um acordo.', nota: 'Após preposição, pronome tônico.' },
        { frase: 'O livro cujo autor é baiano.', nota: 'cujo nunca é seguido de artigo.' },
        { frase: 'Não me fale sobre isso.', nota: 'Palavra atrativa "não" exige próclise.' },
        { frase: 'Esta é a questão: esse ponto é o mais cobrado.', nota: 'este anuncia, esse retoma.' }
      ],
      regras: [
        'Não usar oblíquo átono como sujeito (é errado "lhe é possível").',
        'Após preposição, pronome tônico (mim, ti, si).',
        'cujo não admite artigo posterior.',
        'Vossa Excelência concorda com 3ª pessoa.',
        'não, nunca, que, se, embora, quando atraem o pronome (próclise).'
      ],
      dicas: [
        'Em redação oficial, evite "você"; use "munícipe", "cidadão" ou tratamento direto.',
        'Teste o "eu" com infinitivo: "para eu fazer", nunca "para mim fazer".',
        'Troque "que" por "o qual" quando precisar de clareza.'
      ],
      erros: [
        { errado: 'Entre eu e você.', certo: 'Entre mim e você.', porque: 'Após preposição exige-se pronome oblíquo tônico.' },
        { errado: 'O projeto cujo o objetivo é claro.', certo: 'O projeto cujo objetivo é claro.', porque: 'cujo repele artigo.' },
        { errado: 'Não é possível lhe ajudar.', certo: 'Não é possível ajudá-lo.', porque: '"lhe" não pode ser sujeito nem objeto direto.' }
      ],
      resumoFinal: [
        'Reto = sujeito; oblíquo átono = complemento; oblíquo tônico após preposição.',
        'Tratamento sempre na 3ª pessoa.',
        'cujo = posse, sem artigo depois.',
        'Atrativos obrigam próclise.'
      ]
    },

    /* ================= 12 ================= */
    {
      slug: 'verbos',
      numero: 12,
      titulo: 'Verbos',
      grupo: 'Morfologia',
      resumo: 'Estrutura, conjugações, transitividade, vozes, formas nominais e verbos irregulares.',
      tags: ['verbo', 'conjugação', 'irregular', 'transitividade'],
      introducao: 'O verbo é a palavra mais flexível da língua: varia em pessoa, número, tempo, modo e voz. Em concursos, o estudo dos verbos serve a três frentes: conjugação correta, concordância e regência. Verbos irregulares mal conjugados derrubam candidatos bem preparados.',
      secoes: [
        {
          id: 'estrutura',
          titulo: 'Estrutura do verbo',
          html: '<p>O verbo se divide em <strong>radical</strong> + <strong>vogal temática</strong> + <strong>desinências</strong> (modo-temporais e número-pessoais).</p>' +
            '<p>Três conjugações: <strong>1ª</strong> — infinitivo em -AR (estud<em>ar</em>); <strong>2ª</strong> — -ER (vend<em>er</em>); <strong>3ª</strong> — -IR (part<em>ir</em>). O verbo <em>pôr</em> e derivados pertencem à 2ª conjugação.</p>' +
            '<p><strong>Formas nominais:</strong> infinitivo (estudar), gerúndio (estudando), particípio (estudado). Não indicam tempo nem modo propiamente; exprimem um processo em si.</p>'
        },
        {
          id: 'tempos-modos',
          titulo: 'Tempos e modos: a visão funcional',
          html: '<h3>Modo indicativo</h3><table class="tbl"><thead><tr><th>Tempo</th><th>Uso</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td>Presente</td><td>fato atual, hábito, verdade atemporal</td><td>Ele estuda.</td></tr>' +
            '<tr><td>Pretérito perfeito</td><td>ação concluída</td><td>Ele estudou.</td></tr>' +
            '<tr><td>Pretérito imperfeito</td><td>ação habitual/futura no passado</td><td>Ele estudava.</td></tr>' +
            '<tr><td>Pretérito mais-que-perfeito</td><td>ação anterior a outra passada</td><td>Ele estudara.</td></tr>' +
            '<tr><td>Futuro do presente</td><td>fato posterior</td><td>Ele estudará.</td></tr>' +
            '<tr><td>Futuro do pretérito</td><td>hipótese, condição</td><td>Ele estudaria.</td></tr>' +
            '</tbody></table>' +
            '<p><strong>Modo subjuntivo</strong> (dúvida, desejo, hipótese): presente (<em>que ele estude</em>), pretérito imperfeito (<em>se ele estudasse</em>), futuro (<em>quando ele estudar</em>).</p>' +
            '<p><strong>Modo imperativo</strong> (ordem, pedido): afirmativo e negativo.</p>'
        },
        {
          id: 'irregulares',
          titulo: 'Verbos irregulares que decidem a prova',
          html: '<table class="tbl"><thead><tr><th>Verbo</th><th>Presente (eu)</th><th>Presente (ele)</th><th>Pret. perfeito (eu)</th></tr></thead><tbody>' +
            '<tr><td>agredir</td><td>agrido</td><td>agride</td><td>agredi</td></tr>' +
            '<tr><td>aderir</td><td>adiro</td><td>adere</td><td>aderi</td></tr>' +
            '<tr><td>precaver</td><td>precavejo</td><td>precave</td><td>precavi</td></tr>' +
            '<tr><td>requerer</td><td>requeiro</td><td>requer</td><td>requeri</td></tr>' +
            '<tr><td>prover / ver</td><td>provejo / vejo</td><td>provê / vê</td><td>provi / vi</td></tr>' +
            '<tr><td>pôr</td><td>ponho</td><td>põe</td><td>pus</td></tr>' +
            '<tr><td>vir / ter</td><td>venho / tenho</td><td>vem / tem</td><td>vim / tive</td></tr>' +
            '<tr><td>haver</td><td>heio (raro)</td><td>há</td><td>houve</td></tr>' +
            '</tbody></table>' +
            '<div class="info-box box-warn"><h4>Fique atento</h4><p><em>Requerer</em> é irregular (requeiro, requer). <em>Precaver-se</em> é defectivo no imperativo: "previna-se", não "precaveja-se". <em>Haver</em> no sentido de existir é impessoal: "Havia muitos candidatos".</p></div>' +
            '<p><strong>Derivados de ter e vir:</strong> ele tem / eles têm; ele vem / eles vêm; ele retém / eles retêm; ele provém / eles provêm.</p>'
        },
        {
          id: 'particípios',
          titulo: 'Particípios duplos e auxiliares',
          html: '<p>Com <strong>ter/haver</strong>: particípio irregular (<em>aceito, entregue, pago, preso, salvo, aberto, escrito, feito, posto, visto</em>).</p>' +
            '<p>Com <strong>ser/estar</strong>: particípio regular (<em>aceitado, entregado, pagado, prendido, salvado, abrido?</em> — cuidado, abrir tem apenas irregular "aberto").</p>' +
            '<table class="tbl"><thead><tr><th>Verbo</th><th>Com ter/haver</th><th>Com ser/estar</th></tr></thead><tbody>' +
            '<tr><td>aceitar</td><td>tinha aceitado</td><td>foi aceito</td></tr>' +
            '<tr><td>entregar</td><td>havia entregado</td><td>foi entregue</td></tr>' +
            '<tr><td>pagar</td><td>tinha pagado</td><td>foi pago</td></tr>' +
            '<tr><td>prender</td><td>havia prendido</td><td>foi preso</td></tr>' +
            '<tr><td>imprimir</td><td>havia imprimido</td><td>foi impresso</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'transitividade',
          titulo: 'Transitividade: o que o verbo pede',
          html: '<ul><li><strong>Intransitivo:</strong> não pede complemento — "A prova terminou".</li>' +
            '<li><strong>Transitivo direto:</strong> pede objeto direto, sem preposição — "Estudar a matéria".</li>' +
            '<li><strong>Transitivo indireto:</strong> pede objeto indireto com preposição — "Precisar de ajuda".</li>' +
            '<li><strong>Transitivo direto e indireto:</strong> dois complementos — "Enviar o recurso ao órgão".</li></ul>' +
            '<p>A transitividade pode mudar conforme o sentido: "Assistir ao filme" (ver, VTI) x "assistir o paciente" (ajudar, VTD); "Visar o alvo" (mirar, VTD) x "visar a um resultado" (almejar, VTI).</p>'
        },
        {
          id: 'verbos-problematicos',
          titulo: 'Verbos que costumam confundir',
          html: '<ul>' +
            '<li><strong>implicar</strong> (= acarretar): VTD, sem preposição — "Isso implica mudanças".</li>' +
            '<li><strong>preferir</strong>: "prefiro X a Y" (nunca "mais que").</li>' +
            '<li><strong>haver/existir</strong>: haver é impessoal — "Havia pessoas"; existir flexiona — "Existiam pessoas".</li>' +
            '<li><strong>fazer</strong> (tempo): impessoal — "Faz cinco anos".</li>' +
            '<li><strong>chegar/ir</strong>: "Cheguei a Brasília" (com "a", sem crase antes de topônimo sem artigo).</li>' +
            '</ul>'
        }
      ],
      exemplos: [
        { frase: 'Se ele requisesse o material, receberia.', nota: 'verbo... — atenção: o correto é "requeresse", de requerer.' },
        { frase: 'Quando você vir o resultado, avise.', nota: 'vir no futuro do subjuntivo: "vir", não "ver".' },
        { frase: 'Se eu puser o livro aqui, você o lê?', nota: 'pôr no futuro do subjuntivo: "puser".' },
        { frase: 'Ele havia entregado / o pacote foi entregue.', nota: 'particípio duplo conforme o auxiliar.' }
      ],
      regras: [
        'Três conjugações; pôr e derivados na 2ª.',
        'requerer é irregular (requeiro, requer).',
        'Com ter/haver: particípio irregular; com ser/estar: regular.',
        'haver e fazer (tempo) são impessoais.',
        'preferir X a Y, nunca "mais X do que Y".'
      ],
      dicas: [
        'Memorize pares: ver/vir, ter/vir derivados (têm/vêm).',
        'Em discurso indireto, ajuste o tempo verbal (pretérito imperfeito do subjuntivo).',
        'Na dúvida sobre particípio, confira o auxiliar: ter/haver pede forma curta.'
      ],
      erros: [
        { errado: 'Se eu ver o resultado.', certo: 'Se eu vir o resultado.', porque: 'Futuro do subjuntivo de ver é "vir".' },
        { errado: 'Eles requiseram o material.', certo: 'Eles requereram / requeiram.', porque: 'requerer mantém o "e" e forma próprio.' },
        { errado: 'Houveram muitos recursos.', certo: 'Houve muitos recursos.', porque: 'haver = existir é impessoal.' }
      ],
      resumoFinal: [
        'Domine os irregulares de prova: requerer, precaver, prover, pôr, ver, vir.',
        'Particípio depende do auxiliar.',
        'Transitividade muda com o sentido.',
        'haver e fazer (tempo) ficam no singular.'
      ]
    },

    /* ================= 13 ================= */
    {
      slug: 'tempos-modos-verbais',
      numero: 13,
      titulo: 'Tempos e modos verbais',
      grupo: 'Morfologia',
      resumo: 'Correspondência entre tempos, valor modal de cada forma e emprego no discurso indireto.',
      tags: ['tempo verbal', 'modo', 'subjuntivo', 'correlação'],
      introducao: 'Este módulo aprofunda o anterior: não basta conjugar, é preciso saber o efeito de sentido de cada tempo e modo — e a correspondência obrigatória entre eles na mesma frase.',
      secoes: [
        {
          id: 'valores',
          titulo: 'Valores de sentido de cada tempo',
          html: '<ul>' +
            '<li><strong>Presente</strong>: atualidade, verdade geral, hábito, narração dramática ("Em 1808, a corte chega").</li>' +
            '<li><strong>Pretérito perfeito</strong>: fato concluído, pontual. <em>Simple</em>: "estudei"; <em>composto</em>: "tenho estudado" (ação que se prolonga até o presente).</li>' +
            '<li><strong>Pretérito imperfeito</strong>: ação durativa, habitual, descritiva; no discurso indireto, indica simultaneidade com fato passado.</li>' +
            '<li><strong>Pretérito mais-que-perfeito</strong>: anterioridade em relação a outro fato passado. Literário: "estudara"; composto: "tinha estudado".</li>' +
            '<li><strong>Futuro do presente</strong>: fato posterior; pode indicar incerteza ("serão dez pessoas").</li>' +
            '<li><strong>Futuro do pretérito</strong>: hipótese, condição, polidez, futuro do passado ("Ele disse que estudaria").</li>' +
            '</ul>'
        },
        {
          id: 'subjuntivo',
          titulo: 'O subjuntivo: três tempos, três usos',
          html: '<table class="tbl"><thead><tr><th>Tempo</th><th>Quando usar</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td>Presente</td><td>Desejo/ordem presente</td><td>Espero que ele <strong>chegue</strong>.</td></tr>' +
            '<tr><td>Pretérito imperfeito</td><td>Hipótese e condição no passado</td><td>Se ele <strong>chegasse</strong>, partiríamos.</td></tr>' +
            '<tr><td>Futuro</td><td>Eventualidade futura</td><td>Quando ele <strong>chegar</strong>, avise.</td></tr>' +
            '</tbody></table>' +
            '<div class="info-box box-tip"><h4>Correlação verbal</h4><p>"Se eu <em>tivesse</em> estudado, eu <em>teria passado</em>" (imperfeito do subjuntivo + futuro do pretérito composto). "Espero que ele <em>venha</em>" (presente do indicativo + presente do subjuntivo).</p></div>' +
            '<p><strong>Erro comum:</strong> misturar tempos — "Se ele vier, eu teria avisado" ❌; correto: "Se ele <em>viesse</em>, eu <em>teria</em> avisado".</p>'
        },
        {
          id: 'imperativo',
          titulo: 'Imperativo: afirmativo e negativo',
          html: '<p><strong>Afirmativo</strong>: 2ª pessoa do singular vem do presente do indicativo sem o "s" (<em>tu estudas → estuda tu</em>); demais pessoas vêm do presente do subjuntivo (<em>estude você, estudemos nós, estudai vós</em>...).</p>' +
            '<p><strong>Negativo</strong>: sempre do presente do subjuntivo (<em>não estudes tu, não estude você</em>).</p>' +
            '<p>Formas irregulares: <em>sê, sê tu, seja você, sede vós</em>; <em>vem tu, venha você</em>; <em>faze tu, faça você</em>.</p>'
        },
        {
          id: 'discurso-indireto',
          titulo: 'Tempos no discurso indireto',
          html: '<table class="tbl"><thead><tr><th>Discurso direto</th><th>Discurso indireto</th></tr></thead><tbody>' +
            '<tr><td>Presente → "Estou pronto"</td><td>Pretérito imperfeito → Ele disse que <em>estava</em> pronto.</td></tr>' +
            '<tr><td>Pretérito perfeito → "Estudei"</td><td>Mais-que-perfeito → Ele disse que <em>estudara</em>.</td></tr>' +
            '<tr><td>Futuro do presente → "Passarei"</td><td>Futuro do pretérito → Ele disse que <em>passaria</em>.</td></tr>' +
            '<tr><td>Imperativo → "Estude!"</td><td>Pretérito imperfeito do subjuntivo → Ele pediu que <em>estudasse</em>.</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'formas-ambiguas',
          titulo: 'Formas parecidas que confundem',
          html: '<ul>' +
            '<li><strong>cantara</strong> (mais-que-perfeito) x <strong>cantaria</strong> (futuro do pretérito).</li>' +
            '<li><strong>houvera/houvera</strong> (mais-que-perfeito) x <strong>houveria</strong> (futuro do pretérito).</li>' +
            '<li><strong>estiver</strong> (futuro do subjuntivo) x <strong>estivesse</strong> (imperfeito do subjuntivo).</li>' +
            '<li><strong>puser</strong> (futuro do subjuntivo de pôr) x <strong>pusesse</strong> (imperfeito).</li>' +
            '</ul>'
        }
      ],
      exemplos: [
        { frase: 'Se ela tivesse avisado, eu teria esperado.', nota: 'Correlação correta em hipótese irreal do passado.' },
        { frase: 'Quando o edital sair, organizarei a rotina.', nota: 'Futuro do subjuntivo + futuro do presente.' },
        { frase: 'Disseram que a prova seria mais fácil.', nota: 'Futuro do pretérito substituindo futuro do presente no discurso indireto.' }
      ],
      regras: [
        'Se + imperfeito do subjuntivo → futuro do pretérito (condição).',
        'Quando + futuro do subjuntivo → presente/futuro do indicativo.',
        'Espero que + presente do subjuntivo.',
        'Imperativo negativo sempre do subjuntivo.',
        'Discurso indireto desloca os tempos para o passado.'
      ],
      dicas: [
        'Parez de trocar "vir" por "ver": em futuro do subjuntivo, ver = vir.',
        'Ler em voz alta: a correlação errada soa "dura".',
        'Fixe as estruturas: se...sse, ...ria.'
      ],
      erros: [
        { errado: 'Se eu ver ele amanhã, aviso.', certo: 'Se eu vir ele amanhã, aviso.', porque: 'Futuro do subjuntivo de ver é "vir".' },
        { errado: 'Espero que ele vem.', certo: 'Espero que ele venha.', porque: 'Desejo exige subjuntivo.' },
        { errado: 'Quando você for, eu teria ido.', certo: 'Quando você for, eu irei.', porque: 'Não misture futuro do subjuntivo com futuro do pretérito.' }
      ],
      resumoFinal: [
        'Cada tempo carrega valor semântico próprio.',
        'Correlação: se + sse → ria.',
        'Imperativo negativo = presente do subjuntivo.',
        'Discurso indireto desloca tempos.'
      ]
    },

    /* ================= 14 ================= */
    {
      slug: 'concordancia-verbal',
      numero: 14,
      titulo: 'Concordância verbal',
      grupo: 'Sintaxe',
      resumo: 'Regra geral, sujeito composto, partículas "se", expressões partitivas e verbos impessoais.',
      tags: ['concordância', 'verbo', 'sujeito', 'impessoal'],
      introducao: 'O verbo concorda com o sujeito em número e pessoa. Parece simples — e é, até aparecer sujeito posposto, partícula "se", expressão partitiva ou verbo impessoal. Estas são as quatro armas da banca.',
      secoes: [
        {
          id: 'regra-geral',
          titulo: 'Regra geral e sujeito posposto',
          html: '<p>O verbo concorda com o sujeito em <strong>número</strong> e <strong>pessoa</strong>. Com sujeito <strong>posposto</strong> (depois do verbo), a concordância continua sendo com ele: "<em>Chegaram</em> os candidatos" (não "chegou").</p>' +
            '<p><strong>Sujeito composto anteposto</strong> (dois núcleos antes do verbo): plural — "O professor e o aluno <em>discutiram</em>".</p>' +
            '<p><strong>Sujeito composto posposto</strong>: plural ou concordância com o mais próximo — "Chegaram o pai e o filho" ou "Chegou o pai e o filho".</p>' +
            '<p><strong>Sujeito composto com pessoas diferentes</strong>: 1ª pessoa prevalece — "Eu e ele <em>faremos</em>"; sem 1ª, 2ª prevalece — "Tu e ele <em>fareis</em>".</p>'
        },
        {
          id: 'particula-se',
          titulo: 'A partícula "se": quatro situações',
          html: '<table class="tbl"><thead><tr><th>Função do "se"</th><th>Estrutura</th><th>Concordância</th></tr></thead><tbody>' +
            '<tr><td>Índice de indeterminação do sujeito</td><td>VTI / VI / VL + se</td><td>Sempre 3ª do singular — "Precisa-se de médicos"</td></tr>' +
            '<tr><td>Partícula apassivadora</td><td>VTD + se (sujeito paciente)</td><td>Concorda com o sujeito — "Vendem-se casas" / "Vende-se casa"</td></tr>' +
            '<tr><td>Pronome reflexivo</td><td>verbo com sujeito agente</td><td>Concorda com o sujeito — "Os alunos se machucaram"</td></tr>' +
            '<tr><td>Parte integrante do verbo</td><td>verbos pronominais</td><td>Concorda com o sujeito — "Ele se arrependeu"</td></tr>' +
            '</tbody></table>' +
            '<div class="info-box box-warn"><h4>Teste prático</h4><p>Transforme em voz passiva analítica. "Vendem-se casas" → "Casas são vendidas" ✔ (partícula apassivadora). "Precisa-se de médicos" → "Médicos são precisados" ✘ (indeterminação do sujeito).</p></div>'
        },
        {
          id: 'casos-especiais',
          titulo: 'Casos especiais obrigatórios',
          html: '<ul>' +
            '<li><strong>Expressões partitivas</strong> (a maioria de, grande parte de, metade de, a maior parte de + plural): verbo no singular ou plural — "A maioria dos candidatos <em>chegou/chegaram</em>". Com determinante, plural preferível.</li>' +
            '<li><strong>Mais de um</strong>: singular — "Mais de um aluno <em>faltou</em>". Com reciprocidade: plural — "Mais de um aluno se <em>cumprimentaram</em>".</li>' +
            '<li><strong>Expressões indicando quantidade aproximada</strong> (cerca de, perto de + numeral): concorda com o numeral — "Cerca de mil pessoas <em>compareceram</em>".</li>' +
            '<li><strong>Nomes próprios no plural</strong>: com artigo, verbo no plural — "Os Estados Unidos <em>são</em>"; sem artigo, singular — "Minas Gerais <em>produz</em> café".</li>' +
            '<li><strong>O que / quem</strong>: "Fui eu que <em>resolvi</em>"; "Fui eu quem <em>resolveu</em>" (ou resolvi).</li>' +
            '<li><strong>Um dos que</strong>: plural — "Ele é um dos que <em>mais estudam</em>".</li>' +
            '<li><strong>Nem... nem</strong>: verbo no plural (sujeito composto) — "Nem ele nem ela <em>vieram</em>".</li>' +
            '<li><strong>Com</strong> (= e): plural — "O professor com os alunos <em>saíram</em>".</li>' +
            '<li><strong>Sujeito com "ou"</strong>: singular se exclusão; plural se soma — "Ou você ou ele <em>será</em> escolhido".</li>' +
            '</ul>'
        },
        {
          id: 'impessoais',
          titulo: 'Verbos impessoais — sempre no singular',
          html: '<p>Não têm sujeito, portanto não vão ao plural:</p>' +
            '<ul><li><strong>haver</strong> (existir, ocorrer, tempo): "Havia muitos candidatos"; "Houve provas"; "Há cinco anos".</li>' +
            '<li><strong>fazer</strong> (tempo/clima): "Faz dois anos"; "Fazia dias frios".</li>' +
            '<li><strong>ser</strong> (hora/data/distância): "É uma hora"; "São cinco horas" (aqui concorda com o numeral).</li>' +
            '<li><strong>chover, nevar, ventar, trovejar</strong>: "Choveu muito"; "Choveram raios" (figurado, com sujeito).</li></ul>' +
            '<p>Na locução, o auxiliar acompanha a impessoalidade: "Vai haver provas" (não "vão haver").</p>' +
            '<div class="info-box box-tip"><h4>Truque</h4><p>Troque "haver" por "existir": se "existir" fosse ao plural, use "haver" no singular mesmo assim — "Existiam provas" → "Havia provas".</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Fazem dez anos que estudei.'/* erro mostrado de propósito */, nota: 'ERRADO — correto: "Faz dez anos". Fazer indicando tempo é impessoal.' },
        { frase: 'Devem haver soluções.', nota: 'ERRADO — "Deve haver soluções": haver impessoal transmite a impessoalidade ao auxiliar.' },
        { frase: 'A maioria dos candidatos compareceu / compareceram.', nota: 'Ambas aceitáveis com expressão partitiva.' },
        { frase: 'Vendem-se apartamentos no centro.', nota: 'Partícula apassivadora: sujeito "apartamentos" no plural.' }
      ],
      regras: [
        'Sujeito posposto: concordância continua obrigatória.',
        'VTI + se: sempre singular.',
        'VTD + se: concorda com o sujeito paciente.',
        'haver/fazer (tempo) sempre singular, inclusive com auxiliar.',
        'Expressão partitiva: singular ou plural (plural com determinante).'
      ],
      dicas: [
        'Encontre o sujeito antes de olhar o verbo — nunca o contrário.',
        'Transforme em passiva analítica para identificar apassivadora.',
        'Sublinhar o auxiliar: "vai haver", "deve haver", "pode haver".'
      ],
      erros: [
        { errado: 'Existe muitos problemas.', certo: 'Existem muitos problemas / Há muitos problemas.', porque: 'existir flexiona; haver não.' },
        { errado: 'Tratam-se de questões difíceis.', certo: 'Trata-se de questões difíceis.', porque: 'VTI + se = índice de indeterminação.' },
        { errado: 'Vão haver mudanças.', certo: 'Vai haver mudanças.', porque: 'haver impessoal contamina o auxiliar.' }
      ],
      resumoFinal: [
        'Localize o sujeito antes de concordar.',
        'se + VTI = singular; se + VTD = concorda com sujeito.',
        'haver e fazer (tempo) são impessoais.',
        'Partitivas admitem dupla concordância.'
      ]
    },

    /* ================= 15 ================= */
    {
      slug: 'concordancia-nominal',
      numero: 15,
      titulo: 'Concordância nominal',
      grupo: 'Sintaxe',
      resumo: 'Adjetivo com um ou vários substantivos, casos de "é necessário", "meio", "anexo" e "quite".',
      tags: ['concordância nominal', 'adjetivo', 'anexo', 'meio'],
      introducao: 'O adjetivo, o artigo, o numeral e o pronome concordam com o substantivo em gênero e número. As questões concentram-se em dois blocos: adjetivo posposto a vários substantivos e expressões cristalizadas como "é necessário", "anexo", "quite".',
      secoes: [
        {
          id: 'regra-nominal',
          titulo: 'Adjetivo com um ou vários substantivos',
          html: '<p><strong>Um substantivo, um adjetivo:</strong> concordância direta — "livros novos".</p>' +
            '<p><strong>Vários substantivos + um adjetivo posposto:</strong> vai ao plural (concorda com todos) ou concorda com o mais próximo — "comprei camisa e sapato novos/novo". Se o adjetivo vier <strong>anteposto</strong>, concorda apenas com o mais próximo — "comprei novo sapato e camisa".</p>' +
            '<p><strong>Substantivos de gêneros diferentes:</strong> masculino plural prevalece — "paredes e tetos altos".</p>' +
            '<p><strong>Adjetivo com valor de advérbio:</strong> invariável — "As crianças falaram alto".</p>'
        },
        {
          id: 'expressoes',
          titulo: 'Expressões que decidem a questão',
          html: '<table class="tbl"><thead><tr><th>Expressão</th><th>Regra</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td><strong>É necessário / é bom / é proibido</strong></td><td>Invariável se o sujeito não tem determinante; concorda se houver artigo</td><td>"É necessário paciência" / "É necessária a paciência"</td></tr>' +
            '<tr><td><strong>meio</strong></td><td>advérbio = invariável; numeral = varia</td><td>"meio cansada" / "meia dúzia"</td></tr>' +
            '<tr><td><strong>bastante</strong></td><td>advérbio = invariável; pronome = varia</td><td>"bastante claro" / "bastantes pessoas"</td></tr>' +
            '<tr><td><strong>anexo / incluso / apenso</strong></td><td>Adjetivos: variam</td><td>"seguem anexas as cópias"</td></tr>' +
            '<tr><td><strong>em anexo</strong></td><td>Locução: invariável</td><td>Segue em anexo a cópia.</td></tr>' +
            '<tr><td><strong>quite</strong></td><td>Adjetivo: varia</td><td>"estamos quites"</td></tr>' +
            '<tr><td><strong>menos</strong></td><td>Invariável</td><td>"menos pessoas" (nunca "menas")</td></tr>' +
            '<tr><td><strong>só</strong></td><td>= sozinho varia; = somente invariável</td><td>"estão sós" / "só eles vieram"</td></tr>' +
            '<tr><td><strong>obrigado</strong></td><td>Concorda com quem agradece</td><td>"Muito obrigada", disse ela.</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'cores',
          titulo: 'Adjetivos de cor',
          html: '<ul>' +
            '<li><strong>Cor simples:</strong> varia — "camisas amarelas".</li>' +
            '<li><strong>Cor composta (adjetivo + adjetivo):</strong> invariável na primeira parte — "camisas amarelo-ouro", "olhos azul-claros".</li>' +
            '<li><strong>Cor composta com substantivo:</strong> invariável total — "blusas vinho", "sapatos gelo" (cor + substantivo não varia).</li>' +
            '<li><strong>Uso substantivado:</strong> varia — "os amarelos da tela".</li>' +
            '</ul>'
        },
        {
          id: 'numeros',
          titulo: 'Numeral na concordância',
          html: '<p>Numeral acompanha o substantivo: "duas horas", "dois meses". Casos especiais:</p>' +
            '<ul><li>"É uma hora / São duas horas" — o verbo concorda com o numeral.</li>' +
            '<li>"Faz duas horas" — impessoal, singular.</li>' +
            '<li>"Vinte por cento <em>dos</em> alunos faltaram" x "Vinte por cento <em>do</em> contingente faltou" — verbo concorda com o termo após "de".</li></ul>'
        }
      ],
      exemplos: [
        { frase: 'É proibida a entrada.', nota: 'Sujeito com artigo define o gênero: "a entrada" → "proibida".' },
        { frase: 'É proibido entrada de estranhos.', nota: 'Sem determinante: invariável.' },
        { frase: 'Seguem anexas as planilhas.', nota: 'anexo é adjetivo: concorda com o substantivo plural.' },
        { frase: 'Seguem em anexo as planilhas.', nota: 'Em anexo é locução: invariável.' }
      ],
      regras: [
        'Adjetivo posposto a vários substantivos: plural ou mais próximo.',
        'Adjetivo anteposto: concorda só com o mais próximo.',
        'É necessário / é bom: invariável sem determinante.',
        'menos é sempre invariável.',
        'anexo e quite variam; em anexo e menos são invariáveis.'
      ],
      dicas: [
        'Procure o determinante (artigo) antes de decidir sobre "é bom/proibido".',
        'Nunca escreva "menas".',
        'Em redação oficial, prefira "em anexo" — menos sujeito a erro.'
      ],
      erros: [
        { errado: 'É necessário a paciência.', certo: 'É necessária a paciência.', porque: 'Com artigo, o adjetivo concorda.' },
        { errado: 'menas pessoas, menas vezes.', certo: 'menos pessoas, menos vezes.', porque: '"menos" é advérbio invariável.' },
        { errado: 'Segue anexo as planilhas.', certo: 'Seguem anexas as planilhas.', porque: 'adjetivo + verbo concordam com o sujeito.' }
      ],
      resumoFinal: [
        'Adjetivo posposto: plural ou mais próximo.',
        'É necessário/proibido: varia com determinante.',
        'meio, bastante, só: variáveis ou não conforme a função.',
        'menos é sempre invariável.'
      ]
    },

    /* ================= 16 ================= */
    {
      slug: 'regencia-verbal',
      numero: 16,
      titulo: 'Regência verbal',
      grupo: 'Sintaxe',
      resumo: 'Preposições exigidas pelos verbos e a lista dos casos mais cobrados em concursos.',
      tags: ['regência', 'preposição', 'assistir', 'visar', 'obedecer'],
      introducao: 'Regência verbal é a relação de dependência entre verbo e complemento, com ou sem preposição. O problema é que a língua falada admite construções que a norma padrão condena — e é justamente essa distância que a banca explora.',
      secoes: [
        {
          id: 'lista-mestra',
          titulo: 'Lista dos verbos mais cobrados',
          html: '<table class="tbl"><thead><tr><th>Verbo</th><th>Sentido / regência</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td><strong>assistir</strong></td><td>ver (VTI com "a"); ajudar (VTD); caber (VTI com "a")</td><td>Assistimos <em>ao</em> julgamento. / O médico assistiu o paciente.</td></tr>' +
            '<tr><td><strong>visar</strong></td><td>mirar (VTD); almejar (VTI com "a"); pôr visto (VTD)</td><td>Visou <em>ao</em> cargo. / Visou o alvo.</td></tr>' +
            '<tr><td><strong>obedecer / desobedecer</strong></td><td>VTI com "a"</td><td>Obedeceu <em>ao</em> edital.</td></tr>' +
            '<tr><td><strong>implicar</strong></td><td>= acarretar (VTD, sem preposição)</td><td>Isso implica <em>mudança</em>.</td></tr>' +
            '<tr><td><strong>preferir</strong></td><td>VTD e VTI: preferir A a B</td><td>Prefiro ler <em>a</em> assistir.</td></tr>' +
            '<tr><td><strong>chegar / ir</strong></td><td>VI com "a" (a, para)</td><td>Chegamos <em>a</em> Brasília.</td></tr>' +
            '<tr><td><strong>aspirar</strong></td><td>almejar (VTI com "a"); inalar (VTD)</td><td>AsPIRO <em>ao</em> cargo. / Aspirou o perfume.</td></tr>' +
            '<tr><td><strong>agradar</strong></td><td>satisfazer (VTI com "a"); acariciar (VTD)</td><td>A proposta agradou <em>aos</em> servidores.</td></tr>' +
            '<tr><td><strong>esquecer / lembrar</strong></td><td>VTD; pronominais com "de"</td><td>Esqueci o nome / Esqueci-me <em>do</em> nome.</td></tr>' +
            '<tr><td><strong>pagar / perdoar</strong></td><td>VTD (coisa) e VTI (pessoa, com "a")</td><td>Paguei <em>ao</em> fornecedor a dívida.</td></tr>' +
            '<tr><td><strong>informar / avisar</strong></td><td>informar alguém DE algo / informar algo A alguém</td><td>Informei <em>o</em> aluno <em>do</em> resultado.</td></tr>' +
            '<tr><td><strong>proceder</strong></td><td>= ter fundamento (VI); = originar-se (VTI com "de")</td><td>O recurso não procede. / Procede <em>de</em> Goiás.</td></tr>' +
            '<tr><td><strong>usufruir / desfrutar</strong></td><td>VTI com "de"</td><td>Usufruiu <em>do</em> benefício.</td></tr>' +
            '<tr><td><strong>simpatizar</strong></td><td>VTI com "com" (não pronominal)</td><td>Simpatizei <em>com</em> a proposta.</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'transitividade-muda',
          titulo: 'Verbos com mais de uma regência',
          html: '<p>Alguns verbos mudam de regência conforme o sentido — os chamados <strong>verbos de dupla transitividade</strong>. Isso permite questões do tipo: "a substituição mantém a correção gramatical?".</p>' +
            '<ul>' +
              '<li><strong>assistir</strong>: ao filme (ver) / o doente (ajudar) / ao direito (caber).</li>' +
              '<li><strong>visar</strong>: ao objetivo (almejar) / o documento (pôr visto).</li>' +
              '<li><strong>aspirar</strong>: ao cargo (desejar) / o ar (inalar).</li>' +
              '<li><strong>chamar</strong>: chamei-o (VTD) / chamei-lhe (VTI).</li>' +
              '<li><strong>responder</strong>: respondi à pergunta (VTI) / respondi que sim (oração).</li>' +
            '</ul>'
        },
        {
          id: 'titulos',
          titulo: 'Pronomes e regência: o teste das trocas',
          html: '<p>Ao trocar o complemento por pronome oblíquo, a regência fica visível:</p>' +
            '<ul>' +
              '<li>VTD → o, a, os, as: "Aprovei o recurso" → "Aprovei-o".</li>' +
              '<li>VTI → lhe, lhes: "Obedeci ao edital" → "Obedeci-lhe".</li>' +
              '<li>VTI com "a" + pessoa → pode usar "a ele": "Assisti ao filme" → "Assisti a ele".</li>' +
            '</ul>' +
            '<div class="info-box box-tip"><h4>Truque de prova</h4><p>Substitua o complemento por "isso": se a frase exigir "a isso", o verbo é VTI. "Viso <em>a isso</em>" ✔; "Impliquei isso" ✔ (sem preposição).</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Informei o candidato sobre o resultado.', nota: 'Correto: informar alguém de/sobre algo.' },
        { frase: 'Prefiro estudar a trabalhar.', nota: 'preferir A a B — sem "mais que".' },
        { frase: 'Aspiro a uma vaga de analista.', nota: 'Aspirar = desejar: VTI com "a".' },
        { frase: 'Cheguei em São Paulo.', nota: 'Uso coloquial; norma padrão: "Cheguei a São Paulo".' }
      ],
      regras: [
        'assistir (ver) exige "a"; (ajudar) não exige preposição.',
        'visar (almejar) exige "a"; (mirar) não.',
        'implicar (= acarretar) é VTD, sem preposição.',
        'preferir A a B, nunca "preferir mais A do que B".',
        'informar/avisar aceitam duas construções: informar alguém de algo / informar algo a alguém.'
      ],
      dicas: [
        'Aprenda regência por pares de sentido (ver x ajudar), não por listas soltas.',
        'Em prova de reescrita, verifique se a troca manteve o sentido e a preposição.',
        'Pronome "lhe" só funciona com VTI.'
      ],
      erros: [
        { errado: 'Assisti o filme.', certo: 'Assisti ao filme.', porque: 'assistir = ver exige preposição "a".' },
        { errado: 'Prefiro mais estudar do que trabalhar.', certo: 'Prefiro estudar a trabalhar.', porque: 'Duplo comparativo é erro.' },
        { errado: 'Implicou em mudanças.', certo: 'Implicou mudanças.', porque: 'implicar (=acarretar) é VTD.' }
      ],
      resumoFinal: [
        'Regência depende do sentido do verbo.',
        'assistir, visar, aspirar: VTI quando "almejar/ver".',
        'implicar acarretar: sem preposição.',
        'preferir A a B.'
      ]
    },

    /* ================= 17 ================= */
    {
      slug: 'regencia-nominal',
      numero: 17,
      titulo: 'Regência nominal',
      grupo: 'Sintaxe',
      resumo: 'Preposições exigidas por substantivos, adjetivos e advérbios, com o quadro completo dos casos.',
      tags: ['regência nominal', 'preposição', 'adjetivo', 'substantivo'],
      introducao: 'Na regência nominal, a preposição é exigida por um nome (substantivo, adjetivo ou advérbio). É conteúdo de leitura obrigatória porque as bancas aproveitam a confusão entre "obediente a" e "obediente com", "apto a" e "apto para".',
      secoes: [
        {
          id: 'quadro',
          titulo: 'Quadro de regência nominal',
          html: '<table class="tbl"><thead><tr><th>Nome</th><th>Preposição</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td>acessível</td><td>a</td><td>acessível <em>a</em> todos</td></tr>' +
            '<tr><td>adequado</td><td>a / para</td><td>adequado <em>ao</em> cargo</td></tr>' +
            '<tr><td>afeto</td><td>a</td><td>afeto <em>ao</em> trabalho</td></tr>' +
            '<tr><td>ansioso</td><td>por / para</td><td>ansioso <em>pelo</em> resultado</td></tr>' +
            '<tr><td>apto</td><td>a / para</td><td>apto <em>para</em> o exercício</td></tr>' +
            '<tr><td>atento</td><td>a / em</td><td>atento <em>ao</em> edital</td></tr>' +
            '<tr><td>ávido</td><td>de / por</td><td>ávido <em>por</em> conhecimento</td></tr>' +
            '<tr><td>benéfico</td><td>a</td><td>benéfico <em>à</em> saúde</td></tr>' +
            '<tr><td>capaz</td><td>de / para</td><td>capaz <em>de</em> resolver</td></tr>' +
            '<tr><td>ciente</td><td>de</td><td>ciente <em>do</em> prazo</td></tr>' +
            '<tr><td>compatível</td><td>com</td><td>compatível <em>com</em> a norma</td></tr>' +
            '<tr><td>contrário</td><td>a</td><td>contrário <em>ao</em> parecer</td></tr>' +
            '<tr><td>curioso</td><td>de / por</td><td>curioso <em>por</em> detalhes</td></tr>' +
            '<tr><td>descontente</td><td>com</td><td>descontente <em>com</em> o resultado</td></tr>' +
            '<tr><td>digno</td><td>de</td><td>digno <em>de</em> confiança</td></tr>' +
            '<tr><td>favorável</td><td>a</td><td>favorável <em>à</em> proposta</td></tr>' +
            '<tr><td>fiel</td><td>a</td><td>fiel <em>aos</em> princípios</td></tr>' +
            '<tr><td>grato</td><td>a / por</td><td>grato <em>ao</em> professor</td></tr>' +
            '<tr><td>habilitado</td><td>a / para</td><td>habilitado <em>ao</em> cargo</td></tr>' +
            '<tr><td>imune</td><td>a / de</td><td>imune <em>a</em> críticas</td></tr>' +
            '<tr><td>incompatível</td><td>com</td><td>incompatível <em>com</em> o edital</td></tr>' +
            '<tr><td>leal</td><td>a</td><td>leal <em>aos</em> colegas</td></tr>' +
            '<tr><td>obediente</td><td>a</td><td>obediente <em>às</em> regras</td></tr>' +
            '<tr><td>passível</td><td>de</td><td>passível <em>de</em> recurso</td></tr>' +
            '<tr><td>propício</td><td>a</td><td>propício <em>ao</em> estudo</td></tr>' +
            '<tr><td>próximo</td><td>a / de</td><td>próximo <em>da</em> verdade</td></tr>' +
            '<tr><td>respeitoso</td><td>com / para com</td><td>respeitoso <em>com</em> os alunos</td></tr>' +
            '<tr><td>satisfeito</td><td>com</td><td>satisfeito <em>com</em> a nota</td></tr>' +
            '<tr><td>simpatizante</td><td>de</td><td>simpatizante <em>do</em> movimento</td></tr>' +
            '<tr><td>versado</td><td>em</td><td>versado <em>em</em> direito</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'sub-adjetivos',
          titulo: 'Regência de substantivos e advérbios',
          html: '<p><strong>Substantivos:</strong> <em>amor a</em>, <em>aversão a</em>, <em>dúvida sobre/acerca de/em relação a</em>, <em>obediência a</em>, <em>preferência por/a</em>, <em>respeito a</em>, <em>acesso a</em>, <em>necessidade de</em>, <em>capacidade de/para</em>, <em>consciência de</em>, <em>consultor em</em>.</p>' +
            '<p><strong>Advérbios:</strong> <em>perto de</em>, <em>longe de</em>, <em>acima de</em>, <em>abaixo de</em>, <em>depois de</em>, <em>antes de</em>, <em>em vez de</em>, <em>através de</em>.</p>' +
            '<div class="info-box box-warn"><h4>Cuidado com "através de"</h4><p>Na norma estrita, "através de" indica atravessamento ("passou através do muro"). Para meio/instrumento, prefira "por meio de", "mediante", "por intermédio de".</p></div>'
        },
        {
          id: 'crase-regencia',
          titulo: 'Quando a regência produz crase',
          html: '<p>Se o nome exige a preposição "a" e o complemento é feminino com artigo, aparece o acento grave: "favorável <em>à</em> proposta", "obediente <em>às</em> normas", "acessível <em>à</em> população".</p>' +
            '<p>Verbo também: "assistir <em>à</em> cerimônia", "visar <em>à</em> aprovação".</p>' +
            '<div class="info-box box-tip"><h4>Fluxo de decisão</h4><p>1) O nome/verbo pede "a"? 2) O complemento é feminino? 3) O complemento admite artigo "a"? Se as três respostas forem sim, há crase.</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Sou grato aos professores.', nota: 'grato a alguém — regência com "a".' },
        { frase: 'O aluno está ciente de suas obrigações.', nota: 'ciente de — preposição obrigatória.' },
        { frase: 'A medida é compatível com a lei.', nota: 'compatível com.' },
        { frase: 'Ele é versado em língua portuguesa.', nota: 'versado em.' }
      ],
      regras: [
        'Cada adjetivo/substantivo tem preposição própria; decorar grupos é mais eficiente que listas longas.',
        'Adjetivos de "conhecimento/atenção" tendem a pedir "de" ou "a".',
        'Adjetivos de "relação/sociedade" tendem a "com".',
        'Preposição + artigo feminino = crase.',
        '"através de" para meio é evitado na norma culta.'
      ],
      dicas: [
        'Agrupe: ciente de, consciente de, convicto de, ciente de, certo de.',
        'Agrupe: favorável a, contrário a, alheio a, inerente a, relativo a.',
        'Agrupe: compatível com, satisfeito com, descontente com, solidário com.'
      ],
      erros: [
        { errado: 'Obediente às normas (com "com").', certo: 'obediente a', porque: 'A preposição é "a", não "com".' },
        { errado: 'Compatível a norma.', certo: 'compatível com a norma.', porque: 'A regência é "com".' },
        { errado: 'Ciente que.', certo: 'ciente de que.', porque: 'A preposição "de" é exigida antes de "que".' }
      ],
      resumoFinal: [
        'Regência nominal = preposição exigida por nome.',
        'Grupos semânticos ajudam a memorizar.',
        'Regência com "a" + feminino = crase.',
        'Prefira "por meio de" a "através de" para instrumento.'
      ]
    },

    /* ================= 18 ================= */
    {
      slug: 'crase',
      numero: 18,
      titulo: 'Crase',
      grupo: 'Sintaxe',
      resumo: 'Regras obrigatórias, facultativas e proibidas, com testes práticos e casos de locução.',
      tags: ['crase', 'acento grave', 'preposição', 'locução'],
      introducao: 'Crase é a fusão de duas vogais idênticas: a preposição "a" + o artigo "a" (ou o pronome "a", ou o "a" inicial de "aquele/aquela"). O acento grave sinaliza essa fusão. Três perguntas resolvem quase tudo: o termo anterior pede "a"? O termo posterior aceita artigo? O termo posterior é feminino?',
      secoes: [
        {
          id: 'obrigatoria',
          titulo: 'Crase obrigatória',
          html: '<ul>' +
            '<li>Diante de substantivo feminino determinado por artigo: "Fui <strong>à</strong> escola".</li>' +
            '<li>Em locuções adverbiais femininas: <strong>às</strong> vezes, <strong>à</strong> noite, <strong>às</strong> pressas, <strong>à</strong> direita, <strong>às</strong> escondidas, <strong>à</strong> vontade.</li>' +
            '<li>Antes de "aquele/aquela/aquilo": "Referiu-se <strong>àquele</strong> problema".</li>' +
            '<li>Antes de pronome possessivo feminino quando expresso: "<strong>à</strong> minha irmã".</li>' +
            '<li>Antes de nomes de lugares que admitem artigo: "Fui <strong>à</strong> Bahia", "<strong>à</strong> Itália".</li>' +
            '<li>Diante de "moda/maneira" expressas: "<strong>à</strong> moda antiga", "<strong>à</strong> brasileira".</li>' +
            '<li>Antes de horas definidas: "Chegou <strong>às</strong> dez horas".</li>' +
            '</ul>'
        },
        {
          id: 'proibida',
          titulo: 'Crase proibida',
          html: '<ul>' +
            '<li>Antes de verbo: "começou <em>a</em> estudar".</li>' +
            '<li>Antes de palavra masculina: "andou <em>a</em> cavalo".</li>' +
            '<li>Antes de pronome pessoal: "entreguei <em>a</em> ela".</li>' +
            '<li>Antes de palavra repetida (em locuções com "a" díptico): "cara <em>a</em> cara", "passo <em>a</em> passo".</li>' +
            '<li>Antes de nomes de cidade sem artigo: "Fui <em>a</em> Brasília", "<em>a</em> Curitiba".</li>' +
            '<li>Antes de pronomes indefinidos/relativos que não admitem artigo: "refiro-me <em>a</em> qualquer pessoa", "<em>a</em> quem".</li>' +
            '<li>Antes de numeral que não pede artigo: "de <em>a</em> a 10".</li>' +
            '</ul>'
        },
        {
          id: 'facultativa',
          titulo: 'Crase facultativa',
          html: '<ul>' +
            '<li>Antes de nome próprio feminino: "<em>a</em> Maria" ou "<em>à</em> Maria".</li>' +
            '<li>Antes de pronome possessivo feminino singular: "<em>a</em> minha casa" ou "<em>à</em> minha casa".</li>' +
            '<li>Depois da preposição "até": "até <em>a</em> escola" ou "até <em>à</em> escola".</li>' +
            '</ul>' +
            '<div class="info-box box-tip"><h4>Dica infalível</h4><p>Troque a palavra feminina por uma masculina. Se aparecer "ao", há crase: "Fui <em>à</em> feira" → "Fui <em>ao</em> mercado" ✔. Se aparecer apenas "o" ou "a" sem artigo, não há crase: "Fui <em>a</em> Brasília" → "Fui <em>a</em> Recife" (cidade sem artigo).</p></div>'
        },
        {
          id: 'casos-especiais',
          titulo: 'Casos especiais e pegadinhas',
          html: '<ul>' +
            '<li><strong>Antes de "casa"</strong>: sem determinante = sem crase ("Voltei <em>a</em> casa"); com determinante = crase ("Voltei <strong>à</strong> casa dos meus pais").</li>' +
            '<li><strong>Antes de "terra"</strong>: "Cheguei <em>a</em> terra" (terra firme); "Cheguei <strong>à</strong> terra natal" (lugar determinado).</li>' +
            '<li><strong>Distância</strong>: "A prova fica <em>a</em> duas horas daqui" (sem crase, distância indeterminada) x "<strong>à</strong> distância de dois metros". "Estou <em>a</em> distância de vencer" — sem determinante.</li>' +
            '<li><strong>"devido a" + feminino</strong>: "Devido <strong>à</strong> chuva" ✔.</li>' +
            '<li><strong>Locuções conjuntivas</strong>: "à medida que", "à proporção que" — com crase.</li>' +
            '<li><strong>Locuções prepositivas</strong>: "à espera de", "à frente de", "à custa de" — com crase.</li>' +
            '<li><strong>"Dia a dia"</strong>: sem crase; "<strong>ao</strong> dia a dia" com preposição e artigo masculino.</li>' +
            '</ul>'
        },
        {
          id: 'testes',
          titulo: 'Três testes de 15 segundos',
          html: '<ol>' +
            '<li><strong>Teste do masculino:</strong> substitua por palavra masculina. "ao" ⇒ crase.</li>' +
            '<li><strong>Teste da preposição:</strong> o termo anterior exige "a"? (ir a, assistir a, referir-se a, obedecer a). Se não exigir, não há crase.</li>' +
            '<li><strong>Teste do artigo:</strong> o termo posterior aceita "a" artigo? "Vou a casa" ou "vou à casa"? Se aceita artigo definido, há fusão.</li>' +
            '</ol>'
        }
      ],
      exemplos: [
        { frase: 'Entreguei o processo à juíza.', nota: 'Verbo entregar (VTDI) + a preposição + juíza com artigo.' },
        { frase: 'Ele começou a estudar às oito horas.', nota: 'Verbo no infinitivo: sem crase. Hora definida: com crase.' },
        { frase: 'Fui a Belo Horizonte e à Bahia.', nota: 'Belo Horizonte não aceita artigo; Bahia aceita.' },
        { frase: 'Estou disposto a ajudar.', nota: 'Verbo no infinitivo: nunca crase.' }
      ],
      regras: [
        'Crase = a (preposição) + a (artigo/pronome).',
        'Sempre antes de horas definidas e locuções femininas.',
        'Nunca antes de verbo, palavra masculina ou pronome pessoal.',
        'Cidade sem artigo: sem crase.',
        'Teste do masculino é o mais rápido e seguro.'
      ],
      dicas: [
        'Sublinhar mentalmente: "Fui AO mercado" = crase garantida.',
        'Locuções femininas com crase: memorize pelo ritmo (às vezes, à noite, às pressas).',
        '"à medida que" sempre com acento; "a fim de" sem acento.'
      ],
      erros: [
        { errado: 'Vou à Brasília.', certo: 'Vou a Brasília.', porque: 'Brasília não admite artigo.' },
        { errado: 'Ele começou à trabalhar.', certo: 'Ele começou a trabalhar.', porque: 'Antes de verbo nunca há crase.' },
        { errado: 'A prova fica à duas horas.', certo: 'A prova fica a duas horas.', porque: 'Distância sem determinante não recebe crase.' }
      ],
      resumoFinal: [
        'Crase é fusão de preposição + artigo.',
        'Teste do masculino substitui decoreba.',
        'Horas definidas e locuções femininas: crase.',
        'Verbo, masculino, pronome pessoal: nunca crase.'
      ]
    },

    /* ================= 19 ================= */
    {
      slug: 'pontuacao',
      numero: 19,
      titulo: 'Pontuação',
      grupo: 'Sintaxe',
      resumo: 'Vírgula, ponto e vírgula, dois-pontos, aspas, travessão e os erros que anulam sentido.',
      tags: ['vírgula', 'pontuação', 'travessão', 'dois pontos'],
      introducao: 'Pontuação não é pausa para respirar: é sintaxe. A vírgula marca termos deslocados, intercalados e coordenadas assindéticas — e nunca separa sujeito de verbo ou verbo de complemento. Quase toda questão de pontuação pode ser resolvida por análise sintática.',
      secoes: [
        {
          id: 'virgula-usos',
          titulo: 'Quando a vírgula é obrigatória',
          html: '<ul>' +
            '<li><strong>Enumeração:</strong> "Comprei livro, caderno, caneta e borracha."</li>' +
            '<li><strong>Aposto explicativo:</strong> "O edital, documento oficial, foi publicado."</li>' +
            '<li><strong>Vocativo:</strong> "Candidatos, mantenham a calma."</li>' +
            '<li><strong>Adjunto adverbial deslocado:</strong> "Na semana passada, o resultado saiu." (curto e no fim, facultativa)</li>' +
            '<li><strong>Orações coordenadas assindéticas:</strong> "Chegou, olhou, sentou-se."</li>' +
            '<li><strong>Orações subordinadas adjetivas explicativas:</strong> "Os alunos, que estudaram, passaram."</li>' +
            '<li><strong>Conjunções coordenadas deslocadas:</strong> "Estudou muito; não obstante, foi reprovado."</li>' +
            '<li><strong>Expressões intercaladas:</strong> "A prova, segundo a banca, será mais fácil."</li>' +
            '<li><strong>Separar termos repetidos:</strong> "É preciso estudar, estudar e estudar."</li>' +
            '</ul>'
        },
        {
          id: 'virgula-proibida',
          titulo: 'Quando a vírgula é proibida',
          html: '<ul>' +
            '<li>Entre <strong>sujeito e verbo</strong>: "O candidato, estudou" ❌.</li>' +
            '<li>Entre <strong>verbo e complemento</strong>: "Ele comprou, o livro" ❌.</li>' +
            '<li>Entre <strong>nome e complemento nominal</strong>: "obediência, às regras" ❌.</li>' +
            '<li>Entre <strong>oração principal e subordinada substantiva/adverbial posposta</strong> (sem deslocamento): "Aviso que, ele chegou" ❌ — correto "Aviso que ele chegou".</li>' +
            '<li>Antes de <strong>oração adjetiva restritiva</strong>: "Os alunos que estudaram passaram" (sem vírgula, restringe).</li>' +
            '</ul>' +
            '<div class="info-box box-warn"><h4>Mudança de sentido</h4><p>"Os alunos que estudaram passaram" (apenas os que estudaram) x "Os alunos, que estudaram, passaram" (todos estudaram e passaram). A vírgula aqui não é estilística: altera a referência.</p></div>'
        },
        {
          id: 'outros-sinais',
          titulo: 'Ponto e vírgula, dois-pontos, travessão e aspas',
          html: '<table class="tbl"><thead><tr><th>Sinal</th><th>Uso</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td><strong>Ponto e vírgula</strong></td><td>Separar itens de enumeração longa ou orações coordenadas já com vírgulas internas</td><td>"Compareceram os aprovados; os demais, aguardaram."</td></tr>' +
            '<tr><td><strong>Dois-pontos</strong></td><td>Introduzir explicação, enumeração, fala, citação</td><td>"Só há uma saída: estudar."</td></tr>' +
            '<tr><td><strong>Travessão</strong></td><td>Isolar explicação, indicar fala em diálogo</td><td>"A notícia — que ninguém esperava — caiu bem."</td></tr>' +
            '<tr><td><strong>Aspas</strong></td><td>Citação, ironia, estrangeirismo, palavra em sentido figurado</td><td>Ele disse "sim".</td></tr>' +
            '<tr><td><strong>Parênteses</strong></td><td>Informação acessória, dado complementar</td><td>"A prova (aplicada em 2023) teve 40 questões."</td></tr>' +
            '<tr><td><strong>Reticências</strong></td><td>Suspensão de sentido, hesitação</td><td>"Ele pensou... e desistiu."</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'reescrita',
          titulo: 'Pontuação em questões de reescrita',
          html: '<p>Em provas de reescrita, a pontuação costuma ser o critério que elimina alternativas. Verifique:</p>' +
            '<ol><li>A vírgula separa termos que não podem ser separados (sujeito/verbo, verbo/complemento)?</li>' +
            '<li>A mudança de pontuação alterou o sentido (restritiva x explicativa)?</li>' +
            '<li>O conectivo inserido exige vírgula antes? ("porém", "contudo", "no entanto")</li>' +
            '<li>O adjunto adverbial longo foi isolado corretamente?</li></ol>'
        }
      ],
      exemplos: [
        { frase: 'O professor, explicou a matéria.', nota: 'ERRADO — vírgula entre sujeito e verbo.' },
        { frase: 'Aos alunos, foi entregue o gabarito.', nota: 'Correto: objeto indireto deslocado com vírgula.' },
        { frase: 'Ele estudou; mas não foi aprovado.', nota: 'Uso estilístico do ponto e vírgula antes de adversativa — aceito por várias bancas; a vírgula é mais usual.' },
        { frase: 'O diretor disse: todos devem comparecer.', nota: 'Dois-pontos para introduzir fala/enumeração.' }
      ],
      regras: [
        'Nunca separar sujeito de verbo.',
        'Nunca separar verbo de complemento.',
        'Adjetiva explicativa: vírgula; restritiva: sem vírgula.',
        'Adjunto adverbial deslocado longo: vírgula obrigatória.',
        'Dois-pontos introduzem explicação/enumeração; travessão isola explicações.'
      ],
      dicas: [
        'Antes de pontuar, identifique os blocos sintáticos (sujeito, verbo, complementos).',
        'Teste tirar e recolocar a vírgula: se o sentido mudar, é explicativa.',
        'Conjunções adversativas exigem vírgula antes (se deslocadas, isoladas por vírgulas).'
      ],
      erros: [
        { errado: 'Os alunos, que se dedicaram, foram aprovados (com intenção restritiva).', certo: 'Os alunos que se dedicaram foram aprovados.', porque: 'A vírgula transforma a adjetiva em explicativa.' },
        { errado: 'Ele comprou, um carro novo.', certo: 'Ele comprou um carro novo.', porque: 'Nunca separar verbo e objeto.' },
        { errado: 'Candidatos, tenham atenção.', certo: 'Correto — vocativo recebe vírgula.', porque: 'Vocativo é termo independente.' }
      ],
      resumoFinal: [
        'Pontuação = sintaxe, não respiração.',
        'Explicativas com vírgula, restritivas sem.',
        'Nunca entre sujeito/verbo e verbo/complemento.',
        'Deslocamentos exigem isolamento.'
      ]
    },

    /* ================= 20 ================= */
    {
      slug: 'sintaxe',
      numero: 20,
      titulo: 'Sintaxe: estrutura da oração',
      grupo: 'Sintaxe',
      resumo: 'Frase, oração, período, frase nominal e os blocos sintáticos que compõem o período.',
      tags: ['sintaxe', 'período', 'oração', 'frase'],
      introducao: 'A sintaxe estuda as relações entre as palavras dentro de unidades maiores: frase, oração e período. Este módulo organiza a base conceitual necessária para analisar termos da oração, coordenação e subordinação.',
      secoes: [
        {
          id: 'unidades',
          titulo: 'Frase, oração e período',
          html: '<ul>' +
            '<li><strong>Frase:</strong> enunciado com sentido completo, podendo ter ou não verbo. "Socorro!" (frase nominal). "Ele chegou." (frase verbal).</li>' +
            '<li><strong>Oração:</strong> enunciado organizado em torno de um verbo (ou locução verbal). "Ela <em>estudou</em> muito."</li>' +
            '<li><strong>Período:</strong> frase com uma ou mais orações. Simples (uma oração). Composto (duas ou mais orações).</li>' +
            '</ul>' +
            '<p>Período composto pode ser por <strong>coordenação</strong> (orações independentes) ou por <strong>subordinação</strong> (uma oração exerce função sintática na outra).</p>'
        },
        {
          id: 'blocos',
          titulo: 'Os blocos sintáticos do período',
          html: '<p>Uma oração pode conter:</p>' +
            '<table class="tbl"><thead><tr><th>Termo</th><th>Função</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td>Sujeito</td><td>de quem se declara algo</td><td><em>O candidato</em> estudou</td></tr>' +
            '<tr><td>Predicado</td><td>o que se declara do sujeito</td><td>estudou <em>a matéria</em></td></tr>' +
            '<tr><td>Verbo (predicador)</td><td>núcleo do predicado</td><td>estudou</td></tr>' +
            '<tr><td>Objeto direto</td><td>complemento sem preposição</td><td>estudou <em>a matéria</em></td></tr>' +
            '<tr><td>Objeto indireto</td><td>complemento com preposição</td><td>precisa <em>de ajuda</em></td></tr>' +
            '<tr><td>Predicativo</td><td>atributo do sujeito ou do objeto</td><td>o candidato está <em>calmo</em></td></tr>' +
            '<tr><td>Adjunto adverbial</td><td>circunstância</td><td>estudou <em>ontem</em> / <em>em casa</em></td></tr>' +
            '<tr><td>Adjunto adnominal</td><td>caracteriza o nome</td><td><em>meu</em> caderno <em>azul</em></td></tr>' +
            '<tr><td>Aposto</td><td>explica, resume, especifica</td><td>Rio de Janeiro, <em>capital fluminense</em></td></tr>' +
            '<tr><td>Vocativo</td><td>chama o interlocutor</td><td><em>Colegas</em>, atenção!</td></tr>' +
            '<tr><td>Complemento nominal</td><td>completa nome com preposição</td><td>obediência <em>às regras</em></td></tr>' +
            '<tr><td>Agente da passiva</td><td>pratica a ação na voz passiva</td><td>a prova foi feita <em>pela banca</em></td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'ordem',
          titulo: 'Ordem direta e ordem inversa',
          html: '<p>A ordem direta é <strong>sujeito + verbo + complemento + adjuntos</strong>. A inversão é possível por ênfase, mas exige cuidado na pontuação e não dispensa a concordância.</p>' +
            '<div class="info-box box-example"><h4>Reorganizando</h4>' +
            '<p>Inversa: "Do resultado da prova, os candidatos, na entrada do prédio, aguardavam ansiosos."</p>' +
            '<p>Direta: "Os candidatos aguardavam ansiosos o resultado da prova na entrada do prédio."</p></div>'
        },
        {
          id: 'identificacao',
          titulo: 'Roteiro para analisar qualquer oração',
          html: '<ol>' +
            '<li>Localize o <strong>verbo</strong> e verifique sua transitividade.</li>' +
            '<li>Pergunte "quem/o que" antes do verbo: identifica o <strong>sujeito</strong>.</li>' +
            '<li>Pergunte "o que" ao verbo sem preposição: <strong>objeto direto</strong>.</li>' +
            '<li>Pergunte "a quem/de que/em que" com preposição: <strong>objeto indireto</strong>.</li>' +
            '<li>Procure circunstâncias (tempo, lugar, modo, causa): adjuntos adverbiais.</li>' +
            '<li>Verifique se há termos explicando um nome: aposto, adjunto adnominal, complemento nominal.</li>' +
            '</ol>'
        }
      ],
      exemplos: [
        { frase: 'A leitura dos clássicos amplia a visão de mundo.', nota: 'Sujeito: a leitura dos clássicos. Verbo: amplia (VTD). Objeto: a visão de mundo.' },
        { frase: 'Chegou o resultado ao candidato.', nota: 'Sujeito posposto: o resultado. Objeto indireto: ao candidato.' },
        { frase: 'Ele é considerado apto pela banca.', nota: 'Predicativo do sujeito: apto. Agente da passiva: pela banca.' }
      ],
      regras: [
        'Frase pode não ter verbo; oração sempre tem verbo.',
        'Período composto se classifica em coordenação ou subordinação.',
        'Sujeito nunca é preposicionado.',
        'Complemento nominal completa nome; adjunto adnominal caracteriza.',
        'A ordem inversa não altera a função sintática dos termos.'
      ],
      dicas: [
        'Sempre comece pelo verbo: é o organizador da oração.',
        'Marque as preposições: elas revelam objeto indireto, complemento nominal e adjunto.',
        'Reescreva na ordem direta quando a frase estiver longa.'
      ],
      erros: [
        { errado: 'Chamar qualquer termo com preposição de objeto indireto.', certo: 'Verificar se completa verbo (OI) ou nome (CN).', porque: 'Complemento nominal completa substantivo/adjetivo/advérbio.' },
        { errado: 'Confundir aposto com vocativo.', certo: 'Aposto explica um termo; vocativo chama o interlocutor.', porque: 'A diferença é funcional, não de forma.' }
      ],
      resumoFinal: [
        'Frase &gt; oração &gt; período, do menor ao maior.',
        'Análise começa pelo verbo.',
        'Termos essenciais, integrantes e acessórios.',
        'Reescrever na ordem direta facilita a análise.'
      ]
    }
  ]
});
