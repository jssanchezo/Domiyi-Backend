const UserRepository = require('../repositories/user.js'); //import respository
const rollbar=require('../Logger/logger');

const UserController = { //in controller offer methods form  handle the database to the upper layer
    async getAll(req, res) {
        await UserRepository.SelectAll(req, res);
    },
    async register(req, res) {
        await UserRepository.register(req, res);
    },
    validateEmail(email) {
        if (email.includes('@')) {
            return true;
        } else {
            return false;
        }
    },
    validatePassword(password) {
        if (password.length > 3) {
            return true;
        } else {
            return false;
        }
    },

    isValidUserName(username) {
        if (username != null && username.length > 0) {
            return true;
        } else {
            return false;
        }
    },
    isValidPhone(phone) {
        if (phone != null && phone > 0) {
            return true
        }
        return false;
    },
    validateAddress(address){
        if(address.length>5){
            return true;
        }else{
            return false;
        }
    }}
module.exports = UserController;