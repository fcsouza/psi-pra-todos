// eslint-disable-next-line no-unused-vars
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import Sequelize from 'sequelize';
import User from '../models/User';
import Paciente from '../models/Paciente';
import config from '../../config/database';

const sequelize = new Sequelize(config);

class PacienteController {
  async store(req, res) {
    const transaction = await sequelize.transaction();
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required(),
        data_nascimento: Yup.string().required(),
        cpf: Yup.string().required(),
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .required()
          .min(6),
      });

      if (!(await schema.isValid(req.body))) {
        return res.status(400).json({ error: 'Validation fails' });
      }

      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const { nome, data_nascimento, cpf } = req.body;

      // eslint-disable-next-line no-unused-vars
      const pacientesCreate = await Paciente.create(
        {
          nome,
          data_nascimento,
          cpf,
        },
        { transaction }
      );

      const { email, password } = req.body;

      const passwordHash = await bcrypt.hash(password, 8);

      const response = await User.create(
        {
          email,
          password_hash: passwordHash,
          pacientes_id: pacientesCreate.id,
        },
        { transaction }
      );

      await transaction.commit();

      return res.json(response);
    } catch (e) {
      await transaction.rollback();

      throw new Error(`Error saving User: ${e}`);
    }
  }
}

export default new PacienteController();
