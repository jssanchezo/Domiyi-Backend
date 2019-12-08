const ProductRepository = require('../repositories/product.js');
const ProductOfferRepository=require('../repositories/ProductOffer');
const AuthorizationServer=require('../authentication/authorizationServer');
const Detail =require('../repositories/detail');
const rollbar=require('../Logger/logger');
const ProductOfferController = {
    async getIdsProductByIdsProductOffer(req,res){
        var ids=[];
        
        req.body.ids.map(st=>{
            ids.push(st.id);
        });
        const idsProduct=await ProductOfferRepository.selectIdProductByIds(ids);
        if(idsProduct==null){
            res.status(400).send("hubo un error");
        }else{
            res.status(200).json(idsProduct)
        }
        
    },
    async getByIdCompany(req,res){
        var productsOffers=await ProductOfferRepository.selectByIdCompany(req.body.idCompany);

        if(productsOffers instanceof Error){
            rollbar.error(productsOffers,req);
            res.status(400).send("hubo un error");
        }else{
            res.status(200).json(productsOffers);
        }


    },
    async getByIdProduct (req,res){
        var productsOffers=await ProductOfferRepository.SelectByProductId(req.body.idProduct);

        if(productsOffers instanceof Error){
            rollbar.error(productsOffers,req);
            res.status(400).send("hubo un error");
        }else{
            res.status(200).json(productsOffers);
        }


    },
    
    async  register(req,res){
        const first= ProductOfferRepository.setAllDisabledByIdProduct(req.body.idProduct);
        first.then(async (disabled)=>{

            if(disabled instanceof Error){
                rollbar.error(disabled,req);
                res.status(400).send("hubo un error");
                console.log(disabled);
            }else{
                var registered=await ProductOfferRepository.Insert(req.body);
                if(registered instanceof Error){
                    rollbar.error(registered,req);
                    console.log(registered)
                    res.status(400).send("hubo un error");
                }else{
                
                    
                    
                    res.status(201).json(registered);}
        
        
            }

        }).catch((e)=>{console.log(e)});
        
        }
       
    
}
module.exports = ProductOfferController;
