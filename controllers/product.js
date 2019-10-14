const ProductRepository=require('../repositories/product.js')
const ProductController={
async register(req,res){
    await ProductRepository.register(req,res);
}
}
module.exports=ProductController;