const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Detail=sequelize.define('detail',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey:true 
  },
idOrder:{
    type:Sequelize.INTEGER,
    allowNull:false
},
idProduct:{
    type:Sequelize.INTEGER,
    allowNull:false
},
idOffer:{
    type:Sequelize.INTEGER,
    allowNull:false
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