const ProductsStatus = {
    getTableName() {
        return 'productsStatus';
    },
    getId() {
        return 'id';
    },
    getName() {
        return 'name';
    },
    getQuerySelectAllStatus(price, price2) {
        return 'select ' + this.getName() + ' from ' + this.getTableName();
    }
}

module.exports = ProductsStatus;