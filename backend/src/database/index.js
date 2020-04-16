import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Orgao from '../app/models/Orgao';
import Paciente from '../app/models/Paciente';
import Profissional from '../app/models/Profissional';
import Agenda from '../app/models/Agenda';
import Agendamento from '../app/models/Agendamento';
import Medalha from '../app/models/Medalha';
import Midia from '../app/models/Midia';
import ProfissionalMedalha from '../app/models/ProfissionalMedalhas';

const models = [
  User,
  Profissional,
  Paciente,
  Orgao,
  Agenda,
  Agendamento,
  Medalha,
  Midia,
  ProfissionalMedalha,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
