const DetailRepository = require('../repositories/detail');
const AuthorizationServer=require('../authentication/authorizationServer');
const ProductOfferRepository=require('../repositories/ProductOffer');
const Product=require('../repositories/product');
const DetailController = {
    
    async getByIdOrder(req, res) {
       
       const details=await DetailRepository.SelectByIdOrder(req.body.idOrder);
       if(details==null){
           res.status(400).send("hubo un error");
       }else{
         
           
        res.status(200).json(details);
       }
       
        
    },
    async register(req, res) {//let us register products
        await DetailRepository.register(req, res);
    }
}
module.exports = DetailController;



