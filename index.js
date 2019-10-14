const express=require('express');
const app=express();
const users_routes=require('./routes/user.js');


const company_routes=require('./routes/company.js');
const productsStatus_routes=require('./routes/productsStatus.js');


const product_routes=require('./routes/product.js');
const cors=require('cors');


//settings
app.set('port',process.env.PORT||3000); //set the number port for listen request
//Middleware
app.use(cors());
app.use(express.json());//let us access to the info sended by json format

///Routes
app.use(users_routes);


app.use(company_routes);
app.use(productsStatus_routes);

app.use(product_routes);

//starting the server
    
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});

    