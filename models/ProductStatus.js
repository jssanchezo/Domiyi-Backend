const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductStatusDefinition=require('../tabledefinitions/ProductStatus');
const ProductStatus=sequelize.define('productStatus',ProductStatusDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=ProductStatus;