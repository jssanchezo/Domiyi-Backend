const DetailRepository = require('../repositories/detail');
const AuthorizationServer=require('../authentication/authorizationServer');
const DetailController = {
    
    async getByIdOrder(req, res) {
        
        
    },
    async register(req, res) {//let us register products
        await DetailRepository.register(req, res);
    }
}
module.exports = DetailController;


