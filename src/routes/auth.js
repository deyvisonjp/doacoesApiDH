const { Router } = require('express');
const router = Router();

const authController = require('../app/controllers/authController');

router.use("/", authController.auth);

module.exports = router;