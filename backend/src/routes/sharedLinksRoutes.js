const express = require('express');
const router = express.Router();
const sharedLinksController = require('../controllers/sharedLinksController');

/**
 * @swagger
 * tags:
 *   name: SharedLinks
 *   description: Gerenciamento de links compartilhados
 */

/**
 * @swagger
 * /shared:
 *   post:
 *     summary: Cria um link compartilhado para uma lista de filmes favoritos
 *     tags: [SharedLinks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               favoriteIds:
 *                 type: array
 *                 items:
 *                   type: integer
 *             example:
 *               favoriteIds: [1, 2, 3]
 *     responses:
 *       '201':
 *         description: Link compartilhado criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 sharedLink:
 *                   type: string
 *                   example: /shared/a91ca56e-2461-4840-a234-150c6c207f35
 *       '400':
 *         description: Parâmetros inválidos
 *       '500':
 *         description: Erro ao criar o link compartilhado
 */

/**
 * @swagger
 * /shared/{uuid}:
 *   get:
 *     summary: Obtém os filmes favoritos vinculados a um link compartilhado
 *     tags: [SharedLinks]
 *     parameters:
 *       - in: path
 *         name: uuid
 *         schema:
 *           type: string
 *         required: true
 *         description: UUID do link compartilhado
 *     responses:
 *       '200':
 *         description: Lista de filmes favoritos vinculados ao link compartilhado
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
 *       '404':
 *         description: Link compartilhado não encontrado
 *       '500':
 *         description: Erro ao buscar filmes vinculados ao link compartilhado
 */
router.post('/', sharedLinksController.createSharedLink);
router.get('/:uuid', sharedLinksController.getFavoritesBySharedLink);

module.exports = router;
