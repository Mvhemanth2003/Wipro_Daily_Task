const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const controller = require("../controllers/bookController");

const validateBook = [
    body("title").notEmpty().withMessage("Title required"),
    body("author").notEmpty().withMessage("Author required"),
    body("price").isNumeric().withMessage("Price must be a number")
];

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", validateBook, controller.create);
router.put("/:id", validateBook, controller.update);
router.delete("/:id", controller.delete);

module.exports = router;