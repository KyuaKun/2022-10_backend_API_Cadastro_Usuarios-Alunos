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

        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: {
              msg: "Insira um email válido.",
            },
            len: {
              args: [3, 100],
              msg: "Insira um email válido.",
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
            is: {
              args: ["^[a-z0-9]+$", "i",],
              msg: "oioisfosfodsaosiafosaiodsaifdsaoifdsaoif",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    this.addHook("beforeSave", async (user) => {
      user.password_hash = await bcryptjs.hash(user.password, 10);
    });
    return this;
  }
}
