const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const ProductOffer=require('../models/ProductOffer')
const Sequelize=require('sequelize');
const ProductOfferRepository={
    
    async selectById(id){
    try{    
    const productsOffers=await ProductOffer.findAll({
        where:{
            id:id
        }
    }); 
    var finalProductOffers=JSON.parse(JSON.stringify(productsOffers));
    console.log("finals"+finalProductOffers);
    return productsOffers;
    }catch(e){
    return null;
    }
    }
    ,
    async SelectByIdProduct(id) {
           try{
            const productoffers=await ProductOffer.findAll({
                where:{
                    [Sequelize.Op.and]:[{idProduct:id},{idStatus:1}]
                }
            });
            var finalProductOffers=JSON.parse(JSON.stringify(productoffers[0]));
    //console.log("finals"+JSON.parse(JSON.stringify(productoffers[0])));
            //return productoffers;
            return finalProductOffers;
           }catch(e){
            return null;
           }

        
        },


  async registerDefault(product){
    try{
       var  productoffer=await ProductOffer.create({
            //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
            idProduct:product.id,
            idOffer:1,
            idStatus:1
            
         
        });
        var finalproductoffer=JSON.parse(JSON.stringify(productoffer));
        console.log(finalproductoffer);
        return productoffer[0];
      }catch(e){
        console.log(e);
          return null;
        
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
    },
    async selectIdsProductByIds(ids){
        try{
            ids=await ProductOffer.findAll({
                attributes:['idProduct'],
                where:{
                    id:{
                        [Sequelize.Op.in]:ids
                    }
                }
            });
            return ids;
        }catch(e){
            return null;
        }
    }
}
module.exports=ProductOfferRepository;

