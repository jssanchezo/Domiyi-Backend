const Sequelize=require('sequelize');
module.exports={
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true 
    },
  name:{
      type:Sequelize.STRING,
      allowNull:false
  }
  }