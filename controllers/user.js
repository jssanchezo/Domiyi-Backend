const UserRepository=require('../repositories/user.js');

const UserController={
async getAll(req,res){
await UserRepository.SelectAll(req,res);
}


}
module.exports=UserController;
