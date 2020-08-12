const registerController = require("../controllers/registerController");
const router = require('express').Router();


router.post('/', registerController.sendMail)

module.exports = router;