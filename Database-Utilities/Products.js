const Product = {
    getTableName() {//fix constants about fields in Product table 
        return 'products';
    },
    getIdFieldName() {
        return 'id';
    },
    getIdCompanyFieldName(){
        return 'idCompany';
    },
    getIdStatusFieldName(){
        return 'idStatus';
    },
    getNameFieldName() {
        return 'name';
    },
    getDescriptionFieldName() {
        return 'description';
    },
    getPriceFieldName() {
        return 'price';
    },
    getImageFieldName() {
        return 'image';
    },
    getCategoryFieldName(){
        return 'category';
    },
    getUpdatedFieldName() {
        return 'updated';
    },
    //querys for insert a product in JSON format 
    getQueryInsert(product) {
        return "insert into " + this.getTableName()+' ('+this.getIdCompanyFieldName()+','+this.getIdStatusFieldName()+','+this.getNameFieldName()+','+ 
        this.getDescriptionFieldName()+','+this.getPriceFieldName()+','+this.getImageFieldName()+','+this.getCategoryFieldName()+','
        +this.getUpdatedFieldName()+')'
        + " values (" + product.idCompany+ ","+product.idStatus+",'" + product.name +"','" +
            product.description + "'," + product.price + ",'" + product.image + "'," + product.category + ",now())";
    },
    getQuerySelectAll() {
        return 'select * from ' + this.getTableName();
    },
    getQuerySelectById(Id) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getIdFieldName() + '=' + Id;
    },

    getQuerygetIdByCompanyName(companyName) {
        return 'select ' + this.getIdFieldName() + ' from ' + this.getTableName() + ' where ' + this.getNameFieldName() + '=' + companyName;
    },

    getQuerySelectByPrice(price, price2) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getPriceFieldName() + ' <= ' + price2 + ' and ' + this.getPriceFieldName() + '>=' + price;
    }


}
module.exports = Product;

