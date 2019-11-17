const ProductRepository = require('../repositories/product.js');
const ProductOfferRepository=require('../repositories/ProductOffer');
const AuthorizationServer=require('../authentication/authorizationServer');
const Detail =require('../repositories/detail');
const ProductOfferController = {
    async getIdsProductByIdsProductOffer(req,res){
        var ids=[];
        
        req.body.ids.map(st=>{
            ids.push(st.id);
        });
        const idsProduct=await ProductOfferRepository.selectIdProductByIds(ids);
        if(idsProduct==null){
            res.status(400).send("hubo un error");
        }else{
            res.status(200).json(idsProduct)
        }
        
    }
    
}
module.exports = ProductOfferController;
