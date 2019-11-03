const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Order=require('./Order');
const ProductOffer=require('./ProductOffer');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Detail=sequelize.define('detail',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
idOrder:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:Order,
        key:'id'
        }
},
idProductOffer:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:ProductOffer,
        key:'id'
        }
},
quantity:{
    type:Sequelize.INTEGER,
    allowNull:false    
},
observation:{
    type:Sequelize.STRING,
    allowNull:false
},
unitprice:{
    type:Sequelize.DOUBLE,
    allowNull:false
}
},{
    timestamps:false,
    freezeTableName: true
});
module.exports=Detail;