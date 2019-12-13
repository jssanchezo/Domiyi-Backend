const Promo=require('./promo');
class Discount extends Promo{
constructor(){
    super();
}
 applyPromo(product,value){
product.unitPrice=(1-value)*product.unitPrice;
return product;
 }
}
module.exports=Discount;