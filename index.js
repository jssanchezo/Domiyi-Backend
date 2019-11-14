const express=require('express');
//para tests
var request =require('supertest');
//

const app=express();
const users_routes=require('./routes/user.js');

//we call the routes for the frontend
const company_routes=require('./routes/company.js');
const productsStatus_routes=require('./routes/productsStatus.js');
const companiesStatus_routes=require('./routes/companiesStatus.js');
const order_routes=require('./routes/order')
const category_routes=require('./routes/category');
const product_routes=require('./routes/product.js');
const authentication_route=require('./authentication/authenticationRoute.js');
const detail_routes=require('./routes/detail');
const productOffer_routes=require('./routes/ProductOffer');
const cors=require('cors');//solve problems with cors on requests
const UserController = require('./controllers/user.js');


//settings
app.set('port',process.env.PORT||3000); //set the number port for listen request
//Middleware
app.use(cors());
app.use(express.json());//let us access to the info sended by json format

///Routes: use the routes
app.use(users_routes);

app.use(company_routes);
app.use(companiesStatus_routes);
app.use(productsStatus_routes);
app.use(category_routes);
app.use(product_routes);
app.use(authentication_route);
app.use(order_routes);
app.use(detail_routes);
app.use(productOffer_routes);
//starting the server
    
app.listen(app.get('port'),()=>{
    console.log('server on port',app.get('port'));
});
/*
function createApp() {
    app = express();
    var router = express.Router();
    router.route('/').get(function(req,res){
        return res.json({goodCall :true});
    });
    app.use(router);
    return app;
}
 */



describe('Is email correct', function() {

    // This is the name of the test
    it('Should return true or false', function(done) {
        var correctEmail = UserController.validateEmail("test@gmail.com")
            if (correctEmail) {
                // If the behavior is as expected, call done with no argument.
                done();
            }

            else {
                // Otherwise, call done with an error.
                done(new Error("Not sure what's happened."));
            }
            // We want this test to pass.
    });

});
describe('Its not a valid password', function() {

    // This is the name of the test
    it('Should return true or false', function(done) {
        var correctPassword = UserController.validatePassword("12")
        if (!correctPassword) {
            // If the behavior is as expected, call done with no argument.
            done();
        }

        else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }
        // We want this test to pass.
    });

});

















/*const User=require('./models/User');
User.sync({force:true}).then(()=>{
return User.create({
    email:'jj@hotmail.com',
    password:'1111',
    name:'juan',
    type:'us'
});
});*/
//const company=require('./models/Company');
/*const Cat=require('./models/Models');
const User=Cat.User;
const Prueba=User.findAll({
attributes:['id']
});*/




    