import jwt from "jsonwebtoken";

export default (req, res, next) => {
  try {
    const authToken = req.headers["authorization"];

    if (!authToken) {
      return res.status(401).json({ response: "Necessário fazer login." });
    }

    const bearer = authToken.split(" ");

    const token = bearer[1];

    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
      if (err) {
        return res
          .status(401)
          .json({ response: ["Não autorizado.", "Utilize um Token válido"] });
      }
      {
        req.token = token;
        req.log = { id: data.id, email: data.email };
        next();
      }
    });

    /* caso seu sistema possui lógica de 'roles' */

    //   if (decoded.role == 1) {
    //     next();
    //   } else {
    //     return res.send(401).json({ msg: "você não tem autorização" });
    //   }
    // }
  } catch (error) {
    return res.status(400).json({ response: "Token inválido" });
  }
};
