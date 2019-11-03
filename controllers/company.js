const CompanyRepository=require('../repositories/company.js');

const CompanyController={
    async getAll(req,res){
        await CompanyRepository.SelectAll(req,res);
    },
    async getById(req, res){//apply filter by Id
        await CompanyRepository.SelectById(req,res);
    },
    async getIdByName(req, res){//filter id by name
        await CompanyRepository.SelectIdByName(req,res);
    },
    async getByAdminId(req, res){//filter by admin
        await CompanyRepository.SelectByAdminId(req,res);
    },
    async getByCompany(req,res){
        await CompanyRepository.SelectByCompany(req,res);
    },
    async register(req,res){//register a new company
        await CompanyRepository.Register(req,res);
    },
    async getIdStatusByName(req,res){//filter idStatus by company's name
        await CompanyRepository.SelectIdStatusByCompanyName(req,res);
    },
    async getAdminByName(req,res){// filter admin by company's name
        await CompanyRepository.SelectAdminByCompanyName(req,res);
    },
    async getImageByName(req,res){// filter image by company's name
        await CompanyRepository.SelectImageByCompanyName(req,res);
    }
}
module.exports=CompanyController;

