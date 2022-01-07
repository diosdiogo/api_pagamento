'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clube', {
      id: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
      },
      cnpj: {
          type:db.Sequelize.STRING(18),
          allowNull: false,
          trim:true,
          unique:true,
      },
      razaoSocial: {
          type:db.Sequelize.STRING(70)
      },
      nomeFantasia: {
          type:db.Sequelize.STRING(40)
      },
      telefonePrincipal: {
          type:db.Sequelize.STRING(14)
      },
      listaTelefones: {
          type:db.Sequelize.STRING(14)
      },
      cep :{
          type:db.Sequelize.STRING(9)
      },
      endereco: {
          type:db.Sequelize.STRING(40)
      },
      numEndereco: {
          type:db.Sequelize.STRING(8)
      },
      bairro:{
          type:db.Sequelize.STRING(20)
      },
      cidade: {
          type:db.Sequelize.STRING(30)
      },
      uf:{
          type:db.Sequelize.CHAR(2)
      },
      token:{
          type:db.Sequelize.STRING(80)
      },
      liberadoAte: {
          type:db.Sequelize.DATE
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clube');
  }
};
