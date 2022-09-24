import { Model, DataTypes } from "sequelize";

export default class User extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          // autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },

        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {
            isEmail: {
              msg: "Insira um email válido",
            },
            notNull: {
              msg: "aaaa",
            },
          },
        },

        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
      }
    );
  }
}
