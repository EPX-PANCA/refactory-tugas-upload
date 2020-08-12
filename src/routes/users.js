const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/UserController");
//const middle = require("../middleware/middle");
const upload = require("../middleware/uploads")


router.get("/", UsersController.getUserAll);

router.get("/:id", UsersController.getUser);

router.post("/", upload.single('photo'), UsersController.saveUser);

router.patch("/:id", UsersController.updateUser);

router.delete("/:id", UsersController.deleteUser);





module.exports = router;
