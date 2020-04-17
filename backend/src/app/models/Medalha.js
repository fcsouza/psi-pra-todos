import Sequelize, { Model } from 'sequelize';

class Medalha extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'midias_id' });
  }
}

export default Medalha;
