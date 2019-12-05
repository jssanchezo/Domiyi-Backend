const express=require('express');
const router=express.Router();
const ProtectRoute=require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const CompanyController= require('../controllers/company.js');
router.get('/companies',ProtectRoute,CompanyController.getAll);
router.get('/companies/id',ProtectRoute,CompanyController.getById);
router.get('/companies/category',CompanyController.getByCategory);
router.post('/companies/idAdmin',ProtectRoute,CompanyController.getByAdminId);
router.get('/companies/company',ProtectRoute,CompanyController.getByCompany);
router.post('/company/register',ProtectRoute,CompanyController.register);
router.post('/companiesBy/category',CompanyController.getQueryCompaniesByCategory);

module.exports= router;
