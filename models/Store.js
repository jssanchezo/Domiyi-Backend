const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Company=require('./Company');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Store=sequelize.define('store',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
idCompany:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:Company,
        key:'id'
        }
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