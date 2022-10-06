import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel";

export default async (req, res, next) => {
  const authToken = req.headers["authorization"];

  if (!authToken) {
    return res.status(401).json({ response: "Necessário fazer login." });
  }

  const bearer = authToken.split(" ");

  const token = bearer[1];
  try {
    const data = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email, username } = data;
    const user = await UserModel.findOne({
      where: { id, email },
    });
    if (!user || user.role != 1) {
      return res.status(401).json({ response: "Usuário sem autorização" });
    }

    req.userId = id;
    req.userEmail = email;
    req.userName = username;
    return next();
  } catch (error) {
    return res.status(400).json({ response: "Token inválido" });
  }
};
