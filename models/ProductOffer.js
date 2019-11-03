const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const ProductOffer=sequelize.define('product-offer',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true    
    },
    idProduct:{
    type:Sequelize.INTEGER,
    
  },
idOffer:{
    type:Sequelize.INTEGER,
    
},
status:{
    type:Sequelize.INTEGER,
    allowNull:false
}
},{
    timestamps:false,
    freezeTableName: true
});
module.exports=ProductOffer;