const quizModel = require('../models/quizModel');

const salvarResposta = async (req, res) => {
    const { id_usuario, id_pergunta, resposta_escolhida, correta } = req.body;

    try {
        await quizModel.salvarResposta(id_usuario, id_pergunta, resposta_escolhida, correta);
        res.status(200).json({ message: 'Resposta salva com sucesso!' });
    } catch (error) {
        console.error("Erro ao salvar resposta no banco:", error);
        res.status(500).json({ message: 'Erro ao salvar resposta.' });
    }
};

const obterEstatisticas = async (req, res) => {
    const idPergunta = req.params.idPergunta;

    try {
        const estatisticas = await quizModel.obterEstatisticas(idPergunta);
        res.status(200).json(estatisticas);
    } catch (error) {
        console.error("Erro ao obter estatísticas:", error);
        res.status(500).json({ message: 'Erro ao buscar estatísticas.' });
    }
};

module.exports = {
    salvarResposta,
    obterEstatisticas
};