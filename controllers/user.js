const UserRepository=require('../repositories/user.js');//import respository
const jwt = require('jsonwebtoken');

const UserController={//in controller offer methods form  handle the database to the upper layer
    async getAll(req,res){
        await UserRepository.SelectAll(req,res);
    },
    async register(req, res) {
        await UserRepository.register(req, res);
    }
    
    
}
module.exports=UserController;
