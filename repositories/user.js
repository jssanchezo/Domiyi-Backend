const express = require('express');
const connection = require('../Database-Utilities/Connection.js');
const UserTable = require('../Database-Utilities/Users.js');
const User=require('../models/Models').User;
const rollbar=require('../Logger/logger');
const userRepository = {

    async SelectAll(req, res) {
//get all users registered
        /*connection.query(UserTable.getQuerySelectAll(), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });*/
        try{
            const Users=await User.findAll({
                attributes: { exclude: ['password'] }
            });
            res.status(200).json(Users);
        }catch(e){
            rollbar.error(e,req);
            res.status(400).send("hubo un problema");
        }
            
    },
    async register(req,res){//req body is an user in json format
        /*connection.query(UserTable.getQueryInsert(req.body),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
        try{

            const newUser=await User.create({
                email:req.body.email,
                password:req.body.password,
                name:req.body.name,
                phone:req.body.phone,
                address:req.body.address,
                username:req.body.username
               });
               res.status(201).json(newUser);
        }catch(e){
            rollbar.error(e,req);
            res.status(400).send("hubo un error");
        }
    },
    async SelectByUsername(req,res,callback){//validate if the user has this password
        /*connection.query(UserTable.getQuerySelectByUsername(req.body.username),(err,rows,fields)=>{
            if(!err){
                
              var results;
              results=JSON.parse(JSON.stringify(rows));
              callback(results);
              //console.log(rows);
                
            }else{
                console.log(err);
            }
        });*/
        try{
            const user=await User.findAll({
                where:{
                    username:req.body.username
                }
            });
            //res.status(200).json(Users);
            callback(user);
        }catch(e){
            rollbar.error(e,req);
            res.status(400).send("hubo un problema");
        }
        
        
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