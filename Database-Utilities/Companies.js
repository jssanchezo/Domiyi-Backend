const Companies = {
    getTableName() {
        return 'companies';
    },
    getId() {
        return 'id';
    }
    ,//we fix the fields names
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
    getCategory () {
        return 'category';
    },
    getDeliveryCost(){
        return 'deliveryCost';
    },
    getOfficeHours(){
        return 'officceHours';
    },//define querys for the table companies wich return string for query method
    getQuerySelectById(Id) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getId() + '=' + Id;
    },
    getQuerySelectByCompanyName(companyName){
        return 'select * from ' + this.getTableName() + ' where ' + this.getName() + '=' + companyName;
    },
    getQueryIdByCompanyName(companyName){
        return 'select '+ this.getId()  + ' from '+this.getTableName()+' where '+this.getName()+'='+companyName;
    },//query for insert a company 
    getQueryInsert(company){
        return "insert into "+this.getTableName()+" values ("+company.id+","+company.idStatus+",'"+company.name+"','"+
            company.image+"',"+company.idAdmin+",'"+company.category+"','"+company.deliveryCost+"','"+company.officceHours+"')";
    },
    getQueryCompaniesByCategory(category) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getCategory() + '=' + category;
    },
    getQueryCompanyByIdAdmin(adminID) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getIdAdmin() + '=' + adminID;
    },
    getQuerySelectAll(){
        return 'select * from '+this.getTableName();
    },
    getQuerySelectByCompany(companyName){
        return 'select * from ' + this.getTableName() + ' where ' + this.getName() + '=' + '"' + companyName +'"';
    },

}

module.exports = Companies;