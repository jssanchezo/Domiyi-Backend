const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Category=sequelize.define('productCategory',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
category:{
    type:Sequelize.STRING,
    allowNull:false
},
    linkimg:{
        type:Sequelize.STRING,
        allowNull:false
    }
}, {
    timestamps:false,
    freezeTableName: true
});
module.exports=Category;