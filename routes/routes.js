const router = require('express').Router();
const userController = require('../controllers/userController');
router.post('/user-register', userController.userRegister);
module.exports = router;