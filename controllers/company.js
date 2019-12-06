const CompanyRepository=require('../repositories/company.js');
const AuthorizationServer=require('../authentication/authorizationServer');
const rollbar=require('../Logger/logger');
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
    },
    async getQueryCompaniesByCategory(req,res){
        await CompanyRepository.SelectCompanyByIdCategory(req.body.idCategory,res);
    }
    ,
    validateIdAdmin(idAdmin){
        if (idAdmin >= 1){
            return true;
        }else {
            return false;
        }
    },
    validateTypeIdAdmin(idAdmin){
        if (typeof idAdmin== 'number'){
            return true;
        }else {
            return false;
        }
    },    validateDeliveryCost(DeliveryCost){
        if(DeliveryCost >= 0){
            return true;
        }else {
            return false;
        }
    }
}
module.exports=CompanyController;

