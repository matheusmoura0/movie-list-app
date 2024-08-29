const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

/**
 * @swagger
 * /search:
 *   get:
 *     summary: Busca filmes na API externa
 *     tags: [Search]
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Termo de busca para procurar filmes
 *     responses:
 *       200:
 *         description: Lista de filmes correspondentes ao termo de busca
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   title:
 *                     type: string
 *                   vote_average:
 *                     type: number
 *                   poster_path:
 *                     type: string
 *                   release_date:
 *                     type: string
 *                   overview:
 *                     type: string
 *       400:
 *         description: Requisição inválida (parâmetros incorretos ou ausentes)
 *       500:
 *         description: Erro ao buscar filmes
 */
router.get('/', searchController.searchMovies);

module.exports = router;
