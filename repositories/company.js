const express =require('express');
const connection = require('../Database-Utilities/Connection.js');
const CompanyTable = require('../Database-Utilities/Company.js');
//methods for the routes 
const CompanyRepository={
    //here we implement a query with help of database utilities
    SelectByAdminId(req,res){ //select the company by Id
        connection.query(CompanyTable.getQueryCompanyByIdAdmin(req.body.idAdmin),(err,rows,fields)=>{
            if(!err){
                res.json(rows);//return json objects
            }else{
                console.log(err);
            }
        });
    },
    SelectAll(req,res) {
        connection.query(CompanyTable.getQuerySelectAll(), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    },
    SelectByCompany(req,res){
        connection.query(CompanyTable.getQuerySelectByCompanyName(req.body.name),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectById(req,res){
        connection.query(CompanyTable.getQuerySelectById(req.body.id),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },//let us register 
    Register(req,res){
        connection.query(CompanyTable.getQueryInsert(req.body),(err,rows,fields)=>{
//the body is the object wich receive the methos of database utilities
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectIdByName(req,res){
        connection.query(CompanyTable.getQueryIdByCompanyName(req.body.name),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectIdStatusByCompanyName(req,res){
        connection.query(CompanyTable.getQueryIdStatusByCompanyName(req.body.name),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectAdminByCompanyName(req,res){
        connection.query(CompanyTable.getQueryAdminByCompanyName(req.body.name),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectImageByCompanyName(req,res){
        connection.query(CompanyTable.getQueryImageByCompanyName(req.body.name),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectDeliveryCostByCompanyName(req,res){
        connection.query(CompanyTable.getQueryDeliveryCostByCompanyName(req.body.name),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
};

module.exports=CompanyRepository;
