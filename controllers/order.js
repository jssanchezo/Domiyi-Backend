const OrderRepository = require('../repositories/order');
const rollbar=require('../Logger/logger');
const OrderController = {

    async register(req, res) {//let us register orders
        await OrderRepository.register(req, res);
    },
    async getByIdAdmin(req, res) {//let us get orders
        try{
            const orders = await OrderRepository.selectOrderByAdmin(req.body.idAdmin);
            if(orders instanceof Error){
                rollbar.error(orders,req);
                res.status(400).send("hubo un error");

            }else{
                res.status(201).json(orders);
            }

        }catch (e) {
            rollbar.error(e);
            console.log(e);

        }

    },
    async getByIdUser(req, res) {//let us get orders
        try{
            const orders = await OrderRepository.selectOrderByUser(req.body.idUser);
            if(orders instanceof Error){
                rollbar.error(orders,req);
                res.status(400).send("hubo un error");

            }else{
                res.status(201).json(orders);
            }

        }catch (e) {
            rollbar.error(e);
            console.log(e);

        }

    }
}
module.exports = OrderController;


