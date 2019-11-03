const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Company=require('./Company');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Category=require('../models/Category');
const ProductStatus=require('../models/ProductStatus');
//const Company=require('../models/Company');
const Product=sequelize.define('product',{
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
name:{
    type:Sequelize.STRING,
    allowNull:false
},
description:{
    type:Sequelize.STRING,
    allowNull:false
},
price:{
    type:Sequelize.DOUBLE,
    allowNull:false    
},
image:{
    type:Sequelize.STRING,
    allowNull:false
},
idStatus:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:ProductStatus,
        key:'id'
        }
},
idCategory:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
    model:Category,
    key:'id'
    }
},
updated:{
    type:Sequelize.DATE,
    allowNull:false,
    defaultValue:Sequelize.NOW
}
},{
    timestamps:false,
    freezeTableName: true
});

module.exports=Product;