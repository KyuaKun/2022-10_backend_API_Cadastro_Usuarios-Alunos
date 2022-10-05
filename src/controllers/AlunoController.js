import AlunoModel from "../models/AlunoModel";
import Photo from "../models/PhotoModel";
import AlunoService from "../service/AlunoService";

class AlunoController {
  async store(req, res) {
    try {
      const aluno = await AlunoModel.create({
        email: AlunoService.generateEmail(req.body.name, req.body.last_name),
        name: req.body.name,
        last_name: req.body.last_name,
        age: req.body.age,
        registration: AlunoService.generateRegistration(),
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
        include: {
          model: Photo,
          attributes: ["url", "filename"],
        },
        order: [["createdAt", "DESC"]],
      });

      alunos == alunos.length > 0
        ? res.status(404).json("Nenhum aluno cadastrado.")
        : res.status(200).json({ response: alunos });
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
      const aluno = await AlunoModel.findByPk(req.params.id, {
        attributes: ["id", "name", "last_name", "age", "email", "registration"],
        include: {
          model: Photo,
          attributes: ["url", "filename"],
        },
        order: [["createdAt", "DESC"]],
      });

      if (!aluno) {
        return res.status(404).json({ response: "Nenhum aluno encontrado" });
      }

      return res.status(200).json(aluno);
    } catch (msg) {
      return res.status(400).json(null);
    }
  }

  async update(req, res) {
    try {
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
