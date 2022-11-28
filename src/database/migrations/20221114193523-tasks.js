'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,        
      },      
      date: {
        type: Sequelize.STRING,
      },      
      in_progress: {
        type: Sequelize.BOOLEAN,
      },      
      descricao: {
        type: Sequelize.STRING,
      },
      folder_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "folders",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      }  

    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('tasks');
  }
};
