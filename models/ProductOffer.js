const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductOffer=sequelize.define('product-offer',{
  idProduct:{
    type:Sequalize.INTEGER,
    primaryKey:true
  },
idOffer:{
    type:Sequelize.INTEGER,
    primaryKey:true
},
status:{
    type:Sequelize.INTEGER,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=ProductOffer;