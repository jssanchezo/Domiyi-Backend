const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const StatusTransaction=require('./StatusTransaction');
const PaymentMethod=require('./PaymentMethod');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const TransactionDefinition=require('../tabledefinitions/Transaction');
const Transaction=sequelize.define('transaction',TransactionDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=Transaction;