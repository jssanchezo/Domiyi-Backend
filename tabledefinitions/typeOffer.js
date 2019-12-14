const Sequelize=require('sequelize');
module.exports={
    id:{
      type:Sequelize.INTEGER,
      primaryKey:true 
    },
  type:{
      type:Sequelize.STRING,
      allowNull:false
  }
  }