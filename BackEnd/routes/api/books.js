const router = require("express").Router();
const bookController = require("../../controllers/bookController");

console.log('requiring book controller')

router.delete("/books/:id", bookController.remove)

router.post("/books", bookController.create)
  
router.get("/books", bookController.findAll)

module.exports = router;
