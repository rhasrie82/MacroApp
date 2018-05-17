const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/foods"
router.route("/")
  .get(foodsController.findAll)
  .post(foodsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(foodsController.findById)
  .put(foodsController.update)
  .delete(foodsController.remove);

module.exports = router;
