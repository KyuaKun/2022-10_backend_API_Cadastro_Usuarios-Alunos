import { Model, DataTypes } from "sequelize";
import bcryptjs from "bcryptjs";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        role: {
          type: DataTypes.INTEGER,
          defaultValue: 0,
          allowNull: true,
        },

        username: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            msg: "Este nome de usuário já existe.",
          },
          validate: {
            len: {
              args: [3, 80],
              msg: "Campo 'nome de usuário' deve ter entre (min)3 e (max)80 caracteres",
            },
            is: {
              args: ["^[a-z0-9]+$", "i"],
              msg: "Nome usuário não pode conter espaços em branco.",
            },
            notNull: {
              msg: "Campo 'usuário' não pode permanecer vazio.",
            },
            notEmpty: {
              msg: "Campo 'usuário' não pode permanecer vazio.",
            },
          },
        },

        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: {
            msg: "Email já existe.",
          },
          validate: {
            isEmail: {
              msg: "Insira um email válido.",
            },
            notNull: {
              msg: "Campo 'email' não pode permanecer vazio.",
            },
            notEmpty: {
              msg: "Campo 'email' não pode permanecer vazio.",
            },
          },
        },

        password_hash: {
          type: DataTypes.STRING,
          allowNull: false,
          defaultValue: "",
        },

        password: {
          type: DataTypes.VIRTUAL,
          allowNull: false,
          validate: {
            len: {
              args: [6, 50],
              msg: "Senha deve conter no mínimo 6 caracteres",
            },
            notNull: {
              msg: "Senha não permanecer vazio.",
            },
            is: {
              args: ["^[a-z0-9]+$", "i"],
              msg: "Senha não pode conter espaços em branco.",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 10);
      }
    });
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compareSync(password, this.password_hash);
  }
}
