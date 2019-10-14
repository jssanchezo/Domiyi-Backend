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
}



}
module.exports=Product;