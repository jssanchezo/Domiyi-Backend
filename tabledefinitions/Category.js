const Sequelize=require('sequelize');
module.exports={
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true,
      autoIncrement:true 
    },
  category:{
      type:Sequelize.STRING,
      allowNull:false
  },
  linkimg:{
      type:Sequelize.STRING,
      allowNull:false
  }
  }