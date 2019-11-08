const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const User=require('./User');
const Company=require('./Company');
const Transaction=require('./Transaction');
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Order=sequelize.define('order',{
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
idUser:{
    type:Sequelize.INTEGER,
    allowNull:false,
    references:{
        model:User,
        key:'id'
        }
},
idTransaction:{
    type:Sequelize.INTEGER,
    allowNull:true,
    references:{
        model:Transaction,
        key:'id'
        }
},
date:{
    type:Sequelize.DATE,
    allowNull:false    
},
address:{
    type:Sequelize.STRING,
    allowNull:false
}
}
,{
    timestamps:false,
    freezeTableName: true
});

module.exports=Order;