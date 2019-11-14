const ProductRepository = require('../repositories/product.js');
const ProducOfferRepository = require('../repositories/ProductOffer');
const AuthorizationServer = require('../authentication/authorizationServer');
const Detail = require('../repositories/detail');
const ProductController = {
    async getAll(req, res) {//get all products in database
        await ProductRepository.SelectAll(req, res);
    },
    async getByPrice(req, res) {//for get products in range of price
        await ProductRepository.SelectByPrice(req, res);
    },
    async getById(req, res) {

        const product = await ProductRepository.SelectById(req.body.id);
        if (product == null) {
            res.status(400).send("hubo un error");
        } else {
            res.status(200).json(product);
        }


    },
    getByIdOrder(req, res) {
        var idsproductOffer = Detail.SelectIdsProductOfferByIdOrder(req.body.idOrder).then(() => {
            var idsProductsOfferArray = [];

            idsproductOffer.map(obj => {
                idsProductsOfferArray.push(obj.idProductOffer);
            });
            var idsProducts = ProducOfferRepository.selectIdsProductByIds(idsProductsOfferArray).then(() => {
                var idsProductsArray = [];
                idsProducts.map(obj => {
                    idsProductsArray.push(obj.idsProduct);
                })
                var products = ProductRepository.selectAllByIds(idsProductsArray).then(() => {
                    res.status(200).json(products);
                }).catch((e) => {
                    console.log(e);
                    res.status(400).send("hubo un error");
                })
            }).catch((e) => {
                console.log(e);
                res.status(400).send("hubo un error");
            })
        }).catch((e) => {
            console.log(e);
            res.status(400).send("hubo un error");
        })
    }
    ,
    async register(req, res) {//let us register products
        var product;
        product = await ProductRepository.register(req, res);
        if (product == null) {
            res.status(400).send("hubo un error");
        } else {
            try {

                await ProducOfferRepository.registerDefault(product);
                res.status(201).json(product);

            } catch (e) {

            }


        }
    }


}
module.exports = ProductController;


