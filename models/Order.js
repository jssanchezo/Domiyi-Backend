const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const User=require('./User');
const Company=require('./Company');
const Transaction=require('./Transaction');
const OrderStatus=require('./OrderStatus');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const OrderDefinition=require('../tabledefinitions/Order');
const Order=sequelize.define('order',OrderDefinition
,{
    timestamps:false,
    freezeTableName: true
});

module.exports=Order;