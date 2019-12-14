const User=require('../models/User');
const Company=require('../models/Company');
const Transaction=require('../models/Transaction');
const OrderStatus=require('../models/OrderStatus');
const Sequelize=require('sequelize');
module.exports={
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  idCompany:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
          model:{tableName:'company'},
          key:'id'
          }
  },
  idUser:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
          model:{tableName:'user'},
          key:'id'
          }
  },
  idTransaction:{
      type:Sequelize.INTEGER,
      allowNull:true,
      references:{
          model:{tableName:'transaction'},
          key:'id'
          }
  },
  date:{
      type:Sequelize.DATE,
      allowNull:false,
      defaultValue:Sequelize.NOW   
  },
  address:{
      type:Sequelize.STRING,
      allowNull:false
  },
  idStatus:{
      type:Sequelize.INTEGER,
      allowNull:true,
      references:{
          model:{tableName:'orderStatus'},
          key:'id'
          },//
      defaultValue:1
  }
  }