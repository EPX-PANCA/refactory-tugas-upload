const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UserController");

router.get("/", UsersController.getUserAll);
router.get("/:id", UsersController.getUser);

router.post("/", UsersController.saveUser);

router.patch("/:id", UsersController.updateUser);

router.delete("/:id", UsersController.deleteUser);

module.exports = router;
