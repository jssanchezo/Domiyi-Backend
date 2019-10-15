const express =require('express');
const connection = require('../Database-Utilities/Connection.js');
const CompanyTable = require('../Database-Utilities/Companies.js');

const CompanyRepository={
    SelectByCategory(req,res){
        connection.query(CompanyTable.getQueryCompaniesByCategory(req.body.category),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },
    SelectByAdminId(req,res){
        connection.query(CompanyTable.getQueryCompanyByIdAdmin(req.body.adminId),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
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
    },
    register(req,res){
        connection.query(CompanyTable.getQueryInsert(req.body),(err,rows,fields)=>{

            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
};

module.exports=CompanyRepository;
