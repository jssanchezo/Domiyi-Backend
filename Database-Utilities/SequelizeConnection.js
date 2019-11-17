const Sequelize=require('sequelize');
const DB=require('./DatabaseDefinition')
const sequelize=new Sequelize(DB.database,DB.user,DB.password,{
    host:DB.host,
    dialect:'mysql',
    pool:{
        max: 5,
        min:0,
        require:30000,
        idle:10000
    },
    port: 3306,
    logging:false
});
module.exports=sequelize;