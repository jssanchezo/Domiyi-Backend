const connection = require('../Database-Utilities/Connection.js');
const ProductTable = require('../Database-Utilities/Products.js');
const ProductRepository = {
    SelectAll(req, res) {//we obtain all products
        connection.query(ProductTable.getQuerySelectAll(), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    },
    //
    SelectByPrice(req, res) {
        connection.query(ProductTable.getQuerySelectByPrice(req.body.price, req.body.price2), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    },
    //
    SelectById(req, res) {
        connection.query(ProductTable.getQuerySelectById(req.body.id), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }

        });
    },
    SelectByCategory(req, res) {
        connection.query(ProductTable.getQueryProductsByCategory(req.body.category), (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }

        });
    },


    register(req, res) {
        connection.query(ProductTable.getQueryInsert(req.body), (err, rows, fields) => {

            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
    }
}
module.exports = ProductRepository;

