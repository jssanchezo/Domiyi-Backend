const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const Product=require('../models/Models').Product;
const ProductRepository={
    async SelectAll(req,res){//we obtain all products
        /*connection.query(ProductTable.getQuerySelectAll(),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
        const Prueba=await Product.findAll({
            attributes:['id']
            });
            res.json(Prueba);
            console.log("exitoso");
    },
    //
    SelectByPrice(req, res) {
        connection.query(ProductTable.getQuerySelectByPrice(req.body.price, req.body.price2),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    //
    SelectById(req, res) {
        connection.query(ProductTable.getQuerySelectById(req.body.id),(err,rows,fields)=>{
          if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }

        });
        },



    register(req,res){
        connection.query(ProductTable.getQueryInsert(req.body),(err,rows,fields)=>{

            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
}
module.exports=ProductRepository;

