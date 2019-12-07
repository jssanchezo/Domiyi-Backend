
const Offer = require('../models/Offer');
const Sequelize = require('sequelize');
const sequelize = require('../Database-Utilities/SequelizeConnection');
const rollbar=require('../Logger/logger');
const OfferRepository = {
async insert(offer){
try{
    const inserted=await Offer.create(offer);
    return inserted;
}catch(e){
    return e;
}


},
async Exist(offer){
    const off=await Offer.findAll({
        where:{
            [Sequelize.Op.and]:[{value:offer.value},{idType:offer.idType}]
        }
    });
    
    if(off.length>0){
        return off;
    }else{
        return null;
    }
}
}
module.exports = OfferRepository;