'use strict';

import moment from 'moment'

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('users', [
     {
      email: 'test@test.com',
      password: 'test1234',
      createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
     },

     {
      email: 'test1@test.com',
      password: 'test1234',
      createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
     },

     {
      email: 'test2@test.com',
      password: 'test1234',
      createdAt: moment().format('YYYY-MM-DD hh:mm:ss'),
      updatedAt: moment().format('YYYY-MM-DD hh:mm:ss')
     }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('users', null, {})
  }
};
