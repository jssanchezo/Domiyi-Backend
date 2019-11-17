const DetailRepository = require('../repositories/detail');
const AuthorizationServer = require('../authentication/authorizationServer');
const ProductOfferRepository = require('../repositories/ProductOffer');
const Product = require('../repositories/product');
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
        
        
       // var addedProductOffer=JSON.parse(JSON.stringify(productoffer));
        //console.log("id"+addedProductOffer[0].id);
        
        req.body.idProductOffer=productoffer.id;
        const detail=await DetailRepository.register(req, res);
        if(detail==null){
            res.status(400).send("hubo un error");

        }else{
            res.status(201).json(detail);
        }
    },
    async getByOrderId(req, res) {
        const details = await DetailRepository.SelectByOrderId(req.body.idOrder);
        if (details == null) {
            res.status(400).send("esta vacio");
        } else {

            res.status(200).json(details);
        }

    },
    async updateDetailsOrder(req, res) {
        await DetailRepository.UpdateIdOrder(req, res);
    }
}
module.exports = DetailController;



