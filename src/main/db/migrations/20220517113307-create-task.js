"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Tasks",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        task_name: {
          type: Sequelize.STRING,
        },
        user_id: {
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        underscored: true,
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tasks");
  },
};
