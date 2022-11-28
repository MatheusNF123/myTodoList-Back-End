'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {  
    await queryInterface.bulkInsert('tasks', [
      {
        name: 'fazer projeto tfc',
        date: '18 janeiro',
        in_progress: false,
        descricao: 'terminar projeto antes do prazo',
        folder_id: 1
      },
      {
        name: 'Assistir velozes e furiosos',
        date: '15 janeiro',
        in_progress: false,
        descricao: 'terminar filme final de semana',
        folder_id: 2
      },
  ], {});
  
  },

  async down (queryInterface, Sequelize) {   
     await queryInterface.bulkDelete('tasks', null, {});     
  }
};
