const UserRepository=require('../repositories/user.js');

const UserController={
    async getAll(req,res){
        await UserRepository.SelectAll(req,res);
    },
    async register(req, res) {
        await UserRepository.register(req, res);
    }
}
module.exports=UserController;
