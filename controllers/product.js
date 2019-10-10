const ProductRepository=require('../repositories/product.js');

const ProductController={
    async getAll(req,res){
        await ProductRepository.SelectAll(req,res);
    }


}
module.exports=ProductController;

