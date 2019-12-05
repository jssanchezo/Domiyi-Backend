const connection=require('../Database-Utilities/Connection.js');
const PaymentMethod=require('../models/PaymentMethod');
const Sequelize=require('sequelize');
const PaymentMethodRepository={
    async SelectAll(req,res){
        try{
            const paymentMethods=await PaymentMethod.findAll({

            });
            res.json(paymentMethods);
        }catch(e){
            console.log(e);
        }

    }
}
module.exports=PaymentMethodRepository;