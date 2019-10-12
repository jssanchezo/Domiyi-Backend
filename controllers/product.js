const ProductRepository=require('../repositories/product.js');

const ProductController={
    async getAll(req,res){
        await ProductRepository.SelectAll(req,res);
    },
    async getByPrice(req, res){
        await ProductRepository.SelectByPrice(req,res);
    }
}
module.exports=ProductController;

