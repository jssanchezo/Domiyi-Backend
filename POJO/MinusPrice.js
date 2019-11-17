const Promo=require('./promo');
class MinusPrice extends Promo{
constructor(){
    super();
}
 applyPromo(product,value){
product.price=product.price-value;
return product;
}
}
module.exports=MinusPrice;