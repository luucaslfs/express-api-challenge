const router = require('express').Router();

const filmeController = require('../controllers/filmeController');

router
    .route("/filmes")
    .post((req, res) => filmeController.create(req, res));

module.exports = router;