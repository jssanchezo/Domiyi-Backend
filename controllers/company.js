const CompanyRepository=require('../repositories/company.js');

const CompanyController={
    async getAll(req,res){
        await CompanyRepository.SelectAll(req,res);
    },
    async getById(req, res){
        await CompanyRepository.SelectById(req,res);
    },
    async getByCategory(req, res){
        await CompanyRepository.SelectByCategory(req,res);
    },
    async getByAdminId(req, res){
        await CompanyRepository.SelectByAdminId(req,res);
    },
    async getByCompany(req,res){
        await CompanyRepository.SelectByCompany(req,res);
    },
    async register(req,res){
        await CompanyRepository.register(req,res);
    }
}
module.exports=CompanyController;

