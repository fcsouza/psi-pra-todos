import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Orgao from '../app/models/Orgao';
import Paciente from '../app/models/Paciente';
import Professional from '../app/models/Professional';
import Agenda from '../app/models/Agenda';
import Agendamento from '../app/models/Agendamento';
import Medalha from '../app/models/Medalha';
import File from '../app/models/File';
import ProfessionalMedalha from '../app/models/ProfessionalMedalha';

const models = [
  User,
  Professional,
  Paciente,
  Orgao,
  Agenda,
  Agendamento,
  Medalha,
  File,
  ProfessionalMedalha,
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
