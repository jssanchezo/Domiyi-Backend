const express=require('express');
const router=express.Router();

//we match all routes with the functions wich it executes

const ProductController= require('../controllers/product.js');
const rutasProtegidas = express.Router(); 
rutasProtegidas.use((req, res, next) => {
    const token = req.headers['authorization'];
 
    if (token) {
    next();//for execute the next callback
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });
router.get('/products',ProductController.getAll);
router.get('/products/price',ProductController.getByPrice) ;
router.get('/products/id',rutasProtegidas,ProductController.getById) ;
router.post('/product/register',ProductController.register);
module.exports= router;




