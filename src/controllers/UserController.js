import User from "../models/User";

class UserController {
  async store(req, res) {
    const newUser = await User.create({
     
      password: "vinicius2304",
    });

    return res.json({ newUser });
  }
}

export default new UserController();
