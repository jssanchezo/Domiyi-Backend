const Sequelize=require('sequelize');
const TypeOffer=require('../models/typeOffer');
module.exports={
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true 
    },
  value:{
      type:Sequelize.DOUBLE,
      allowNull:false
  },//
  idType:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
        model:{tableName:'typeOffer'},
        key:'id'
        }
  }
  }