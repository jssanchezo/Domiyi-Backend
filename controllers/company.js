const CompanyRepository=require('../repositories/company.js');

const CompanyController={
    async getByCategory(req, res){
        await CompanyRepository.SelectByCategory(req,res);
    },
    async getByAdminId(req, res){
        await CompanyRepository.SelectByAdminId(req,res);
    }
}
module.exports=CompanyController;

