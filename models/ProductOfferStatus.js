const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductOfferStatusDefinition=require('../tabledefinitions/ProductOfferStatus');
const ProductOfferStatus=sequelize.define('productOfferStatus',ProductOfferStatusDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=ProductOfferStatus;