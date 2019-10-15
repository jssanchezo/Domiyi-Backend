const express =require('express');
const connection = require('../Database-Utilities/Connection.js');
const CompanyTable = require('../Database-Utilities/Companies.js');
//methods for the routes 
const CompanyRepository={
    SelectByCategory(req,res){//here we implement a query with help of database utilites
        connection.query(CompanyTable.getQueryCompaniesByCategory(req.body.category),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectByAdminId(req,res){//select the company by Id
        connection.query(CompanyTable.getQueryCompanyByIdAdmin(req.body.adminId),(err,rows,fields)=>{
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
        connection.query(CompanyTable.getQuerySelectByCompany(req.body.name),(err,rows,fields)=>{
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
    register(req,res){
        connection.query(CompanyTable.getQueryInsert(req.body),(err,rows,fields)=>{
//the body is the object wich receive the methos of database utilities
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
};

module.exports=CompanyRepository;
