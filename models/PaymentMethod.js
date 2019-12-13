const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const PaymentMethodDefinition=require('../tabledefinitions/PaymentMethod');
const PaymentMethod=sequelize.define('paymentMethod',PaymentMethodDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=PaymentMethod;

