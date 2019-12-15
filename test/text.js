const express = require('express');
//para tests


//var request =require('supertest');
//

const UserController = require('../controllers/user');
const CompanyController = require('../controllers/company.js');
const ProductController = require('../controllers/product');
const UserAddress = require('../controllers/user.js');
const CompanyDeliveryCost = require('../controllers/company');




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


