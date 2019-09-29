const User = {
    getTableName() {
        return 'users';
    },
    getIdFieldName() {
        return 'id';
    }
    ,
    getEmailFieldName() {
        return 'email';
    },
    getPasswordFieldName() {
        return 'password';
    },
    getNameFieldName() {
        return 'name';
    },
    getTypeFieldName() {
        return 'field';
    },
    getPhoneFieldName(){
        return 'phone';
    },
    getCareerFieldName(){
        return 'career';
    },
    getStreetFieldName(){
        return 'street';
    },
    getUsernameFieldName(){
        return 'username';
    },
    getQuerySelectAll(){
        return 'select * from '+this.getTableName();
    },
    getQuerySelectById(Id) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getIdFieldName() + '=' + Id;
    },
    getQuerySelectByUsername(username){
        return 'select * from ' + this.getTableName() + ' where ' + this.getUsernameFieldName() + '=' + username;
    }
    ,
    getQuerygetPasswordByUsername(username){
        return 'select '+this.getPasswordFieldName()+ ' from '+this.getTableName()+' where '+this.getUsernameFieldName+'='+username;
    },
    getQueryInsert(user){
        return 'CALL insertUser ('+user.email+','+user.password+','+user.name+','+user.type+','+user.phone+','+
        user.career+','+user.street+','+user.username+')';
    }


}




module.exports = User;