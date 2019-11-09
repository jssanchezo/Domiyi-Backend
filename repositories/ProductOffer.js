const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const ProductOffer=require('../models/ProductOffer')
const Sequelize=require('sequelize');
const ProductOfferRepository={
    
    
    
    async SelectById(req, res) {
        
        
        },


  async registerDefault(product){
    try{
        productoffer=await ProductOffer.create({
            //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
            idProduct:product.id,
            idOffer:1,
            idStatus:1
            
         
        });
        
        return productoffer;
      }catch(e){
        console.log(e);
      }
  },
    async register(req,res){
        try{
        productoffer=await ProductOffer.create({
            //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
            idProduct:req.body.idProduct,
            idOffer:req.body.idOffer,
            
         
        });
        res.status(201).json(productoffer);
        
      }catch(e){
          res.status(400).send("se produjo un error");
          console.log(e);
      }
    }
}
module.exports=ProductOfferRepository;

