const express = require('express');
//para tests
//var request =require('supertest');
//
const PromoFactory = require('./POJO/PromoFactory');
const app = express();
const users_routes = require('./routes/user.js');

//we call the routes for the frontend
const company_routes = require('./routes/company.js');
const productsStatus_routes = require('./routes/productsStatus.js');
const companiesStatus_routes = require('./routes/companiesStatus.js');
const order_routes = require('./routes/order')
const category_routes = require('./routes/category');
const product_routes = require('./routes/product.js');
const authentication_route = require('./authentication/authenticationRoute.js');
const detail_routes = require('./routes/detail');
const productOffer_routes = require('./routes/ProductOffer');
const paymentMethod_routes = require('./routes/paymentMethod');
const transaction_routes = require('./routes/transaction');
const cors = require('cors'); //solve problems with cors on requests
const UserController = require('./controllers/user.js');
const CompanyController = require('./controllers/company.js');
const ProductController = require('./controllers/product');
const UserAddress = require('./controllers/user.js');
const CompanyDeliveryCost = require('./controllers/company');
const offer_routes=require('./routes/offer');
const typeoffer_routes=require('./routes/typeoffer');
//settings
app.set('port', process.env.PORT || 3000); //set the number port for listen request
//Middleware
app.use(cors());
app.use(express.json()); //let us access to the info sended by json format

///Routes: use the routes
app.use(typeoffer_routes);
app.use(users_routes);
app.use(offer_routes);
app.use(company_routes);
app.use(companiesStatus_routes);
app.use(productsStatus_routes);
app.use(category_routes);
app.use(product_routes);
app.use(authentication_route);
app.use(order_routes);
app.use(detail_routes);
app.use(productOffer_routes);
app.use(paymentMethod_routes);
app.use(transaction_routes);
//starting the server
/*promofactory = new PromoFactory();
var discount = promofactory.getPromo("DESCUENTO");
var product = { price: 3000 };
product = discount.applyPromo(product, 0.1);
console.log("price with 10 % off is " + product.price);
var minuspricepromo = promofactory.getPromo("MENOS PRECIO");
product = minuspricepromo.applyPromo(product, 1000);
console.log("price with 10 % off is and minus 1000 is " + product.price);
*/
//  prom.applyPromo();
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
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

/*

describe('Is email correct', function() {

    // This is the name of the test
    it('for test@gmail.com is validEmail must return true ', function(done) {
        var correctEmail = UserController.validateEmail("test@gmail.com")
        if (correctEmail) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }
        // We want this test to pass.
    });

});
describe('Its not a valid password', function() {

    // This is the name of the test
    it('For 12 must return false', function(done) {
        var correctPassword = UserController.validatePassword("12")
        if (!correctPassword) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }
        // We want this test to pass.
    });

});


describe('Is IdAdmin number correct', function() {

    // This is the name of the test
    it('for idadmin 1 must return true', function(done) {
        var correctIdAdmin = CompanyController.validateIdAdmin(1)
        if (correctIdAdmin) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }
        // We want this test to pass.
    });


});


describe('Is IdAdmin type correct', function() {

    // This is the name of the test
    it('for 134 must return true ', function(done) {
        var correctTypeIdAdmin = CompanyController.validateTypeIdAdmin(134)
        if (correctTypeIdAdmin) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }
        // We want this test to pass.
    });


});








describe('The price  is  valid', function() {

    // This is the name of the test
    it('for price -4567 Should return  false', function(done) {
        var correctPrice = ProductController.isValidPrice(-4567);

        if (!correctPrice) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }
        // We want this test to pass.
    });


});
describe('The description is not empty', function() {

    // This is the name of the test
    it('for "" Should return  false', function(done) {
        var correctDescription = ProductController.isValidDescription("");

        if (!correctDescription) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }
        // We want this test to pass.
    });


});

describe('Comprobar campos de inicio de sesion no esten vacios', function() {

    // This is the name of the test
    it('for "" Should return  false', function(done) {
        var correctUserName = UserController.isValidUserName("");

        if (!correctUserName) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Username no es valido"));
        }
        // We want this test to pass.
    });

});

describe('The phone  is non negative', function() {

    // This is the name of the test
    it('for phone -2076856 Should return  false', function(done) {
        var correctPhone = UserController.isValidPhone(-2076856);

        if (!correctPhone) {
            // If the behavior is as expected, call done with no argument.
            done();
        } else {
            // Otherwise, call done with an error.
            done(new Error("Not sure what's happened."));
        }
        // We want this test to pass.
    });


});
describe('Its not a valid Address',function () {
    it('Should return true',function (done) {
        var correctAddress = UserAddress.validateAddress("Calle 53 Nro 27-34")
        if(correctAddress){
            done();
        }else{
            done(new Error("Not sure what's happened"))
        }
    })
});
describe('Its not a valid DeliveryCost',function(){
    it('Should return true or false', function (done) {
        var correctDeliveryCost = CompanyDeliveryCost.validateDeliveryCost("5000")
        if(correctDeliveryCost){
            done();
        }else{
            done(new Error("Not sure what's happened"))
        }
    })
});




*/

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
