const express = require('express');
const router = express.Router();
const favoritesController = require('../controllers/favoritesController');

/**
 * @swagger
 * /favorites:
 *   post:
 *     summary: Adiciona um filme aos favoritos
 *     tags: [Favorites]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               movie_id:
 *                 type: integer
 *               title:
 *                 type: string
 *               vote_average:
 *                 type: number
 *               poster_path:
 *                 type: string
 *               release_date:
 *                 type: string
 *               overview:
 *                 type: string
 *               user_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Filme adicionado aos favoritos com sucesso
 *       500:
 *         description: Erro ao adicionar o filme aos favoritos
 */
router.post('/', favoritesController.addFavorite);

/**
 * @swagger
 * /favorites:
 *   get:
 *     summary: Retorna a lista de filmes favoritos
 *     tags: [Favorites]
 *     responses:
 *       200:
 *         description: Lista de filmes favoritos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   movie_id:
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
 *                   user_id:
 *                     type: integer
 *       500:
 *         description: Erro ao buscar os filmes favoritos
 */
router.get('/', favoritesController.getFavorites);

/**
 * @swagger
 * /favorites/{id}:
 *   delete:
 *     summary: Remove um filme dos favoritos
 *     tags: [Favorites]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do filme a ser removido dos favoritos
 *     responses:
 *       200:
 *         description: Filme removido dos favoritos com sucesso
 *       500:
 *         description: Erro ao remover o filme dos favoritos
 */
router.delete('/:id', favoritesController.removeFavorite);

module.exports = router;
