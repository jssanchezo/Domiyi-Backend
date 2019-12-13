const connection = require('../Database-Utilities/Connection.js');
const ProductTable = require('../Database-Utilities/Products.js');
const Detail = require('../models/Detail');
const Sequelize = require('sequelize');
const sequelize = require('../Database-Utilities/SequelizeConnection');
const rollbar=require('../Logger/logger');
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
           return detail;
        } catch (e) {
            
            console.log(e);
            return e;
        }
    },
    async SelectByOrderId(idOrder) {
        try {
            const details = await sequelize.query("SELECT * FROM productAndDetails where idOrder=" + idOrder, {type: Sequelize.QueryTypes.SELECT})

            return details;
        } catch (e) {

            return e;
        }
    },

    async UpdateIdOrder(req, res) {
        //UPDATE `table_name` SET `column_name` = `new_value' [WHERE condition];
        //update detail set idOrder = idOrderNumber  where idOrder = arrayOrder[index];
        arrayIds = req.body.arrayIds;
        idOrderNumber = req.body.idOrder;
        try {
            await Detail.update({
                idOrder: idOrderNumber,
            }, {
                where: {
                    id: {
                        [Sequelize.Op.in]: arrayIds
                    }
                }
            });

            res.status(201).send("Update successfull")

        }
            // UPDATE post SET updatedAt = null WHERE deletedAt NOT NULL;
        catch (e) {

            res.status(400).send("se produjo un error");
        }

    },
    async RegisterMany(details){
        
        try{
           /* details.map(dt=>{
                dt.idCompany=idCompany;
               var ins= Detail.create(dt)
                inserted.push( ins);


            });*/
            
            
            
            const inserted=await Detail.bulkCreate(details);
            
            return inserted;
        }catch(e){  
            
            return e;

        }
    }
}
module.exports = DetailRepository;