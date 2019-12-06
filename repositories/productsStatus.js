const express=require('express');
const connection = require('../Database-Utilities/Connection.js');
const ProductsStatusTable=require('../Database-Utilities/ProductsStatus.js');
const ProductStatus=require('../models/ProductStatus');
const rollbar=require('../Logger/logger');
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
                res.status(200).json(states);
        }catch(e){
            rollbar.error(e,req);
            res.status(400).send("hubo un problema");
            console.log(e);
        }
            
    }
}



module.exports = ProductsStatusRepository;