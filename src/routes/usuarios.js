var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");
const database = require('../database/config'); // Adicione esta linha

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.get('/usuarios-por-estilo', async (req, res) => {
    try {
        const instrucaoSql = `
            SELECT e.codigo_ativacao AS estilo, COUNT(u.id) AS quantidade
            FROM usuario u
            JOIN empresa e ON u.fk_empresa = e.id
            GROUP BY e.codigo_ativacao
            ORDER BY quantidade DESC;
        `;
        const resultado = await database.executar(instrucaoSql);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários por estilo.' });
    }
});

module.exports = router;