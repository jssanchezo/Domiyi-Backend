const express = require('express');
const connection = require('../Database-Utilities/Connection.js');
const CompanyTable = require('../Database-Utilities/Companies.js');
//methods for the routes
const Company = require('../models/Company');
const Sequelize = require('sequelize');
const sequelize = require('../Database-Utilities/SequelizeConnection');
const rollbar=require('../Logger/logger');
const CompanyRepository = {
    /*SelectByCategory(req,res){//here we implement a query with help of database utilites
        connection.query(CompanyTable.getQueryCompaniesByCategory(req.body.category),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });
    },*/
    async SelectByAdminId(req, res) {//select the company by Id
        /*connection.query(CompanyTable.getQueryCompanyByIdAdmin(req.body.adminId),(err,rows,fields)=>{
            if(!err){
                res.json(rows);//return json objects
            }else{
                console.log(err);
            }
        });*/
        try {
            const companies = await Company.findAll({
                where: {
                    idAdmin: req.body.idAdmin
                }
            });
            res.status(200).json(companies);
        } catch (e) {
            res.status(400).send("hubo un error");
        }

    },
    async SelectAll(req, res) {
        /*connection.query(CompanyTable.getQuerySelectAll(), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });*/
        try {
            const companies = await Company.findAll({});
            res.status(200).json(companies);
        } catch (e) {
            res.status(400).send("hubo un error");
        }

    },
    async SelectByName(req, res) {
        /*connection.query(CompanyTable.getQuerySelectByCompany(req.body.name),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
        try {
            const companies = await Company.findAll({
                where: {
                    name: req.body.name
                }
            });
            res.status(200).json(companies);
        } catch (e) {
            res.status(400).send("hubo un error");
        }

    },
    async SelectById(req, res) {
        /*connection.query(CompanyTable.getQuerySelectById(req.body.id),(err,rows,fields)=>{
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
        try {
            const companies = await Company.findAll({
                where: {
                    id: req.body.id
                }
            });
            res.status(200).json(companies);
        } catch (e) {
            res.status(400).send("hubo un error");
        }

    },//let us register 
    async register(req, res) {
        /*connection.query(CompanyTable.getQueryInsert(req.body),(err,rows,fields)=>{
//the body is the object wich receive the methos of database utilities
            if(!err){
                res.json(rows);
            }else{
                console.log(err);
            }
        });*/
        var company;
        try {
            company = await Company.create({
                //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
                idStatus: req.body.idStatus,
                name: req.body.name,
                image: req.body.image,
                idAdmin: req.body.idAdmin,
                deliveryCost: req.body.deliveryCost,


            });
            res.status(201).json(company);
        } catch (e) {
            res.status(400).send("se produjo un error");
            console.log(e);
        }

    },
    async SelectCompanyByIdCategory(idCategory,res) {
        try {
            const companies = await sequelize.query("SELECT * FROM companiesByCategory  where idCategory = " + idCategory, {type: Sequelize.QueryTypes.SELECT});
            res.status(200).json(companies);
            return companies;
        } catch (e) {
            console.log(e);
            res.status(400).send("se produjo un error");
            return null;
        }

    }
};

module.exports = CompanyRepository;

/*
    async SelectByOrderId(idOrder) {
        try {
            const details = await sequelize.query("SELECT * FROM productAndDetails where idOrder=" + idOrder, {type: Sequelize.QueryTypes.SELECT})

            return details;
        } catch (e) {

            return null;
        }
    },

 */