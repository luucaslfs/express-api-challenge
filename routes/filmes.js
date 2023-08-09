const router = require('express').Router();

const filmeController = require('../controllers/filmeController');

router
    .route("/filmes")
    .post((req, res) => filmeController.create(req, res));

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


module.exports = router;