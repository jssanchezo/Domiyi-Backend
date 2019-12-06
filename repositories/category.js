const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const Category=require('../models/Category');
const Sequelize=require('sequelize');
const rollbar=require('../Logger/logger');
const CategoryRepository={
    async SelectAll(req,res){
        try{
            const categories=await Category.findAll({
                
                });
                res.json(categories);
        }catch(e){
            console.log(e);
        }
            
    }
}
module.exports=CategoryRepository;

