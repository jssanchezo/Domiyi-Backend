const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Product=require('./Product');
const Offer=require('./Offer');
const ProductOfferStatus=require('./ProductOfferStatus');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductOffer=sequelize.define('productOffer',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true  
    },
    idProduct:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:Product,
        key:'id'
        }
  },
idOffer:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:Offer,
        key:'id'
        }
},
idStatus:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:ProductOfferStatus,
        key:'id'
        }
}
},{
    timestamps:false,
    freezeTableName: true
});
module.exports=ProductOffer;