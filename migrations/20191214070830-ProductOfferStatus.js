'use strict';
const ProductOfferStatusDefinition=require('../tabledefinitions/ProductOfferStatus');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.createTable('productOfferStatus',ProductOfferStatusDefinition,{
    timestamps:false,
    freezeTableName: true
});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.dropTable('productOfferStatus');
  }
};
