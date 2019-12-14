const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const TypeOffer=require('./typeOffer');
const OfferDefinition=require('../tabledefinitions/Offer')
const Offer=sequelize.define('offer',OfferDefinition,{
    timestamps:false,
    freezeTableName: true//ASI NO SE CAMBIA EL NOMBRE DE LA TABLA A PLURAL AL SINCRONIZAR CON LA BD
});
module.exports=Offer;