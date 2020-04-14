import Sequelize, { Model } from 'sequelize';

class Orgao extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_fantasia: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        telefone: Sequelize.STRING,
        responsavel: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Orgao;
