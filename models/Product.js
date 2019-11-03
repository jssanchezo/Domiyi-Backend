const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Company=require('./Company');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Product=sequelize.define('product',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
idCompany:{
    type:Sequelize.INTEGER,
    allowNull:false
},
idUser:{
    type:Sequelize.INTEGER,
    allowNull:false
},
idTransaction:{
    type:Sequelize.INTEGER,
    allowNull:false
},
date:{
    type:Sequelize.DATE,
    allowNull:false    
},
address:{
    type:Sequelize.STRING,
    allowNull:false
}
},{
    timestamps:false,
    freezeTableName: true
});

module.exports=Product;