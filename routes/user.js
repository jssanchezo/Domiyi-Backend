const express = require('express');
const router = express.Router();//we match all routes with the functions wich it executes
const ProtectRoute=require('../authentication/protectRouteMiddleware');
const UserController = require('../controllers/user.js');
router.get('/users',ProtectRoute, UserController.getAll);
router.post('/users/register', UserController.register);

module.exports = router;//export the routes only