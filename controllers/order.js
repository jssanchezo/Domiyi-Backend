const OrderRepository = require('../repositories/order');
const OrderController = {
   
    async getById(req, res) {
        
    },
    async register(req, res) {//let us register products
        await OrderRepository.register(req, res);
    }
}
module.exports = OrderController;


