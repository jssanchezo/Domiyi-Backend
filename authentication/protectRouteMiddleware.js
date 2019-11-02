const express=require('express');
const jwt=require("jsonwebtoken");

const ProtectRoute = express.Router(); 
ProtectRoute.use((req, res, next) => {
    var token = req.headers['authorization'];
 
    if (token) {
        token = token.replace('Bearer ', '');

    jwt.verify(token, 'password', function(err, user) {
      if (err) {
        res.status(401).send({
          error: 'Token inválido'
        })
      } else {
        next();//execute the next function en  router.get('/route',,-->>nextfuntiontoexecute<<--);
      }
    })
   //for execute the next callback
    } else {
        res.status(401).send({
            error: "Es necesario el token de autenticación"
          });
    }
 });
 module.exports=ProtectRoute;