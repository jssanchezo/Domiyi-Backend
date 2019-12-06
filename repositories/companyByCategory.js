const connection = require('../Database-Utilities/Connection.js');
const companyByCategory = require('../models/CompanyByCategory');
const Sequelize = require('sequelize');
const sequelize = require('../Database-Utilities/SequelizeConnection');
const rollbar=require('../Logger/logger');
const companyByCategoryRepository = {

    async SelectCompanyByIdCategory(req, res) {

        try {
            const companies = await companyByCategory.findAll({
                attributes: ['idCompany', 'name', 'image'],
                where: {
                    idCategory: req.body.idCategory
                }
            });
            res.status(200).json(companies);
        } catch (e) {
            res.status(400).send("hubo un error");
        }

    }
}
module.exports = companyByCategoryRepository;