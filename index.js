const express=require('express');
const app=express();
const user=require('./Database-Utilities/Users');

//settings
app.set('port',process.env.PORT||3000); //set the number port for listen request
//Middleware
app.use(express.json());//let us access to the info sended by json format

///Routes

app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});

    