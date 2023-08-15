const router = require("express").Router();

const verifyToken = require("../middlewares/verifyToken");
const contentController = require("../controllers/contentController");
const commentController = require("../controllers/commentController");
const ratingController = require("../controllers/ratingController");

router
  .route("/contents")
  .post(verifyToken, contentController.create)
  .get(contentController.getAll);

router.route("/contents/filmes").get(contentController.getAllMovies);

router.route("/contents/series").get(contentController.getAllSeries);

router
  .route("/contents/:id/comments")
  .post(verifyToken, commentController.create)
  .get(commentController.getCommentsByContent);

router.route("/contents/:id/ratings").post(verifyToken, ratingController.rate);

router
  .route("/contents/:id")
  .get(contentController.getById)
  .delete(verifyToken, contentController.delete)
  .put(verifyToken, contentController.update)
  .patch(verifyToken, contentController.patch);

module.exports = router;
