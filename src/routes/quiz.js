const express = require('express');
const router = express.Router();
const quizController = require('../controllers/quizController');
const database = require('../database/config');

router.post('/responder', quizController.salvarResposta);

router.get('/estatisticas/:idPergunta', quizController.obterEstatisticas);

router.get('/estatisticas-geral', async (req, res) => {
    try {
        const instrucaoSql = `
            SELECT correta, COUNT(*) AS quantidade
            FROM resposta_quiz
            GROUP BY correta
            ORDER BY correta;
        `;
        const resultado = await database.executar(instrucaoSql);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar estatísticas gerais.' });
    }
});

router.get('/estatisticas-usuario/:idUsuario', async (req, res) => {
    const idUsuario = req.params.idUsuario;
    try {
        const instrucaoSql = `
            SELECT correta, COUNT(*) AS quantidade
            FROM resposta_quiz
            WHERE id_usuario = ${idUsuario}
            GROUP BY correta
            ORDER BY correta;
        `;
        const resultado = await database.executar(instrucaoSql);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar estatísticas do usuário.' });
    }
});
router.get('/acertos-por-estilo', async (req, res) => {
    try {
        const instrucaoSql = `
            SELECT e.codigo_ativacao AS estilo, COUNT(rq.id) AS acertos
            FROM resposta_quiz rq
            JOIN usuario u ON rq.id_usuario = u.id
            JOIN empresa e ON u.fk_empresa = e.id
            WHERE rq.correta = 1
            GROUP BY e.codigo_ativacao
            ORDER BY acertos DESC;
        `;
        const resultado = await database.executar(instrucaoSql);
        res.status(200).json(resultado);
    } catch (error) {
        console.error("Erro ao buscar acertos por estilo:", error);
        res.status(500).json({ message: 'Erro ao buscar acertos por estilo.' });
    }
});
module.exports = router;