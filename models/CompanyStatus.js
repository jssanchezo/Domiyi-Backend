const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const CompanyStatusDefinition=require('../tabledefinitions/CompanyStatus');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const CompanyStatus=sequelize.define('companyStatus',CompanyStatusDefinition,{
    timestamps:false,
    freezeTableName: true
});
module.exports=CompanyStatus;