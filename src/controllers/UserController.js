import UserModel from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.create({ email: email, password: password });
      return res.status(201).json({ new_user: user });
    } catch (msg) {
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await UserModel.findAll({
        order: [["createdAt", "DESC"]],
      });
      return res.status(200).json({ all_users: users });
    } catch (msg) {
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await UserModel.findByPk(id);
      return res.status(200).json({ user: user });
    } catch (msg) {
      return res.json(null);
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      const user = await UserModel.findByPk(id);
      if (!user) {
        return res.status(404).json({ error: "Nenhum usuário encontrado." });
      }

      await UserModel.update(req.body, { where: { id } });
      return res.status(200).json({ response: "Usuário atualizado." });
    } catch (msg) {
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }
}

export default new UserController();
