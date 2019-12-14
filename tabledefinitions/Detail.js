const Sequelize = require('sequelize');
const Order = require('../models/Order');
const ProductOffer = require('../models/ProductOffer');
module.exports={
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idOrder: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: {tableName:'order'},
            key: 'id'
        }
    },
    idProductOffer: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model:{tableName:'productOffer'} ,
            key: 'id'
        }
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    observation: {
        type: Sequelize.STRING,
        allowNull: false
    },
    unitPrice: {
        type: Sequelize.DOUBLE,
        allowNull: false
    }
}