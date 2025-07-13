const perguntas = [
    {
        pergunta: "Qual ano é frequentemente associado ao surgimento inicial do Witch House?",
        respostas: ["2005", "2009", "2013", "2017"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual característica sonora é proeminente no Witch House?",
        respostas: ["Vocal agudo e melódico", "Batidas rápidas e agressivas", "Sintetizadores sombrios e reverberantes", "Riffs de guitarra pesados"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual destes artistas é considerado um pioneiro do Witch House?",
        respostas: ["Skrillex", "Grimes", "Salem", "Aphex Twin"],
        respostaCorreta: 2
    },
    {
        pergunta: "O Witch House frequentemente incorpora elementos visuais de qual estética?",
        respostas: ["Cyberpunk", "Vaporwave", "Cultura gótica e ocultismo", "Minimalismo"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual ferramenta de software é comumente usada para vocais distorcidos no Witch House?",
        respostas: ["Auto-Tune", "Vocoder", "Pitch Shifter/Slow-down", "Reverb"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual destes termos é frequentemente usado para descrever o ritmo do Witch House?",
        respostas: ["Upbeat", "Tempo acelerado", "Slowed and Chopped", "Sincopado"],
        respostaCorreta: 2
    },
    {
        pergunta: "Onde o Witch House ganhou popularidade inicialmente?",
        respostas: ["Fóruns de música eletrônica", "Blogs de moda", "Redes sociais como Tumblr", "Programas de rádio mainstream"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual artista é conhecido por usar símbolos e caracteres incomuns em seus nomes de faixas/bandas?",
        respostas: ["oOoOO", "Purity Ring", "Crystal Castles", "Sleigh Bells"],
        respostaCorreta: 0
    },
    {
        pergunta: "Witch House é muitas vezes associado a que tipo de humor ou atmosfera?",
        respostas: ["Alegre e dançante", "Reflexivo e calmo", "Sombrio, etéreo e melancólico", "Energético e agressivo"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual gênero musical tem forte influência no Witch House, especialmente nas batidas?",
        respostas: ["Techno", "Trap", "House", "Dubstep"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual destas bandas não é tipicamente associada ao gênero Witch House?",
        respostas: ["Pictureplane", "White Ring", "Chvrches", "Ritualz"],
        respostaCorreta: 2
    },
    {
        pergunta: "Witch House é conhecido por samples de qual tipo de áudio?",
        respostas: ["Discursos políticos", "Trilhas sonoras de filmes de terror", "Sons da natureza", "Música clássica"],
        respostaCorreta: 1
    },
       {
        pergunta: "Qual é o gênero musical principal associado ao artista brasileiro Kenokult/Kenopsiakult?",
        respostas: ["Samba", "Witch House", "Funk Brasileiro", "Bossa Nova"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é o nome do subgênero que mistura Witch House com hip-hop?",
        respostas: ["Cloud Rap", "Trap Witch", "Dark Hip Hop", "Horrorcore"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual plataforma era popular para a distribuição de mixtapes de Witch House no início?",
        respostas: ["Spotify", "Bandcamp", "SoundCloud", "Apple Music"],
        respostaCorreta: 2
    },
    {
        pergunta: "O termo 'Witch House' foi originalmente cunhado de forma séria ou irônica?",
        respostas: ["Séria", "Irônica", "Por um fã", "Por uma gravadora"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual é o principal instrumento eletrônico usado para criar as paisagens sonoras do Witch House?",
        respostas: ["Guitarra elétrica", "Bateria acústica", "Sintetizador", "Violino"],
        respostaCorreta: 2
    },
    {
        pergunta: "A estética visual do Witch House muitas vezes inclui quais elementos de design?",
        respostas: ["Cores vibrantes", "Imagens brilhantes", "Glitch art e simbolismo oculto", "Retratos de paisagens"],
        respostaCorreta: 2
    },
    {
        pergunta: "De qual país Kenokult/Kenopsiakult é natural?",
        respostas: ["Estados Unidos", "Brasil", "Alemanha", "Rússia"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual destes elementos vocais é comum no Witch House?",
        respostas: ["Vocais operísticos", "Vocais de rap rápidos", "Vocais sussurrados ou filtrados", "Gritos"],
        respostaCorreta: 2
    },
    {
        pergunta: "O Witch House é frequentemente associado a uma sensação de...?",
        respostas: ["Nostalgia", "Utopia", "Distorção e irrealidade", "Felicidade pura"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual a pronúncia mais comum para o nome do gênero 'Witch House'?",
        respostas: ["Witch Hó-use", "Vitx Raus", "Witx Haus", "Witch Howze"],
        respostaCorreta: 0
    },
    {
        pergunta: "Qual artista de Witch House é conhecido por suas performances visuais intensas?",
        respostas: ["Youth Code", "Puce Mary", "Ritualz", "Zola Jesus"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual é o nome do EP de estreia que Kenokult lançou?",
        respostas: ["Sephye", "Pútrido", "KenopsiaKult", "Cicatriz"],
        respostaCorreta: 2
    },
    {
        pergunta: "O Witch House teve um período de grande popularidade mainstream?",
        respostas: ["Sim, foi um dos gêneros mais populares dos anos 2010", "Não, permaneceu um gênero de nicho", "Sim, mas apenas na Europa", "Sim, mas apenas na internet"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual o nome do EP de estreia da banda Salem?",
        respostas: ["King Night", "OhK", "Sleepwalk With Me", "Water"],
        respostaCorreta: 3
    },
    {
        pergunta: "O uso de 'drag' (slowed-down) é uma característica de qual elemento do Witch House?",
        respostas: ["Melodias", "Batidas", "Vocais", "Todos os anteriores"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual desses termos não é um sinônimo comum para Witch House?",
        respostas: ["Drag", "Grave Wave", "Darkwave", "Seapunk"],
        respostaCorreta: 3
    },
    {
        pergunta: "O Witch House frequentemente experimenta com texturas sonoras de qual natureza?",
        respostas: ["Nítidas e claras", "Crocantes e secas", "Lo-fi e granuladas", "Brilhantes e polidas"],
        respostaCorreta: 2
    },
    {
        pergunta: "Qual filme de terror clássico pode ter influenciado a atmosfera do Witch House?",
        respostas: ["O Exorcista", "Halloween", "O Massacre da Serra Elétrica", "Bruxa de Blair"],
        respostaCorreta: 3
    },
    {
        pergunta: "Qual a função do reverb e delay no Witch House?",
        respostas: ["Para clarear o som", "Para criar uma sensação de espaço e profundidade", "Para acelerar o tempo", "Para dar um som mais natural"],
        respostaCorreta: 1
    },
    {
        pergunta: "Qual destes subgêneros de música eletrônica é o menos relacionado ao Witch House?",
        respostas: ["Industrial", "Noise", "Ambient", "Trance"],
        respostaCorreta: 3
    },
    {
        pergunta: "O Witch House é frequentemente visto como uma fusão de quais estilos musicais?",
        respostas: ["Pop e Country", "Hip-Hop, Drone e Darkwave", "Jazz e Blues", "Clássica e Ópera"],
        respostaCorreta: 1
    }
];