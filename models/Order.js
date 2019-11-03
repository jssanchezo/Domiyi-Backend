const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Order=sequelize.define('order',{
  id:{
    type:Sequalize.INTEGER,
    primaryKey:true 
  },
idCompany:{
    type:Sequelize.INTEGER,
    allowNull:false
},
idUser:{
    type:Sequelize.INTEGER,
    allowNull:false
},
idTransaction:{
    type:Sequelize.INTEGER,
    allowNull:false
},
date:{
    type:Sequelize.date,
    allowNull:false    
},
address:{
    type:Sequelize.STRING,
    allowNull:false
}
}
,{
    timestamps:false
});
module.exports=Order;