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
    }
};

module.exports=productRepository;