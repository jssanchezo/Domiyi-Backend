const Params = require('./DatabaseDefinition.js');
const database = require('mysql');
const connection = database.createConnection({
    host: Params.host,
    user: Params.user,
    password: Params.password,
    database: Params.database//we fix the parameters for the connection to the mysql database


})
connection.connect((err) => {
    if (err) {
        console.log(err);
        return;
    } else {//this method return the connection
        console.log('database is connected');
    }
});
module.exports = connection;