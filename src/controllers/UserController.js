import UserModel from "../models/UserModel";

class UserController {
  async store(req, res) {
    try {
      if (req.body.role == 1) {
        return res.status(400).json({
          error:
            "Está rota não tem permissão para criar usuários administradores.",
        });
      }
      const user = await UserModel.create(req.body);
      const { email, username } = user;

      return res.status(201).json({ new_user: { email, username } });
    } catch (msg) {
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }

  async index(req, res) {
    try {
      const users = await UserModel.findAll({
        attributes: ["id", "email", "username", "createdAt"],
        order: [["createdAt", "DESC"]],
      });
      users == users.length > 0
        ? res.status(404).json({ response: "Nenhum usuário cadastrado." })
        : res.status(200).json({ all_users: users });
      return;
    } catch (msg) {
      return res.status(400).json(null);
    }
  }

  async show(req, res) {
    try {
      const user = await UserModel.findByPk(req.params.id);
      const { id, name, email, createdAt, updatedAt } = user;

      user == user.length > 0
        ? res.status(404).json({ response: "Nenhum usuário cadastrado." })
        : res.status(200).json({ id, name, email, createdAt, updatedAt });
      return;
    } catch (msg) {
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      const user = await UserModel.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ error: "Nenhum usuário encontrado." });
      }

      const { email, password, username } = req.body;
      await UserModel.update(
        { email: email, password: password, username: username },
        { where: { id: req.userId } }
      );

      return res.status(200).json({ response: "Usuário atualizado." });
    } catch (msg) {
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      const user = await UserModel.findByPk(req.userId);
      if (!user) {
        return res.status(404).json({ error: "Nenhum usuário encontrado." });
      }

      await user.destroy();

      return res.status(200).json({ response: "Usuário deletado." });
    } catch (msg) {
      console.log(msg);
      return res.status(400).json({ error: "Algo inesperado aconteceu." });
    }
  }
}

export default new UserController();
