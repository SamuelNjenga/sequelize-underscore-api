"use strict";

module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define(
    "Department",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      departmentName: DataTypes.STRING,
    },
    {
      underscored: true,
      // defaultScope: {
      //     attributes: {exclude: ['password']}
      // }
    }
  );

  Department.associate = function (models) {
    // associations can be defined here

    Department.hasOne(models.Account, {
      onDelete: "cascade",
      foreignKey: {
        name: "department_id",
        allowNull: true,
      },
    });
  };
  return Department;
};
