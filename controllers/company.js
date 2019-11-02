const CompanyRepository=require('../repositories/company.js');
const AuthorizationServer=require('../authentication/authorizationServer');
const CompanyController={
    async getAll(req,res){
        AuthorizationServer.validateUser(req,res);
        await CompanyRepository.SelectAll(req,res);
    },
    async getById(req, res){//apply filter by Id
        await CompanyRepository.SelectById(req,res);
    },
    async getByCategory(req, res){//filter by category
        await CompanyRepository.SelectByCategory(req,res);
    },
    async getByAdminId(req, res){//filter by adin
        await CompanyRepository.SelectByAdminId(req,res);
    },
    async getByCompany(req,res){
        await CompanyRepository.SelectByCompany(req,res);
    },
    async register(req,res){//register a new company
        await CompanyRepository.register(req,res);
    }
}
module.exports=CompanyController;

