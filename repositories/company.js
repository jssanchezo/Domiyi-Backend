const express =require('express');

const connection = require('../Database-Utilities/Connection.js');
const CompanyTable = require('../Database-Utilities/Company.js');
const companyRepository={
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
    }
};

module.exports= companyRepository;
