
const TypeOffer = require('../models/typeOffer');
const Sequelize = require('sequelize');
const sequelize = require('../Database-Utilities/SequelizeConnection');
const rollbar=require('../Logger/logger');
const TypeOfferRepository = {
async selectAll(){
try{
    const types=await TypeOffer.findAll({});
    return types;
}catch(e){
    return e;
}


}
}
module.exports = TypeOfferRepository;