const UserRepository=require('../repositories/user');
const jwt=require('jsonwebtoken');
const AuthenticatioServer={

    async Login(req,res){
        
        await UserRepository.SelectByUsername(req,res,(User)=>{
            
         if(req.body.password!=User[0].password){
             res.status(401).send({
                 error:'no valido'
             })
             return;
             
           }
           var tokenData={
               idUser:User[0].id
              }
              var token=jwt.sign(tokenData,'password',{
                  expiresIn:60*5*25
              });
              
              
              res.send({
                  token
              });
         
        
     
     });
   
     
     }
};
module.exports=AuthenticatioServer;