import AlunoModel from "../models/AlunoModel";

class AlunoService {
  generateRegistration() {
    const data = new Date();
    const aaaa = () => data.getFullYear();
    const p = () => Math.floor(Math.random() * 10);
    const uu = () => Math.floor(Math.random() * 10 + 10);
    const ccc = () => Math.floor(Math.random() * 100 + 100);
    const sss = () => Math.floor(Math.random() * 100 + 100);
    const v = () => Math.floor(Math.random() * 10);

    const register = `${aaaa()}${p()}${uu()}${ccc()}${sss()}-${v()}`;

    return register;
  }

  generateEmail(name, email) {
    const data = new Date();
    const random = () => Math.floor(Math.random() * 1001);

    const randomEmail = `${name.toLowerCase()}${email.toLowerCase()}${data.getMilliseconds()}${random()}@duoimpar.com`;

    return randomEmail;
  }
}

export default new AlunoService();
