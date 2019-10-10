const Product = {
    getTableName() {
        return 'products';
    },
    getIdFieldName() {
        return 'id';
    }
    ,
    getIdCompany() {
        return 'idCompany';
    }
    ,
    getNameFieldName() {
        return 'name';
    }
    ,
    getDescription() {
        return 'description';
    }
    ,
    getPrice() {
        return 'price';
    },

    getImage() {
        return 'image';
    },
    getUpdated() {
        return 'updated';
    },
    getStatus(){
        return 'status';
    },
    getQuerySelectAll(){
        return 'select * from '+this.getTableName();
    },
    getQuerySelectById(Id) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getIdFieldName() + '=' + Id;
    },
    getQuerySelectByCompanyName(companyName){
        return 'select * from ' + this.getTableName() + ' where ' + this.getUsernameFieldName() + '=' + companyName;
    }
    ,
    getQuerygetIdByCompanyName(companyName){
        return 'select '+this.getIdFieldName()  + ' from '+this.getTableName()+' where '+this.getNameFieldName()+'='+companyName;
    },
    getQueryInsert(product){
        return 'CALL insertProducts ('+product.name+','+product.description+','+product.price+','+product.image+')';
    }


}

module.exports = Product;