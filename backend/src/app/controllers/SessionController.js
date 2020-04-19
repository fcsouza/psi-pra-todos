import jwt from 'jsonwebtoken';
// eslint-disable-next-line no-unused-vars
import * as Yup from 'yup';
import User from '../models/User';
import Profissional from '../models/Professional';
import Paciente from '../models/Paciente';
import Orgao from '../models/Orgao';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'password does not match' });
    }

    const { id } = user;
    let perfil = '';
    let nome = '';
    if (user.professionals_id) {
      perfil = 'profissional';
      nome = await Profissional.findByPk(user.professionals_id);
      nome = nome.nome;
    } else if (user.pacientes_id) {
      perfil = 'paciente';
      nome = await Paciente.findByPk(user.pacientes_id);
      nome = nome.nome;
    } else {
      perfil = 'organizacao';
      nome = await Orgao.findByPk(user.orgaos_id);
      nome = nome.nome_fantasia;
    }

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    res.setHeader('Authorization', token);

    return res.json({
      user: {
        id,
        email,
        perfil,
        nome,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
