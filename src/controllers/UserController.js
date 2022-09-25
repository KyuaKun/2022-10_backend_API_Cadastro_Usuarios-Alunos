import UserModel from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.create({ email: email, password: password });
      return res.status(201).json({ new_user: user });
    } catch (err) {
      return res.status(400).json({ error: err.errors.map((e) => e.message) });
    }
  }

  async index(req, res) {
    try {
      const user = await UserModel.findAll();
      return res.status(201).json({ all_users: user });
    } catch (err) {
      return res.status(400).json({ error: err.errors.map((e) => e.message) });
    }
  }
}

export default new UserController();
