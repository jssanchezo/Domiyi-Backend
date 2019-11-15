const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const Company = require('./Company');
const Product = require('./Product');
const sequelize = require('../Database-Utilities/SequelizeConnection');

const CompanyByCategory = sequelize.define('companyByCategory', {

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Product,
            key: 'id'
        }
    },

    idCompany: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'idCompany'
        }

    },
    idCategory: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Product,
            key: 'idCategory'
        }
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Company,
            key: 'name'
        }
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
            model: Company,
            key: 'image'
        }
    }
}, {
    timestamps: false,
    freezeTableName: true
});
module.exports = CompanyByCategory;