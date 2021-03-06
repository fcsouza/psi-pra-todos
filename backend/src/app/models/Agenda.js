import Sequelize, { Model } from 'sequelize';

class Agenda extends Model {
  static init(sequelize) {
    super.init(
      {
        data: Sequelize.DATE,
        hora: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Professional, { foreignKey: 'professional_id' });
  }
}

export default Agenda;
