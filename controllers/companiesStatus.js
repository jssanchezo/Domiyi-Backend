const CompaniesStatusRepository =require('../repositories/companiesStatus');
const rollbar=require('../Logger/logger');
const CompaniesStatusController={
    async getAll(req,res){//query for select all states of products
        await CompaniesStatusRepository.SelectAll(req,res);
    }
}
module.exports= CompaniesStatusController;