const TypeOfferRepository = require('../repositories/typeoffer');
const rollbar=require('../Logger/logger');
const TypeOfferController = {
async getAll(req,res){
try{
const result=await TypeOfferRepository.selectAll();
if(result instanceof Error){
    rollbar.error(result,req);
    
    res.status(400).send("hubo un error");
}else{
    res.status(200).json(result);
}
}catch(e){
    
    
    res.status(400).send("hubo un problema");
}


}
    
}
module.exports = TypeOfferController;


