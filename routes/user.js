const express=require('express');
const router=express.Router();

const UserController= require('../controllers/user.js');
router.get('/users',UserController.getAll);
module.exports=router;