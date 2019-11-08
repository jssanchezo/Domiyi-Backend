const express=require('express');
const connection = require('../Database-Utilities/Connection.js');
const ProductsStatusTable=require('../Database-Utilities/ProductsStatus.js');
const ProductStatus=require('../models/ProductStatus');
const ProductsStatusRepository={
   async  SelectAll(req,res){//get all products status registered
        /*connection.query(ProductsStatusTable.getQuerySelectAllStatus(),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
        try{
            const states=await ProductStatus.findAll({
                
                });
                res.json(states);
        }catch(e){
            console.log(e);
        }
            
    }
}



module.exports = ProductsStatusRepository;