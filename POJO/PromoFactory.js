const Discount=require('./Discount');
const MinusPrice=require('./MinusPrice');
class PromoFactory {
    constructor(){
        this.discount=null;
        this.minusPrice=null;
        

    }
     
     
    getPromo(type){
        switch(type.toLowerCase().replace(" ","")){
            case "descuento":
                if(this.discount==null){
                    this.discount=new Discount();
               }
               return  this.discount;
            case "menorprecio":
                if(this.minusPrice==null){
                    this.minusPrice=new MinusPrice();
                }    
                return this.minusPrice;
            default:
                return null;
            
        }

    }
}
module.exports=PromoFactory;