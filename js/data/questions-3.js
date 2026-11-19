/* Banco de questões — assuntos 21 a 30 */
window.PPC = window.PPC || {};
window.PPC.registerData({
  questions: [
    /* ===== 21. Termos da oração ===== */
    {
      codigo: 'QP-TER-001', topico: 'termos-da-oracao', dificuldade: 'facil',
      estilo: 'Inédita — estilo IBFC', banca: 'IBFC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Na oração "Havia muitos candidatos no auditório", o sujeito é',
      alternativas: [
        'muitos candidatos',
        'inexistente',
        'no auditório',
        'oculto',
        'indeterminado'
      ],
      correta: 1,
      explicacao: '"Haver" no sentido de existir é verbo impessoal: a oração não tem sujeito. "Muitos candidatos" é objeto direto.',
      comentario: 'Compare com "Existiam muitos candidatos" — aí "muitos candidatos" é sujeito, pois existir é pessoal.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-TER-002', topico: 'termos-da-oracao', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo FCC', banca: 'FCC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Em "Tenho certeza de que ele vencerá", o termo "de que ele vencerá" classifica-se como',
      alternativas: [
        'objeto indireto',
        'oração subordinada substantiva completiva nominal',
        'oração subordinada adjetiva restritiva',
        'complemento nominal (termo simples)',
        'adjunto adverbial de causa'
      ],
      correta: 1,
      explicacao: 'A oração completa o nome abstrato "certeza", com preposição exigida: é subordinada substantiva completiva nominal.',
      comentario: 'Se completasse um verbo, seria objetiva indireta. O critério é o termo regido: nome → completiva nominal; verbo → objetiva indireta.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-TER-003', topico: 'termos-da-oracao', dificuldade: 'dificil',
      estilo: 'Inédita — estilo CEBRASPE', banca: 'CEBRASPE (formato)', concurso: 'Simulado geral',
      tipo: 'certo_errado',
      enunciado: 'Julgue o item: em "O professor chegou cansado à escola", o termo "cansado" é predicativo do sujeito, pois atribui estado ao sujeito com verbo significativo — configura-se predicado verbo-nominal.',
      alternativas: ['Certo', 'Errado'],
      correta: 0,
      explicacao: 'Correto. O verbo "chegar" é significativo (predicado verbal), e "cansado" atribui estado ao sujeito, caracterizando predicado verbo-nominal.',
      comentario: 'Compare: "O professor é cansado" (predicado nominal, verbo de ligação) x "O professor chegou cansado" (verbo-nominal).',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 22. Orações coordenadas ===== */
    {
      codigo: 'QP-COR-001', topico: 'oracoes-coordenadas', dificuldade: 'facil',
      estilo: 'Inédita — estilo VUNESP', banca: 'VUNESP (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Em "Estudou muito, mas não revisou a matéria", a segunda oração classifica-se como coordenada sindética',
      alternativas: ['aditiva', 'adversativa', 'alternativa', 'conclusiva', 'explicativa'],
      correta: 1,
      explicacao: 'A conjunção "mas" introduz oposição: coordenada sindética adversativa.',
      comentario: 'Adversativas: mas, porém, contudo, todavia, entretanto, no entanto.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-COR-002', topico: 'oracoes-coordenadas', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo FGV', banca: 'FGV (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Em "Ele não estuda, nem trabalha", a conjunção "nem" introduz oração coordenada sindética',
      alternativas: [
        'adversativa',
        'aditiva (negativa)',
        'alternativa',
        'conclusiva',
        'explicativa'
      ],
      correta: 1,
      explicacao: '"Nem" equivale a "e não", somando duas negações: aditiva negativa.',
      comentario: 'Outras aditivas: e, também, ainda, não só... mas também.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-COR-003', topico: 'oracoes-coordenadas', dificuldade: 'dificil',
      estilo: 'Inédita — estilo CEBRASPE', banca: 'CEBRASPE (formato)', concurso: 'Simulado geral',
      tipo: 'certo_errado',
      enunciado: 'Julgue o item: em "Estudou muito; portanto, foi aprovado", a oração introduzida por "portanto" é coordenada sindética conclusiva, e a substituição por "pois" deslocado após o verbo manteria o mesmo valor semântico.',
      alternativas: ['Certo', 'Errado'],
      correta: 0,
      explicacao: 'Correto. "Portanto" e "pois" posposto ao verbo têm valor conclusivo.',
      comentario: 'A posição de "pois" importa: antes do verbo é explicativo ("Estude, pois a prova é difícil"); depois, conclusivo ("Estudou; passou, pois").',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 23. Orações subordinadas ===== */
    {
      codigo: 'QP-SUBO-001', topico: 'oracoes-subordinadas', dificuldade: 'facil',
      estilo: 'Inédita — estilo FCC', banca: 'FCC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Em "É necessário que o candidato revise o conteúdo", a oração destacada é subordinada substantiva',
      alternativas: ['objetiva direta', 'subjetiva', 'predicativa', 'apositiva', 'completiva nominal'],
      correta: 1,
      explicacao: 'A oração exerce a função de sujeito do verbo "é": subordinada substantiva subjetiva.',
      comentario: 'Teste: "É necessário ISSO" — a oração substitui o sujeito da oração principal.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-SUBO-002', topico: 'oracoes-subordinadas', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo VUNESP', banca: 'VUNESP (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Em "Caso o edital mude, todos serão comunicados", a oração destacada é subordinada adverbial',
      alternativas: ['causal', 'condicional', 'concessiva', 'consecutiva', 'temporal'],
      correta: 1,
      explicacao: '"Caso" introduz hipótese: oração subordinada adverbial condicional.',
      comentario: 'Condicionais: se, caso, desde que, contanto que, salvo se, a menos que.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-SUBO-003', topico: 'oracoes-subordinadas', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo IBFC', banca: 'IBFC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a alternativa em que a oração subordinada é adjetiva explicativa.',
      alternativas: [
        'O aluno que estudou passou.',
        'O aluno, que estudou, passou.',
        'Espero que você estude.',
        'Embora estude, não passa.',
        'Estudou tanto que passou.'
      ],
      correta: 1,
      explicacao: 'Com vírgulas, a oração adjetiva passa a explicar o antecedente de forma ampla: "O aluno, que estudou, passou" (todos estudaram).',
      comentario: 'A é restritiva. C é substantiva objetiva. D é adverbial concessiva. E é adverbial consecutiva.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 24. Vozes verbais ===== */
    {
      codigo: 'QP-VOZ-001', topico: 'vozes-verbais', dificuldade: 'facil',
      estilo: 'Inédita — estilo FCC', banca: 'FCC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Transpondo "A banca elaborou duas questões novas" para a voz passiva analítica, obtém-se',
      alternativas: [
        'Duas questões novas foram elaboradas pela banca.',
        'Elaborou-se duas questões novas pela banca.',
        'Duas questões novas elaboraram pela banca.',
        'A banca foi elaborada por duas questões novas.',
        'Foram elaborado duas questões novas pela banca.'
      ],
      correta: 0,
      explicacao: 'Objeto direto vira sujeito paciente, o verbo passa a "ser + particípio" e o sujeito da ativa vira agente da passiva.',
      comentario: 'B é tentativa de passiva sintética mesclada. E erra a concordância do particípio.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-VOZ-002', topico: 'vozes-verbais', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo VUNESP', banca: 'VUNESP (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a alternativa em que o verbo NÃO admite transformação para a voz passiva.',
      alternativas: ['O fiscal aplicou a prova.', 'A banca divulgou o gabarito.', 'O candidato dormiu cedo.', 'O aluno entregou o trabalho.', 'A comissão julgou o recurso.'],
      correta: 2,
      explicacao: '"Dormir" é verbo intransitivo (sem objeto direto), portanto não admite voz passiva.',
      comentario: 'Somente verbos transitivos diretos (ou diretos e indiretos) aceitam transformação para a passiva.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-VOZ-003', topico: 'vozes-verbais', dificuldade: 'dificil',
      estilo: 'Inédita — estilo CEBRASPE', banca: 'CEBRASPE (formato)', concurso: 'Simulado geral',
      tipo: 'certo_errado',
      enunciado: 'Julgue o item: em "Vendem-se apartamentos mobiliados", a partícula "se" é apassivadora e o verbo concorda com o sujeito paciente "apartamentos mobiliados".',
      alternativas: ['Certo', 'Errado'],
      correta: 0,
      explicacao: 'Correto. "Vender" é VTD; o "se" é apassivadora e o sujeito paciente está no plural, exigindo verbo no plural.',
      comentario: 'Teste: "Apartamentos mobiliados são vendidos" — a passiva analítica confirma a análise.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 25. Coesão e coerência ===== */
    {
      codigo: 'QP-COE-001', topico: 'coesao-coerencia', dificuldade: 'facil',
      estilo: 'Inédita — estilo IBFC', banca: 'IBFC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Em "O estudante revisou o conteúdo. Ele queria garantir a aprovação", o pronome "Ele" constitui mecanismo de coesão',
      alternativas: ['referencial anafórico', 'referencial catafórico', 'lexical por sinonímia', 'sequencial conclusivo', 'sequencial adversativo'],
      correta: 0,
      explicacao: 'O pronome retoma um termo já mencionado: anáfora.',
      comentario: 'Catáfora seria antecipar: "Eis o problema: falta tempo".',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-COE-002', topico: 'coesao-coerencia', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo FGV', banca: 'FGV (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a alternativa em que o conectivo foi substituído mantendo-se a relação de sentido original de "Estudou muito, portanto foi aprovado".',
      alternativas: [
        'Estudou muito, porque foi aprovado.',
        'Estudou muito, logo foi aprovado.',
        'Estudou muito, embora fosse aprovado.',
        'Estudou muito, caso fosse aprovado.',
        'Estudou muito, ou foi aprovado.'
      ],
      correta: 1,
      explicacao: '"Logo" é conclusiva, como "portanto": mantém a relação de consequência.',
      comentario: 'A inverte a relação; C, D e E mudam a natureza semântica (concessão, condição, alternativa).',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-COE-003', topico: 'coesao-coerencia', dificuldade: 'dificil',
      estilo: 'Inédita — estilo CEBRASPE', banca: 'CEBRASPE (formato)', concurso: 'Simulado geral',
      tipo: 'certo_errado',
      textoBase: 'O sapato comeu a prova; portanto, a nota foi boa, pois o edital era azul.',
      enunciado: 'Julgue o item: no período, há elementos coesivos explícitos, mas o enunciado é incoerente, pois as relações lógico-semânticas estabelecidas são arbitrárias.',
      alternativas: ['Certo', 'Errado'],
      correta: 0,
      explicacao: 'Correto. Existem conectivos ("portanto", "pois"), mas as relações de sentido não se sustentam — é coesão sem coerência.',
      comentario: 'A questão ilustra a distinção conceitual: coesão é mecanismo formal; coerência é a construção de sentido.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 26. Semântica ===== */
    {
      codigo: 'QP-SEM-001', topico: 'semantica', dificuldade: 'facil',
      estilo: 'Inédita — estilo VUNESP', banca: 'VUNESP (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Em "O candidato foi eminente na apresentação", a palavra "eminente" tem o sentido de',
      alternativas: [
        'que está por acontecer.',
        'que se destaca, notável.',
        'que é iminente e perigoso.',
        'que é medíocre.',
        'que está ausente.'
      ],
      correta: 1,
      explicacao: '"Eminente" significa elevado, distinto, notável. "Iminente" significa que está prestes a acontecer.',
      comentario: 'Parônimos de prova: eminente/iminente, deferir/diferir, ratificar/retificar, descrição/discrição.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-SEM-002', topico: 'semantica', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo FCC', banca: 'FCC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a alternativa em que o termo destacado foi empregado em sentido conotativo.',
      alternativas: [
        'A pedra é dura.',
        'O edital tem dezenove páginas.',
        'A prova foi um monstro.',
        'O candidato entregou a caneta.',
        'A sala tem trinta carteiras.'
      ],
      correta: 2,
      explicacao: 'Em "A prova foi um monstro", "monstro" é usado em sentido figurado (metáfora) para indicar algo muito difícil: conotação.',
      comentario: 'As demais alternativas usam sentido literal, dicionarizado (denotação).',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-SEM-003', topico: 'semantica', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo IBFC', banca: 'IBFC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a alternativa que apresenta ambiguidade.',
      alternativas: [
        'O diretor avisou que a reunião foi cancelada.',
        'Ele viu o filho do amigo e pegou seu livro.',
        'A reunião, segundo o diretor, foi cancelada.',
        'Todos os candidatos compareceram pontualmente.',
        'A prova foi aplicada em duas salas.'
      ],
      correta: 1,
      explicacao: 'O pronome possessivo "seu" pode referir-se ao filho do amigo ou a "ele" — ambiguidade referencial.',
      comentario: 'Solução: substituir por "o livro dele" ou explicitar o possuidor.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 27. Figuras de linguagem ===== */
    {
      codigo: 'QP-FIG-001', topico: 'figuras-de-linguagem', dificuldade: 'facil',
      estilo: 'Inédita — estilo FCC', banca: 'FCC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Em "Li Machado de Assis durante as férias", ocorre a figura de linguagem denominada',
      alternativas: ['metáfora', 'metonímia', 'hipérbole', 'eufemismo', 'antítese'],
      correta: 1,
      explicacao: 'A substituição do autor pela obra é metonímia (relação de proximidade).',
      comentario: 'Outros casos de metonímia: parte pelo todo, continente pelo conteúdo, marca pelo produto.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-FIG-002', topico: 'figuras-de-linguagem', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo VUNESP', banca: 'VUNESP (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a alternativa que contém uma hipérbole.',
      alternativas: [
        'Já falei isso mil vezes.',
        'Ele nos deixou ontem à noite.',
        'O edital gritava por atenção.',
        'Estudar é construir um alicerce.',
        'Quem conta um conto aumenta um ponto.'
      ],
      correta: 0,
      explicacao: '"Mil vezes" é exagero intencional: hipérbole.',
      comentario: 'B: eufemismo (morreu). C: personificação. D: metáfora. E: paronomásia.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-FIG-003', topico: 'figuras-de-linguagem', dificuldade: 'dificil',
      estilo: 'Inédita — estilo CEBRASPE', banca: 'CEBRASPE (formato)', concurso: 'Simulado geral',
      tipo: 'certo_errado',
      enunciado: 'Julgue o item: em "braço da cadeira", ocorre catacrese, isto é, uma metáfora já cristalizada pelo uso, sem consciência expressiva do falante.',
      alternativas: ['Certo', 'Errado'],
      correta: 0,
      explicacao: 'Correto. Catacrese é a metáfora fossilizada, usada por falta de termo próprio.',
      comentario: 'Outros exemplos: pé da mesa, leito do rio, cabeça de alho, embarcar no avião.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 28. Reescrita de frases ===== */
    {
      codigo: 'QP-REE-001', topico: 'reescrita-de-frases', dificuldade: 'facil',
      estilo: 'Inédita — estilo FGV', banca: 'FGV (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a reescrita que mantém o sentido e a correção do original: "Embora estudasse, o candidato não foi aprovado."',
      alternativas: [
        'Ainda que estudasse, o candidato não foi aprovado.',
        'Porque estudasse, o candidato não foi aprovado.',
        'Portanto estudasse, o candidato não foi aprovado.',
        'Caso estudasse, o candidato não foi aprovado.',
        'À medida que estudasse, o candidato não foi aprovado.'
      ],
      correta: 0,
      explicacao: '"Ainda que" é concessiva, como "embora", e exige subjuntivo: mantém sentido e correção.',
      comentario: 'As demais alteram a relação semântica para causa, conclusão, condição ou proporção.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-REE-002', topico: 'reescrita-de-frases', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo FCC', banca: 'FCC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a reescrita INCORRETA do ponto de vista gramatical.',
      alternativas: [
        'O aluno estudioso passa. → O aluno que estuda passa.',
        'Ao terminar a prova, saiu. → Quando terminou a prova, saiu.',
        'A banca divulgou o gabarito. → O gabarito foi divulgado pela banca.',
        'Faz dois anos que estudei. → Fazem dois anos que estudei.',
        'Ele resolveu o problema rapidamente. → Rapidamente, ele resolveu o problema.'
      ],
      correta: 3,
      explicacao: '"Fazer" indicando tempo é impessoal e permanece no singular: "Faz dois anos". A reescrita com "fazem" é incorreta.',
      comentario: 'As demais reescritas preservam sentido e correção (adjetivo↔oração adjetiva, reduzida↔desenvolvida, ativa↔passiva, deslocamento com pontuação).',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-REE-003', topico: 'reescrita-de-frases', dificuldade: 'dificil',
      estilo: 'Inédita — estilo CEBRASPE', banca: 'CEBRASPE (formato)', concurso: 'Simulado geral',
      tipo: 'certo_errado',
      enunciado: 'Julgue o item: a substituição de "porque" por "portanto" em "O candidato foi reprovado porque não revisou o conteúdo" preserva o sentido original do período.',
      alternativas: ['Certo', 'Errado'],
      correta: 1,
      explicacao: 'Errado. "Porque" introduz causa; "portanto" introduz conclusão. A troca INVERTE a relação lógica, alterando o sentido.',
      comentario: 'Reescrever exige preservar a relação semântica, não apenas a correção gramatical — trocar causa por conclusão produz erro de sentido.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 29. Redação oficial ===== */
    {
      codigo: 'QP-RDO-001', topico: 'redacao-oficial', dificuldade: 'facil',
      estilo: 'Inédita — estilo VUNESP', banca: 'VUNESP (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'São atributos da redação oficial, EXCETO',
      alternativas: [
        'clareza e precisão',
        'impessoalidade',
        'concisão',
        'uso de linguagem figurada e superlativos',
        'formalidade e padronização'
      ],
      correta: 3,
      explicacao: 'A redação oficial exige objetividade; linguagem figurada, superlativos e adjetivação excessiva são incompatíveis com seus atributos.',
      comentario: 'Os atributos clássicos: clareza, precisão, objetividade, concisão, coesão, coerência, formalidade, padronização, impessoalidade e uso da norma padrão.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-RDO-002', topico: 'redacao-oficial', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo FCC', banca: 'FCC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'O fecho adequado para comunicação dirigida a autoridade de hierarquia superior é',
      alternativas: ['Atenciosamente', 'Respeitosamente', 'Cordialmente', 'Abraços', 'Sem fecho'],
      correta: 1,
      explicacao: 'Para autoridade superior, usa-se "Respeitosamente"; para autoridade de mesma hierarquia, "Atenciosamente".',
      comentario: 'Além dos fechos, o endereçamento e o pronome de tratamento devem refletir a hierarquia.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-RDO-003', topico: 'redacao-oficial', dificuldade: 'dificil',
      estilo: 'Inédita — estilo CEBRASPE', banca: 'CEBRASPE (formato)', concurso: 'Simulado geral',
      tipo: 'certo_errado',
      enunciado: 'Julgue o item: no padrão ofício, o local e a data devem aparecer alinhados à direita, e o assunto deve ser apresentado em uma linha, resumindo o teor do documento.',
      alternativas: ['Certo', 'Errado'],
      correta: 0,
      explicacao: 'Correto. O padrão ofício prevê local e data alinhados à direita e assunto em uma linha, logo após o endereçamento.',
      comentario: 'Estrutura: número/sigla, local e data, endereçamento, assunto, texto, fecho, identificação do signatário.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== 30. Correspondência oficial ===== */
    {
      codigo: 'QP-CEO-001', topico: 'correspondencia-oficial', dificuldade: 'facil',
      estilo: 'Inédita — estilo IBFC', banca: 'IBFC (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'O documento utilizado para comunicação interna entre unidades de um mesmo órgão é o',
      alternativas: ['ofício', 'memorando', 'requerimento', 'parecer', 'edital'],
      correta: 1,
      explicacao: 'O memorando é o expediente de comunicação interna; o ofício é usado para comunicação externa.',
      comentario: 'Ambos seguem o padrão ofício, diferindo quanto ao circuito (interno x externo).',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-CEO-002', topico: 'correspondencia-oficial', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo FGV', banca: 'FGV (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Sobre a ata, é correto afirmar que',
      alternativas: [
        'deve ser redigida em tópicos, com parágrafos curtos.',
        'admite espaços em branco para preenchimento posterior.',
        'é redigida em texto corrido, sem parágrafos, com verbos no pretérito.',
        'não registra data, local ou participantes.',
        'dispensa assinatura dos presentes.'
      ],
      correta: 2,
      explicacao: 'A ata registra o ocorrido em texto corrido, sem parágrafos nem claros de preenchimento, usando verbos no pretérito.',
      comentario: 'Erros comuns: usar tópicos, deixar espaços em branco, omitir dados essenciais.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-CEO-003', topico: 'correspondencia-oficial', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo VUNESP', banca: 'VUNESP (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a alternativa que apresenta formulação inadequada para uma comunicação oficial.',
      alternativas: [
        'Solicito o envio do cronograma atualizado.',
        'Encaminho o expediente para providências.',
        'Venho por meio desta informar que o prazo terminou.',
        'Informo que o prazo para recursos se encerrou.',
        'Encaminho, para análise, o relatório de atividades.'
      ],
      correta: 2,
      explicacao: '"Venho por meio desta" é fórmula vazia (prolixidade), desaconselhada pela boa redação oficial: basta "Informo que...".',
      comentario: 'A concisão recomenda eliminar expressões dispensáveis como "venho por meio desta", "tenho a honra de", "cumpre-me informar".',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },

    /* ===== Questões adicionais de revisão (temas transversais) ===== */
    {
      codigo: 'QP-INT-004', topico: 'interpretacao-textos', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo FGV', banca: 'FGV (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      textoBase: 'Ainda que o acesso à internet tenha se ampliado, a qualidade do uso permanece desigual: estar conectado não significa saber pesquisar, verificar fontes e produzir informação confiável.',
      enunciado: 'A ideia central do texto é:',
      alternativas: [
        'o acesso à internet ainda é pequeno no país.',
        'a conexão à internet é suficiente para garantir informação de qualidade.',
        'a ampliação do acesso não elimina a desigualdade na qualidade do uso da internet.',
        'não há diferença entre estar conectado e saber usar a internet.',
        'produzir informação confiável é impossível sem internet.'
      ],
      correta: 2,
      explicacao: 'O texto contrapõe ampliação do acesso ("ainda que... tenha se ampliado") à permanência da desigualdade qualitativa ("a qualidade do uso permanece desigual").',
      comentario: 'A nega o que o texto concede. B contradiz a tese. D ignora a oposição explícita estabelecida pelo autor. E é extrapolação.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-PON-004', topico: 'pontuacao', dificuldade: 'dificil',
      estilo: 'Inédita — estilo CEBRASPE', banca: 'CEBRASPE (formato)', concurso: 'Simulado geral',
      tipo: 'certo_errado',
      enunciado: 'Julgue o item: em "O candidato, que não havia estudado, foi reprovado", as vírgulas poderiam ser suprimidas sem prejuízo da correção gramatical e do sentido original.',
      alternativas: ['Certo', 'Errado'],
      correta: 1,
      explicacao: 'Errado. A supressão das vírgulas transformaria a oração adjetiva explicativa em restritiva, alterando o sentido: passaria a indicar que apenas o candidato que não estudou foi reprovado.',
      comentario: 'Correção gramatical e sentido caminham juntos em pontuação: aqui a mudança é semântica, não meramente estilística.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    },
    {
      codigo: 'QP-CVB-004', topico: 'concordancia-verbal', dificuldade: 'intermediario',
      estilo: 'Inédita — estilo VUNESP', banca: 'VUNESP (formato)', concurso: 'Simulado geral',
      tipo: 'multipla',
      enunciado: 'Assinale a alternativa em que a concordância está correta.',
      alternativas: [
        'Devem haver soluções possíveis para o caso.',
        'Deve haver soluções possíveis para o caso.',
        'Houveram manifestações contra o edital.',
        'Fazem cinco anos que o concurso foi realizado.',
        'Existe muitas dúvidas sobre o gabarito.'
      ],
      correta: 1,
      explicacao: 'O verbo "haver" no sentido de existir é impessoal, e essa impessoalidade contamina o auxiliar: "Deve haver soluções".',
      comentario: 'C, D e E: haver e fazer impessoais devem ficar no singular, e existir flexiona.',
      origem: 'Questão inédita, elaborada para esta plataforma.'
    }
  ]
});
