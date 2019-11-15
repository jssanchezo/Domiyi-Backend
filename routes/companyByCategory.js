const express = require('express');
const router = express.Router();
const ProtectRoute = require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const companyByCategoryController = require('../controllers/companyByCategory');


router.post('/companyByCategory/companies', companyByCategoryController.getCompanies);

module.exports = router;