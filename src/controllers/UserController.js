import User from "../models/User";

class UserController {
  async store(req, res) {
    const user = await User.create({
      email: "viisd121212assadsdsasasadsii@vini.com",
      password: "                 ",
    });

    return res.json({ new_user: user });
  }
}

export default new UserController();
