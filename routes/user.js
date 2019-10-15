const express = require('express');
const router = express.Router();//we match all routes with the functions wich it executes
const UserController = require('../controllers/user.js');
router.get('/users', UserController.getAll);
router.post('/users/register', UserController.register);

module.exports = router;//export the routes only