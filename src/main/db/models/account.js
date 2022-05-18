"use strict";
module.exports = (sequelize, DataTypes) => {
  const Account = sequelize.define(
    "Account",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      department_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
    },
    {
      underscored: true,
      // defaultScope: {
      //     attributes: {exclude: ['password']}
      // }
    }
  );
  Account.associate = function (models) {
    // associations can be defined here

    Account.belongsTo(models.Department, {
      foreignKey: {
        name: "department_id",
        allowNull: false,
      },
    });
  };
  return Account;
};
