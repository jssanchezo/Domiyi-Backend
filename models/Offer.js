const Sequelize=require('sequelize');
const Model=Sequelize.Model;
const sequelize=require('../Database-Utilities/SequelizeConnection');
const Offer=sequelize.define('offer',{
  id:{
    type:Sequelize.INTEGER,
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
    timestamps:false,
    freezeTableName: true//ASI NO SE CAMBIA EL NOMBRE DE LA TABLA A PLURAL AL SINCRONIZAR CON LA BD
});
module.exports=Offer;