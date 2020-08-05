var express = require("express");
const uploadsMiddleware = require("../middleware/uploads");
const UserControllers = require("../controllers/users");
var router = express.Router();

router.get("/", UserControllers.listTodo)

router.post("/", uploadsMiddleware.single("photo"), UserControllers.saveTodo)

router.get("/:id/del", UserControllers.delTodo)

router.get("/:id/det", UserControllers.detailTodo)

router.get("/:id/done", UserControllers.doneTodo)

router.get("/:id/undone", UserControllers.undoneTodo)

module.exports = router;
