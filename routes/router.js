const router = require("express").Router();

// calling routes
const filmesRouter = require("./filmes");
const seriesRouter = require("./series");
const userRouter = require("./users");
const contentRouter = require("./contents");

router.use("/", filmesRouter);
router.use("/", seriesRouter);
router.use("/", userRouter);
router.use("/", contentRouter);

module.exports = router;
