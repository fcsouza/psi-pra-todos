// eslint-disable-next-line no-unused-vars
import Sequelize, { Model } from 'sequelize';

class ProfessionalMedalha extends Model {
  static init(sequelize) {
    super.init(
      {},
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Professional, { foreignKey: 'professional_id' });
    this.belongsTo(models.Medalha, { foreignKey: 'medalhas_id' });
    this.belongsTo(models.Paciente, { foreignKey: 'pacientes_id' });
  }
}

export default ProfessionalMedalha;
