const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const UserDefinition=require('../tabledefinitions/User');
const User=sequelize.define('user',UserDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=User;