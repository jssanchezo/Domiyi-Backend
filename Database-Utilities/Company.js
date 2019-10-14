const Company = {
    getTableName() {
        return 'companies';
    },
    getId() {
        return 'id';
    }
    ,
    getIdStatus() {
        return 'idStatus';
    }
    ,
    getName() {
        return 'name';
    }
    ,
    getImage() {
        return 'image';
    }
    ,
    getIdAdmin() {
        return 'idAdmin';
    },
    getCategory() {
        return 'category';
    },
    getDeliveryCost() {
        return 'deliveryCost';
    },
    getOfficeHours() {
        return 'officeHours';
    },
    getQuerySelectById(Id) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getIdFieldName() + '=' + Id;
    },
    getQuerySelectByCompanyName(companyName) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getName() + '=' + companyName;
    }
    ,
    getQueryIdByCompanyName(companyName) {
        return 'select ' + this.getId() + ' from ' + this.getTableName() + ' where ' + this.getName() + '=' + companyName;
    },
    getQueryInsert(product) {
        return 'CALL insertProducts (' + product.name + ',' + product.description + ',' + product.price + ',' + product.image + ')';
    },
    getQueryCompaniesByCategory(category) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getCategory() + '=' + category;
    },
    getQueryCompanyByIdAdmin(adminID) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getIdAdmin() + '=' + adminID;
    }

}

module.exports = Company;