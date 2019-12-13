const PaymentMethodRepository = require('../repositories/paymentMethod.js');
const AuthorizationServer=require('../authentication/authorizationServer');
const PaymentMethodController = {
    async getAll(req, res) {//get all products in database
        await PaymentMethodRepository.SelectAll(req, res);
    }
}
module.exports = PaymentMethodController;