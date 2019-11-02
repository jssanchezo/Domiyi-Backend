const express = require('express');
const connection = require('../Database-Utilities/Connection.js');
const UserTable = require('../Database-Utilities/Users.js');
const userRepository = {

    SelectAll(req, res) {
//get all users registered
        connection.query(UserTable.getQuerySelectAll(), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    },
    register(req,res){//req body is an user in json format
        connection.query(UserTable.getQueryInsert(req.body),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectByUsername(req,res,callback){//validate if the user has this password
        connection.query(UserTable.getQuerySelectByUsername(req.body.username),(err,rows,fields)=>{
            if(!err){
                
              var results;
              results=JSON.parse(JSON.stringify(rows));
              callback(results);
              //console.log(rows);
                
            }else{
                console.log(err);
            }
        });
      
    }
}


module.exports = userRepository;

/*
    register(req,res){
        connection.query(ProductTable.getQueryInsert(req.body),(err,rows,fields)=>{

            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
 */