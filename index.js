const express=require('express');
const app=express();
const users_routes=require('./routes/user.js');

//settings
app.set('port',process.env.PORT||3000); //set the number port for listen request
//Middleware
app.use(express.json());//let us access to the info sended by json format

///Routes
app.use(users_routes);
//starting the server
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});

    