const CategoryRepository = require('../repositories/category.js');
const AuthorizationServer=require('../authentication/authorizationServer');
const CategoryController = {
    async getAll(req, res) {//get all products in database
        await CategoryRepository.SelectAll(req, res);
    }
}
module.exports = CategoryController;
