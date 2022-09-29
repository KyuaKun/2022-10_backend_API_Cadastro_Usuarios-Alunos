import AlunoModel from "../models/AlunoModel";

class AlunoController {
  async store(req, res) {
    try {
      const data = new Date();
      const register = Date.now();
      const aluno = await AlunoModel.create({
        email: `${req.body.name.toLowerCase()}${req.body.last_name.toLowerCase()}${data.getMilliseconds()}${data.getSeconds()}@duoimpar.com`,
        name: req.body.name,
        last_name: req.body.last_name,
        age: req.body.age,
        registration: register,
      });

      const { name, last_name, age, email, registration } = aluno;

      return res
        .status(201)
        .json({ name, last_name, age, email, registration });
    } catch (msg) {
      console.log(msg);
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }
  async index(req, res) {
    try {
      const alunos = await AlunoModel.findAll({
        attributes: ["id", "name", "last_name", "age", "email", "registration"],
      });

      alunos == alunos.length > 0
        ? res.status(404).json("Nenhum aluno cadastrado.")
        : res.status(200).json({ response: alunos });
      console.log(alunos);
      return;
    } catch (msg) {
      console.log(msg);
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }
  async show(req, res) {
    try {
      const aluno = await AlunoModel.findByPk(req.params.id);
      const { id, name, last_name, email, createdAt, updatedAt } = aluno;

      aluno == aluno.length > 0
        ? res.status(404).json({ response: "Nenhum aluno encontrado" })
        : res
            .status(200)
            .json({ id, name, last_name, email, createdAt, updatedAt });
      return;
    } catch (msg) {
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }
  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json("missing id");
      }

      const aluno = await AlunoModel.findByPk(req.params.id);

      if (!aluno) {
        return res.status(404).json({ error: "Nehum aluno encontrado." });
      }

      const { email, password, name, last_name } = req.body;
      await AlunoModel.update(
        { email: email, password: password, name: name, last_name: last_name },
        { where: { id: req.prams.id } }
      );

      return res.status(200).json({ response: "Aluno atualizado." });
    } catch (msg) {
      return res
        .status(400)
        .json({ error: msg.errors.map((err) => err.message) });
    }
  }
  async delete(req, res) {
    try {
      const aluno = await AlunoModel.findByPk(req.params.id);
      if (!aluno) {
        return res.status(404).json({ error: "Nenhum usuário encontrado." });
      }

      await aluno.destroy();

      return res.status(200).json({ response: "Usuário deletado." });
    } catch (msg) {
      console.log(msg);
      return res.status(400).json({ error: "Algo inesperado aconteceu." });
    }
  }
}

export default new AlunoController();
