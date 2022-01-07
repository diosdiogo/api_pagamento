'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('aplicacao', {
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
            empresaReponsavel: {
                type: db.Sequelize.STRING(40)
            },
            responsavel: {
                type: db.Sequelize.STRING(40)
            },
            telefoneContato: {
                type: db.Sequelize.STRING(40)
            },
            token: {
                type: db.Sequelize.STRING(40)
            },
            liberado: {
                type: db.Sequelize.Date
            },
            createdAt: {
                type: db.Sequelize.Date
            },
            updatedAt: {
                type: db.Sequelize.Date
            },
            deleteAt: {
                type: db.Sequelize.Date
            }
        })
    },

    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('titulo');
    }
};