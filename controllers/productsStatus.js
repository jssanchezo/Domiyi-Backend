const ProductsStatusRepository =require('../repositories/productsStatus');

const ProductsStatusController={
    async getAll(req,res){
        await ProductsStatusRepository.SelectAll(req,res);
    }
}
module.exports= ProductsStatusController;
