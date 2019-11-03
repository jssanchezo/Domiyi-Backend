const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Offer=sequelize.define('offer',{
  id:{
    type:Sequalize.INTEGER,
    primaryKey:true 
  },
value:{
    type:Sequelize.DOUBLE,
    allowNull:false
},
idType:{
    type:Sequelize.INTEGER,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=Offer;