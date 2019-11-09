const ProductRepository = require('../repositories/product.js');
const AuthorizationServer=require('../authentication/authorizationServer');
const ProductController = {
    async getAll(req, res) {//get all products in database
        await ProductRepository.SelectAll(req, res);
    },
    async getByPrice(req, res) {//for get products in range of price
        await ProductRepository.SelectByPrice(req, res);
    },
    async getById(req, res) {
        //var validated=AuthorizationServer.validateUser(req,res);
        //if(validated){
            await ProductRepository.SelectById(req, res);
        //}else{
          //  res.send({
            //    error:"no hay token"
            //});
       // }

    },

    async getByIdCompany(req, res) {

        await ProductRepository.SelectByIdCompany(req, res);

    },
    async getCompanyByCategory(req, res) {

        await ProductRepository.SelectCompanyByCategory(req, res);

    },
    async register(req, res) {//let us register products
        await ProductRepository.register(req, res);
    }
}
module.exports = ProductController;


