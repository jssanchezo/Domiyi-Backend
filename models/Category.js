const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Category=sequelize.define('category',{
  id:{
    type:Sequalize.INTEGER,
    primaryKey:true 
  },
category:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=Category;