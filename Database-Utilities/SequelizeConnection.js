const Sequelize=require('sequelize');
const DB=require('./DatabaseDefinition')
const sequelize=new Sequelize(DB.database,DB.user,DB.password,{
    host:DB.host,
    dialect:'mysql',
    sockePath: "steady-webbing-241315:southamerica-east1:domiyi"
});
module.exports=sequelize;