const CompanyRepository=require('../repositories/company.js');

const CompanyController={
    async getByCategory(req, res){
        await CompanyRepository.SelectByCategory(req,res);
    }
}
module.exports=CompanyController;

