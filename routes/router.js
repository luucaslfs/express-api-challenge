const router = require("express").Router();

// Filmes routes
const filmesRouter = require("./filmes");

router.use("/", filmesRouter);

module.exports = router;