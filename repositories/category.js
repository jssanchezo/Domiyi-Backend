const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const Category=require('../models/Category');
const Sequelize=require('sequelize');
const CategoryRepository={
    async SelectAll(req,res){
        try{
            const categories=await Category.findAll({
                
                });
                res.json(categories);
        }catch(e){
            console.log(e);
        }
            
    },
    async  SelectById(req,res){
        try{
            const categories= await Category.findAll({
                where:{
                    id:req.body.id
                }
            });
            res.status(200).json(categories);
        }catch(e){
            res.status(400).send("hubo un error");
        }

    }
}
module.exports=CategoryRepository;

