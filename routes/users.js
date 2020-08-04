var express = require("express");
const uploadsMiddleware = require("../middleware/uploads");
const UserControllers = require("../controllers/users");
var router = express.Router();

router.get("/", UserControllers.listTodo)

router.post("/", uploadsMiddleware.single("photo"), UserControllers.saveTodo)

router.get("users/:id/del", UserControllers.delTodo)

router.get("users/:id/det", UserControllers.detailTodo)

module.exports = router;
