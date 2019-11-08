const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const Order=require('../models/Order');
const Sequelize=require('sequelize');
const OrderRepository={
    
    //
    //
    async SelectById(req, res) {
      
        },



    async register(req,res){
      try{
        order=await Order.create({
            //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
            idCompany:req.body.idCompany,
            idUser:req.body.idUser,
            address:req.body.address
         
        });
        res.status(201).json(order);
      }catch(e){
          res.status(400).send("se produjo un error");
          console.log(e);
      }
    }
}
module.exports=OrderRepository;