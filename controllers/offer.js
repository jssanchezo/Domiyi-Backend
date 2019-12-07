const OfferRepository = require('../repositories/offer');
const rollbar=require('../Logger/logger');
const OfferController = {
async RegisterIFNotExist(req,res){
try{
    const exist= await OfferRepository.Exist(req.body);
    if(exist==null){
        
        const offer_inserted= await OfferRepository.insert(req.body);
        if(offer_inserted instanceof Error){
            rollbar.error(offer_inserted,req);
            res.status(400).send("hubo un problema");
        }else{
            res.status(201).json(offer_inserted);
        }
        
    }else{
        res.status(200).json(exist);
    }


}catch(e){
    rollbar.error(e,req);
    res.status(400).send("hubo un problema");
}


}
    
}
module.exports = OfferController;


