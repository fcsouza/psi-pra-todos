import Sequelize, { Model } from 'sequelize';

class Paciente extends Model {
  static init(sequelize) {
    super.init(
      {
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
}

export default Paciente;
