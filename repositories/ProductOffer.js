const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const ProductOffer=require('../models/ProductOffer')
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Sequelize=require('sequelize');
const rollbar=require('../Logger/logger');
const ProductOfferRepository={
    
    async selectById(id){
    try{    
    const productsOffers=await ProductOffer.findAll({
        where:{
            id:id
        }
    }); 
    var finalProductOffers=JSON.parse(JSON.stringify(productsOffers));
    
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
            rollbar.error(e);
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
    },
    async selectByIdCompany(idCompany){
        
        
        
        try{
            
        const   productsOffers=await sequelize.query("SELECT * FROM ProductOffersAndProduct where idCompany =" + idCompany, {type: Sequelize.QueryTypes.SELECT})
            return productsOffers;
        }catch(e){
        
            return e;    
        
        }
    },
    async SelectByProductId(idProduct){
        
        try{
            
            const   productsOffers=await sequelize.query("SELECT * FROM ProductOffersAndProduct where id=" + idProduct, {type: Sequelize.QueryTypes.SELECT})
                return productsOffers;
            }catch(e){
            
                return e;    
            
            }


    },
    async Insert(productoffer){
        try{
            const inserted= ProductOffer.findOrCreate(
                
                
                {where:{
                    idProduct:productoffer.idProduct,
                    idOffer:productoffer.idOffer
                },
                defaults:{
                    idStatus:1
                }
            
            
            
            }).then(([user,created])=>{
                if(!created){
                    user.idStatus=1
                    user.save()
                
                }
                });
            return inserted;
        }catch(e){
            return e;
        }



    },
    async setAllDisabledByIdProduct(idProduct){
        try{
            const updated= await ProductOffer.update({idStatus:2},{where:{idProduct:idProduct}});
            return updated;
        }catch(e){
            return e;
        }
    }
}
module.exports=ProductOfferRepository;

