const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const StatusTransaction=require('./StatusTransaction');
const PaymentMethod=require('./PaymentMethod');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Transaction=sequelize.define('transaction',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
paymentMethod:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
      model:PaymentMethod,
      key:'id'
      }
},
idStatus:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
      model:StatusTransaction,
      key:'id'
      }
}
},{
    timestamps:false,
    freezeTableName: true
});
module.exports=Transaction;