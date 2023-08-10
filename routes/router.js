const router = require("express").Router();

// Filmes routes
const filmesRouter = require("./filmes");

// Series routes
const seriesRouter = require("./series");

const userRouter = require("./users");

router.use("/", filmesRouter);
router.use("/", seriesRouter);
router.use("/", userRouter);

module.exports = router;
