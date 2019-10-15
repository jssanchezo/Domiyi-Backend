const ProductRepository = require('../repositories/product.js');

const ProductController = {
    async getAll(req, res) {//get all products in database
        await ProductRepository.SelectAll(req, res);
    },
    async getByPrice(req, res) {//for get products in range of price
        await ProductRepository.SelectByPrice(req, res);
    },
    async getById(req, res) {
        await ProductRepository.SelectById(req, res);
    },
    async register(req, res) {//let us register products
        await ProductRepository.register(req, res);
    }
}
module.exports = ProductController;


