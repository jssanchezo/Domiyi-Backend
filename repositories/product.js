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
    SelectByPrice(req, res, price,price2) {
        price = 50;
        price2 = 200;

        connection.query(ProductTable.getQuerySelectByPrice(price, price2),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    //
    SelectById(req, res) {
        Id = 2;
        connection.query(ProductTable.getQuerySelectById(Id),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
};

module.exports=productRepository;