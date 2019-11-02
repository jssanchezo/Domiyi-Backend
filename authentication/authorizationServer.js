const jwt=require('jsonwebtoken');

const authorizationServer={
    validateUser(req,res){
    var token=req.headers['authorization'];
    if(!token){
        /*res.status(401).send({
        error:"No se cuenta con token para la autenticacion"
        });*/
        return false;
    }else{
       return true;
    }
    },
    validateAdmin(){
        
    }

}

module.exports=authorizationServer;