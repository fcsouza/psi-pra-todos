module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('professionals_medalhas', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      professionals_id: {
        type: Sequelize.INTEGER,
        references: { model: 'professionals', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      medalhas_id: {
        type: Sequelize.INTEGER,
        references: { model: 'medalhas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      pacientes_id: {
        type: Sequelize.INTEGER,
        references: { model: 'pacientes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
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
    return queryInterface.dropTable('professionals_medalhas');
  },
};
