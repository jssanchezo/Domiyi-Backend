const express=require('express');
const app=express();
const users_routes=require('./routes/user.js');
const cors=require('cors');

//settings
app.set('port',process.env.PORT||3000); //set the number port for listen request
//Middleware
app.use(cors());
app.use(express.json());//let us access to the info sended by json format

///Routes
app.use(users_routes);
//starting the server
    
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});

    