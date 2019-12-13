const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const PaymentMethod=sequelize.define('paymentMethod',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true 
  },
paymentMethod:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false,
    freezeTableName: true
});
module.exports=PaymentMethod;

