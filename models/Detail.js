const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const Order = require('./Order');
const ProductOffer = require('./ProductOffer');
const DetailDefinition=require('../tabledefinitions/Detail');
const sequelize = require('../Database-Utilities/SequelizeConnection');
const Detail = sequelize.define('detail', DetailDefinition, {
    timestamps: false,
    freezeTableName: true
});
module.exports = Detail;