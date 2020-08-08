const authController = require("../controllers/authController")
const router = require('express').Router();
//const middle = require("../middleware/middle");


router.post('/login', authController.login)
//router.get('/user', middle, authController.user)

module.exports = router