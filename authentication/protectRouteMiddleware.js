const express=require('express');


const ProtectRoute = express.Router(); 
ProtectRoute.use((req, res, next) => {
    const token = req.headers['authorization'];
 
    if (token) {
    next();//for execute the next callback
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });
 module.exports=ProtectRoute;