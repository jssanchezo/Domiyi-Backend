const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const CategoryDefinition=require('../tabledefinitions/Category')
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Category=sequelize.define('productCategory',CategoryDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=Category;