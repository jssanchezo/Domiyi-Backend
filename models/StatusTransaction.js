const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const StatusTransaction=sequelize.define('statusTransaction',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
name:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=StatusTransaction;