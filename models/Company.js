const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Product=require('./Product');
const Order=require('./Order');
const User=require('./User');
const CompanyStatus=require('./CompanyStatus');
const CompanyDefinition=require('../tabledefinitions/Company')
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Company=sequelize.define('company',CompanyDefinition,{
    timestamps:false,
    freezeTableName: true
});

module.exports=Company;