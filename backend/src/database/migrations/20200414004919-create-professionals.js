module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('professionals', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      crp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      orgaos_id: {
        type: Sequelize.INTEGER,
        references: { model: 'orgaos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data_nascimento: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('professionals');
  },
};
