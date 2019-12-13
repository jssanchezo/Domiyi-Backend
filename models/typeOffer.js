const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const typeOfferDefinition=require('../tabledefinitions/typeOffer');
const TypeOffer=sequelize.define('typeOffer',typeOfferDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=TypeOffer;