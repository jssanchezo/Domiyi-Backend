const ProductRepository = require('../repositories/product.js');
const ProducOfferRepository=require('../repositories/ProductOffer');
const AuthorizationServer=require('../authentication/authorizationServer');
const ProductController = {
    async getAll(req, res) {//get all products in database
        await ProductRepository.SelectAll(req, res);
    },
    async getByPrice(req, res) {//for get products in range of price
        await ProductRepository.SelectByPrice(req, res);
    },
    async getById(req, res) {
        //var validated=AuthorizationServer.validateUser(req,res);
        //if(validated){
            await ProductRepository.SelectById(req, res);
        //}else{
          //  res.send({
            //    error:"no hay token"
            //});
       // }
        
    },
    async register(req, res) {//let us register products
        var product; 
        product=await ProductRepository.register(req, res);
        if(product==null){
            res.status(400).send("hubo un error");
        }else{
            try{
                
                await ProducOfferRepository.registerDefault(product);
                res.status(201).json(product);
            
        }catch(e){

        }
       
    
    }
}}
module.exports = ProductController;


