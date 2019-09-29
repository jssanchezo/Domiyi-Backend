const Params=require('./DatabaseDefinition.js');
const database=require('mysql');
const connection=database.createConnection({
host:Params.host,
user:Params.user,
password:Params.password,
database:Params.database


})
connection.connect((err)=>{
if(err){
    console.log(er);
    return;
}else{
    console.log('database is connected');
}
});
module.exports=connection;