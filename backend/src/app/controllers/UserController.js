// eslint-disable-next-line no-unused-vars
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import Paciente from '../models/Paciente';

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { nome, data_nascimento, cpf } = req.body;

    // eslint-disable-next-line no-unused-vars
    const pacientesCreate = await Paciente.create({
      nome,
      data_nascimento,
      cpf,
    });
    const pacientes = await Paciente.findOne({ where: { cpf } });

    const { email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 8);

    const response = await User.create({
      email,
      password_hash: passwordHash,
      pacientes_id: pacientes.id,
    });

    return res.json(response);
  }
}

export default new UserController();
