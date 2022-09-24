import { Model, DataTypes } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          primaryKey: true,
        },

        name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 80],
              msg: "Campo 'nome' deve ter entre (min)3 e (max)80 caracteres",
            },
          },
        },

        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 80],
              msg: "Campo 'sobrenome' deve ter entre (min)3 e (max)80 caracteres",
            },
          },
        },

        age: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            isInt: {
              msg: "Campo 'idade' aceita apenas números sem vírgulas ou pontos.",
            },
            notNull: {
              msg: "Campo 'idade' não pode permanecer vazio.",
            },
          },
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
}
