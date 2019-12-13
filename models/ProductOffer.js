const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Product=require('./Product');
const Offer=require('./Offer');
const ProductOfferStatus=require('./ProductOfferStatus');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductOfferDefinition=require('../tabledefinitions/ProductOffer');
const ProductOffer=sequelize.define('productOffer',ProductOfferDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=ProductOffer;