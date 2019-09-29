const express=require('express');
const router=express.Router();

const UserController= require('../controllers/user.js');
router.get('/',UserController.getAll);
module.exports=router;