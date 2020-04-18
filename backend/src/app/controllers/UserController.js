// eslint-disable-next-line no-unused-vars
import * as Yup from 'yup';
import bcrypt from 'bcryptjs';
import Sequelize from 'sequelize';
import User from '../models/User';
import config from '../../config/database';

class UserController {
  async show(req, res) {
    console.log(req.headers)
    if (req.headers && req.headers.authorization) {
        var authorization = req.headers.authorization.split(' ')[1],
            decoded;
        try {
            decoded = jwt.verify(authorization, secret.secretToken);
        } catch (e) {
            return res.status(401).send('unauthorized');
        }
        var userId = decoded.id;
        // Fetch the user by id 
        User.findOne({_id: userId}).then(function(user){
            // Do something with the user
            return res.send(200);
        });
    }
    return res.send(500);
  }
}

export default new UserController();
