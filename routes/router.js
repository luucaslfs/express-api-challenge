const router = require("express").Router();

// calling routes
const userRouter = require("./users");
const contentRouter = require("./contents");

router.use("/", userRouter);
router.use("/", contentRouter);

module.exports = router;
