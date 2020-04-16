import Midia from '../models/Midia';
import User from '../models/User';

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const file = await Midia.create({
      name,
      path,
    });

    await User.update({ midias_id: file.id }, { where: { id: req.userId } });

    return res.json(file);
  }
}

export default new FileController();
