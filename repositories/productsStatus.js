const express=require('express');
const connection = require('../Database-Utilities/Connection.js');
const ProductsStatusTable=require('../Database-Utilities/ProductsStatus.js');
const ProductsStatusRepository={
    SelectAll(req,res){//get all products status registered
        connection.query(ProductsStatusTable.getQuerySelectAllStatus(),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
}



module.exports = ProductsStatusRepository;