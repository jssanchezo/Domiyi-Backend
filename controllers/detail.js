const DetailRepository = require('../repositories/detail');
const AuthorizationServer = require('../authentication/authorizationServer');
const ProductOfferRepository = require('../repositories/ProductOffer');
const rollbar=require('../Logger/logger');
const Product = require('../repositories/product');
const PromoFactory=require('../POJO/PromoFactory')
const DetailController = {

    async getByIdOrder(req, res) {

        const details = await DetailRepository.SelectByIdOrder(req.body.idOrder);
        if (details == null) {
            res.status(400).send("hubo un error");
        } else {

            res.status(200).json(details);
        }


    },
    async register(req, res) {//let us register products
        
       var productoffer=await ProductOfferRepository.SelectByIdProduct(req.body.idProduct);
        if(productoffer==null){
         productoffer=await ProductOfferRepository.registerDefault({id:req.body.idProduct});
        }
        
        
        
        req.body.idProductOffer=productoffer.id;
        const detail=await DetailRepository.register(req, res);
        if(detail instanceof Error){
            rollbar.error(detail,req);
            res.status(400).send("hubo un error");

        }else{
            res.status(201).json(detail);
        }
    },
    async getByOrderId(req, res) {
        const details = await DetailRepository.SelectByOrderId(req.body.idOrder);
        if (details instanceof Error) {
            rollbar.error(details,req);
            res.status(400).send("esta vacio");
        } else {

            res.status(200).json(details);
        }

    },
    async updateDetailsOrder(req, res) {
        await DetailRepository.UpdateIdOrder(req, res);
    },
    async registerMany(req,res){
       
        var promo;
        var promoFactory=new PromoFactory();
        req.body.details.map(dt=>{
            promo=promoFactory.getPromo(dt.type);
            promo.applyPromo(dt,dt.value);
        });
        
        
                const inserted=await DetailRepository.RegisterMany(req.body.details);
if(inserted instanceof Error){
    rollbar.error(inserted,req);
    res.status(400).send("hubo un error");
    }else{

res.status(201).json(inserted);

}


    }
}
module.exports = DetailController;



