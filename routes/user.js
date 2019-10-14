const express=require('express');
const router=express.Router();
const UserController= require('../controllers/user.js');
router.get('/users',UserController.getAll);
router.post('/users/register',UserController.register);

module.exports=router;