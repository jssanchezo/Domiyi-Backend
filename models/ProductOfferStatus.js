const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductOfferStatus=sequelize.define('productOfferStatus',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
status:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=ProductOfferStatus;