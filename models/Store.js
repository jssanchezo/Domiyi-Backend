const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Store=sequelize.define('store',{
  id:{
    type:Sequalize.INTEGER,
    primaryKey:true 
  },
idCompany:{
    type:Sequelize.INTEGER,
    allowNull:false
},
address:{
    type:Sequelize.STRING,
    allowNull:false
},
phone:{
    type:Sequelize.INTEGER,
    allowNull:false
},
email:{
    type:Sequelize.STRING,
    allowNull:false    
},
openHour:{
    type:Sequelize.INTEGER,
    allowNull:false
},
closeHour:{
    type:Sequelize.INTEGER,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=Store;