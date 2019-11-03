const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Company=sequelize.define('company',{
  id:{
    type:Sequalize.INTEGER,
    primaryKey:true 
  },
idStatus:{
    type:Sequelize.INTEGER,
    allowNull:false
},
name:{
    type:Sequelize.STRING,
    allowNull:false
},
image:{
    type:Sequelize.STRING,
    allowNull:false
},
idAdmin:{
    type:Sequelize.INTEGER,
    allowNull:false    
},
deliveryCost:{
    type:Sequelize.DOUBLE,
    allowNull:false
}
},{
    timestamps:false
});
module.exports=Company;