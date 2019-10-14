
const Product={
getTableName(){
    return 'products';
},
getIdFieldName(){
    return 'id';
},
getNameFieldName(){
    return 'name';
},
getDescriptionFieldName(){
    return 'description';
},
getPriceFieldName(){
    return 'price';
},
getImageFieldName(){
    return 'image';
},
getUpdatedFieldName(){
    return 'updated';
},
getStatusFieldName(){
    return 'status';
},
getQueryInsert(product){
    return "insert into "+this.getTableName()+" values ("+product.id+","+product.idCompany+",'"+product.name+"','"+
    product.description+"',"+product.price+",'"+product.image+"','"+product.updated+"','"+product.status+"')";
},
getQuerySelectAll(){
        return 'select * from '+this.getTableName();
    },
    getQuerySelectById(Id) {
        return 'select * from ' + this.getTableName() + ' where ' + this.getIdFieldName() + '=' + Id;
    },
    
    getQuerygetIdByCompanyName(companyName){
        return 'select '+this.getIdFieldName()  + ' from '+this.getTableName()+' where '+this.getNameFieldName()+'='+companyName;
    },
   
    getQuerySelectByPrice(price, price2){
        return 'select * from '+ this.getTableName() +' where '+ this.getPriceFieldName() + ' <= ' + price2 + ' and ' + this.getPriceFieldName() + '>=' + price;
    }


}
module.exports=Product;

