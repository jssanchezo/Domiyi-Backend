'use strict';
const TransactionDefinition=require('../tabledefinitions/Transaction');
module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
   return queryInterface.createTable('transaction',TransactionDefinition,{
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
   return queryInterface.dropTable('transaction');
  }
};
