const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const CompanyStatus=sequelize.define('companyStatus',{
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
module.exports=CompanyStatus;