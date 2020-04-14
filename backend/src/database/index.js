import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import User from '../app/models/User';
import Midia from '../app/models/Midia';
import Orgao from '../app/models/Orgao';
import Paciente from '../app/models/Paciente';
import Profissional from '../app/models/Profissional';

const models = [User, Midia, Profissional, Paciente, Orgao];

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
