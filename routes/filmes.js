const router = require('express').Router();

const verifyToken = require('../middlewares/verifyToken');
const filmeController = require('../controllers/filmeController');
const commentController = require('../controllers/commentController');


router
    .route("/filmes")
    .post(verifyToken, (req, res) => filmeController.create(req, res));

router
    .route("/filmes")
    .get((req, res) => filmeController.getAll(req, res));

router
    .route("/filmes/:id")
    .get((req, res) => filmeController.getById(req, res));

router
    .route("/filmes/:id")
    .delete((req, res) => filmeController.delete(req, res));

router
    .route("/filmes/:id")
    .put((req, res) => filmeController.update(req, res));

router
    .route("/filmes/:id")
    .patch((req, res) => filmeController.patch(req, res));


    // Rota para criar um comentário em um filme
router
    .route("/filmes/:id/comments")
    .post(verifyToken, (req, res) => commentController.create(req, res));

module.exports = router;