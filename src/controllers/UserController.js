import User from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.create({ email: email, password: password });
      return res.json({ new_user: user });
    } catch (err) {
      return res.status(400).json({ error: err.errors.map((e) => e.message) });
    }
  }
}

export default new UserController();
