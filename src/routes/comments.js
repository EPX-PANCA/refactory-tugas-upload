const express = require("express");
const router = express.Router();

const CommentsController = require("../controllers/CommentController");

router.get("/", CommentsController.getCommentAll);
router.get("/:id", CommentsController.getComment);

router.post("/", CommentsController.saveComment);

router.patch("/:id", CommentsController.updateComment);

router.delete("/:id", CommentsController.deleteComment);

module.exports = router;