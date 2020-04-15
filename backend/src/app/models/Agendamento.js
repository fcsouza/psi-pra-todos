import Sequelize, { Model } from 'sequelize';

class Agendamento extends Model {
  static init(sequelize) {
    super.init(
      {
        status: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Agenda, { foreignKey: 'agendas_id' });
    this.belongsTo(models.Paciente, { foreignKey: 'pacientes_id' });
  }
}

export default Agendamento;
