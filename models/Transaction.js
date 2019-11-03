const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Transaction=sequelize.define('transaction',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
idpaymentMethod:{
    type:Sequelize.INTEGER,
    allowNull:false
},
idStatus:{
    type:Sequelize.INTEGER,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=Transaction;