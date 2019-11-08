const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const Order=require('../models/Order');
const Sequelize=require('sequelize');
const OrderRepository={
    
    //
    //
    async SelectById(req, res) {
        /*connection.query(ProductTable.getQuerySelectById(req.body.id),(err,rows,fields)=>{
          if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }

        });*/
        try{
            product=await Product.findAll({
                
             where:{
                 id:req.body.id

                }
            });
            res.status(200).json(product);
        }catch(e){
            console.log(e);
            res.status(400).send("se produjo un error");
        }
        
        },



    async register(req,res){
      try{
        order=await Order.create({
            //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
            idCompany:req.body.idCompany,
            idUser:req.body.name,
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