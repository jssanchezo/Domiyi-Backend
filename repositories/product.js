const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const ProductRepository={
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