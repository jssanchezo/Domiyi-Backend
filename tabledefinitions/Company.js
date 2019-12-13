const Sequelize=require('sequelize');
const CompanyStatus=require('../models/CompanyStatus');

const User=require('../models/User');

module.exports={
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  idStatus:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
          model:CompanyStatus,
          key:'id'
          }
  },
  name:{
      type:Sequelize.STRING,
      allowNull:false
  },
  image:{
      type:Sequelize.STRING,
      allowNull:false
  },
  idAdmin:{
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
          model:User,
          key:'id'
          }    
  },
  deliveryCost:{
      type:Sequelize.DOUBLE,
      allowNull:false
  }
  }