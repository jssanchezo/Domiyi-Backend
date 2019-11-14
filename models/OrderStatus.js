const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const OrderStatus=sequelize.define('orderStatus',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true,
    autoIncrement:true
  },
status:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false,
    freezeTableName: true
});
module.exports=OrderStatus;