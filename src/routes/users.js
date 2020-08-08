const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UserController");
const middle = require("../middleware/middle");



router.get("/", middle, UsersController.getUserAll);

router.get("/:id", middle, UsersController.getUser);

router.post("/", middle, UsersController.saveUser);

router.patch("/:id", middle, UsersController.updateUser);

router.delete("/:id", middle, UsersController.deleteUser);

module.exports = router;
