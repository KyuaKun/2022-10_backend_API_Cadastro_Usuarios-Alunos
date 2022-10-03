module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable("photos", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },

      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      aluno_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "alunos",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable("photos");
  },
};
