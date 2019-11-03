const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const Product=require('./Product');
const Order=require('./Order');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Company=sequelize.define('company',{
  id:{
    type:Sequelize.INTEGER,
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
Company.hasMany(Product,{foreigKey:'idCompany',sourceKey:'id'});
Company.hasMany(Order,{foreigKey:'idCompany',sourceKey:'id'});
Order.belongsTo(Company,{foreigKey:'idCompany',sourceKey:'id'});
Product.belongsTo(Company,{foreigKey:'idCompany',sourceKey:'id'});
module.exports=Company;