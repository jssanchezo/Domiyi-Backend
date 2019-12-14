const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Product=require('../models/Product');
const Offer=require('../models/Offer');
const ProductOfferStatus=require('../models/ProductOfferStatus');
module.exports={
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true  
    },
    idProduct:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:{tableName:'product'},
        key:'id'
        }
  },
idOffer:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:{tableName:'offer'},
        key:'id'
        }
},
idStatus:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:{tableName:'productOfferStatus'},
        key:'id'
        }
}
}