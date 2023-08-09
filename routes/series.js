const router = require('express').Router();

const serieController = require('../controllers/serieController');

router
    .route("/series")
    .post((req, res) => serieController.create(req, res));

router
    .route("/series")
    .get((req, res) => serieController.getAll(req, res));

router
    .route("/series/:id")
    .get((req, res) => serieController.getById(req, res));

router
    .route("/series/:id")
    .delete((req, res) => serieController.delete(req, res));

router
    .route("/series/:id")
    .put((req, res) => serieController.update(req, res));

router
    .route("/series/:id")
    .patch((req, res) => serieController.patch(req, res));

module.exports = router;