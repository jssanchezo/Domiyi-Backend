const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Product=require('./Product');
const Offer=require('./Offer');
const ProductOfferStatus=require('./ProductOfferStatus');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductOffer=sequelize.define('product-offer',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true    
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
status:{
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