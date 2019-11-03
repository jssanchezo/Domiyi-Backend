const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const CompanyStatus=sequelize.define('companyStatus',{
  id:{
    type:Sequalize.INTEGER,
    primaryKey:true 
  },
status:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=CompanyStatus;