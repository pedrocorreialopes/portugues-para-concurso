/* Conteúdo programático — módulos 21 a 30 */
window.PPC = window.PPC || {};
window.PPC.registerData({
  modules: [
    /* ================= 21 ================= */
    {
      slug: 'termos-da-oracao',
      numero: 21,
      titulo: 'Termos da oração',
      grupo: 'Sintaxe',
      resumo: 'Termos essenciais, integrantes e acessórios, com métodos de identificação e casos polêmicos.',
      tags: ['sujeito', 'predicado', 'objeto', 'aposto', 'adjunto'],
      introducao: 'Classificar termos é mais do que dar nome às coisas: é entender quem faz o quê, para quem e em que circunstância. A banca cobra essencialmente sujeito, objeto direto/indireto, predicativo, complemento nominal e adjunto adnominal.',
      secoes: [
        {
          id: 'essenciais',
          titulo: 'Termos essenciais: sujeito e predicado',
          html: '<p><strong>Sujeito</strong> — tipos:</p><ul>' +
            '<li><strong>Simples:</strong> um núcleo. "O candidato estudou."</li>' +
            '<li><strong>Composto:</strong> dois ou mais núcleos. "O professor e o aluno conversaram."</li>' +
            '<li><strong>Oculto/elíptico:</strong> identificado pela desinência. "Estudamos muito." (nós)</li>' +
            '<li><strong>Indeterminado:</strong> não se identifica (3ª pessoa do plural sem sujeito expresso, ou VTI + se). "Disseram que a prova mudou." / "Precisa-se de fiscais."</li>' +
            '<li><strong>Inexistente:</strong> oração sem sujeito (haver, fazer, ser com hora/dia, fenômenos naturais). "Havia muitos candidatos."</li></ul>' +
            '<p><strong>Predicado</strong> — tipos:</p><ul>' +
            '<li><strong>Verbal:</strong> núcleo é verbo significativo. "Ele estudou."</li>' +
            '<li><strong>Nominal:</strong> núcleo é nome (predicativo), verbo de ligação. "Ele está calmo."</li>' +
            '<li><strong>Verbo-nominal:</strong> verbo significativo + predicativo. "Ele chegou cansado."</li></ul>'
        },
        {
          id: 'integrantes',
          titulo: 'Termos integrantes',
          html: '<table class="tbl"><thead><tr><th>Termo</th><th>Completa</th><th>Marca</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td>Objeto direto</td><td>verbo</td><td>sem preposição obrigatória</td><td>Comprei <em>o livro</em>.</td></tr>' +
            '<tr><td>Objeto indireto</td><td>verbo</td><td>com preposição</td><td>Gosto <em>de música</em>.</td></tr>' +
            '<tr><td>Complemento nominal</td><td>nome (subst./adj./adv.)</td><td>com preposição</td><td>obediência <em>às regras</em></td></tr>' +
            '<tr><td>Agente da passiva</td><td>verbo na passiva</td><td>por/de + agente</td><td>a prova foi feita <em>pela banca</em></td></tr>' +
            '</tbody></table>' +
            '<div class="info-box box-warn"><h4>A confusão mais comum</h4><p>"Amor <em>à</em> família": completa um substantivo abstrato e indica o alvo — <strong>complemento nominal</strong>. "Amor <em>materno</em>": caracteriza o substantivo — <strong>adjunto adnominal</strong>. Teste: o termo é agente/possuidor/qualificador? Adjunto. É alvo/paciente de um nome abstrato? Complemento nominal.</p></div>'
        },
        {
          id: 'acessorios',
          titulo: 'Termos acessórios',
          html: '<ul>' +
            '<li><strong>Adjunto adnominal:</strong> artigo, adjetivo, pronome adjetivo, numeral, locução adjetiva — caracteriza ou determina um substantivo. "Meus dois melhores amigos."</li>' +
            '<li><strong>Adjunto adverbial:</strong> circunstância do verbo (ou de outro termo). "Estudou <em>ontem</em>, <em>no quarto</em>, <em>calmamente</em>."</li>' +
            '<li><strong>Aposto:</strong> explica, resume, enumera, especifica. "Éramos três: <em>Ana, Bia e eu</em>."</li>' +
            '<li><strong>Vocativo:</strong> chama o interlocutor. "<em>Candidatos</em>, silêncio."</li>' +
            '</ul>' +
            '<p><strong>Tipos de aposto:</strong> explicativo (com vírgula), especificativo (sem vírgula — "o rio Amazonas"), enumerativo, resumitivo ("Tudo — saúde, tempo, dinheiro — desapareceu").</p>'
        },
        {
          id: 'casos-polemicos',
          titulo: 'Casos polêmicos que valem ponto',
          html: '<ul>' +
            '<li><strong>Predicativo x adjunto adnominal:</strong> "O aluno é atento" (predicativo, com verbo de ligação) x "O aluno atento passou" (adjunto adnominal, sem verbo de ligação).</li>' +
            '<li><strong>Objeto direto preposicionado:</strong> "Amar <em>a</em> Deus", "cumprir <em>com</em> o dever" — usa-se preposição por ênfase ou norma.</li>' +
            '<li><strong>Objeto direto pleonástico:</strong> "As provas, eu as fiz ontem" — pronome retoma o objeto.</li>' +
            '<li><strong>Complemento nominal x objeto indireto:</strong> depende do termo regido: nome (CN) ou verbo (OI).</li>' +
            '<li><strong>Adjunto adnominal com preposição:</strong> "a casa <em>de madeira</em>" (qualifica) x "a construção <em>da casa</em>" (complementa nome abstrato de ação → CN).</li>' +
            '</ul>'
        }
      ],
      exemplos: [
        { frase: 'O medo do fracasso impede a ação.', nota: 'Sujeito: "O medo do fracasso". Objeto direto: "a ação".' },
        { frase: 'Choveram reclamações contra o edital.', nota: 'Sujeito: "reclamações" (verbo figurado, com sujeito).' },
        { frase: 'Aos alunos, coube estudar.', nota: 'Objeto indireto deslocado: aos alunos. Sujeito: estudar.' },
        { frase: 'Ele é um estudante dedicado.', nota: 'Predicado nominal: verbo de ligação + predicativo do sujeito.' }
      ],
      regras: [
        'Sujeito nunca tem preposição.',
        'Predicativo liga-se ao sujeito/objeto por verbo de ligação ou verbo significativo.',
        'Complemento nominal completa nome; objeto indireto completa verbo.',
        'Aposto explicativo com vírgula; especificativo sem vírgula.',
        'Agente da passiva só existe em voz passiva.'
      ],
      dicas: [
        'Encontre o verbo, pergunte "quem/o quê" e não aceite respostas preposicionadas como sujeito.',
        'Teste de troca: se o termo pede "a isso" ao nome, é complemento nominal.',
        'Em "chegou cansado", o predicativo refere-se ao sujeito e ambos concordam.'
      ],
      erros: [
        { errado: 'Classificar "de madeira" como complemento nominal.', certo: 'É adjunto adnominal (caracteriza).', porque: 'Não completa nome abstrato de ação.' },
        { errado: 'Ver sujeito em "Havia alunos".', certo: 'Oração sem sujeito.', porque: 'haver (existir) é impessoal.' }
      ],
      resumoFinal: [
        'Essenciais: sujeito e predicado.',
        'Integrantes: objetos, complemento nominal, agente da passiva.',
        'Acessórios: adjuntos, aposto, vocativo.',
        'O teste do nome abstrato separa CN de ADN.'
      ]
    },

    /* ================= 22 ================= */
    {
      slug: 'oracoes-coordenadas',
      numero: 22,
      titulo: 'Orações coordenadas',
      grupo: 'Sintaxe',
      resumo: 'Assindéticas e sindéticas: aditiva, adversativa, alternativa, conclusiva e explicativa.',
      tags: ['coordenação', 'conjunção', 'período composto'],
      introducao: 'Orações coordenadas são independentes sintaticamente: nenhuma exerce função na outra. O que as une é o sentido e a conjunção coordenativa. Classificar bem as conjunções é essencial tanto em questões de sintaxe quanto de pontuação e reescrita.',
      secoes: [
        {
          id: 'tipos',
          titulo: 'Coordenadas sindéticas e assindéticas',
          html: '<p><strong>Assindéticas:</strong> sem conjunção. "Chegou, sentou, pediu silêncio."<br><strong>Sindéticas:</strong> com conjunção — cinco tipos.</p>' +
            '<table class="tbl"><thead><tr><th>Tipo</th><th>Conjunções</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td><strong>Aditiva</strong></td><td>e, nem, também, ainda, não só... mas também</td><td>Estudou <em>e</em> passou.</td></tr>' +
            '<tr><td><strong>Adversativa</strong></td><td>mas, porém, contudo, todavia, entretanto, no entanto, senão</td><td>Estudou, <em>mas</em> foi reprovado.</td></tr>' +
            '<tr><td><strong>Alternativa</strong></td><td>ou, ora...ora, quer...quer, seja...seja</td><td><em>Ou</em> estuda, <em>ou</em> não será aprovado.</td></tr>' +
            '<tr><td><strong>Conclusiva</strong></td><td>logo, portanto, por isso, assim, então, pois (após o verbo)</td><td>Estudou muito; <em>portanto</em>, passou.</td></tr>' +
            '<tr><td><strong>Explicativa</strong></td><td>que, porque, pois (antes do verbo), já que</td><td>Não vai à festa, <em>porque</em> estuda.</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'pontuacao-coordenadas',
          titulo: 'Pontuação nas coordenadas',
          html: '<ul>' +
            '<li><strong>Aditivas:</strong> vírgula antes de "e" só em enumeração longa ou mudança de sujeito. "O professor chegou, e todos se calaram."</li>' +
            '<li><strong>Adversativas:</strong> vírgula obrigatória. "Estudou, mas não revisou."</li>' +
            '<li><strong>Alternativas:</strong> vírgula obrigatória entre elas. "Ou se dedica, ou desiste."</li>' +
            '<li><strong>Conclusivas:</strong> sempre depois de ponto e vírgula ou vírgula. "Estudou; logo passará."</li>' +
            '<li><strong>Explicativas:</strong> vírgula obrigatória antes. "Venha cedo, que a fila é grande."</li>' +
            '</ul>' +
            '<div class="info-box box-tip"><h4>Diferença decisiva</h4><p><strong>Conclusiva x explicativa:</strong> "Saiu cedo, <em>portanto</em> chegou antes" (conclusão) x "Saiu cedo, <em>porque</em> tem exame" (explicação da causa). E note: "porque" introduz causa; "pois" antes do verbo é explicativo, depois do verbo é conclusivo.</p></div>'
        },
        {
          id: 'esquecer',
          titulo: 'Casos que confundem',
          html: '<ul>' +
            '<li><strong>"E" com valor adversativo:</strong> "Estudou muito e não passou." Aqui "e" = mas.</li>' +
            '<li><strong>"Nem"</strong> como aditiva negativa: "Não estuda nem trabalha."</li>' +
            '<li><strong>"Que" explicativo:</strong> "Vamos, que o tempo é curto."</li>' +
            '<li><strong>"Se" alternativo x condicional:</strong> "Se ele vem, se ele não vem, nada muda" (orações coordenadas alternativas, raro) x "Se ele vier, avise" (condicional).</li>' +
            '</ul>'
        },
        {
          id: 'reescrita-coordenadas',
          titulo: 'Reescrita e coordenação',
          html: '<p>Muitas questões pedem reescrever mantendo o sentido. Ao trocar conjunções coordenativas, verifique:</p>' +
            '<ol><li>A nova conjunção exige subjuntivo? (Ex.: "mesmo que" — subordinação)</li>' +
              '<li>A ordem dos termos foi alterada? ("porém" pode vir no início da segunda oração com vírgula depois.)</li>' +
              '<li>A pontuação acompanhou? (Toda adversativa deslocada exige isolamento.)</li></ol>' +
            '<div class="info-box box-example"><h4>Equivalências</h4><p>mas = porém = contudo = todavia = entretanto = no entanto.<br>portanto = logo = assim = por isso = por conseguinte.<br>porque = pois (antes do verbo) = já que = uma vez que.</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Ele não estuda, nem trabalha.', nota: 'Aditiva negativa: nem = e não.' },
        { frase: 'Estudou, porém não revisou.', nota: 'Adversativa. Também: Não revisou; estudou, porém.' },
        { frase: 'Aproveite, que as vagas acabam.', nota: 'Explicativa: justifica o pedido.' },
        { frase: 'Ora estuda, ora procrastina.', nota: 'Alternativa.' }
      ],
      regras: [
        'Cinco tipos de coordenadas sindéticas.',
        'Adversativas exigem vírgula; aditivas normalmente não.',
        'pois antes do verbo: explicativo; depois: conclusivo.',
        'Las orações coordenadas são independentes sintaticamente.',
        'Algumas conjunções admitem deslocamento com isolamento por vírgulas.'
      ],
      dicas: [
        'Classifique pelo teste de sentido: soma, oposição, alternativa, conclusão ou explicação.',
        'Cuide da ordem de "pois".',
        'Ao trocar conjunção na reescrita, confira pontuação e modo verbal.'
      ],
      erros: [
        { errado: 'Chamar "portanto" de explicativa.', certo: 'É conclusiva.', porque: 'Indica consequência, não causa.' },
        { errado: 'Trocar "mas" por "embora" mantendo a vírgula.', certo: 'Embora é subordinativa concessiva e exige ajuste.', porque: 'Muda a estrutura do período.' }
      ],
      resumoFinal: [
        'Assindéticas (sem conjunção) e sindéticas (com conjunção).',
        'Aditiva, adversativa, alternativa, conclusiva, explicativa.',
        'Pontuação acompanha o tipo.',
        'Reescrita exige equivalência semântica e sintática.'
      ]
    },

    /* ================= 23 ================= */
    {
      slug: 'oracoes-subordinadas',
      numero: 23,
      titulo: 'Orações subordinadas',
      grupo: 'Sintaxe',
      resumo: 'Subordinadas substantivas, adjetivas e adverbiais, com funções e conjunções.',
      tags: ['subordinação', 'adjetiva', 'adverbial', 'substantiva'],
      introducao: 'Na subordinação, uma oração exerce função sintática na outra. São três grandes grupos: substantivas (função de nome), adjetivas (função de adjetivo) e adverbiais (função de advérbio). É o conteúdo mais cobrado em provas de sintaxe.',
      secoes: [
        {
          id: 'substantivas',
          titulo: 'Orações subordinadas substantivas',
          html: '<p>Exercem funções próprias de substantivo. Normalmente introduzidas por <strong>que</strong> (integrante) ou <strong>se</strong>.</p>' +
            '<table class="tbl"><thead><tr><th>Tipo</th><th>Função</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td>Subjetiva</td><td>sujeito</td><td><em>É fundamental que você revise</em>.</td></tr>' +
            '<tr><td>Objetiva direta</td><td>objeto direto</td><td>Espero <em>que ele venha</em>.</td></tr>' +
            '<tr><td>Objetiva indireta</td><td>objeto indireto</td><td>Necessitamos <em>de que haja calma</em>.</td></tr>' +
            '<tr><td>Completiva nominal</td><td>complemento nominal</td><td>Tenho certeza <em>de que ele vencerá</em>.</td></tr>' +
            '<tr><td>Predicativa</td><td>predicativo do sujeito</td><td>O problema é <em>que ninguém leu</em>.</td></tr>' +
            '<tr><td>Apositiva</td><td>aposto</td><td>Só peço isto: <em>que você descanse</em>.</td></tr>' +
            '</tbody></table>' +
            '<div class="info-box box-tip"><h4>Como identificar</h4><p>Se a oração pode ser trocada por "isso", é substantiva. "Espero <em>que ele venha</em>" → "Espero <em>isso</em>". A função vem do termo substituído.</p></div>'
        },
        {
          id: 'adjetivas',
          titulo: 'Orações subordinadas adjetivas',
          html: '<p>Funcionam como adjetivo, sempre introduzidas por pronome relativo (<em>que, quem, o qual, cujo, onde</em>). Modificam um antecedente.</p>' +
            '<ul><li><strong>Restritiva</strong> — sem vírgula; limita o antecedente. "Os alunos <em>que estudaram</em> passaram." (somente alguns)</li>' +
              '<li><strong>Explicativa</strong> — com vírgula; explica o antecedente integralmente. "Os alunos, <em>que estudaram</em>, passaram." (todos)</li></ul>' +
            '<div class="info-box box-warn"><h4>Cuidado</h4><p>Adjetiva explicativa admite troca por "pois" (valor causal): "O prefeito, que é honesto, foi reeleito" ≈ "O prefeito foi reeleito, pois é honesto". Isso não a torna adverbial — é uma explicativa com valor causal.</p></div>' +
            '<p><strong>Adjetiva sem antecedente expresso:</strong> "Quem estuda passa" — aqui a oração é substantiva (sujeito), não adjetiva.</p>'
        },
        {
          id: 'adverbiais',
          titulo: 'Orações subordinadas adverbiais',
          html: '<table class="tbl"><thead><tr><th>Tipo</th><th>Conjunções</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td>Causal</td><td>porque, pois, já que, uma vez que, como (início)</td><td>Faltou <em>porque estava doente</em>.</td></tr>' +
            '<tr><td>Consecutiva</td><td>tão...que, tal...que, tanto...que</td><td>Estudou tanto <em>que passou</em>.</td></tr>' +
            '<tr><td>Condicional</td><td>se, caso, desde que, contanto que, salvo se</td><td><em>Se estudar</em>, passará.</td></tr>' +
            '<tr><td>Concessiva</td><td>embora, ainda que, mesmo que, por mais que, se bem que</td><td><em>Embora estudasse</em>, não passou.</td></tr>' +
            '<tr><td>Comparativa</td><td>como, tal qual, mais...que, menos...que, tão...quanto</td><td>Estudou <em>como se fosse o último dia</em>.</td></tr>' +
            '<tr><td>Conformativa</td><td>conforme, como, segundo, consoante</td><td>Fez <em>conforme o edital exigia</em>.</td></tr>' +
            '<tr><td>Final</td><td>para que, a fim de que, porque (=para que)</td><td>Estudou <em>para que fosse aprovado</em>.</td></tr>' +
            '<tr><td>Proporcional</td><td>à medida que, à proporção que, quanto mais...mais</td><td><em>À medida que estudava</em>, ganhava confiança.</td></tr>' +
            '<tr><td>Temporal</td><td>quando, enquanto, assim que, depois que, logo que</td><td><em>Quando chegou</em>, todos aplaudiram.</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'distincoes',
          titulo: 'Distinções que derrubam candidatos',
          html: '<ul>' +
            '<li><strong>Causal x consecutiva:</strong> "Faltou porque estava doente" (causa) x "Ficou tão nervoso que faltou" (consequência).</li>' +
            '<li><strong>Causal x explicativa:</strong> "Não saiu porque chovia" (adverbial causal) x "Não saia, porque chove" (coordenada explicativa — justifica uma ordem).</li>' +
            '<li><strong>Concessiva x condicional:</strong> "Embora chova" (fato admitido), "Se chover" (hipótese).</li>' +
            '<li><strong>Final x causal:</strong> "para que" (finalidade) x "porque" (causa).</li>' +
            '<li><strong>Comparativa:</strong> tem verbo elíptico frequentemente ("Estudou como [estuda] um atleta").</li>' +
            '</ul>'
        },
        {
          id: 'reducao',
          titulo: 'Orações reduzidas',
          html: '<p>São reduzidas quando aparecem em forma nominal: infinitivo, gerúndio ou particípio — sem conjunção.</p>' +
            '<ul><li>Infinitivo: "Ao chegar, avisou" (temporal reduzida).</li>' +
              '<li>Gerúndio: "Estudando, passará" (condicional reduzida).</li>' +
              '<li>Particípio: "Terminada a prova, saiu" (temporal reduzida).</li></ul>' +
            '<div class="info-box box-example"><h4>Transformação</h4><p>"Ao receber o edital, o candidato organizou o cronograma." → "Quando recebeu o edital, o candidato organizou o cronograma." (reduzida → desenvolvida)</p></div>'
        }
      ],
      exemplos: [
        { frase: 'É necessário que o aluno leia mais.', nota: 'Subordinada substantiva subjetiva.' },
        { frase: 'O servidor que faltou foi advertido.', nota: 'Adjetiva restritiva (sem vírgula).' },
        { frase: 'Caso a prova mude, todos serão avisados.', nota: 'Adverbial condicional.' },
        { frase: 'Quanto mais estudava, mais confiante ficava.', nota: 'Adverbial proporcional correlata.' }
      ],
      regras: [
        'Substantiva: trocável por "isso".',
        'Adjetiva: introduzida por pronome relativo, com antecedente.',
        'Explicativa com vírgula; restritiva sem.',
        'Adverbial: nove tipos semânticos.',
        'Reduzidas não têm conjunção e ficam em forma nominal.'
      ],
      dicas: [
        'Substitua por "isso" para confirmar substantiva.',
        'Em adjetivas, a vírgula muda a referência — leia duas vezes.',
        'Classifique adverbiais pela pergunta: causa? condição? tempo? concessão?'
      ],
      erros: [
        { errado: 'Chamar de adjetiva a oração "Espero que venha".', certo: 'É substantiva objetiva direta.', porque: 'Substituível por "isso" e sem antecedente.' },
        { errado: 'Confundir concessiva com condicional.', certo: 'Concessiva admite fato contrário; condicional supõe hipótese.', porque: 'Embora ≠ se.' }
      ],
      resumoFinal: [
        'Três grupos: substantivas, adjetivas, adverbiais.',
        'Isso = substantiva; relativo + antecedente = adjetiva.',
        'Adverbiais exigem classificação semântica precisa.',
        'Reduzidas: infinitivo, gerúndio, particípio.'
      ]
    },

    /* ================= 24 ================= */
    {
      slug: 'vozes-verbais',
      numero: 24,
      titulo: 'Vozes verbais',
      grupo: 'Sintaxe',
      resumo: 'Voz ativa, passiva e reflexiva; transformação de vozes e agente da passiva.',
      tags: ['voz ativa', 'voz passiva', 'reflexiva', 'agente da passiva'],
      introducao: 'Voz verbal revela a relação entre verbo e sujeito: se o sujeito pratica, recebe ou pratica e recebe a ação. Questões de transformação de vozes aparecem em reescrita e em provas de reescrita oficial.',
      secoes: [
        {
          id: 'tres-vozes',
          titulo: 'As três vozes',
          html: '<table class="tbl"><thead><tr><th>Voz</th><th>Sujeito</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td><strong>Ativa</strong></td><td>agente</td><td>O fiscal <em>aplicou</em> a prova.</td></tr>' +
            '<tr><td><strong>Passiva analítica</strong></td><td>paciente</td><td>A prova <em>foi aplicada</em> pelo fiscal.</td></tr>' +
            '<tr><td><strong>Passiva sintética</strong></td><td>paciente</td><td><em>Aplicou-se</em> a prova.</td></tr>' +
            '<tr><td><strong>Reflexiva</strong></td><td>agente e paciente</td><td>O candidato <em>machucou-se</em>.</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'transformacao',
          titulo: 'Transformar ativa em passiva: passo a passo',
          html: '<ol>' +
            '<li>O objeto direto vira sujeito.</li>' +
            '<li>O verbo principal passa para o particípio, acompanhado de ser (ou estar/ficar).</li>' +
            '<li>O sujeito da ativa vira agente da passiva, com preposição por/de.</li>' +
            '<li>Confira a concordância do particípio com o novo sujeito.</li>' +
            '</ol>' +
            '<div class="info-box box-example"><h4>Exemplo completo</h4>' +
            '<p><strong>Ativa:</strong> A banca elaborou duas questões novas.</p>' +
            '<p><strong>Passiva:</strong> Duas questões novas <em>foram elaboradas</em> pela banca.</p>' +
            '<p><strong>Passiva sintética:</strong> Elaboraram-se duas questões novas.</p></div>' +
            '<p><strong>Restrições:</strong> só se transforma em passiva verbo transitivo direto (ou direto e indireto). Verbos intransitivos e de ligação não admitem.</p>'
        },
        {
          id: 'tempos-compostos',
          titulo: 'Voz passiva em todos os tempos',
          html: '<table class="tbl"><thead><tr><th>Tempo</th><th>Ativa</th><th>Passiva</th></tr></thead><tbody>' +
            '<tr><td>Presente</td><td>Ele revisa o texto.</td><td>O texto é revisado por ele.</td></tr>' +
            '<tr><td>Pret. perfeito</td><td>Ele revisou o texto.</td><td>O texto foi revisado por ele.</td></tr>' +
            '<tr><td>Pret. imperfeito</td><td>Ele revisava o texto.</td><td>O texto era revisado por ele.</td></tr>' +
            '<tr><td>Fut. presente</td><td>Ele revisará o texto.</td><td>O texto será revisado por ele.</td></tr>' +
            '<tr><td>Fut. pretérito</td><td>Ele revisaria o texto.</td><td>O texto seria revisado por ele.</td></tr>' +
            '<tr><td>Pret. perfeito composto</td><td>Ele tem revisado o texto.</td><td>O texto tem sido revisado por ele.</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'reflexiva',
          titulo: 'Voz reflexiva e recíproca',
          html: '<p><strong>Reflexiva:</strong> o sujeito pratica e recebe a ação — "Ele <em>feriu-se</em>". Pode ser enfática: "Ele <em>se</em> foi" (sem valor reflexivo real).</p>' +
            '<p><strong>Recíproca:</strong> ação mútua — "Os candidatos <em>cumprimentaram-se</em>". Admite reforço "um ao outro".</p>' +
            '<div class="info-box box-warn"><h4>Não confunda</h4><p>"Vendem-se casas" não é reflexiva: é passiva sintética (não há agente praticando sobre si). Aplique o teste da passiva analítica.</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Foram divulgadas as notas pela banca.', nota: 'Passiva analítica; sujeito paciente posposto: as notas.' },
        { frase: 'Divulgaram-se as notas.', nota: 'Passiva sintética; verbo concorda com "as notas".' },
        { frase: 'A empresa se modernizou.', nota: 'Voz reflexiva (o sujeito sofre a ação que pratica).' }
      ],
      regras: [
        'Passiva analítica: ser + particípio.',
        'Passiva sintética: VTD + se, com concordância.',
        'Agente da passiva com por/de.',
        'Só VTD aceita passiva.',
        'Reflexiva: sujeito agente e paciente.'
      ],
      dicas: [
        'Sempre confira o particípio: deve concordar com o novo sujeito.',
        'Na passiva sintética, o verbo concorda com o sujeito paciente.',
        'Em provas de reescrita, verifique se o agente da passiva é compatível com o sentido original.'
      ],
      erros: [
        { errado: 'Foram divulgado as notas.', certo: 'Foram divulgadas as notas.', porque: 'Particípio concorda com o sujeito paciente.' },
        { errado: 'Assistiram-se aos filmes (como passiva).', certo: 'Assistiu-se aos filmes (indeterminação).', porque: 'assistir = ver é VTI, não admite passiva.' }
      ],
      resumoFinal: [
        'Ativa: sujeito age. Passiva: sujeito recebe. Reflexiva: ambos.',
        'Só VTD admite transformação.',
        'Particípio concorda com o novo sujeito.',
        'se + VTI = indeterminação, não passiva.'
      ]
    },

    /* ================= 25 ================= */
    {
      slug: 'coesao-coerencia',
      numero: 25,
      titulo: 'Coesão e coerência',
      grupo: 'Textualidade',
      resumo: 'Mecanismos de coesão referencial e sequencial, conectivos e os fatores de coerência.',
      tags: ['coesão', 'coerência', 'conectivos', 'referência'],
      introducao: 'Coesão é a costura formal do texto (ligações entre palavras, frases, parágrafos). Coerência é a costura de sentido (não contradição, progressão, relevância). Um texto pode ter coesão sem coerência — e esse contraste é explorado em prova.',
      secoes: [
        {
          id: 'referencial',
          titulo: 'Coesão referencial',
          html: '<p>Retomada ou antecipação de termos:</p><ul>' +
            '<li><strong>Anáfora:</strong> retoma o que já foi dito — "O aluno estudou. <em>Ele</em> passou."</li>' +
            '<li><strong>Catáfora:</strong> antecipa o que virá — "<em>Eis o problema</em>: falta tempo."</li>' +
            '<li><strong>Elipse:</strong> omissão de termo recuperável — "Ele chegou e [ele] sentou."</li>' +
            '<li><strong>Substituição lexical:</strong> sinônimo, hiperônimo, nominalização — "A banca divulgou o resultado. A <em>instituição</em> também publicou o gabarito."</li>' +
            '<li><strong>Repetição:</strong> pode ser recurso expressivo ou problema de estilo.</li>' +
            '</ul>'
        },
        {
          id: 'sequencial',
          titulo: 'Coesão sequencial: os conectivos',
          html: '<table class="tbl"><thead><tr><th>Relação</th><th>Conectivos</th></tr></thead><tbody>' +
            '<tr><td>Adição</td><td>e, além disso, também, ainda, outrossim</td></tr>' +
            '<tr><td>Oposição</td><td>mas, porém, contudo, todavia, entretanto, no entanto</td></tr>' +
            '<tr><td>Causa</td><td>porque, pois, já que, uma vez que, porquanto</td></tr>' +
            '<tr><td>Consequência</td><td>portanto, logo, assim, por isso, consequentemente</td></tr>' +
            '<tr><td>Finalidade</td><td>para, a fim de, com o objetivo de</td></tr>' +
            '<tr><td>Condição</td><td>se, caso, desde que, contanto que</td></tr>' +
            '<tr><td>Concessão</td><td>embora, ainda que, apesar de, mesmo que</td></tr>' +
            '<tr><td>Tempo</td><td>quando, enquanto, antes, depois, logo que</td></tr>' +
            '<tr><td>Exemplificação</td><td>por exemplo, como, a exemplo de, tal como</td></tr>' +
            '<tr><td>Explicação</td><td>isto é, ou seja, vale dizer, a saber</td></tr>' +
            '<tr><td>Conclusão/síntese</td><td>em suma, em síntese, portanto, concluindo</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'coerencia',
          titulo: 'Fatores de coerência',
          html: '<ul>' +
            '<li><strong>Continuidade de sentido:</strong> o texto não se contradiz.</li>' +
            '<li><strong>Progressão:</strong> cada parágrafo acrescenta informação nova.</li>' +
            '<li><strong>Não contradição:</strong> dados incompatíveis quebram a coerência.</li>' +
            '<li><strong>Relação com o contexto:</strong> o texto deve fazer sentido na situação.</li>' +
            '<li><strong>Relevância:</strong> não fugir do tema.</li>' +
            '<li><strong>Informatividade adequada:</strong> nem óbvio demais, nem indecifrável.</li>' +
            '</ul>' +
            '<div class="info-box box-warn"><h4>Coesão não garante coerência</h4><p>"O sapato comeu a prova, portanto a nota foi boa, pois o edital era azul." — Há conectivos (portanto, pois), mas o sentido é absurdo: coesão sem coerência.</p></div>'
        },
        {
          id: 'aplicacao',
          titulo: 'Em provas: reescrita com conectivos',
          html: '<p>Ao substituir um conectivo, avalie quatro coisas:</p>' +
            '<ol><li>A relação semântica se mantém? (causa ≠ conclusão)</li>' +
            '<li>O modo verbal acompanha? (embora + subjuntivo)</li>' +
              '<li>A pontuação foi preservada?</li>' +
              '<li>O pronome/possessivo de referência muda?</li></ol>' +
            '<div class="info-box box-tip"><h4>Par mais confundido</h4><p>"porque" (causa) x "portanto" (consequência). Inverter muda o argumento: "Estudei porque queria passar" ≠ "Estudei; portanto, queria passar".</p></div>'
        }
      ],
      exemplos: [
        { frase: 'A lei foi aprovada. Esse dispositivo, porém, ainda carece de regulamentação.', nota: 'Coesão referencial (esse dispositivo) + sequencial (porém).' },
        { frase: 'Não havia tempo; além disso, faltavam recursos.', nota: 'Adição — soma de argumentos.' },
        { frase: 'Embora o prazo fosse curto, o candidato entregou tudo.', nota: 'Concessão: contraste com superação.' }
      ],
      regras: [
        'Coesão = ligação formal; coerência = ligação de sentido.',
        'Referência: anáfora, catáfora, elipse, substituição.',
        'Conectivos estabelecem relações lógico-semânticas.',
        'Trocar conectivo exige manter a relação original.',
        'Incoerência pode ocorrer mesmo com coesão perfeita.'
      ],
      dicas: [
        'Em reescrita, sublinhe a relação do conectivo original antes de trocar.',
        'Evite repetição excessiva; use hiperônimos.',
        'Cada parágrafo deve ter uma frase-chave — isso garante progressão.'
      ],
      erros: [
        { errado: 'Trocar "porque" por "portanto" mantendo o resto.', certo: 'Manter a relação causal.', porque: 'São relações inversas.' },
        { errado: 'Usar "embora" com indicativo.', certo: 'Embora + subjuntivo (embora estudasse).', porque: 'A conjunção concessiva exige subjuntivo.' }
      ],
      resumoFinal: [
        'Coesão é gramática/mecanismo; coerência é sentido.',
        'Anáfora retoma; catáfora antecipa.',
        'Conectivos devem manter a relação semântica.',
        'Progressão e não contradição sustentam a coerência.'
      ]
    },

    /* ================= 26 ================= */
    {
      slug: 'semantica',
      numero: 26,
      titulo: 'Semântica',
      grupo: 'Textualidade',
      resumo: 'Sinonímia, antonímia, homonímia, polissemia, denotação, conotação e ambiguidade.',
      tags: ['semântica', 'sinônimo', 'polissemia', 'ambiguidade'],
      introducao: 'Semântica estuda o significado. Em prova aparecem questões de substituição lexical, equivalência de sentido, julgamento de afirmações sobre sinônimos e ambiguidade. A palavra "equivalência" tem um sentido forte: deve manter sentido, gramática e nível de formalidade.',
      secoes: [
        {
          id: 'relacoes',
          titulo: 'Relações de sentido',
          html: '<table class="tbl"><thead><tr><th>Relação</th><th>Definição</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td><strong>Sinonímia</strong></td><td>sentido semelhante</td><td>casa/moradia; bom/ótimo</td></tr>' +
            '<tr><td><strong>Antonímia</strong></td><td>sentido oposto</td><td>claro/escuro; justo/injusto</td></tr>' +
            '<tr><td><strong>Homemímia</strong></td><td>mesma forma, sentidos diferentes</td><td>canto (ângulo) / canto (verbo)</td></tr>' +
            '<tr><td><strong>Paronímia</strong></td><td>formas parecidas, sentidos diferentes</td><td>eminente (alto) / iminente (próximo)</td></tr>' +
            '<tr><td><strong>Hiponímia</strong></td><td>termo específico de um conjunto</td><td>rosa é hipônimo de flor</td></tr>' +
            '<tr><td><strong>Hiperônimo</strong></td><td>termo geral</td><td>flor é hiperônimo de rosa</td></tr>' +
            '<tr><td><strong>Polissemia</strong></td><td>mesma palavra, vários sentidos relacionados</td><td>banco (assento, financeiro, recurso hídrico)</td></tr>' +
            '</tbody></table>' +
            '<div class="info-box box-warn"><h4>Pegadinha clássica</h4><p><em>eminente</em> (destacado) x <em>iminente</em> (que está por acontecer); <em>deferir</em> (atender) x <em>diferir</em> (distinguir, adiar); <em>ratificar</em> (confirmar) x <em>retificar</em> (corrigir).</p></div>'
        },
        {
          id: 'denotacao',
          titulo: 'Denotação e conotação',
          html: '<p><strong>Denotação:</strong> sentido literal, dicionarizado. "A pedra é dura."<br><strong>Conotação:</strong> sentido figurado, dependente de contexto. "Foi uma prova dura."</p>' +
            '<p>Conotação depende de cultura e contexto: "cobra" pode ser animal (denotação) ou pessoa perigosa (conotação).</p>'
        },
        {
          id: 'ambiguidade',
          titulo: 'Ambiguidade: quando a frase tem dois sentidos',
          html: '<p>Causas frequentes:</p><ul>' +
            '<li><strong>Posição do advérbio:</strong> "Só ele falou com a turma" (apenas ele) x "Ele só falou com a turma" (apenas falou).</li>' +
            '<li><strong>Pronome possessivo em 3ª pessoa:</strong> "Ele viu o filho do amigo e pegou <em>seu</em> livro".</li>' +
            '<li><strong>Ambiguidade de escopo:</strong> "Todos os candidatos e fiscais receberam a informação" (todos os dois? só os candidatos?).</li>' +
            '<li><strong>Orações adjetivas:</strong> "O diretor avisou ao aluno <em>que estava ausente</em>" (quem faltou?).</li>' +
            '<li><strong>Gerúndio:</strong> "Ele viu o candidato saindo" (quem saía?).</li></ul>' +
            '<p><strong>Desfazer a ambiguidade:</strong> trocar ordem, explicitar sujeito, mudar pontuação, substituir pronome por nome.</p>'
        },
        {
          id: 'equivalencia',
          titulo: 'Substituição lexical em prova',
          html: '<p>Ao julgar se uma palavra pode substituir outra, considere:</p>' +
            '<ol><li><strong>Sentido</strong> — a sinonímia raramente é perfeita.</li>' +
            '<li><strong>Regência</strong> — a nova palavra pede a mesma preposição?</li>' +
              '<li><strong>Registro</strong> — cabe no gênero e no nível de formalidade?</li>' +
              '<li><strong>Conotação</strong> — mantém a mesma carga afetiva?</li>' +
              '<li><strong>Plural</strong> — concorda com o verbo como antes?</li></ol>' +
            '<p>Bancas gostam de propor trocas com sinônimos "quase certos" — como "elevado" por "iminente" — que quebram a equivalência.</p>'
        }
      ],
      exemplos: [
        { frase: 'Ele deferiu o pedido (atendeu) x diferiu do parecer (divergiu).', nota: 'Parônimos de prova.' },
        { frase: 'O candidato foi eminente na prova x A prova é iminente.', nota: 'eminente = destacado; iminente = imediato.' },
        { frase: 'Ele ratificou o acordo (confirmou) x retificou o erro (corrigiu).', nota: 'Parônimos muito cobrados.' }
      ],
      regras: [
        'Sinonímia perfeita é rara: sempre avalie contexto.',
        'Parônimos mudam totalmente o sentido.',
        'Polissemia é um só vocábulo com vários sentidos; homonímia são vocábulos diferentes com mesma forma.',
        'Denotação = literal; conotação = figurado.',
        'Ambiguidade pode ser defeito ou recurso expressivo.'
      ],
      dicas: [
        'Leia a alternativa testando o texto: se o sentido mudar, a troca está errada.',
        'Memorize os pares parônimos mais cobrados.',
        'Em questões de ambiguidade, reescreva para eliminar dupla leitura.'
      ],
      erros: [
        { errado: 'Tratar "eminente" e "iminente" como sinônimos.', certo: 'Sentidos diferentes.', porque: 'Paronímia.' },
        { errado: 'Achar que toda sinonímia mantém a regência.', certo: 'Verificar a preposição do novo verbo.', porque: 'Sinônimos podem ter transitividades distintas.' }
      ],
      resumoFinal: [
        'Sinonímia, antonímia, homonímia, paronímia, polissemia.',
        'Denotação x conotação.',
        'Ambiguidade tem causas identificáveis.',
        'Equivalência exige sentido + gramática + registro.'
      ]
    },

    /* ================= 27 ================= */
    {
      slug: 'figuras-de-linguagem',
      numero: 27,
      titulo: 'Figuras de linguagem',
      grupo: 'Textualidade',
      resumo: 'Figuras de palavras, pensamento, sintaxe e som, com exemplos e efeitos de sentido.',
      tags: ['metáfora', 'metonímia', 'ironia', 'pleonasmo'],
      introducao: 'Figuras de linguagem são recursos expressivos que ampliam o sentido. Em concursos, a cobrança é: identificar a figura, reconhecer seu efeito e - nos níveis mais altos - interpretar o papel do recurso na argumentação do texto.',
      secoes: [
        {
          id: 'palavras',
          titulo: 'Figuras de palavras (semânticas)',
          html: '<table class="tbl"><thead><tr><th>Figura</th><th>Definição</th><th>Exemplo</th></tr></thead><tbody>' +
            '<tr><td><strong>Comparação</strong></td><td>aproximação explícita (como, tal qual)</td><td>Estudar é como construir uma casa.</td></tr>' +
            '<tr><td><strong>Metáfora</strong></td><td>comparação implícita</td><td>Seu argumento é uma casa construída na areia.</td></tr>' +
            '<tr><td><strong>Metonímia</strong></td><td>troca por proximidade</td><td>Li Machado de Assis (obra).</td></tr>' +
            '<tr><td><strong>Catacrese</strong></td><td>metáfora já cristalizada</td><td>braço da cadeira</td></tr>' +
            '<tr><td><strong>Perífrase</strong></td><td>rodeio para nomear</td><td>a Cidade Maravilhosa (Rio)</td></tr>' +
            '<tr><td><strong>Sinestesia</strong></td><td>mistura de sentidos</td><td>voz aveludada</td></tr>' +
            '<tr><td><strong>Antonomásia</strong></td><td>epíteto em lugar do nome</td><td>o Poeta dos Escravos</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'pensamento',
          titulo: 'Figuras de pensamento',
          html: '<ul>' +
            '<li><strong>Ironia:</strong> dizer o contrário do que se quer significar. "Que bela atitude abandonar o estudo na véspera."</li>' +
            '<li><strong>Hipérbole:</strong> exagero. "Já falei isso mil vezes."</li>' +
            '<li><strong>Eufemismo:</strong> suavização. "Ele nos deixou" (morreu).</li>' +
            '<li><strong>Personificação/prosopopeia:</strong> atribuição de vida a seres inanimados. "O edital gritava por atenção."</li>' +
            '<li><strong>Antítese:</strong> oposição de ideias. "É preciso estudar no silêncio para falar alto depois."</li>' +
            '<li><strong>Paradoxo:</strong> ideias contraditórias em um mesmo enunciado. "Amor é ferida que dói e não se sente."</li>' +
            '<li><strong>Gradação:</strong> sequência crescente/decrescente. "Nasce, cresce, morre."</li>' +
            '<li><strong>Apóstrofe:</strong> invocação do interlocutor. "Ó candidatos, atentai!"</li>' +
            '<li><strong>Prolepse:</strong> antecipação de uma negação. "Ele não é feio, é bonito."</li>' +
            '</ul>'
        },
        {
          id: 'sintaxe',
          titulo: 'Figuras de sintaxe (de construção)',
          html: '<ul>' +
            '<li><strong>Elipse:</strong> omissão de termo. "Na sala, apenas alunos."</li>' +
            '<li><strong>Zeugma:</strong> elipse de termo já mencionado. "Ele prefere estudar; ela, descansar."</li>' +
            '<li><strong>Pleonasmo:</strong> repetição; pode ser vicioso ("subir para cima") ou expressivo.</li>' +
            '<li><strong>Anáfora:</strong> repetição no início de versos/frases. "Eu estudo, eu reviso, eu passo."</li>' +
            '<li><strong>Polissíndeto:</strong> repetição de conectivos. "E estuda, e revisa, e faz."</li>' +
            '<li><strong>Assíndeto:</strong> ausência de conectivos. "Chegou, viu, venceu."</li>' +
            '<li><strong>Anacoluto:</strong> quebra de sequência sintática. "Eu, essa prova não me assusta."</li>' +
            '<li><strong>Hipérbato:</strong> inversão da ordem. "Do candidato, a fé era inabalável."</li>' +
            '</ul>'
        },
        {
          id: 'som',
          titulo: 'Figuras de som',
          html: '<ul>' +
            '<li><strong>Aliteração:</strong> repetição de consoantes. "O raio rasga o raro rumo."</li>' +
            '<li><strong>Assonância:</strong> repetição de vogais. "A alma aclama a calma."</li>' +
            '<li><strong>Onomatopeia:</strong> reprodução de som. "O tique-taque do relógio."</li>' +
            '<li><strong>Paronomásia:</strong> aproximação de palavras com sons parecidos. "Quem conta um conto aumenta um ponto."</li>' +
            '</ul>'
        }
      ],
      exemplos: [
        { frase: 'A prova foi um monstro.', nota: 'Metáfora (sem "como").' },
        { frase: 'A prova foi como um monstro.', nota: 'Comparação (com "como").' },
        { frase: 'Ele é forte como um touro.', nota: 'Comparação.' },
        { frase: 'Espalhou-se a notícia: correram todos para o portal.', nota: 'Metonímia (portal = site/jornal).' }
      ],
      regras: [
        'Metáfora não tem conectivo; comparação tem.',
        'Metonímia é proximidade (autor/obra, parte/todo).',
        'Ironia depende do contexto e da entonação.',
        'Antítese opõe palavras; paradoxo opõe ideias no mesmo enunciado.',
        'Pleonasmo pode ser vício de linguagem ou recurso expressivo.'
      ],
      dicas: [
        'Procure o conectivo "como": se houver, comparação; se não, metáfora.',
        'Na hipérbole, observe a impossibilidade literal.',
        'Em questões de efeito de sentido, explique a função no texto, não apenas o nome.'
      ],
      erros: [
        { errado: 'Chamar "braço da cadeira" de metáfora original.', certo: 'É catacrese (metáfora cristalizada).', porque: 'Falta uso figurado consciente.' },
        { errado: 'Confundir metonímia com metáfora.', certo: 'Metonímia troca por relação de proximidade; metáfora por semelhança.', porque: 'Critérios diferentes.' }
      ],
      resumoFinal: [
        'Figuras de palavras, pensamento, sintaxe e som.',
        'Comparação vs metáfora: presença de conectivo.',
        'Metonímia: proximidade.',
        'Sempre relacione a figura ao efeito no texto.'
      ]
    },

    /* ================= 28 ================= */
    {
      slug: 'reescrita-de-frases',
      numero: 28,
      titulo: 'Reescrita de frases',
      grupo: 'Produção e norma',
      resumo: 'Estratégias para reescrever mantendo sentido e correção: substituições, inversões e reduções.',
      tags: ['reescritura', 'equivalência', 'paráfrase', 'concordância'],
      introducao: 'A questão de reescrita é a mais integradora da prova de Português: exige sintaxe, regência, pontuação, coesão e semântica ao mesmo tempo. O critério é duplo: manter o sentido original E manter a correção gramatical.',
      secoes: [
        {
          id: 'criterios',
          titulo: 'Os cinco critérios de uma reescrita correta',
          html: '<ol>' +
            '<li><strong>Equivalência de sentido:</strong> mesmo conteúdo, mesma relação lógica.</li>' +
            '<li><strong>Correção gramatical:</strong> concordância, regência, pontuação.</li>' +
            '<li><strong>Preservação da referência:</strong> os pronomes apontam para os mesmos termos.</li>' +
            '<li><strong>Registro adequado:</strong> formalidade compatível.</li>' +
            '<li><strong>Estrutura coerente:</strong> sem quebrar a progressão textual.</li>' +
            '</ol>' +
            '<p>Se uma alternativa falha em qualquer desses critérios, está errada — mesmo que "soe" melhor.</p>'
        },
        {
          id: 'tecnicas',
          titulo: 'Técnicas de reescrita',
          html: '<h3>1. Voz passiva ↔ ativa</h3><p>"A banca divulgou o gabarito" → "O gabarito foi divulgado pela banca". Verifique o agente da passiva.</p>' +
            '<h3>2. Substituição de conjunções</h3><p>"porque" ↔ "pois/já que/uma vez que"; "mas" ↔ "porém/contudo/todavia". Cuidado com a pontuação e o modo verbal.</p>' +
            '<h3>3. Orações reduzidas ↔ desenvolvidas</h3><p>"Ao terminar a prova, saiu" → "Quando terminou a prova, saiu".</p>' +
            '<h3>4. Adjetivo ↔ oração adjetiva</h3><p>"aluno estudioso" → "aluno que estuda".</p>' +
            '<h3>5. Deslocamento de termos</h3><p>"Ele resolveu o problema rapidamente" → "Rapidamente, ele resolveu o problema". A pontuação acompanha.</p>' +
            '<h3>6. Nominalização ↔ verbalização</h3><p>"A realização da prova pela banca" → "A banca realizou a prova".</p>'
        },
        {
          id: 'erros-reescrita',
          titulo: 'Erros que reprovam a alternativa',
          html: '<table class="tbl"><thead><tr><th>Erro</th><th>Exemplo</th><th>Correção</th></tr></thead><tbody>' +
            '<tr><td>Trocar causa por conclusão</td><td>"porque" → "portanto"</td><td>Manter a relação</td></tr>' +
            '<tr><td>Perder a regência</td><td>"assistir o filme"</td><td>"assistir ao filme"</td></tr>' +
            '<tr><td>Separar sujeito e verbo</td><td>"O candidato, estudou"</td><td>"O candidato estudou"</td></tr>' +
            '<tr><td>Ambiguidade nova</td><td>"Ele disse ao aluno que faltou"</td><td>Explicitar o sujeito</td></tr>' +
            '<tr><td>Concordância equivocada</td><td>"Fazem dois anos"</td><td>"Faz dois anos"</td></tr>' +
            '<tr><td>Mudar o referente pronominal</td><td>"seu" ambíguo</td><td>Trocar por "dele"</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'metodo',
          titulo: 'Método de resolução em 4 passos',
          html: '<ol>' +
            '<li>Leia a frase original e <strong>marque os blocos</strong> (sujeito, verbo, complementos, conectivos).</li>' +
            '<li>Leia a alternativa e verifique se cada bloco permaneceu com a mesma função.</li>' +
            '<li>Cheque a <strong>pontuação</strong>: nenhum termo essencial foi separado?</li>' +
            '<li>Cheque o <strong>sentido</strong>: a relação lógica (causa, oposição, conclusão) continua a mesma?</li>' +
            '</ol>' +
            '<div class="info-box box-tip"><h4>Dica de ouro</h4><p>Elimine primeiro as alternativas com erro gramatical evidente (concordância, regência, crase, vírgula proibida). Normalmente sobram duas; a decisão final é semântica.</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Original: "Embora estudasse, o candidato não foi aprovado."', nota: 'Reescrita válida: "Ainda que estudasse, o candidato não foi aprovado." (mantém concessão e subjuntivo)' },
        { frase: 'Original: "O aluno que estuda passa."', nota: 'Reescrita válida: "O aluno estudioso passa." (restringe igualmente)' },
        { frase: 'Original: "Faz dois anos que estudei."', nota: 'Reescrita inválida: "Fazem dois anos..." (erro de impessoalidade)' }
      ],
      regras: [
        'Reescrita exige sentido + gramática.',
        'Nominalização e verbalização preservam o conteúdo se o agente for mantido.',
        'Conjunções não são intercambiáveis livremente.',
        'Atenção ao referente dos pronomes após reescrita.',
        'Verbos impessoais permanecem no singular.'
      ],
      dicas: [
        'Sublinhar o conectivo original antes de olhar as alternativas.',
        'Desconfie de alternativa que muda pontuação de termos essenciais.',
        'Teste a frase em voz alta: leitura truncada costuma indicar erro.'
      ],
      erros: [
        { errado: 'Substituir "porque" por "portanto".', certo: 'Manter o valor causal.', porque: 'São relações opostas.' },
        { errado: 'Reescrever passando sujeito para depois de vírgula.', certo: 'Manter a integridade do sujeito.', porque: 'Vírgula entre sujeito e verbo é proibida.' }
      ],
      resumoFinal: [
        'Cinco critérios de validade.',
        'Seis técnicas mais usadas.',
        'Erros típicos: causa/conclusão, regência, pontuação.',
        'Resolução: blocos → função → pontuação → sentido.'
      ]
    },

    /* ================= 29 ================= */
    {
      slug: 'redacao-oficial',
      numero: 29,
      titulo: 'Redação oficial',
      grupo: 'Produção e norma',
      resumo: 'Princípios, padrão ofício, estrutura do texto oficial e normas do Manual da Presidência.',
      tags: ['redação oficial', 'ofício', 'padrão ofício', 'formalidade'],
      introducao: 'Redação oficial é a redação da Administração Pública. No serviço público, ela deve comunicar com clareza, precisão e impessoalidade. Em concursos, cobra-se tanto o conceito (princípios) quanto a estrutura (padrão ofício).',
      secoes: [
        {
          id: 'principios',
          titulo: 'Os atributos da redação oficial',
          html: '<ul>' +
            '<li><strong>Clareza:</strong> texto compreensível para qualquer leitor, sem ambiguidade.</li>' +
            '<li><strong>Precisão:</strong> uso de termos que expressem exatamente o que se quer, sem generalizações.</li>' +
            '<li><strong>Objetividade:</strong> direto ao assunto, sem rodeios.</li>' +
            '<li><strong>Concisão:</strong> dizer o necessário em poucas palavras, sem omitir informação essencial.</li>' +
            '<li><strong>Coesão e coerência:</strong> articulação lógica entre partes.</li>' +
            '<li><strong>Formalidade e padronização:</strong> respeito à norma culta e ao formato.</li>' +
            '<li><strong>Impessoalidade:</strong> trata-se de assunto institucional, não pessoal.</li>' +
            '<li><strong>Uso da norma padrão:</strong> registro formal da Administração.</li>' +
            '</ul>' +
            '<div class="info-box box-warn"><h4>O que não combina com redação oficial</h4><p>Regionalismos, gírias, adjetivação excessiva, superlativos, ironia, parágrafos de opinião pessoal, abreviaturas não padronizadas.</p></div>'
        },
        {
          id: 'padrao-oficio',
          titulo: 'Padrão ofício: estrutura',
          html: '<p>O <strong>padrão ofício</strong> unifica três tipos de expediente:</p>' +
            '<ol><li><strong>Ofício:</strong> comunicação entre órgãos de hierarquias distintas ou com particulares.</li>' +
              '<li><strong>Memorando:</strong> comunicação interna entre unidades de mesmo órgão.</li>' +
              '<li><strong>Aviso:</strong> expediente entre ministérios e autarquias (uso em determinados contextos).</li></ol>' +
            '<p><strong>Partes do padrão ofício:</strong></p>' +
            '<ol><li>Número do expediente e sigla do órgão (ex.: Ofício nº 12/2024/GP).</li>' +
              '<li>Local e data (por extenso, alinhado à direita).</li>' +
              '<li>Endereçamento: tratamento + cargo + nome + órgão + endereço.</li>' +
              '<li>Assunto: resumo em uma linha.</li>' +
              '<li>Texto: introdução (contextualização), desenvolvimento (informação) e conclusão (providência).</li>' +
              '<li>Fecho: "Atenciosamente" para autoridade de mesma hierarquia; "Respeitosamente" para autoridade superior.</li>' +
              '<li>Identificação: nome, cargo, assinatura.</li></ol>' +
            '<p>O Manual dispensa, nos casos previstos, o nome do signatário e o endereçamento quando a comunicação é eletrônica interna.</p>'
        },
        {
          id: 'pronomes',
          titulo: 'Pronomes de tratamento e concordância',
          html: '<p>Todos os pronomes de tratamento: concordância em <strong>3ª pessoa</strong>, embora se refiram à 2ª. "Vossa Excelência <em>deve</em> comparecer"; "Vossa Senhoria <em>enviou</em> o documento".</p>' +
            '<p><strong>Vossa</strong> = falar com a autoridade; <strong>Sua</strong> = falar sobre ela.</p>' +
            '<p>Hierarquia: <em>Vossa Excelência</em> (Presidente, Ministros, Governadores, Deputados, Senadores, Prefeitos, Juízes, Embaixadores, oficiais generais); <em>Vossa Magnificência</em> (Reitores); <em>Vossa Senhoria</em> (demais autoridades e particulares).</p>'
        },
        {
          id: 'erros-oficiais',
          titulo: 'Erros frequentes em redação oficial',
          html: '<ul>' +
            '<li>Usar "Vossa Excelência" com verbo na 2ª pessoa: "Vossa Excelência <em>deveis</em>" ❌.</li>' +
            '<li>Fechar com "Atenciosamente" para autoridade superior (deve ser "Respeitosamente").</li>' +
            '<li>Usar abreviaturas não padronizadas ("V.Exa." em vez de "Vossa Excelência" na estrutura; abreviaturas só conforme manual).</li>' +
            '<li>Colocar local e data no início do texto, à esquerda.</li>' +
            '<li>Usar "venho por meio desta" — fórmula vazia e desaconselhada.</li>' +
            '<li>Adjetivar: "importantíssima solicitação" — quebra a objetividade.</li>' +
            '<li>Usar "o mesmo" como pronome de retomada: "o mesmo documento" → "esse documento".</li>' +
            '</ul>' +
            '<div class="info-box box-tip"><h4>Como treinar</h4><p>Escreva um ofício por semana com a estrutura completa. A banca avalia estrutura e clareza mais do que erudição.</p></div>'
        }
      ],
      exemplos: [
        { frase: 'Fecho para autoridade superior: Respeitosamente.', nota: 'Hierarquia ascendente.' },
        { frase: 'Fecho para autoridade de mesma hierarquia: Atenciosamente.', nota: 'Hierarquia equivalente.' },
        { frase: '"Encaminho o expediente para providências."', nota: 'Concisão e objetividade.' }
      ],
      regras: [
        'Redação oficial é impessoal e objetiva.',
        'Padrão ofício: ofício, memorando, aviso.',
        'Pronomes de tratamento: 3ª pessoa, sempre.',
        'Atenciosamente (mesma hierarquia) x Respeitosamente (superior).',
        'Não usar fórmulas vazias nem adjetivação excessiva.'
      ],
      dicas: [
        'Estrutura do texto oficial: introdução, desenvolvimento, conclusão (sem epígrafe).',
        'Prefira voz ativa e períodos curtos.',
        'Evite "o mesmo", "através de", "no sentido de".'
      ],
      erros: [
        { errado: 'Vossa Excelência deveis providenciar.', certo: 'Vossa Excelência deve providenciar.', porque: 'Tratamento na 3ª pessoa.' },
        { errado: 'Atenciosamente para Ministro.', certo: 'Respeitosamente.', porque: 'Hierarquia superior exige fecho respeitoso.' }
      ],
      resumoFinal: [
        'Atributos: clareza, precisão, objetividade, concisão, formalidade, impessoalidade.',
        'Padrão ofício com sete partes.',
        'Concordância sempre na 3ª pessoa.',
        'Erros mais comuns: fecho, abreviação, adjetivação.'
      ]
    },

    /* ================= 30 ================= */
    {
      slug: 'correspondencia-oficial',
      numero: 30,
      titulo: 'Correspondência oficial',
      grupo: 'Produção e norma',
      resumo: 'Ofício, memorando, requerimento, ata, parecer e e-mail institucional: modelos e cuidados.',
      tags: ['ofício', 'memorando', 'requerimento', 'ata', 'e-mail'],
      introducao: 'Correspondência oficial é o gênero textual da prática administrativa. Este módulo complementa a redação oficial: aqui o foco é o documento concreto — o que cada gênero contém, quais elementos são obrigatórios e quais erros invalidam a comunicação.',
      secoes: [
        {
          id: 'generos-oficiais',
          titulo: 'Principais gêneros e suas funções',
          html: '<table class="tbl"><thead><tr><th>Gênero</th><th>Função</th><th>Circuito</th></tr></thead><tbody>' +
            '<tr><td><strong>Ofício</strong></td><td>Comunicação formal entre órgãos ou com o cidadão</td><td>Externo</td></tr>' +
            '<tr><td><strong>Memorando</strong></td><td>Comunicação interna simplificada</td><td>Interno</td></tr>' +
            '<tr><td><strong>Requerimento</strong></td><td>Pedido do cidadão ao órgão público</td><td>Cidadão → Administração</td></tr>' +
            '<tr><td><strong>Ata</strong></td><td>Registro de reunião/assembleia</td><td>Interno</td></tr>' +
            '<tr><td><strong>Parecer</strong></td><td>Análise técnica com conclusão</td><td>Interno/externo</td></tr>' +
            '<tr><td><strong>Relatório</strong></td><td>Exposição de atividades e resultados</td><td>Interno/externo</td></tr>' +
            '<tr><td><strong>Certidão</strong></td><td>Declaração de fato registrado em documentos</td><td>Órgão → cidadão</td></tr>' +
            '<tr><td><strong>Edital</strong></td><td>Normas de concurso, licitação, convocação</td><td>Publicação pública</td></tr>' +
            '<tr><td><strong>E-mail institucional</strong></td><td>Comunicação ágil equivalente ao ofício/memorando</td><td>Digital</td></tr>' +
            '</tbody></table>'
        },
        {
          id: 'estrutura-generos',
          titulo: 'Estrutura de cada documento',
          html: '<h3>Ofício e memorando (padrão ofício)</h3>' +
            '<p>Número e sigla, data, endereçamento, assunto, texto (introdução/desenvolvimento/conclusão), fecho, identificação do signatário.</p>' +
            '<h3>Requerimento</h3>' +
            '<p>Vocativo à autoridade, qualificação do requerente (nome, CPF, endereço), exposição do pedido com fundamento legal, pedido final claro, local, data, assinatura.</p>' +
            '<h3>Ata</h3>' +
            '<p>Sem parágrafos nem desenhos; texto corrido; verbos no pretérito; registro de data, local, presentes, pauta, deliberações, encerramento; assinaturas. Não se usam espaços em branco para preenchimento posterior.</p>' +
            '<h3>Parecer</h3>' +
            '<p>Identificação do objeto, análise fundamentada, conclusão objetiva, local, data, assinatura e cargo.</p>' +
            '<h3>E-mail institucional</h3>' +
            '<p>Assunto claro; saudações formais breves; texto objetivo; identificação do remetente e do órgão; anexos mencionados no corpo.</p>'
        },
        {
          id: 'elementos-obrigatorios',
          titulo: 'Elementos que não podem faltar',
          html: '<ul>' +
            '<li><strong>Identificação:</strong> quem envia, qual órgão, qual data.</li>' +
            '<li><strong>Assunto explícito:</strong> um resumo em uma linha.</li>' +
            '<li><strong>Fundamento (quando agente público):</strong> dispositivo legal, processo ou referência.</li>' +
            '<li><strong>Pedido/providência:</strong> o que se espera do destinatário, com prazo quando houver.</li>' +
            '<li><strong>Fecho adequado à hierarquia.</strong></li>' +
            '</ul>' +
            '<div class="info-box box-warn"><h4>Cuidado</h4><p>Ofício não é carta pessoal: não tem "Querido", nem despedida afetiva, nem opiniões subjetivas. Também não é mensagem informal: evite emojis, gírias e abreviações.</p></div>'
        },
        {
          id: 'modelo',
          titulo: 'Modelo estrutural de ofício',
          html: '<div class="q-texto-base" style="font-family:ui-monospace,monospace;font-size:.88rem">' +
            'OFÍCIO Nº 45/2026/EDITAL-GP\n\n' +
            'Brasília, 12 de março de 2026.\n\n' +
            'Ao Senhor\n' +
            'Nome Completo\n' +
            'Coordenador-Geral de Concursos\n' +
            'Ministério da Educação\n' +
            'Esplanada dos Ministérios, Bloco L, Brasília/DF\n\n' +
            'Assunto: Solicitação de informações sobre o cronograma do concurso.\n\n' +
            'Senhor Coordenador,\n\n' +
            '1. Encaminho solicitação de esclarecimento acerca das etapas previstas no cronograma do concurso mencionado.\n\n' +
            '2. Especificamente, solicita-se a confirmação das datas de aplicação das provas objetivas e do prazo para interposição de recursos.\n\n' +
            '3. As informações são necessárias ao planejamento das ações de divulgação institucional.\n\n' +
            'Respeitosamente,\n\n' +
            'Nome do Signatário\n' +
            'Cargo — Órgão' +
            '</div>' +
            '<p class="muted" style="font-size:.88rem">Modelo didático. Em uso real, siga o Manual de Redação da Presidência da República vigente e o formato interno do órgão.</p>'
        }
      ],
      exemplos: [
        { frase: '"Assunto: Encaminhamento de documentos."', nota: 'Assunto direto, em uma linha.' },
        { frase: '"Encaminho para providências."', nota: 'Concisão e objetividade.' },
        { frase: '"Venho por meio desta solicitar..."', nota: 'Fórmula vazia — substitua por "Solicito...".' }
      ],
      regras: [
        'Cada gênero tem estrutura própria — não os trate como equivalentes.',
        'Ata não tem parágrafos e usa pretérito.',
        'Ofício e memorando seguem o padrão ofício.',
        'E-mail institucional também é comunicação oficial: formalidade obrigatória.',
        'Assunto sempre em uma linha, objetivo.'
      ],
      dicas: [
        'Em prova de redação oficial, desenhe mentalmente a estrutura antes de escrever.',
        'Use "Solicito", "Encaminho", "Informo" — verbos diretos.',
        'Confira hierarquia do fecho e a concordância dos tratamentos.'
      ],
      erros: [
        { errado: 'Ata escrita em tópicos com parágrafos e espaços em branco.', certo: 'Ata em texto corrido, pretérito, sem claro de preenchimento.', porque: 'Ata registra o que ocorreu, sem lacunas.' },
        { errado: 'E-mail institucional informal.', certo: 'E-mail institucional com formalidade e identificação.', porque: 'É documento oficial.' }
      ],
      resumoFinal: [
        'Gêneros oficiais: ofício, memorando, requerimento, ata, parecer, relatório, e-mail.',
        'Estrutura própria, elementos obrigatórios.',
        'Formalidade e impessoalidade em qualquer suporte.',
        'Seguir o Manual da Presidência vigente.'
      ]
    }
  ]
});
