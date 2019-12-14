const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const StatusTransaction=require('../models/StatusTransaction');
const PaymentMethod=require('../models/PaymentMethod');

module.exports={
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true 
    },
  paymentMethod:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:{tableName:'paymentMethod'},//
        key:'id'
        }
  },
  idStatus:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:{tableName:'statusTransaction'},
        key:'id'
        }
  }
  }