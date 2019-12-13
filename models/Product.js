const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Company=require('./Company');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Category=require('../models/Category');
const ProductStatus=require('../models/ProductStatus');
const ProductDefinition=require('../tabledefinitions/Product');
//const Company=require('../models/Company');
const Product=sequelize.define('product',ProductDefinition,{
    timestamps:false,
    freezeTableName: true
});

module.exports=Product;