const router = require("express").Router();

// Filmes routes
const filmesRouter = require("./filmes");

// Series routes
const seriesRouter = require("./series");

router.use("/", filmesRouter);
router.use("/", seriesRouter);

module.exports = router;