const router = require("express").Router();

const verifyToken = require("../middlewares/verifyToken");
const contentController = require("../controllers/contentController");
// If you have a commentController, you can include it as well

router
  .route("/contents")
  .post(verifyToken, contentController.create)
  .get(contentController.getAll);

router.route("/contents/filmes").get(contentController.getAllMovies);

router.route("/contents/series").get(contentController.getAllSeries);

router
  .route("/contents/:id")
  .get(contentController.getById)
  .delete(verifyToken, contentController.delete) // Assuming you want to protect the delete route with a token
  .put(verifyToken, contentController.update) // Assuming you want to protect the update route with a token
  .patch(verifyToken, contentController.patch); // Assuming you want to protect the patch route with a token

// If you have routes related to the commentController, you can define them here as well

module.exports = router;
