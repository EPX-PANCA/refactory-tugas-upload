const authController = require("../controllers/authController")
const router = require('express').Router();
const passport = require("passport");

router.post('/login', authController.login)
router.get('/user', passport.authenticate("jwt",{session: false}), authController.user)

module.exports = router