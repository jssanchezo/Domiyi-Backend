const CategoryRepository = require('../repositories/category.js');
const AuthorizationServer = require('../authentication/authorizationServer');
const CategoryController = {
    async getAll(req, res) { //get all products in database
        await CategoryRepository.SelectAll(req, res);
    },
    async getById(req, res){//apply filter by Id
        await CategoryRepository.SelectById(req,res);
    }
}
module.exports = CategoryController;