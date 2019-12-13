const Promo=require('./promo');
class MinusPrice extends Promo{
constructor(){
    super();
}
applyPromo(product,value){
product.unitPrice=product.unitPrice-value;
return product;
}
}
module.exports=MinusPrice;