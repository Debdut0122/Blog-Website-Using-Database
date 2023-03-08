const express = require("express");

const blogController = require("../controllers/blogController");
const router = express.Router();

router.get("/", blogController.getHome);
router.post("/", blogController.postHome);

router.get("/create", blogController.getCreate);

router.get("/:id", blogController.getById);
router.delete("/:id", blogController.deleteById);
module.exports = router;
