import jwt from 'jsonwebtoken';
// eslint-disable-next-line no-unused-vars
import * as Yup from 'yup';
import User from '../models/User';
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
    var perfil = '';
    if (user.professionals_id) {
      perfil = 'profissional';
    } else if (user.pacientes_id) {
      perfil = 'paciente';
    } else {
      perfil = 'organizacao';
    }

    const token = jwt.sign({ id }, authConfig.secret, {
      expiresIn: authConfig.expiresIn,
    });

    res.setHeader('Authorization', token);

    return res.json({
      user: {
        id,
        email,
        perfil
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionController();
