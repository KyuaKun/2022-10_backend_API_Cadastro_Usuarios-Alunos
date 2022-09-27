const bcryptjs = require("bcryptjs");

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: "1ebf60cd-c578-4338-9cc5-b06da75aeaf9",
          email: "adm1@dev.com",
          username: "admUser1",
          password_hash: await bcryptjs.hash("vinicius2304", 10),
          role: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: "f589f797-05ed-4041-9e41-923cb8fa9c28",
          email: "adm2@dev.com",
          username: "admUser2",
          password_hash: await bcryptjs.hash("vinicius2304", 10),
          role: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};

/*

{
  id: "",
  email: "",
  username: "",
  password_hash: await bcryptjs.hash("", 10),
  role: 1,
  created_at: new Date(),
  updated_at: new Date(),
}

*/
