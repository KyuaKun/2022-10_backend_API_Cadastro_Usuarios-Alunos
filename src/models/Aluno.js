import { Model, DataTypes } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          // defaulValue: Sequelize.UUIDV4,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },

        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        lastName: {
          type: DataTypes.STRING,
          allowNull: false,
        },

        age: {
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
