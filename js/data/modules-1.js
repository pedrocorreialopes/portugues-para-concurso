/* Conteúdo programático — módulos 1 a 10 */
window.PPC = window.PPC || {};
window.PPC.registerData({
  modules: [
    /* ================= 1 ================= */
    {
      slug: 'interpretacao-textos',
      numero: 1,
      titulo: 'Interpretação e compreensão de textos',
      grupo: 'Leitura e produção de textos',
      resumo: 'Diferencie o que o texto diz do que se pode concluir dele, com estratégias de leitura para provas.',
      tags: ['leitura', 'inferência', 'ideia central', 'tese'],
      introducao: 'Compreender é reconstruir o que o texto efetivamente informa; interpretar é ir além do material verbal e deduzir, relacionar e avaliar. Em concursos, boa parte das questões de Língua Portuguesa — e de praticamente todas as demais disciplinas — depende dessa habilidade. O texto é a única fonte de verdade: a alternativa correta nunca é a mais bonita, é a que pode ser sustentada pelo texto.',
      secoes: [
        {
          id: 'compreensao-interpretacao',
          titulo: 'Compreensão x interpretação',
          html: '<p><strong>Compreensão</strong> trabalha com informações explícitas — o que está escrito, dito diretamente. <strong>Interpretação</strong> trabalha com informações implícitas: inferências autorizadas pelo texto, relação entre partes, intenção do autor, efeito de sentido.</p>' +
            '<table class="tbl"><thead><tr><th>Compreensão</th><th>Interpretação</th></tr></thead><tbody>' +
            '<tr><td>Localiza dados e reconhece o tema</td><td>Deduz, conclui, relaciona</td></tr>' +
            '<tr><td>Verbos típicos: identificar, localizar, segundo o texto</td><td>Verbos típicos: inferir, concluir, depreender</td></tr>' +
            '<tr><td>Resposta literal, parafraseada</td><td>Resposta construída a partir de pistas textuais</td></tr>' +
            '</tbody></table>' +
            '<p>Bancas costumam cobrar as duas coisas no mesmo enunciado. Leia o comando com atenção: se ele diz "de acordo com o texto", a resposta deve estar sustentada no texto; se diz "conclui-se que", a inferência precisa ser possível a partir das pistas dadas.</p>'
        },
        {
          id: 'tema-tese',
          titulo: 'Tema, tese e argumento',
          html: '<p><strong>Tema</strong> é o assunto geral (a "etiqueta" do texto). <strong>Tese</strong> é o ponto de vista defendido sobre o tema. <strong>Argumento</strong> é o que sustenta a tese.</p>' +
            '<p>Em textos dissertativos, a tese costuma aparecer na introdução e ser retomada na conclusão. Em textos informativos e narrativos pode não haver tese explícita — e aí a questão costuma pedir o tema ou o propósito comunicativo.</p>' +
            '<div class="info-box box-example"><h4>Exemplo prático</h4>' +
            '<p>"A leitura de textos longos na tela reduziu nossa capacidade de concentração. Não se trata, porém, de abandonar o digital, mas de aprender a usá-lo com critério."</p>' +
            '<p><strong>Tema:</strong> leitura em telas. <strong>Tese:</strong> é preciso usar o digital com critério. <strong>Argumento:</strong> a leitura em tela reduz a concentração.</p></div>'
        },
        {
          id: 'estrategias',
          titulo: 'Estratégias de leitura para a prova',
          html: '<ol>' +
            '<li><strong>Leia o comando antes do texto</strong> quando o texto for longo: você já sabe o que procurar.</li>' +
            '<li><strong>Marque palavras-chave</strong> (conectivos, advérbios, negações) — elas decidem a alternativa.</li>' +
            '<li><strong>Separe o que é do texto e o que é do seu repertório.</strong> Se a alternativa exige informação que não está no texto, desconfie.</li>' +
            '<li><strong>Cuidado com generalizações:</strong> "sempre", "nunca", "todos", "somente" costumam indicar extrapolação.</li>' +
            '<li><strong>Volte ao texto</strong> para confirmar a alternativa escolhida: uma resposta certa precisa de prova textual.</li>' +
            '</ol>'
        },
        {
          id: 'tipos-de-armadilha',
          titulo: 'As armadilhas mais comuns',
          html: '<ul>' +
            '<li><strong>Extrapolação:</strong> a alternativa diz algo verdadeiro no mundo, mas não no texto.</li>' +
            '<li><strong>Restrição:</strong> a alternativa enfraquece o que o texto afirmou ("alguns" onde o texto diz "a maioria").</li>' +
            '<li><strong>Inversão de causa e efeito:</strong> troca o que causou pelo que foi causado.</li>' +
            '<li><strong>Troca de operador argumentativo:</strong> transformar uma concessão ("embora") em conclusão.</li>' +
            '<li><strong>Fidelidade aparente:</strong> repete palavras do texto, mas muda a relação entre elas.</li>' +
            '</ul>' +
            '<div class="info-box box-warn"><h4>Atenção</h4><p>Repetir lexicalmente expressões do texto não garante correção. Bancas usam a chamada "isca lexical": copiam palavras do texto em alternativas erradas.</p></div>'
        },
        {
          id: 'inferencia',
          titulo: 'Inferência legítima x opinião do candidato',
          html: '<p>Inferência é uma conclusão <em>autorizada</em> por pistas do texto — não um chute baseado em conhecimento prévio. Três testes rápidos:</p>' +
            '<ul><li>A informação está sustentada por palavras, imagens ou relações do próprio texto?</li>' +
            '<li>O autor concordaria com essa leitura?</li>' +
            '<li>Se eu retirar o texto, a afirmação continua defensável? Se sim, é conhecimento de mundo, não interpretação.</li></ul>' +
            '<div class="info-box box-tip"><h4>Dica de prova</h4><p>Quando duas alternativas parecem certas, compare o grau de comprometimento: prefira a mais cautelosa, que não amplia nem reduz o que o texto sustentou.</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Texto: "Muitos candidatos estudam muito e aprendem pouco, porque confundem volume de leitura com compreensão."', nota: 'Ideia central: quantidade não é qualidade no estudo.' },
        { frase: 'Texto: "Ainda que a norma culta seja exigida em concursos, o domínio de outras variedades é legítimo."', nota: 'Concessão ("ainda que") + afirmação: norma culta é exigida, mas outras variedades são legítimas. As duas ideias coexistem.' },
        { frase: 'Enunciado: "Infere-se do texto que..."', nota: 'Não procure a frase pronta: procure a conclusão autorizada pelas pistas.' }
      ],
      regras: [
        'A resposta correta deve ser sustentável por elementos do próprio texto.',
        '"Segundo o texto" exige informação explícita ou paráfrase fiel.',
        '"Conclui-se" e "infere-se" autorizam dedução controlada por pistas.',
        'Alternativas com "sempre", "nunca", "exclusivamente" tendem a extrapolar.',
        'Negações e concessões mudam o sentido: leia duas vezes.'
      ],
      dicas: [
        'Leia o comando antes do texto quando o texto passar de 15 linhas.',
        'Circule conectivos: mas, porém, embora, portanto, porque — eles estruturam o raciocínio.',
        'Em questões de "finalidade do texto", responda com um verbo: informar, convencer, alertar, instruir, divertir.',
        'Na dúvida entre duas alternativas, escolha a que pode ser comprovada com uma linha do texto.'
      ],
      erros: [
        { errado: 'Escolher a alternativa com a opinião pessoal do candidato.', certo: 'Escolher a alternativa sustentada pelo texto.', porque: 'A prova avalia leitura, não posição pessoal.' },
        { errado: 'Confundir tema com tese.', certo: 'Tema é o assunto; tese é o posicionamento.', porque: 'Muitas questões alternam justamente esses dois conceitos.' },
        { errado: 'Ignorar o "porém" no meio do parágrafo.', certo: 'Tratar o conectivo como divisor de ideias.', porque: 'O conectivo adversativo indica onde está a ideia principal do autor.' }
      ],
      resumoFinal: [
        'Compreensão = explícito; interpretação = implícito autorizado.',
        'Tese é o ponto de vista; tema é o assunto.',
        'Cuidado com extrapolação, restrição e inversão de causa.',
        'Toda resposta correta tem prova no texto.'
      ]
    },

    /* ================= 2 ================= */
    {
      slug: 'tipologia-textual',
      numero: 2,
      titulo: 'Tipologia textual',
      grupo: 'Leitura e produção de textos',
      resumo: 'Narração, descrição, dissertação, exposição, injunção e diálogo: como reconhecer cada tipo.',
      tags: ['narração', 'descrição', 'dissertação', 'injunção'],
      introducao: 'Tipologia é a classificação do texto pela sua estrutura e função predominante. Um texto raramente é puro: quase sempre há sequências de tipos diferentes sob um tipo dominante. A banca quer que você identifique essa dominância e as marcas linguísticas de cada tipo.',
      secoes: [
        {
          id: 'os-tipos',
          titulo: 'Os tipos textuais e suas marcas',
          html: '<table class="tbl"><thead><tr><th>Tipo</th><th>Função</th><th>Marcas linguísticas</th></tr></thead><tbody>' +
            '<tr><td><strong>Narração</strong></td><td>Contar fatos em sequência</td><td>Verbos de ação, pretérito perfeito, personagens, tempo, espaço, conflito</td></tr>' +
            '<tr><td><strong>Descrição</strong></td><td>Caracterizar seres, objetos, cenas</td><td>Adjetivos, verbos de estado, pretérito imperfeito, sensações</td></tr>' +
            '<tr><td><strong>Dissertação-argumentação</strong></td><td>Defender um ponto de vista</td><td>Tese, argumentos, conectivos lógicos, presente atemporal, 3ª pessoa</td></tr>' +
            '<tr><td><strong>Exposição</strong></td><td>Apresentar/explicar informações</td><td>Dados, definições, impessoalidade, ordem lógica</td></tr>' +
            '<tr><td><strong>Injunção</strong></td><td>Instruir, orientar, prescrever</td><td>Verbos no imperativo, infinitivo, 2ª pessoa, sequência de passos</td></tr>' +
            '<tr><td><strong>Diálogo/predicção</strong></td><td>Prever, antecipar</td><td>Futuro, "se", "caso", hipóteses</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'narracao',
          titulo: 'Narração',
          html: '<p>Elementos: <strong>fatos</strong>, <strong>personagens</strong>, <strong>tempo</strong>, <strong>espaço</strong>, <strong>narrador</strong> e <strong>conflito</strong>. Estrutura clássica: apresentação → complicação → clímax → desfecho.</p>' +
            '<p>Marcas: verbos de ação no pretérito perfeito ("chegou", "abriu", "disse"), conectivos temporais ("então", "depois", "de repente"). O narrador pode ser observador (3ª pessoa) ou personagem (1ª pessoa).</p>' +
            '<div class="info-box box-example"><h4>Exemplo</h4><p>"O candidato entrou na sala, conferiu o relógio e respirou fundo. Quando a prova foi distribuída, percebeu que havia estudado exatamente aqueles temas."</p><p>Sequência narrativa: ação + ação + ação; tempo cronológico; pretérito perfeito.</p></div>'
        },
        {
          id: 'descricao-dissertacao',
          titulo: 'Descrição e dissertação',
          html: '<p><strong>Descrição:</strong> retrato de um estado, sem progressão temporal obrigatória. Predominam adjetivos, verbos de estado (ser, estar, parecer) e o pretérito imperfeito ("era", "havia", "parecia"). Pode ser objetiva (fatos verificáveis) ou subjetiva (impressões).</p>' +
            '<p><strong>Dissertação:</strong> organiza ideias e defende um ponto de vista. Estrutura: introdução (contextualização + tese), desenvolvimento (argumentos com repertório e exemplos), conclusão (retomada + proposta). Marcas: operadores argumentativos, generalizações, presente atemporal, ausência de narrador-personagem.</p>' +
            '<div class="info-box box-tip"><h4>Como diferenciar rapidamente</h4><p>Pergunte: "o texto conta, pinta, defende ou ensina?". Conta = narração; pinta = descrição; defende = dissertação; ensina = exposição/injunção.</p></div>'
        },
        {
          id: 'injuncao-exposicao',
          titulo: 'Injunção e exposição',
          html: '<p><strong>Injunção</strong> (ou instrucional): receitas, manuais, editais, regras de prova. Verbos no imperativo ("misture", "não escreva") ou infinitivo ("misturar", "manter"). O leitor é orientado a agir.</p>' +
            '<p><strong>Exposição:</strong> explica um conceito, apresenta um panorama, define termos. Não defende tese com paixão: ordena informações. Exemplo: verbete, texto didático, reportagem informativa.</p>' +
            '<div class="info-box box-warn"><h4>Erro comum</h4><p>Chamar de argumentativo todo texto que tem opinião diluída. Reportagem com dados e falas de especialistas é predominantemente expositiva, mesmo que traga avaliações.</p></div>'
        }
      ],
      exemplos: [
        { frase: '"Era uma casa muito engraçada, não tinha teto, não tinha nada."', nota: 'Descrição (verbos de estado no imperfeito; adjetivos).' },
        { frase: '"Misture os ovos e o açúcar até obter um creme homogêneo."', nota: 'Injunção: imperativo + sequência de passos.' },
        { frase: '"É imprescindível que o Estado amplie o investimento em educação básica."', nota: 'Dissertação: tese explícita, presente atemporal, impessoalidade.' }
      ],
      regras: [
        'Tipologia se define pela estrutura e função predominante, não pelo assunto.',
        'Narração: progressão temporal; descrição: simultaneidade.',
        'Dissertação: tese + argumentos; exposição: informação organizada.',
        'Injunção: verbos no imperativo ou infinitivo e sequência instrucional.',
        'Um texto pode conter mais de um tipo; procure o dominante.'
      ],
      dicas: [
        'Grifar os verbos: se predominam ações no perfeito, é narração.',
        'Se predominam adjetivos e estados, é descrição.',
        'Se há "portanto", "por isso", "conclui-se", é argumentação.',
        'Se há passos numerados ou imperativos, é injunção.'
      ],
      erros: [
        { errado: 'Classificar pela temática ("texto sobre política é dissertativo").', certo: 'Classificar pela estrutura e marcas linguísticas.', porque: 'O tema não determina o tipo textual.' },
        { errado: 'Dizer que descrição não tem verbos.', certo: 'Descrição usa verbos de estado (ser, estar, parecer).', porque: 'Confundir ausência de ação com ausência de verbo é erro clássico.' }
      ],
      resumoFinal: [
        'Seis tipos: narração, descrição, dissertação, exposição, injunção, predição.',
        'Identifique pelas marcas linguísticas (verbos, conectivos, pessoa).',
        'Textos reais são híbridos: procure o tipo dominante.'
      ]
    },

    /* ================= 3 ================= */
    {
      slug: 'generos-textuais',
      numero: 3,
      titulo: 'Gêneros textuais',
      grupo: 'Leitura e produção de textos',
      resumo: 'Notícia, editorial, crônica, ofício, resenha, artigo de opinião: forma, suporte e finalidade.',
      tags: ['gênero', 'notícia', 'editorial', 'crônica', 'resenha'],
      introducao: 'Se a tipologia descreve a estrutura linguística, o gênero descreve a prática social: quem escreve, para quem, onde circula e com qual finalidade. Um mesmo tipo (dissertativo) aparece em gêneros diferentes (editorial, artigo de opinião, resenha, resposta argumentativa).',
      secoes: [
        {
          id: 'tipo-x-genero',
          titulo: 'Tipo textual x gênero textual',
          html: '<p><strong>Tipo</strong> é uma categoria linguística (narração, descrição, argumentação...). <strong>Gênero</strong> é uma forma social estabilizada de enunciado, ligada a uma esfera de atividade: jornalística, jurídica, escolar, administrativa, literária.</p>' +
            '<p>Por isso a lista de gêneros é aberta (e-mail, post, podcast, meme, ofício, ata, edital) e a lista de tipos é fechada.</p>' +
            '<table class="tbl"><thead><tr><th>Gênero</th><th>Suporte típico</th><th>Finalidade</th></tr></thead><tbody>' +
            '<tr><td>Notícia</td><td>Jornal, portal</td><td>Informar fato novo, com objetividade</td></tr>' +
            '<tr><td>Editorial</td><td>Jornal (espaço da empresa)</td><td>Expressar a opinião institucional do veículo</td></tr>' +
            '<tr><td>Artigo de opinião</td><td>Jornal, revista, blog</td><td>Defender ponto de vista assinado</td></tr>' +
            '<tr><td>Crônica</td><td>Jornal, revista, livro</td><td>Tratar o cotidiano com lirismo e humor</td></tr>' +
            '<tr><td>Resenha</td><td>Revista acadêmica, jornal</td><td>Apresentar e avaliar uma obra</td></tr>' +
            '<tr><td>Ofício</td><td>Administração pública</td><td>Comunicação formal entre órgãos</td></tr>' +
            '<tr><td>Reportagem</td><td>Jornal, revista</td><td>Aprofundar um tema com apuração</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'generos-jornalisticos',
          titulo: 'Gêneros jornalísticos',
          html: '<p><strong>Notícia:</strong> responde a "o quê, quem, quando, onde, como, por quê"; começa pelo fato mais importante (lead); linguagem referencial e impessoal; verbos no pretérito. <strong>Não</strong> traz opinião assumida do autor.</p>' +
            '<p><strong>Reportagem:</strong> amplia a notícia com dados, entrevistas, contextualização e recortes. Pode ter tom interpretativo.</p>' +
            '<p><strong>Editorial:</strong> não é assinado; representa a opinião do veículo; usa 1ª pessoa do plural ou construções impessoais; estrutura argumentativa.</p>' +
            '<p><strong>Artigo de opinião:</strong> assinado; defende posição pessoal; admite 1ª pessoa; título persuasivo.</p>' +
            '<p><strong>Crônica:</strong> narrativa curta do cotidiano, tom leve, ironia, oralidade; fronteira com a literatura.</p>' +
            '<div class="info-box box-tip"><h4>Diferença decisiva em prova</h4><p>Se a questão pergunta "de quem é a opinião expressa?", no editorial é do jornal; no artigo, do autor. Essa distinção já derrubou muita gente.</p></div>'
        },
        {
          id: 'generos-administrativos',
          titulo: 'Gêneros administrativos e digitais',
          html: '<p>Na esfera pública: <strong>ofício</strong> (comunicação entre órgãos), <strong>memorando</strong> (comunicação interna), <strong>requerimento</strong> (pedido do cidadão), <strong>ata</strong> (registro de reunião), <strong>edital</strong> (normas de processo), <strong>parecer</strong> (análise técnica), <strong>relatório</strong> (exposição de resultados).</p>' +
            '<p>Na esfera digital: <strong>e-mail</strong>, <strong>mensagem instantânea</strong>, <strong>post</strong>, <strong>thread</strong>, <strong>meme</strong>, <strong>vlog</strong>, <strong>podcast</strong>. Marcas: multimodalidade, informalidade variável, interatividade imediata.</p>'
        },
        {
          id: 'identificar',
          titulo: 'Como identificar o gênero em uma questão',
          html: '<ol>' +
            '<li>Observe o <strong>suporte</strong> indicado na fonte (jornal, diário oficial, revista científica).</li>' +
            '<li>Verifique a <strong>assinatura</strong>: assinado = opinião pessoal; não assinado em jornal = editorial.</li>' +
            '<li>Note a <strong>pessoa do discurso</strong> e o grau de impessoalidade.</li>' +
            '<li>Identifique a <strong>finalidade</strong> (informar, convencer, instruir, registrar).</li>' +
            '<li>Confirme o <strong>tipo textual dominante</strong>: isso fecha a classificação.</li>' +
            '</ol>'
        }
      ],
      exemplos: [
        { frase: '"O país precisa decidir se continuará tratando educação como despesa." (texto sem assinatura, na primeira página de um jornal)', nota: 'Editorial: opinião institucional, forma de advertência.' },
        { frase: '"Segundo o IBGE, 12% dos jovens não concluíram o ensino médio."', nota: 'Notícia/expositivo: dado verificável, impessoalidade.' },
        { frase: '"Naquela terça-feira, o guarda-chuva virou personagem principal da cidade."', nota: 'Crônica: narrativo, coloquial, olhar singular sobre o cotidiano.' }
      ],
      regras: [
        'Gênero = prática social; tipo = estrutura linguística.',
        'Editorial não é assinado; artigo de opinião é assinado.',
        'Notícia prioriza objetividade e o fato principal no início.',
        'Resenha apresenta e avalia; não é sinônimo de resumo.',
        'Ofício e memorando pertencem ao padrão ofício da redação oficial.'
      ],
      dicas: [
        'Sempre olhe a fonte ao pé do texto: ela costuma revelar o gênero.',
        'Assinatura, pessoa do discurso e finalidade são os três filtros mais rápidos.',
        'Em prova de redação oficial, gênero e formato são avaliados junto com o conteúdo.'
      ],
      erros: [
        { errado: 'Chamar editorial de artigo de opinião.', certo: 'Editorial é a voz do veículo, sem assinatura.', porque: 'A responsabilidade enunciativa muda completamente.' },
        { errado: 'Tratar resenha como resumo.', certo: 'Resenha inclui avaliação crítica fundamentada.', porque: 'Resumo apenas reconta; resenha julga.' }
      ],
      resumoFinal: [
        'Gêneros são formas sociais historicamente estáveis.',
        'Suporte + assinatura + finalidade identificam o gênero.',
        'O mesmo tipo textual circula em vários gêneros.'
      ]
    },

    /* ================= 4 ================= */
    {
      slug: 'ortografia',
      numero: 4,
      titulo: 'Ortografia oficial',
      grupo: 'Ortografia e acentuação',
      resumo: 'Regras de escrita, emprego de letras, sufixos, palavras homófonas e o Acordo Ortográfico.',
      tags: ['ortografia', 'acordo ortográfico', 'homófonas', 'sufixos'],
      introducao: 'Ortografia é a parte da gramática que fixa a escrita correta das palavras. Em provas, aparece em questões diretas ("assinale a alternativa com erro de grafia") e indiretamente, na redação e na reescrita. O domínio vem de regras + leitura frequente.',
      secoes: [
        {
          id: 'emprego-letras',
          titulo: 'Emprego de letras: regras que resolvem a maioria das questões',
          html: '<h3>X ou CH</h3><ul>' +
            '<li>Depois de ditongo: <em>cai</em><strong>x</strong><em>a</em>, <em>pei</em><strong>x</strong><em>e</em>, <em>frou</em><strong>x</strong><em>o</em>.</li>' +
            '<li>Depois de "en-": <em>en</em><strong>x</strong><em>ame</em>, <em>en</em><strong>x</strong><em>erto</em>, <em>en</em><strong>x</strong><em>oval</em> (exceções: <em>encher</em>, <em>encharcar</em>).</li>' +
            '<li>Palavras de origem indígena ou africana: <em>mara</em><strong>x</strong><em>á</em>, <em>fa</em><strong>x</strong><em>ina</em>, <em>ca</em><strong>x</strong><em>umba</em>.</li>' +
            '<li>Depois de "me-": <em>me</em><strong>x</strong><em>er</em>, <em>me</em><strong>x</strong><em>erica</em> (exceção: <em>mecha</em> de cabelo).</li></ul>' +
            '<h3>G ou J</h3><ul><li>Substantivos em <em>-agem</em>, <em>-igem</em>, <em>-ugem</em>: <em>viagem</em>, <em>ferrugem</em>, <em>vertigem</em> (exceções: <em>pajem</em>, <em>lajem</em>).</li>' +
            '<li>Palavras terminadas em <em>-jear</em>: <em>viajar</em> → <em>viajei</em>; <em>arranjar</em> → <em>arranjei</em>.</li>' +
            '<li>Depois de consoante: <em>jei</em><strong>j</strong><em>um</em> não; mas <em>obje</em><strong>j</strong><em>to</em>, <em>sujeito</em>.</li></ul>' +
            '<h3>S, SS, C, Ç, Z</h3><ul><li><em>-são</em> em substantivos derivados de verbos: <em>compreender</em> → <em>compreensão</em>.</li>' +
            '<li><em>-ção</em> após formas de <em>-to</em>: <em>correto</em> → <em>correção</em>; <em>isento</em> → <em>isenção</em>.</li>' +
            '<li><em>-oso/-osa</em>: <em>gostoso</em>, <em>teimoso</em>.</li>' +
            '<li><em>-izar</em> quando a palavra-base não tem "s": <em>real</em> → <em>realizar</em>; se tiver "s": <em>análise</em> → <em>analisar</em>.</li></ul>'
        },
        {
          id: 'acordo',
          titulo: 'O Acordo Ortográfico (1990) em cinco pontos',
          html: '<ol>' +
            '<li><strong>Perda de acentos diferenciais</strong> em vários casos, mas permanecem: <em>pôde</em> (passado) x <em>pode</em> (presente); <em>pôr</em> (verbo) x <em>por</em> (preposição); <em>vêm</em> (plural).</li>' +
            '<li><strong>Ditongos abertos éi/ói</strong> em palavras paroxítonas não são mais acentuados: <em>ideia</em>, <em>boia</em>, <em>jiboia</em> (mas <em>herói</em>, <em>papéis</em> — oxítonas).</li>' +
            '<li><strong>Trema</strong> abolido, exceto em nomes próprios e derivados: <em>línguística</em> sem trema, <em>Müller</em> mantém.</li>' +
            '<li><strong>Acentos em hiato "oo"/"ee"</strong> desapareceram: <em>voo</em>, <em>creem</em>, <em>leem</em>.</li>' +
            '<li><strong>Alfabeto</strong> passou a ter 26 letras (k, w, y incluídas).</li>' +
            '</ol>' +
            '<div class="info-box box-warn"><h4>Cuidado</h4><p>O acordo não alterou a pronúncia nem a concordância; mudou apenas a grafia. Não confunda "mudança ortográfica" com "mudança gramatical".</p></div>'
        },
        {
          id: 'homonimas',
          titulo: 'Palavras que confundem',
          html: '<table class="tbl"><thead><tr><th>Forma</th><th>Sentido</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td><strong>mas</strong></td><td>adversidade (= porém)</td><td>Estudou, mas não revisou.</td></tr>' +
            '<tr><td><strong>mais</strong></td><td>quantidade</td><td>Precisamos de mais tempo.</td></tr>' +
            '<tr><td><strong>mau</strong></td><td>adjetivo (= ruim)</td><td>Homem mau.</td></tr>' +
            '<tr><td><strong>mal</strong></td><td>advérbio (= não bem) / subst.</td><td>Foi mal na prova.</td></tr>' +
            '<tr><td><strong>a fim de</strong></td><td>finalidade</td><td>Estudou a fim de passar.</td></tr>' +
            '<tr><td><strong>afim</strong></td><td>semelhante/afinidade</td><td>Matérias afins.</td></tr>' +
            '<tr><td><strong>senão</strong></td><td>a não ser, do contrário</td><td>Nada senão o essencial.</td></tr>' +
            '<tr><td><strong>se não</strong></td><td>caso não</td><td>Se não estudar, não passará.</td></tr>' +
            '<tr><td><strong>tampouco</strong></td><td>também não</td><td>Não leu tampouco escreveu.</td></tr>' +
            '<tr><td><strong>tão pouco</strong></td><td>quantidade pequena</td><td>Ele estuda tão pouco.</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'grafia-concursos',
          titulo: 'Palavras de grafia duvidosa exigidas em provas',
          html: '<p><strong>Escreve-se com X:</strong> exceção, excêntrico, excesso, expectativa, expor, expansão, extinguir, extensão.</p>' +
            '<p><strong>Escreve-se com S:</strong> análise, ansiedade, eletricista, pesquisa, senão, suspense, através.</p>' +
            '<p><strong>Escreve-se com Ç:</strong> aferição, abstração, concessão, corrupção, exceção, isenção, prorrogação.</p>' +
            '<p><strong>Grafias frequentemente cobradas:</strong> <em>beneficente</em> (não "beneficiente"), <em>mal-estar</em>, <em>malicioso</em>, <em>meteorologia</em>, <em>reivindicar</em>, <em>pesquisar</em>, <em>previlégio</em> não existe → <em>privilégio</em>, <em>ousadia</em>, <em>astronauta</em>, <em>catástrofe</em>, <em>idiotice</em>.</p>' +
            '<div class="info-box box-tip"><h4>Dica de memorização</h4><p>Forme famílias de palavras: se <em>privilégio</em> tem apenas um "e" depois do "l", então <em>privilegiado</em> também. Famílias expõem grafias erradas.</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Correto: "Ele mal sabia que a pesquisa exigia mais tempo."', nota: '<em>mal</em> (advérbio) x <em>mais</em> (quantidade).' },
        { frase: 'Correto: "Isonento" não existe → "isento"; "isenção" com ç.', nota: 'Derivação de <em>-to</em> para <em>-ção</em>.' },
        { frase: 'Correto: "ideia", "assembleia", "boia" (sem acento, paroxítonas).', nota: 'Acordo Ortográfico: ditongo aberto em paroxítona sem acento.' }
      ],
      regras: [
        'X após ditongo e após "en-" (com exceções fixas).',
        'Substantivos em -agem, -igem, -ugem escrevem-se com G.',
        'Palavra-base com "s" gera -isar; sem "s", gera -izar.',
        'Pôde e pôr mantêm acento diferencial; ideia, boia não.',
        'Hiato oo/ee não recebe mais acento (voo, creem).'
      ],
      dicas: [
        'Memorize as exceções em forma de lista curta: encher, mecha, pajem, lajem.',
        'Ao errar uma palavra, escreva a família inteira cinco vezes.',
        'Use o corretor do texto mas desconfie: ele não avalia sentido.'
      ],
      erros: [
        { errado: 'ideia, boia, jiboia com acento.', certo: 'ideia, boia, jiboia (paroxítonas sem acento).', porque: 'Acordo Ortográfico de 1990.' },
        { errado: 'previlégio, beneficiente, reinvindicação.', certo: 'privilégio, beneficente, reivindicação.', porque: 'Grafias memorizáveis por família de palavras.' },
        { errado: 'vôo, crêem.', certo: 'voo, creem.', porque: 'Hiato oo/ee perdeu acento.' }
      ],
      resumoFinal: [
        'Regras de X/CH, G/J, S/SS/C/Ç/Z resolvem a maior parte.',
        'Acordo Ortográfico alterou acentos, trema e alfabeto — não a gramática.',
        'Homófonas exigem atenção ao sentido (mas/mais, mau/mal).'
      ]
    },

    /* ================= 5 ================= */
    {
      slug: 'acentuacao',
      numero: 5,
      titulo: 'Acentuação gráfica',
      grupo: 'Ortografia e acentuação',
      resumo: 'Oxítonas, paroxítonas, proparoxítonas, hiatos e ditongos com as regras e exceções do Acordo.',
      tags: ['acentuação', 'proparoxítona', 'hiato', 'oxítona'],
      introducao: 'A acentuação depende da posição da sílaba tônica e da terminação da palavra. Um roteiro de três perguntas resolve quase todos os casos: onde está a tônica? qual a terminação? há hiato ou ditongo?',
      secoes: [
        {
          id: 'classificacao',
          titulo: 'Passo 1 — Classificar quanto à tônica',
          html: '<ul><li><strong>Oxítona:</strong> última sílaba tônica — <em>ca</em>-fé, <em>u</em>-ru-<em>bu</em>.</li>' +
            '<li><strong>Paroxítona:</strong> penúltima — <em>ca</em>-dei-ra, <em>ú</em>-til.</li>' +
            '<li><strong>Proparoxítona:</strong> antepenúltima — <em>lâm</em>-pa-da, <em>mé</em>-di-co.</li></ul>' +
            '<div class="info-box box-tip"><h4>Regra de ouro</h4><p><strong>Todas</strong> as proparoxítonas são acentuadas. Não há exceção.</p></div>'
        },
        {
          id: 'regras',
          titulo: 'Passo 2 — Aplicar a regra',
          html: '<h3>Oxítonas</h3><p>Acentuam-se as terminadas em <strong>a(s), e(s), o(s), em(ns)</strong>: <em>sofá</em>, <em>café</em>, <em>avô</em>, <em>também</em>, <em>parabéns</em>. Também as terminadas em ditongo aberto <strong>éi, éu, ói</strong>: <em>papéis</em>, <em>herói</em>, <em>céu</em>.</p>' +
            '<h3>Paroxítonas</h3><p>Acentuam-se as terminadas em <strong>l, n, r, x, i(s), u(s), ã(s), ão(s), om(ns), ps, ditongo</strong>: <em>fácil</em>, <em>hífen</em>, <em>açúcar</em>, <em>tórax</em>, <em>lápis</em>, <em>vírus</em>, <em>ímã</em>, <em>bênção</em>, <em>elétron</em>, <em>bíceps</em>, <em>série</em>. <strong>Não</strong> se acentuam paroxítonas terminadas em <strong>a, e, o, am, en, em</strong> seguidas ou não de s: <em>casa</em>, <em>idade</em>, <em>tijolo</em>, <em>item</em>, <em>jovem</em>.</p>' +
            '<h3>Proparoxítonas</h3><p>Todas: <em>lâmpada</em>, <em>público</em>, <em>ínterim</em>, <em>réquiem</em>.</p>' +
            '<h3>Monossílabos tônicos</h3><p>Terminados em <strong>a(s), e(s), o(s)</strong>: <em>pá</em>, <em>mês</em>, <em>pó</em>, <em>nós</em>.</p>'
        },
        {
          id: 'hiato-ditongo',
          titulo: 'Passo 3 — Hiatos e ditongos',
          html: '<p><strong>Hiatos com i e u:</strong> acentuam-se quando tônicos, sozinhos na sílaba ou com s, <em>não</em> seguidos de nh: <em>saída</em>, <em>baú</em>, <em>juízes</em> (mas <em>bai</em>-<em>nha</em>? não: <em>bainha</em> não tem hiato gráfico). Não se acentua <em>ruim</em>, <em>ainda</em>, <em>juiz</em> (seguidos de consoante na mesma sílaba ou de ditongo decrescente).</p>' +
            '<p><strong>Hiatos oo/ee:</strong> sem acento — <em>voo</em>, <em>enjoo</em>, <em>creem</em>, <em>leem</em>, <em>deem</em>.</p>' +
            '<p><strong>Ditongos abertos éi/ói em paroxítonas:</strong> sem acento — <em>ideia</em>, <em>boia</em>, <em>jiboia</em>, <em>heroico</em>. Em oxítonas, mantém: <em>herói</em>, <em>papéis</em>, <em>faróis</em>.</p>' +
            '<div class="info-box box-example"><h4>Contraste que a banca ama</h4><p><em>Para</em> (preposição/verbo no presente) x <em>pará</em> (substantivo). <em>Pôde</em> (passado) x <em>pode</em> (presente). <em>Pôr</em> (verbo) x <em>por</em> (preposição).</p></div>'
        },
        {
          id: 'rota',
          titulo: 'Roteiro de resolução em 20 segundos',
          html: '<ol><li>Pronuncie a palavra e localize a tônica.</li><li>Se proparoxítona, acentue — fim.</li>' +
            '<li>Se oxítona, verifique terminação em a/e/o/em ou ditongo aberto.</li>' +
            '<li>Se paroxítona, verifique a lista de terminações acentuadas ou a presença de ditongo.</li>' +
            '<li>Verifique casos especiais: hiato, acento diferencial, verbos com formas irregulares (<em>vêm</em>, <em>têm</em>).</li></ol>'
        }
      ],
      exemplos: [
        { frase: 'proibido → pro-i-BI-do: oxítona terminada em "o" ⇒ sem acento (correto: <em>proibido</em>).', nota: 'A tônica é "bi"; a palavra termina em "do", não em "o" tônico.' },
        { frase: 'história, série, família: paroxítonas terminadas em ditongo ⇒ acentuadas.', nota: 'Ditongo crescente final atrai o acento.' },
        { frase: 'juiz, ruim, cair: sem acento.', nota: '<em>juiz</em>: ditongo decrescente seguido de z; não é hiato isolado.' }
      ],
      regras: [
        'Toda proparoxítona é acentuada.',
        'Oxítonas: a(s), e(s), o(s), em(ns) e ditongos abertos.',
        'Paroxítonas: l, n, r, x, i, u, ã, ão, om, ps, ditongo.',
        'Hiato i/u tônico isolado recebe acento (saída, baú).',
        'Ditongos éi/ói em paroxítonas perderam o acento (ideia, jiboia).'
      ],
      dicas: [
        'Guarde a lista das paroxítonas acentuadas por meio de sigla: "LNRXiUão om ps ditongo".',
        'Em prova, teste a palavra sem acento: se a pronúncia ficar ambígua ou errada, provavelmente há acento.',
        'Verbos derivados de ter e vir: ele tem / eles têm; ele vem / eles vêm; ele contém / eles contêm.'
      ],
      erros: [
        { errado: 'acentuar "ideia" e "assembleia".', certo: 'ideia, assembleia.', porque: 'Ditongo aberto em paroxítona sem acento.' },
        { errado: 'acentuar "ruim" e "juiz".', certo: 'ruim, juiz.', porque: 'O i não está isolado na sílaba tônica.' },
        { errado: 'escrever "ele vêm".', certo: 'ele vem / eles vêm.', porque: 'O acento marca plural.' }
      ],
      resumoFinal: [
        'Classifique a tônica antes de decidir o acento.',
        'Proparoxítona: sempre acentuada.',
        'Hiatos de i/u: acento quando tônicos e isolados.',
        'Acordo eliminou acentos de hiatos oo/ee e ditongos paroxítonos.'
      ]
    },

    /* ================= 6 ================= */
    {
      slug: 'hifen',
      numero: 6,
      titulo: 'Emprego do hífen',
      grupo: 'Ortografia e acentuação',
      resumo: 'Regras do Acordo Ortográfico para prefixos, compostos e palavras com elemento de ligação.',
      tags: ['hífen', 'prefixos', 'compostos', 'acordo ortográfico'],
      introducao: 'O hífen é uma das maiores fontes de erro depois do Acordo de 1990, porque a regra depende do prefixo e da letra inicial do segundo elemento. Organize por prefixo — não tente decorar palavras soltas.',
      secoes: [
        {
          id: 'regra-geral',
          titulo: 'Regra geral com prefixos',
          html: '<p><strong>Usa-se hífen quando:</strong></p><ul>' +
            '<li>O prefixo termina com a <strong>mesma letra</strong> que inicia o segundo elemento: <em>anti-inflamatório</em>, <em>micro-ondas</em>, <em>super-racional</em>, <em>inter-regional</em>, <em>contra-ataque</em>.</li>' +
            '<li>O segundo elemento começa por <strong>h</strong>: <em>anti-higiênico</em>, <em>super-homem</em>, <em>geo-história</em>.</li>' +
            '<li>O prefixo termina em <strong>r</strong> e a palavra começa por <strong>r</strong>, ou o prefixo é <em>sub</em> e a palavra começa por <em>r</em>: <em>inter-racial</em>, <em>super-revista</em>.</li>' +
            '<li>O prefixo termina em <strong>b</strong> e a palavra começa por <strong>s</strong> ou <strong>r</strong>: <em>sub-bloco</em> não; <em>subsolo</em>. Mas <em>sub-região</em>, <em>sub-reptício</em>.</li></ul>' +
            '<p><strong>Não se usa hífen</strong> (grafia unida) quando o prefixo termina em vogal e o segundo elemento começa por vogal diferente ou por consoante: <em>autoescola</em>, <em>extraoficial</em>, <em>antipedagógico</em>, <em>contraindicação</em>, <em>infraestrutura</em>, <em>semicírculo</em>.</p>'
        },
        {
          id: 'prefixos-especiais',
          titulo: 'Prefixos com regra própria',
          html: '<table class="tbl"><thead><tr><th>Prefixo</th><th>Com hífen</th><th>Sem hífen</th></tr></thead><tbody>' +
            '<tr><td><strong>ex-</strong> (anterior)</td><td>ex-presidente, ex-aluno</td><td>—</td></tr>' +
            '<tr><td><strong>vice-, soto-, grã-, grão-</strong></td><td>vice-presidente, soto-mestre</td><td>—</td></tr>' +
            '<tr><td><strong>pré-, pós-, pró-</strong></td><td>pré-vestibular, pós-graduação, pró-ativo</td><td>predizer, pospor, promover</td></tr>' +
            '<tr><td><strong>recém-, além-, aquém-, sem-</strong></td><td>recém-chegado, além-mar, sem-terra</td><td>—</td></tr>' +
            '<tr><td><strong>co-, re-, pre-, pro-</strong> (átonos)</td><td>—</td><td>cooperar, reeleger, preencher, propor</td></tr>' +
            '</tbody></table>' +
            '<div class="info-box box-warn"><h4>Armadilha</h4><p><em>co-</em> com hífen caiu: o correto é <em>coautor</em>, <em>coordenar</em>, <em>cooperação</em>. Mas <em>co-herdeiro</em> mantém por causa do "h".</p></div>'
        },
        {
          id: 'compostos',
          titulo: 'Palavras compostas',
          html: '<p><strong>Com hífen</strong> quando os elementos formam uma unidade com autonomia lexical: <em>beija-flor</em>, <em>guarda-roupa</em>, <em>mão-de-obra</em> → atual <em>mão de obra</em> (sem hífen quando há elemento de ligação e o conjunto perde a noção de composição).</p>' +
            '<p><strong>Sem hífen</strong> quando há elemento de ligação e a expressão forma uma locução: <em>pé de moleque</em>, <em>dia a dia</em>, <em>dona de casa</em>, <em>ponto e vírgula</em>.</p>' +
            '<p><strong>Exceções mantidas:</strong> <em>água-de-colônia</em>, <em>arco-da-velha</em>, <em>cor-de-rosa</em>, <em>mais-que-perfeito</em>, <em>pé-de-meia</em>.</p>' +
            '<p>Elementos repetidos ou de natureza onomatopeica: <em>tico-tico</em>, <em>corre-corre</em>, <em>pingue-pongue</em>.</p>' +
            '<p>Nomes de espécies botânicas e zoológicas: <em>couve-flor</em>, <em>bem-te-vi</em>, <em>erva-doce</em>.</p>'
        },
        {
          id: 'consultas',
          titulo: 'Casos cobrados em prova (lista rápida)',
          html: '<p><strong>Com hífen:</strong> micro-ondas, anti-inflamatório, auto-observação, contra-regra, inter-regional, super-homem, anti-herói, sub-reitor, micro-ônibus, anti-imperialista, hidro-meteorológico (consoantes iguais? não — este perdeu o hífen: <em>hidrometeorológico</em>).</p>' +
            '<p><strong>Sem hífen:</strong> autoescola, autocontrole, ultrassom, contraindicação, antessala, infraestrutura, minissaia, neoescolástico, agroindústria, hidrelétrica, aeroporto, semiaberto, anteontem, reidratar.</p>' +
            '<div class="info-box box-tip"><h4>Método</h4><p>Separe prefixo e radical. Se a última letra do prefixo = primeira do radical, hífen. Se não, quase sempre junto. Depois aplique as exceções (h, r, b, ex, vice, pró...).</p></div>'
        }
      ],
      exemplos: [
        { frase: 'anti + inflamatório = anti-inflamatório (i + i).', nota: 'Letras iguais ⇒ hífen.' },
        { frase: 'anti + pedagógico = antipedagógico (i + p).', nota: 'Letras diferentes ⇒ sem hífen.' },
        { frase: 'micro + ondas = micro-ondas (o + o).', nota: 'Letras iguais ⇒ hífen.' },
        { frase: 'auto + estrada = autoestrada (o + e).', nota: 'Vogais diferentes ⇒ sem hífen.' }
      ],
      regras: [
        'Prefixo terminando em vogal + palavra iniciada pela mesma vogal: hífen.',
        'Prefixo + palavra iniciada por h: hífen.',
        'ex-, vice-, soto-, grã-, grão-, pré-, pós-, pró-, recém-, sem-, além-: hífen.',
        'co-, re-, pre-, pro- átonos: sem hífen (cooperar, reeleger).',
        'Locuções com elemento de ligação: sem hífen (dia a dia), salvo exceções consagradas.'
      ],
      dicas: [
        'Compare letras terminais e iniciais — resolve 80% dos casos.',
        'Memorize apenas as exceções: h, ex, vice, grã, pró, pré, pós, recém, sem, além, aquém.',
        'Na dúvida, consulte o VOLP (Vocabulário Ortográfico da Língua Portuguesa).'
      ],
      erros: [
        { errado: 'co-autor, co-operação.', certo: 'coautor, cooperação.', porque: '"co-" não recebe hífen (exceto diante de h).' },
        { errado: 'ultra-som, contra-indicação.', certo: 'ultrassom, contraindicação.', porque: 'Letras diferentes ⇒ união.' },
        { errado: 'anti-higiênico sem hífen.', certo: 'anti-higiênico.', porque: 'Palavra iniciada por h exige hífen.' }
      ],
      resumoFinal: [
        'Regra base: letras iguais = hífen; letras diferentes = junto.',
        'Prefixos de origem latina com acento (pré, pós, pró) mantêm hífen.',
        'ex-, vice-, recém-, sem- sempre com hífen.',
        'Locuções com preposição geralmente sem hífen.'
      ]
    },

    /* ================= 7 ================= */
    {
      slug: 'classes-de-palavras',
      numero: 7,
      titulo: 'Classes de palavras',
      grupo: 'Morfologia',
      resumo: 'As dez classes gramaticais, critérios de identificação e os deslizamentos de classe.',
      tags: ['morfologia', 'classes', 'substantivo', 'adjetivo', 'verbo'],
      introducao: 'A morfologia estuda a palavra isolada: sua classe, sua estrutura e suas flexões. Em concursos, o essencial é saber classificar por critério morfológico (forma), semântico (sentido) e sintático (função) — e reconhecer quando uma palavra muda de classe conforme o contexto.',
      secoes: [
        {
          id: 'as-dez-classes',
          titulo: 'As dez classes gramaticais',
          html: '<table class="tbl"><thead><tr><th>Classe</th><th>Função</th><th>Exemplos</th></tr></thead><tbody>' +
            '<tr><td><strong>Substantivo</strong></td><td>Nomeia seres, coisas, ideias</td><td>casa, justiça, aluno</td></tr>' +
            '<tr><td><strong>Artigo</strong></td><td>Determina o substantivo</td><td>o, a, os, as, um, uma</td></tr>' +
            '<tr><td><strong>Adjetivo</strong></td><td>Caracteriza o substantivo</td><td>justo, brasileiro, veloz</td></tr>' +
            '<tr><td><strong>Numeral</strong></td><td>Indica quantidade, ordem, fração</td><td>dois, terceiro, meio, dobro</td></tr>' +
            '<tr><td><strong>Pronome</strong></td><td>Substitui ou acompanha o substantivo</td><td>ele, este, que, meu, alguém</td></tr>' +
            '<tr><td><strong>Verbo</strong></td><td>Indica ação, estado, fenômeno</td><td>estudar, ser, chover</td></tr>' +
            '<tr><td><strong>Advérbio</strong></td><td>Modifica verbo, adjetivo, advérbio</td><td>rapidamente, muito, aqui, não</td></tr>' +
            '<tr><td><strong>Preposição</strong></td><td>Liga palavras, estabelece relação</td><td>de, para, com, entre</td></tr>' +
            '<tr><td><strong>Conjunção</strong></td><td>Liga orações ou termos</td><td>e, mas, porque, embora</td></tr>' +
            '<tr><td><strong>Interjeição</strong></td><td>Expressa emoção</td><td>olá, ufa, ai, oxente</td></tr>' +
            '</tbody></table>' +
            '<p>Alguns autores dividem em <strong>variáveis</strong> (substantivo, artigo, adjetivo, numeral, pronome, verbo) e <strong>invariáveis</strong> (advérbio, preposição, conjunção, interjeição).</p>'
        },
        {
          id: 'deslizamento',
          titulo: 'Substantivação e deslizamento de classe',
          html: '<p>Uma palavra pode mudar de classe conforme o uso. A esse fenômeno dá-se o nome de <strong>conversão</strong> ou <strong>derivação imprópria</strong>.</p>' +
            '<ul><li>O artigo define: <em>"O não é uma resposta"</em> → <em>não</em> torna-se substantivo (está determinado por artigo).</li>' +
            '<li><em>"Os porquês das crianças"</em> → advérbio substantivado.</li>' +
            '<li><em>"Ele é um gênio"</em> → substantivo; <em>"Ele tem ideias geniais"</em> → adjetivo na origem.</li>' +
            '<li><em>"O falar difícil"</em> → verbo substantivado (infinitivo com artigo).</li></ul>' +
            '<div class="info-box box-warn"><h4>Atenção em prova</h4><p>Se a questão pede a classe da palavra destacada, observe o <strong>contexto imediato</strong>, especialmente a presença de artigo ou pronome.</p></div>'
        },
        {
          id: 'identificar-classes',
          titulo: 'Como identificar rapidamente',
          html: '<ol>' +
            '<li><strong>Substantivo:</strong> pode vir com artigo, pluraliza, recebe adjetivo.</li>' +
            '<li><strong>Adjetivo:</strong> pode ser trocado por "que é ..."; não pluraliza por artigo.</li>' +
            '<li><strong>Advérbio:</strong> invariável, modifica o verbo; muitas vezes substituível por "de modo X".</li>' +
            '<li><strong>Pronome:</strong> substitui um nome do contexto (referência, déixis).</li>' +
            '<li><strong>Conjunção x preposição:</strong> conjunção liga orações (ou termos com mesmo valor); preposição liga termos dependentes e não introduz oração com verbo conjugado (mas pode introduzir infinitivo).</li>' +
            '</ol>'
        }
      ],
      exemplos: [
        { frase: 'Não sei o porquê da sua ausência.', nota: '<em>porquê</em> = substantivo (com artigo, no plural, admite adjetivo).' },
        { frase: 'Estudar é preciso.', nota: '<em>estudar</em> = verbo no infinitivo como núcleo do sujeito.' },
        { frase: 'Ele falou claramente.', nota: '<em>claramente</em> = advérbio de modo.' }
      ],
      regras: [
        'Classes variáveis: substantivo, artigo, adjetivo, numeral, pronome, verbo.',
        'Classes invariáveis: advérbio, preposição, conjunção, interjeição.',
        'A classe pode mudar pelo contexto (conversão/derivação imprópria).',
        'A presença de artigo costuma indicar substantivação.'
      ],
      dicas: [
        'Antes de classificar, veja com quem a palavra se relaciona na frase.',
        'Palavras terminadas em -mente quase sempre são advérbios — mas "o somente" existe como substantivo em uso poético raro; não invente.',
        'Advérbio não flexiona; adjetivo flexiona.'
      ],
      erros: [
        { errado: 'Dizer que "muito" é sempre advérbio.', certo: '"Muita água" é pronome indefinido; "muito bom" é advérbio.', porque: 'A depender do termo que modificam, adjetivos/pronomes podem ser advérbios.' },
        { errado: 'Classificar "que" sempre como pronome.', certo: '"Que" pode ser pronome, conjunção, advérbio, preposição acidental.', porque: '"Que" é a palavra mais multifuncional da língua.' }
      ],
      resumoFinal: [
        'Dez classes, seis variáveis e quatro invariáveis.',
        'Classifique sempre no contexto.',
        'Conversão transforma palavra em outra classe.'
      ]
    },

    /* ================= 8 ================= */
    {
      slug: 'substantivos',
      numero: 8,
      titulo: 'Substantivos',
      grupo: 'Morfologia',
      resumo: 'Classificação, flexões de gênero, número e grau, e plural de palavras compostas.',
      tags: ['substantivo', 'plural', 'gênero', 'coletivo'],
      introducao: 'O substantivo é o núcleo da nomeação. As questões incidem sobre classificação (próprio/comum, concreto/abstrato, coletivo), flexão de gênero (especialmente substantivos de dois gêneros e comuns de dois gêneros) e plural de compostos.',
      secoes: [
        {
          id: 'classificacao',
          titulo: 'Classificação',
          html: '<ul>' +
            '<li><strong>Comum</strong> (designa o gênero): <em>cidade</em>. <strong>Próprio</strong> (individualiza): <em>Brasília</em>.</li>' +
            '<li><strong>Concreto</strong> (existência própria, real ou imaginária): <em>mesa</em>, <em>saci</em>. <strong>Abstrato</strong> (depende de outro ser para existir: ação, estado, sentimento, qualidade): <em>amor</em>, <em>beleza</em>.</li>' +
            '<li><strong>Simples</strong> (um radical): <em>sol</em>. <strong>Composto</strong> (mais de um radical): <em>girassol</em>.</li>' +
            '<li><strong>Primitivo</strong> (não deriva de outra palavra): <em>pedra</em>. <strong>Derivado</strong>: <em>pedreira</em>.</li>' +
            '<li><strong>Coletivo</strong>: <em>alcateia</em> (lobos), <em>acervo</em> (obras), <em>cardume</em> (peixes), <em>rebanho</em> (bois), <em>elenco</em> (atores).</li>' +
            '</ul>'
        },
        {
          id: 'genero',
          titulo: 'Gênero: os casos que caem em prova',
          html: '<p><strong>Comuns de dois gêneros</strong> — mesma forma, artigo distingue: <em>o estudante / a estudante</em>, <em>o cliente / a cliente</em>, <em>o agente / a agente</em>, <em>o intérprete / a intérprete</em>, <em>o imigrante / a imigrante</em>.</p>' +
            '<p><strong>Substantivos com gênero diferente do esperado:</strong></p><table class="tbl"><thead><tr><th>Masculino</th><th>Feminino</th></tr></thead><tbody>' +
            '<tr><td>o anel, o apêndice, o caracter / o caractere, o clã, o dó, o diabetes, o eclipse, o guaraná, o telefonema, o eco, o champanhe, o sanduíche, o suéter, o tapa</td><td>a alface, a apendicite, a aguardente, a análise, a cal, a dinamite, a elipse, a gênese, a grama (relva), a libido, a omoplata, a sentinela</td></tr>' +
            '</tbody></table>' +
            '<p><strong>Mudança de sentido com o gênero:</strong> <em>o cabeça</em> (líder) x <em>a cabeça</em> (parte do corpo); <em>o capital</em> (dinheiro) x <em>a capital</em> (cidade); <em>o lente</em> (professor) x <em>a lente</em> (vidro); <em>o rádio</em> (aparelho) x <em>a rádio</em> (emissora); <em>o grama</em> (unidade de massa) x <em>a grama</em> (relva).</p>' +
            '<div class="info-box box-tip"><h4>Dica</h4><p>Apenas dois substantivos comuns de dois gêneros concordam com o artigo em regra geral; o adjetivo vai para o gênero do artigo: "<em>a</em> estudante brasileir<em>a</em>", "<em>o</em> estudante brasileir<em>o</em>".</p></div>'
        },
        {
          id: 'plural',
          titulo: 'Plural de palavras compostas',
          html: '<table class="tbl"><thead><tr><th>Estrutura</th><th>Plural</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td>Substantivo + substantivo</td><td>Os dois variam</td><td>couve-flor → couves-flores</td></tr>' +
            '<tr><td>Substantivo + adjetivo</td><td>Os dois variam</td><td>amor-perfeito → amores-perfeitos</td></tr>' +
            '<tr><td>Verbo + substantivo</td><td>Só o substantivo varia</td><td>beija-flor → beija-flores</td></tr>' +
            '<tr><td>Advérbio + adjetivo</td><td>Só o adjetivo varia</td><td>bem-te-vi → bem-te-vis</td></tr>' +
            '<tr><td>Preposição + substantivo</td><td>Palavra fixa</td><td>pé de moleque → pés de moleque</td></tr>' +
            '<tr><td>Palavra invariável + palavra</td><td>Varie o segundo</td><td>guarda-chuva → guarda-chuvas</td></tr>' +
            '</tbody></table>' +
            '<p>Casos especiais: <em>segunda-feira → segundas-feiras</em>; <em>salário-família → salários-família</em>; <em>joão-ninguém → joões-ninguém</em>.</p>'
        },
        {
          id: 'grau',
          titulo: 'Grau: aumentativo e diminutivo',
          html: '<p>Sintético (sufixos: <em>-ão, -aço, -inho, -zinho</em>) e analítico (<em>grande, enorme, pequeno</em>). O grau pode ser afetivo, pejorativo ou apenas quantitativo: <em>casarão</em> (aumentativo), <em>livrinho</em> (diminutivo afetivo), <em>mulherzinha</em> (pode ser pejorativo).</p>' +
            '<p>Plural de diminutivo: <em>animalzinho → animalzinhos</em>; <em>anel → aneizinhos / anéisinhos</em>; <em>bar → barezinhos</em>.</p>'
        }
      ],
      exemplos: [
        { frase: 'O telefonema / a análise / o suéter / a alface.', nota: 'Gêneros que contrariam a intuição e caem em prova.' },
        { frase: 'guarda-chuva → guarda-chuvas; guarda-roupa → guarda-roupas.', nota: 'Verbo + substantivo: varia só o substantivo.' },
        { frase: 'amores-perfeitos, couves-flores.', nota: 'Substantivo + adjetivo: ambos variam.' }
      ],
      regras: [
        'Comum de dois gêneros: forma única, artigo diferencia.',
        'Substantivo + substantivo e substantivo + adjetivo: ambos vão ao plural.',
        'Verbo + substantivo: só o substantivo varia.',
        'Coletivos são substantivos comuns, concretos, no singular.',
        'Abstratos indicam ação, estado, qualidade ou sentimento.'
      ],
      dicas: [
        'Monte uma lista pessoal dos gêneros inesperados: telefonema, eclipse, omoplata, sentinela.',
        'Pare o plural de compostos: identifique os elementos antes de flexionar.',
        'Coletivo não é plural: "cardume" está no singular e indica muitos peixes.'
      ],
      erros: [
        { errado: 'A telefonema.', certo: 'O telefonema.', porque: 'Palavras terminadas em -ma de origem grega são masculinas (o problema, o sistema, o clima).' },
        { errado: 'beija-flores com ambos flexionando.', certo: 'beija-flores.', porque: 'Verbo + substantivo: só o substantivo varia.' }
      ],
      resumoFinal: [
        'Saiba classificar e reconhecer coletivos.',
        'Gênero inesperado é conteúdo obrigatório de prova.',
        'Plural de compostos depende da estrutura.'
      ]
    },

    /* ================= 9 ================= */
    {
      slug: 'adjetivos',
      numero: 9,
      titulo: 'Adjetivos',
      grupo: 'Morfologia',
      resumo: 'Classificação, locução adjetiva, graus comparativo e superlativo, e adjetivos pátrios.',
      tags: ['adjetivo', 'locução adjetiva', 'superlativo', 'pátrios'],
      introducao: 'O adjetivo caracteriza o substantivo e concorda com ele em gênero e número. Em provas, aparecem locuções adjetivas, graus de comparação e a distinção entre adjetivo e advérbio.',
      secoes: [
        {
          id: 'classificacao-adjetivos',
          titulo: 'Classificação e locução adjetiva',
          html: '<p><strong>Simples</strong> (um radical: <em>feliz</em>); <strong>composto</strong> (dois radicais: <em>luso-brasileiro</em>); <strong>primitivo</strong> (<em>bom</em>); <strong>derivado</strong> (<em>bondoso</em>); <strong>pátrio</strong> (<em>baiano</em>, <em>pernambucano</em>).</p>' +
            '<p><strong>Locução adjetiva</strong> = preposição + substantivo com valor de adjetivo: <em>de ouro</em> (áureo), <em>de mãe</em> (materno), <em>de cavalo</em> (cavalar), <em>de leão</em> (leonino), <em>de cidade</em> (urbano), <em>de irmão</em> (fraterno).</p>' +
            '<div class="info-box box-warn"><h4>Atenção</h4><p>A substituição por adjetivo pode alterar o sentido: "amor de mãe" ≠ "amor materno" em todos os usos. Em prova, considere o valor denotativo.</p></div>' +
            '<p><strong>Adjetivos compostos:</strong> varia apenas o último elemento quando o primeiro é forma reduzida latina: <em>luso-brasileiro → luso-brasileiros</em>; <em>surdo-mudo → surdos-mudos</em> (ambos variam porque são dois adjetivos plenos). <em>Azul-claro → azul-claros</em> (cor + adjetivo: varia o segundo).</p>'
        },
        {
          id: 'graus',
          titulo: 'Graus do adjetivo',
          html: '<h3>Comparativo</h3><ul>' +
            '<li><strong>Igualdade:</strong> tão ... quanto/como.</li>' +
            '<li><strong>Superioridade:</strong> mais ... que/do que; <em>melhor</em> (sintético).</li>' +
            '<li><strong>Inferioridade:</strong> menos ... que; <em>pior</em>.</li></ul>' +
            '<h3>Superlativo</h3><ul>' +
            '<li><strong>Relativo:</strong> o mais ... de / o menos ... de.</li>' +
            '<li><strong>Absoluto analítico:</strong> muito, extremamente + adjetivo.</li>' +
            '<li><strong>Absoluto sintético:</strong> sufixos -íssimo, -imo, -érrimo: <em>belíssimo</em>, <em>paupérrimo</em>, <em>celebérrimo</em>.</li></ul>' +
            '<table class="tbl"><thead><tr><th>Forma normal</th><th>Comparativo</th><th>Superlativo sintético</th></tr></thead><tbody>' +
            '<tr><td>bom</td><td>melhor</td><td>ótimo</td></tr>' +
            '<tr><td>mau</td><td>pior</td><td>péssimo</td></tr>' +
            '<tr><td>grande</td><td>maior</td><td>máximo</td></tr>' +
            '<tr><td>pequeno</td><td>menor</td><td>mínimo</td></tr>' +
            '<tr><td>alto</td><td>superior</td><td>supremo / sumo</td></tr>' +
            '<tr><td>baixo</td><td>inferior</td><td>ínfimo</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'adjetivo-adv',
          titulo: 'Adjetivo x advérbio',
          html: '<p>O adjetivo modifica o substantivo (e concorda com ele). O advérbio modifica verbo, adjetivo ou outro advérbio (e é invariável).</p>' +
            '<div class="info-box box-example"><h4>Compare</h4>' +
            '<p>"Chegou <strong>rápido</strong>" — o termo modifica o verbo: advérbio (invariável).</p>' +
            '<p>"Um carro <strong>rápido</strong>" — modifica o substantivo: adjetivo.</p>' +
            '<p>"Falou <strong>claro</strong>" (advérbio) x "discurso <strong>claro</strong>" (adjetivo).</p></div>' +
            '<p>Palavras como <em>muito, pouco, bastante, bastante, meio</em> variam quando acompanham substantivo (pronome indefinido/adjetivo) e ficam invariáveis quando modificam verbo/adjetivo (advérbio): "Comi <em>muitas</em> frutas" x "Ele é <em>muito</em> inteligente".</p>'
        }
      ],
      exemplos: [
        { frase: 'A prova foi dificílima / muito difícil / a mais difícil do ano.', nota: 'Superlativo sintético, analítico e relativo.' },
        { frase: 'Camisas azul-claras / camisas verde-escuras.', nota: 'Cor + adjetivo: varia só o segundo termo.' },
        { frase: 'Ele canta bem (advérbio) / o bem vence o mal (substantivos).', nota: 'A classe depende do contexto.' }
      ],
      regras: [
        'Adjetivo concorda com o substantivo em gênero e número.',
        'Locução adjetiva = preposição + substantivo com valor de adjetivo.',
        'Comparativos sintéticos: melhor, pior, maior, menor.',
        'Superlativos eruditos: ótimo, péssimo, máximo, mínimo.',
        'Adjetivos compostos: varia só o último elemento (salvo exceções).'
      ],
      dicas: [
        'Guarde as formas eruditas: paupérrimo, celebérrimo, aspérrimo, misérrimo.',
        'Não use "mais melhor" nem "mais pior".',
        'Teste a variação: se o termo pode ir ao plural junto com o substantivo, é adjetivo.'
      ],
      erros: [
        { errado: 'mais melhor, mais ótimo.', certo: 'melhor, ótimo.', porque: 'Comparativo e superlativo sintéticos não admitem "mais".' },
        { errado: 'camisas azuis-claras.', certo: 'camisas azul-claras.', porque: 'Em cores compostas, o primeiro elemento fica invariável.' }
      ],
      resumoFinal: [
        'Adjetivo caracteriza e concorda com o substantivo.',
        'Locuções adjetivas podem ser trocadas por adjetivos.',
        'Graus: comparativo (3 tipos) e superlativo (analítico/sintético).'
      ]
    },

    /* ================= 10 ================= */
    {
      slug: 'adverbios',
      numero: 10,
      titulo: 'Advérbios',
      grupo: 'Morfologia',
      resumo: 'Classificação dos advérbios, locuções adverbiais e distinção de casos como "meio" e "bastante".',
      tags: ['advérbio', 'modo', 'intensidade', 'locução adverbial'],
      introducao: 'Advérbio é palavra invariável que modifica o verbo, o adjetivo ou outro advérbio, acrescentando circunstâncias de modo, tempo, lugar, intensidade, negação, dúvida, afirmação. É a classe dos "detalhes" — e é nos detalhes que as provas pegam.',
      secoes: [
        {
          id: 'classificacao-adv',
          titulo: 'Classificação',
          html: '<table class="tbl"><thead><tr><th>Circunstância</th><th>Advérbios</th></tr></thead><tbody>' +
            '<tr><td>Modo</td><td>bem, mal, assim, rapidamente, calmamente</td></tr>' +
            '<tr><td>Tempo</td><td>hoje, ontem, amanhã, cedo, tarde, já, ainda, sempre, nunca</td></tr>' +
            '<tr><td>Lugar</td><td>aqui, ali, lá, perto, longe, acima, abaixo, dentro, fora</td></tr>' +
            '<tr><td>Intensidade</td><td>muito, pouco, bastante, mais, menos, tão, quão, demais</td></tr>' +
            '<tr><td>Negacão</td><td>não, tampouco, jamais</td></tr>' +
            '<tr><td>Dúvida</td><td>talvez, provavelmente, possivelmente, quiçá</td></tr>' +
            '<tr><td>Afirmação</td><td>sim, certamente, realmente, efetivamente</td></tr>' +
            '<tr><td>Ordem/inclusão</td><td>primeiramente, depois, inclusive, também, apenas, só</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'locucoes',
          titulo: 'Locuções adverbiais',
          html: '<p>Grupo de palavras com valor de advérbio, geralmente preposição + substantivo/adjetivo/advérbio:</p>' +
            '<ul><li><strong>Modo:</strong> às pressas, em silêncio, com cuidado, de cor, a pé.</li>' +
            '<li><strong>Tempo:</strong> às vezes, de manhã, à noite, de repente, em breve, por enquanto.</li>' +
            '<li><strong>Lugar:</strong> à direita, ao lado, em casa, por perto, de longe.</li>' +
            '<li><strong>Causa:</strong> por causa de, em razão de.</li>' +
            '<li><strong>Finalidade:</strong> a fim de, com o objetivo de.</li></ul>' +
            '<div class="info-box box-tip"><h4>Crase em locuções</h4><p>Locuções femininas com núcleo substantivo levam crase: <em>às vezes</em>, <em>à noite</em>, <em>à direita</em>. Palavras repetidas não levam: <em>cara a cara</em>, <em>passo a passo</em>.</p></div>'
        },
        {
          id: 'casos',
          titulo: 'Casos que decidem a questão',
          html: '<ul>' +
            '<li><strong>meio:</strong> advérbio (= um pouco) é invariável — "ela está <em>meio</em> cansada"; numeral/adjetivo varia — "<em>meia</em> hora", "<em>duas meias</em> porções".</li>' +
            '<li><strong>bastante:</strong> advérbio invariável quando modifica verbo/adjetivo — "estudou <em>bastante</em>"; pronome indefinido variável quando acompanha substantivo — "<em>bastantes</em> questões".</li>' +
            '<li><strong>todo:</strong> "todo o país" (inteiro) x "todo país" (qualquer).</li>' +
            '<li><strong>só:</strong> "só estudo" (somente, advérbio) x "estou só" (sozinho, adjetivo).</li>' +
            '<li><strong>mais/menos:</strong> advérbios de intensidade; não variam.</li>' +
            '</ul>' +
            '<div class="info-box box-warn"><h4>Erros frequentes</h4><p>"Ela está <em>meia</em> cansada" está errado; o correto é <em>meio cansada</em>. Já "<em>meia</em> entrada" é correto porque "meia" é numeral (metade).</p></div>'
        },
        {
          id: 'grau-adverbio',
          titulo: 'Grau do advérbio',
          html: '<p>Advérbios de modo admitem grau: <strong>comparativo</strong> ("fala mais claramente que o colega") e <strong>superlativo</strong> ("fala clarissimamente", "muito bem").</p>' +
            '<p>Formas irregulares: <em>bem → melhor / muito bem / otimamente</em>; <em>mal → pior / muito mal / pessimamente</em>.</p>'
        }
      ],
      exemplos: [
        { frase: 'A candidata está meio nervosa.', nota: '<em>meio</em> modifica adjetivo ⇒ advérbio, invariável.' },
        { frase: 'Comprou meia dúzia de questões.', nota: '<em>meia</em> = numeral fracionário ⇒ varia.' },
        { frase: 'Ele estudou bastante; fez bastantes exercícios.', nota: 'Advérbio invariável x pronome variável.' }
      ],
      regras: [
        'Advérbio é invariável.',
        'Modifica verbo, adjetivo ou outro advérbio.',
        'Locuções adverbiais geralmente com preposição.',
        'meio/bastante variam quando acompanham substantivo.',
        'Bem e mal têm formas comparativas e superlativas irregulares.'
      ],
      dicas: [
        'Pergunte: a palavra modifica um verbo/adjetivo? Então é advérbio e não flexiona.',
        'Substitua por "um pouco": se funcionar, é o advérbio meio.',
        'Guarde otimamente e pessimamente para superlativos de bem e mal.'
      ],
      erros: [
        { errado: 'Ela está meia cansada.', certo: 'Ela está meio cansada.', porque: 'Advérbio de intensidade não varia.' },
        { errado: 'Ele fez bastante questões.', certo: 'Ele fez bastantes questões.', porque: 'Acompanhando substantivo, "bastante" é pronome indefinido e varia.' }
      ],
      resumoFinal: [
        'Advérbio = invariável; circunstância de modo, tempo, lugar, intensidade...',
        'Locuções adverbiais têm valor de advérbio.',
        'meio e bastante variam conforme a função.'
      ]
    }
  ]
});
