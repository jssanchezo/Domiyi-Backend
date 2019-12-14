const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Company=require('./Company');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const StoreDefinition=require('../tabledefinitions/Store');
const Store=sequelize.define('store',StoreDefinition,{
    timestamps:false
});
module.exports=Store;