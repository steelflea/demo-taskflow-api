const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();

router.get('/', controller.listUsers);
router.get('/:id', controller.getUser);

module.exports = router;
