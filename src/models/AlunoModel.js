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
            isAlpha: {
              args: true,
              msg: "Apenas o primeiro nome. Sem espaços em branco, simbolos e/ou 'ç'",
            },
            notNull: {
              msg: "Campo 'idade' não pode permanecer vazio.",
            },
            notEmpty: {
              msg: "Campo 'idade' não pode permanecer vazio.",
            },
          },
        },

        last_name: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: {
              args: [3, 80],
              msg: "Campo 'sobrenome' deve ter entre (min)3 e (max)80 caracteres",
            },
            isAlpha: {
              args: true,
              msg: "Apenas o ultimo nome. Sem espaços em branco, simbolos e/ou 'ç'",
            },
            notNull: {
              msg: "Campo 'idade' não pode permanecer vazio.",
            },
            notEmpty: {
              msg: "Campo 'idade' não pode permanecer vazio.",
            },
          },
        },

        age: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            notNull: {
              msg: "Campo 'idade' não pode permanecer vazio.",
            },
            notEmpty: {
              msg: "Campo 'idade' não pode permanecer vazio.",
            },
            notNumber(value) {
              parseInt(value);
              if (isNaN(value)) {
                throw new Error("Campo 'idade' só aceita números.");
              }
            },
            isInt: {
              msg: "Campo 'idade' aceita apenas números inteiros e sem vírgulas",
            },
          },
        },

        email: {
          type: DataTypes.STRING,
          allowNull: true,
          unique: {
            msg: "Email já existe.",
          },
          validate: {
            isEmail: {
              msg: "Insira um email válido.",
            },
          },
        },

        registration: {
          type: DataTypes.STRING,
          defaultValue: "",
          allowNull: false,
          unique: true,
        },
      },
      {
        sequelize,
      }
    );
    return this;
  }
  static associate(models) {
    this.hasMany(models.Photo, { foreignKey: "aluno_id" });
  }
}
