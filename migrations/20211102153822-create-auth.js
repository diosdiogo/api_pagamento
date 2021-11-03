'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('auth', {
      id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      usuario:{
          type: Sequelize.INTEGER,
      },
      token: {
          type: Sequelize.STRING(50),
      },
      created:{
          type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('auth');
  }
};
