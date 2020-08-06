const express = require("express");
const router = express.Router();

const PostController = require("../controllers/PostController");

router.get("/", PostController.getPostAll);
router.get("/:id", PostController.getPost);

router.post("/", PostController.savePost);

router.patch("/:id", PostController.updatePost);

router.delete("/:id", PostController.deletePost);

module.exports = router;
