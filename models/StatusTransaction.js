const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const StatusTransactionDefinition=require('../tabledefinitions/StatusTransaction');
const StatusTransaction=sequelize.define('statusTransaction',StatusTransactionDefinition,{
    timestamps:false
});
module.exports=StatusTransaction;