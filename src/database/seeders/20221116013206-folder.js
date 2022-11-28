'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {   
    await queryInterface.bulkInsert('folders', [
      {
        name: 'curso',
        user_id: 1,
      },
      {
        name: 'filmes',
        user_id: 2,
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('folders', null, {});
  }
};
