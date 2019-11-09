const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const Detail=require('../models/Detail');
const Sequelize=require('sequelize');
const DetailRepository={
    
    //
    //
    async SelectByIdOrder(idOrder) {
      try{
        var details=await Detail.findAll({
         attributes:['id'],
          where:{
            idOrder:idOrder
          }
        });
        return details;
      }catch(e){
          return null;
      }
        },



    async register(req,res){
      try{
        detail=await Detail.create({
            //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
            idOrder:req.body.idOrder,
            idProductOffer:req.body.idProductOffer,
            quantity:req.body.quantity,
            observation:req.body.observation,
            unitprice:req.body.unitprice            
         
        });
        res.status(201).json(detail);
      }catch(e){
          res.status(400).send("se produjo un error");
          console.log(e);
      }
    }
}
module.exports=DetailRepository;