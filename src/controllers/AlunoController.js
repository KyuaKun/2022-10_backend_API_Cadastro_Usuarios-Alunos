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
  async show(req, res) {}
  async update(req, res) {}
  async delte(req, res) {}
}

export default new AlunoController();
