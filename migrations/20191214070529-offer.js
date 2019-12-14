'use strict';
const OfferDefinition=require('../tabledefinitions/Offer');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('offer',OfferDefinition,{
    timestamps:false,
    freezeTableName: true//ASI NO SE CAMBIA EL NOMBRE DE LA TABLA A PLURAL AL SINCRONIZAR CON LA BD
});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */return queryInterface.dropTable('offer');
  }
};
