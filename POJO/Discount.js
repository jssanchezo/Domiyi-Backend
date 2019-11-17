const Promo=require('./promo');
class Discount extends Promo{
constructor(){
    super();
}
 applyPromo(product,value){
product.price=(1-value)*product.price;
return product;
 }
}
module.exports=Discount;