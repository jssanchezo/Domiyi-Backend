const companyByCategoryRepository = require('../repositories/companyByCategory');
const AuthorizationServer = require('../authentication/authorizationServer');
const rollbar=require('../Logger/logger');
const companyByCategoryController = {

    async getCompanies(req, res) {

        const companies = await companyByCategoryRepository.SelectCompanyByIdCategory(req, res);

        if (companies == null) {
            res.status(400).send("hubo un error");
        } else {

            res.status(200).json(companies);
        }
    }
}
module.exports = companyByCategoryController;