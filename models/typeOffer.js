const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const TypeOffer=sequelize.define('typeOffer',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
type:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false,
    freezeTableName: true
});
module.exports=TypeOffer;