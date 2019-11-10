const connection = require('../Database-Utilities/Connection.js');
const ProductTable = require('../Database-Utilities/Products.js');
const Detail = require('../models/Detail');
const Sequelize = require('sequelize');
const sequelize = require('../Database-Utilities/SequelizeConnection');

const DetailRepository = {

    //
    //
    async SelectIdsProductOfferByIdOrder(idOrder) {
        try {
            var idsProductOffer = await Detail.findAll({
                attributes: ['idProductOffer'],
                where: {
                    idOrder: idOrder
                }
            });
            return idsProductOffer;
        } catch (e) {
            return null;
        }
    },


    async register(req, res) {
        try {
            detail = await Detail.create({
                //id:req.body.id,//si no se agrega se ejecuta el autoincrement en la bd
                idOrder: req.body.idOrder,
                idProductOffer: req.body.idProductOffer,
                quantity: req.body.quantity,
                observation: req.body.observation,
                unitPrice: req.body.unitPrice

            });
            res.status(201).json(detail);
        } catch (e) {
            res.status(400).send("se produjo un error");
            console.log(e);
        }
    },
    async SelectByOrderId(idOrder) {
        try {
            const details = await sequelize.query("SELECT * FROM productAndDetail where idOrder=" + idOrder, {type: Sequelize.QueryTypes.SELECT})

            return details;
        } catch (e) {

            return null;
        }


    }
}
module.exports = DetailRepository;