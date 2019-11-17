const OrderRepository = require('../repositories/order');
const OrderController = {

    async register(req, res) {//let us register orders
        await OrderRepository.register(req, res);
    },
    async getByIdAdmin(req, res) {//let us register orders
        try{
            const orders = await OrderRepository.selectOrderByAdmin(req.body.idAdmin);
            if(orders==null){
                res.status(400).send("hubo un error");

            }else{
                res.status(201).json(orders);
            }

        }catch (e) {
            console.log(e);

        }

    }
}
module.exports = OrderController;


