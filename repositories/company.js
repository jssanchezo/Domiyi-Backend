const express =require('express');

const connection = require('../Database-Utilities/Connection.js');
const CompanyTable = require('../Database-Utilities/Company.js');
const companyRepository={
    SelectByCategory(req,res,category){
        category = 0;
        connection.query(CompanyTable.getQueryCompaniesByCategory(category),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    }
};

module.exports= companyRepository;