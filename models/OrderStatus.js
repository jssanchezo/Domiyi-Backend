const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const OrderStatusDefinition=require('../tabledefinitions/OrderStatus')
const OrderStatus=sequelize.define('orderStatus',OrderStatusDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=OrderStatus;