const ProductRepository = require('../repositories/product.js');

const ProductController = {
    async getAll(req, res) {
        await ProductRepository.SelectAll(req, res);
    },
    async getByPrice(req, res) {
        await ProductRepository.SelectByPrice(req, res);
    },
    async getById(req, res) {
        await ProductRepository.SelectById(req, res);
    },
    async register(req, res) {
        await ProductRepository.register(req, res);
    }
}
module.exports = ProductController;


