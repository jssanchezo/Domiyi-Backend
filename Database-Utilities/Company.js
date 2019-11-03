const Company = {
    getTableName() {
        return 'company'; // Return the company's table
    },
    getId() {
        return 'id'; // Return the Company's id
    }
    ,
    getIdStatus() {
        return 'idStatus'; // Return the Company's status
    }
    ,
    getName() {
        return 'name'; // Return the Company's name
    }
    ,
    getImage() {
        return 'image'; // Return the Company's image
    }
    ,
    getIdAdmin() {
        return 'idAdmin'; // Return the Company's admin
    },
    //define querys for the table company wich return string for query method

    getQuerySelectByCompanyName(companyName){
        return 'select * from ' + this.getTableName() + ' where ' + this.getName() + "= '" + companyName+"'";
    },
    getQuerySelectById(Id) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getId() + '=' + Id;
    },
    getQueryIdByCompanyName(companyName){
        return 'select '+ this.getId()  + ' from '+this.getTableName()+' where '+this.getName()+"= '"+companyName+"'";
    },//query for insert a company 
    getQueryInsert(company){
        return "insert into " +this.getTableName()+" values ("+company.id+","+company.idStatus+","+company.idAdmin+","+
            "'" +company.name+ "','"+company.image+ "')";
    },
    getQueryCompanyByIdAdmin(idAdmin) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getIdAdmin() + '=' + idAdmin;
    },
    getQuerySelectAll(){
        return 'select * from '+this.getTableName();
    },
    getQueryIdStatusByCompanyName(companyName){
        return 'select '+ this.getIdStatus()  + ' from '+this.getTableName()+' where '+this.getName()+"= '"+companyName+"'";
    },
    getQueryAdminByCompanyName(companyName){
        return 'select '+ this.getIdAdmin()  + ' from '+this.getTableName()+' where '+this.getName()+"= '"+companyName+"'";
    },
    getQueryImageByCompanyName(companyName){
        return 'select '+ this.getImage()  + ' from '+this.getTableName()+' where '+this.getName()+"= '"+companyName+"'";
    }

}

module.exports = Company;