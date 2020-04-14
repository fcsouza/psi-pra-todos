import Sequelize, { Model } from 'sequelize';

class Profissional extends Model {
  static init(sequelize) {
    super.init(
      {
        crp: Sequelize.STRING,
        nome: Sequelize.STRING,
        data_nascimento: Sequelize.STRING,
        cpf: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Orgao, { foreignKey: 'orgaos_id' });
  }
}

export default Profissional;
