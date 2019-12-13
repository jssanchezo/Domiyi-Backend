const Sequelize=require('sequelize');
module.exports={
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
  status:{
      type:Sequelize.STRING,
      allowNull:false
  }
  }