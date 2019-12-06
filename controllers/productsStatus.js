const ProductsStatusRepository =require('../repositories/productsStatus');
const rollbar=require('../Logger/logger');
const ProductsStatusController={
    async getAll(req,res){//query for select all states of products
        await ProductsStatusRepository.SelectAll(req,res);
    }
}
module.exports= ProductsStatusController;
