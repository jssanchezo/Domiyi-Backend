const express = require('express');
const router = express.Router();
const ProtectRoute = require('../authentication/protectRouteMiddleware');
//we match all routes with the functions wich it executes

const DetailController = require('../controllers/detail');


router.post('/detail/register',ProtectRoute, DetailController.register);
router.post('/detail/byIdOrder', ProtectRoute,DetailController.getByOrderId);
router.post('/detail/updateIdOrder',ProtectRoute, DetailController.updateDetailsOrder);
router.post('/detail/registerMany',ProtectRoute,DetailController.registerMany);
module.exports = router;


