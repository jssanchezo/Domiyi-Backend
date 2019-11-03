const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const User=sequelize.define('user',{
  id:{
    type:Sequalize.INTEGER,
    primaryKey:true 
  },
email:{
    type:Sequelize.STRING,
    allowNull:false
},
password:{
    type:Sequelize.STRING,
    allowNull:false
},
name:{
    type:Sequelize.STRING,
    allowNull:false
},
phone:{
    type:Sequelize.INTEGER,
    allowNull:false    
},
address:{
    type:Sequelize.STRING,
    allowNull:false
},
username:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=User;