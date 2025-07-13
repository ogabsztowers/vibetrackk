async function atualizarGraficoGeral() {
    const ctx = document.getElementById('myChart').getContext('2d');
    const filtro = document.getElementById('filtroGrafico').value;
    let acertos = 0, erros = 0;

    // filtro de acertos do usuario

    if (filtro == 'usuario') {
        const idUsuario = sessionStorage.ID_USUARIO;
        if (!idUsuario) {
            console.error("Usuário não logado!");
            return;
        }
        const resposta = await fetch(`/quiz/estatisticas-usuario/${idUsuario}`);
        const dados = await resposta.json();
        dados.forEach(item => {
            if (item.correta == 1) acertos = item.quantidade;
            else erros = item.quantidade;
        });

        const kpiDivs = document.querySelectorAll('.KPI');
        if (kpiDivs[0]) {
            kpiDivs[0].innerHTML = `<b>Acertos:</b> ${acertos} <br> <b>Erros:</b> ${erros}`;
        }

        if (window.myChartInstance) window.myChartInstance.destroy();

        window.myChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Erros', 'Acertos'],
                datasets: [{
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
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Seus acertos/erros' }
                }
            }
        });

        // filtro geral de acertos da comunidade + acertos do usuario

    } else if (filtro == 'geral') {
        const idUsuario = sessionStorage.ID_USUARIO;
        if (!idUsuario) {
            console.error("Usuário não logado!");
            return;
        }

        let acertosUsuario = 0;
        try {
            const respostaUsuario = await fetch(`/quiz/estatisticas-usuario/${idUsuario}`);
            const dadosUsuario = await respostaUsuario.json();
            dadosUsuario.forEach(item => {
                if (item.correta == 1) acertosUsuario = item.quantidade;
            });
        } catch (error) {
            console.error("Erro ao buscar acertos do usuário:", error);
        }

        let acertosGeral = 0;
        try {
            const respostaGeral = await fetch(`/quiz/estatisticas-geral`);
            const dadosGeral = await respostaGeral.json();
            dadosGeral.forEach(item => {
                if (item.correta == 1) acertosGeral = item.quantidade;
            });
        } catch (error) {
            console.error("Erro ao buscar acertos gerais:", error);
        }

        const acertosOutros = Math.max(acertosGeral - acertosUsuario, 0);



        if (window.myChartInstance) window.myChartInstance.destroy();

        window.myChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Outros usuários', 'Você'],
                datasets: [{
                    data: [acertosOutros, acertosUsuario],
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
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Sua participação nos acertos da comunidade' }
                }
            }
        });

        // filtro de erros da comunidade + erros do usuario 

    } else if (filtro == 'errosCom') {
        const idUsuario = sessionStorage.ID_USUARIO;
        if (!idUsuario) {
            console.error("Usuário não logado!");
            return;
        }

        let errosUsuario = 0;
        try {
            const respostaUsuario = await fetch(`/quiz/estatisticas-usuario/${idUsuario}`);
            const dadosUsuario = await respostaUsuario.json();
            dadosUsuario.forEach(item => {
                if (item.correta == 0) errosUsuario = item.quantidade;
            });
        } catch (error) {
            console.error("Erro ao buscar erros do usuário:", error);
        }

        let errosGeral = 0;
        try {
            const respostaGeral = await fetch(`/quiz/estatisticas-geral`);
            const dadosGeral = await respostaGeral.json();
            dadosGeral.forEach(item => {
                if (item.correta == 0) errosGeral = item.quantidade;
            });
        } catch (error) {
            console.error("Erro ao buscar erros gerais:", error);
        }

        const errosOutros = Math.max(errosGeral - errosUsuario, 0);

        if (window.myChartInstance) window.myChartInstance.destroy();

        window.myChartInstance = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Outros usuários', 'Você'],
                datasets: [{
                    data: [errosOutros, errosUsuario],
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
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' },
                    title: { display: true, text: 'Sua participação nos erros da comunidade' }
                }
            }
        });
    }
}
async function atualizarGraficoEstilos() {
    const ctx2 = document.getElementById('myChart2').getContext('2d');
    const filtro = document.getElementById('filtroEstilo').value || "usuarios";

    // Destroi o gráfico anterior, se existir

    if (window.myChart2Instance) window.myChart2Instance.destroy();

    // filtro de quantos usuarios estão logados 

    if (filtro == "usuarios") {
        try {
            const resposta = await fetch('/usuarios/usuarios-por-estilo');
            const dados = await resposta.json();
            const labels = dados.map(item => item.estilo);
            const valores = dados.map(item => item.quantidade);

            window.myChart2Instance = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Usuários por estilo',
                        data: valores,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Usuários por gênero musical' }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1,
                                precision: 0
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error("Erro ao buscar usuários por estilo:", error);
        }


        // filtro de acertos por estilo(ranking)

    } else if (filtro == "acertos") {
        try {
            const resposta = await fetch('/quiz/acertos-por-estilo');
            const dados = await resposta.json();
            const labels = dados.map(item => item.estilo);
            const valores = dados.map(item => item.acertos);

            window.myChart2Instance = new Chart(ctx2, {
                type: 'bar',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Acertos por estilo',
                        data: valores,
                        borderColor: 'rgba(255, 206, 86, 1)',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: { display: false },
                        title: { display: true, text: 'Acertos por gênero musical' }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            ticks: {
                                stepSize: 1,
                                precision: 0
                            }
                        }
                    }
                }
            });
        } catch (error) {
            console.error("Erro ao buscar acertos por estilo:", error);
        }
    }
}

atualizarGraficoGeral();
atualizarGraficoEstilos();