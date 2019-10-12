const express =require('express');

const connection=require('../Database-Utilities/Connection.js');
const ProductTable=require('../Database-Utilities/Products.js');
const productRepository={
    SelectAll(req,res){
        connection.query(ProductTable.getQuerySelectAll(),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    // price,price2
    SelectByPrice(req, res) {
        connection.query(ProductTable.getQuerySelectByPrice(50, 100),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
};

module.exports=productRepository;