const express=require('express');
const connection = require('../Database-Utilities/Connection.js');
const CompanyStatus=require('../models/CompanyStatus');
const rollbar=require('../Logger/logger');
const CompanysStatusRepository={
    async  SelectAll(req,res){//get all products status registered
        try{
            const states=await CompanyStatus.findAll({

            });
            res.json(states);
        }catch(e){
            console.log(e);
        }

    }
}



module.exports = CompanysStatusRepository;