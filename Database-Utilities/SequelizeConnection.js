const Sequelize=require('sequelize');
const sequelize=new Sequelize('bqgr2cirsykagvh6xt6c','ulbibdyyhb9hs6ek','bhKPJzV8AvuovJI3OW4y',{
    host:'bqgr2cirsykagvh6xt6c-mysql.services.clever-cloud.com',
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