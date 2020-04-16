// eslint-disable-next-line no-unused-vars
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import Sequelize from 'sequelize';
import User from '../models/User';
import Orgao from '../models/Orgao';
import config from '../../config/database';

const sequelize = new Sequelize(config);

class ProfessionalController {
  async store(req, res) {
    const transaction = await sequelize.transaction();
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email()
          .required(),
        password: Yup.string()
          .required()
          .min(6),
        nome_fantasia: Yup.string().required(),
        cnpj: Yup.string().required(),
        telefone: Yup.string().required(),
        responsavel: Yup.string().required(),
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

      const { nome_fantasia, cnpj, telefone, responsavel } = req.body;

      const orgaoCreate = await Orgao.create(
        {
          nome_fantasia,
          cnpj,
          telefone,
          responsavel,
        },
        { transaction }
      );

      const { email, password } = req.body;

      const passwordHash = await bcrypt.hash(password, 8);

      const response = await User.create(
        {
          email,
          password_hash: passwordHash,
          orgaos_id: orgaoCreate.id,
        },
        { transaction }
      );

      await transaction.commit();

      return res.json(response);
    } catch (e) {
      await transaction.rollback();

      throw new Error(`Error saving Professional: ${e}`);
    }
  }
}

export default new ProfessionalController();
