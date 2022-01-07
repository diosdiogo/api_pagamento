'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('titulo', {
            id: {
                type: db.Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                unique: true,
                allowNull: false
            },
            nome: {
                type: db.Sequelize.STRING(40)
            },
            valor: {
                type: db.Sequelize.Number
            },
            ativo: {
                type: db.Sequelize.Boolean
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('titulo');
    }
};