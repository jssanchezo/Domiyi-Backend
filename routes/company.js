const express=require('express');
const router=express.Router();

//we match all routes with the functions wich it executes
const CompanyController= require('../controllers/company.js');
router.get('/companies',CompanyController.getAll);
router.get('/companies/id',CompanyController.getById);
router.get('/companies/idByName',CompanyController.getIdByName);
router.get('/companies/idAdmin',CompanyController.getByAdminId);
router.get('/companies/company',CompanyController.getByCompany);
router.get('/companies/idStatusByName',CompanyController.getIdStatusByName);
router.get('/companies/adminByName',CompanyController.getAdminByName);
router.get('/companies/imageByName',CompanyController.getImageByName);
router.post('/company/register',CompanyController.register);
module.exports= router;
