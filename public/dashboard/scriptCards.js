const iniciarJogoBtn = document.getElementById('iniciar-jogo-btn');
const jogoContainer = document.getElementById('jogo-container');
const perguntaContainer = document.getElementById('pergunta');
const respostasContainer = document.getElementById('respostas-container');
const feedbackContainer = document.getElementById('feedback-container');
const feedbackMensagem = document.getElementById('feedback-mensagem');
const proximaPerguntaBtn = document.getElementById('proxima-pergunta-btn');
const resultadoFinal = document.getElementById('resultado-final');
const mensagemResultado = document.getElementById('mensagem-resultado');
const respostaBotoes = document.querySelectorAll('.resposta-btn');
let chart;

async function atualizarGrafico(idPergunta) {
    const ctx = document.getElementById('grafico1').getContext('2d');
    try {
        const resposta = await fetch(`/quiz/estatisticas/${idPergunta}`);
        const dados = await resposta.json();

        let acertos = 0;
        let erros = 0;
        dados.forEach(item => {
            if (item.correta === 1) acertos = item.quantidade;
            else erros = item.quantidade;
        });

        if (!chart) {
            chart = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['erros', 'acertos'],
                    datasets: [{
                        label: 'Respostas do quiz',
                        data: [erros, acertos],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)'
                        ],
                        borderWidth: 1
                    }]
                }
            });
        } else {
            chart.data.datasets[0].data = [erros, acertos];
            chart.update();
        }
    } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
    }
}

let perguntaAtualIndex = 0;
let pontuacao = 0;

iniciarJogoBtn.addEventListener('click', function () {
    iniciarJogoBtn.classList.add('oculto');
    jogoContainer.classList.remove('oculto');
    exibirPergunta();
});

function exibirPergunta() {
    esconderFeedback();
    limparBotoes();

    const perguntaAtual = perguntas[perguntaAtualIndex];
    perguntaContainer.textContent = perguntaAtual.pergunta;

    for (let i = 0; i < respostaBotoes.length; i++) {
        respostaBotoes[i].textContent = perguntaAtual.respostas[i];
        respostaBotoes[i].dataset.index = i;
        respostaBotoes[i].disabled = false;
        respostaBotoes[i].classList.remove('correta', 'incorreta');

        respostaBotoes[i].onclick = function () {
            verificarResposta(i);
        };
    }
}

function verificarResposta(respostaSelecionadaIndex) {
    const perguntaAtual = perguntas[perguntaAtualIndex];
    const respostaCorretaIndex = perguntaAtual.respostaCorreta;
    const idUsuario = sessionStorage.ID_USUARIO;
    const idPergunta = perguntaAtualIndex + 1;

    const acertou = respostaSelecionadaIndex === respostaCorretaIndex;

    if (acertou) {
        respostaBotoes[respostaSelecionadaIndex].classList.add('correta');
        feedbackMensagem.textContent = "Você acertou! Mandou bem!";
        pontuacao = pontuacao + 1;
    } else {
        respostaBotoes[respostaSelecionadaIndex].classList.add('incorreta');
        respostaBotoes[respostaCorretaIndex].classList.add('correta');
        feedbackMensagem.textContent = `Que pena! A resposta correta era: ${perguntaAtual.respostas[respostaCorretaIndex]}`;
    }

    for (let i = 0; i < respostaBotoes.length; i++) {
        respostaBotoes[i].disabled = true;
    }

    feedbackContainer.classList.remove('oculto');
    proximaPerguntaBtn.classList.remove('oculto');

    // Enviar resposta para o banco de dados
    fetch('/quiz/responder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            id_usuario: idUsuario,
            id_pergunta: idPergunta,
            resposta_escolhida: respostaSelecionadaIndex,
            correta: acertou
        })
    })
        .then(response => {
            if (!response.ok) {
                console.error('Erro ao salvar resposta no banco.');
            }
            atualizarGrafico(idPergunta); 
        })
        .catch(error => {
            console.error('Erro na requisição:', error);
            atualizarGrafico(idPergunta);
        });

}

proximaPerguntaBtn.addEventListener('click', (event) => {
    perguntaAtualIndex = perguntaAtualIndex + 1;

    if (perguntaAtualIndex < perguntas.length) {
        exibirPergunta();
    } else {
        mostrarResultadoFinal();
    }
});

function esconderFeedback() {
    feedbackContainer.classList.add('oculto');
    proximaPerguntaBtn.classList.add('oculto');
}

function limparBotoes() {
    for (let i = 0; i < respostaBotoes.length; i++) {
        respostaBotoes[i].classList.remove('correta');
        respostaBotoes[i].classList.remove('incorreta');
        respostaBotoes[i].disabled = false;
    }
}

function mostrarResultadoFinal() {
    jogoContainer.classList.add('oculto');
    resultadoFinal.style.display = 'block';
    mensagemResultado.textContent = "Você acertou " + pontuacao + " de " + perguntas.length + " perguntas!";
}