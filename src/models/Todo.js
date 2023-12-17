const { Model, DataTypes } = require("sequelize");
const sequelize = require("../instances/mysql");

const User = sequelize.define(
  "Todo",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "todos",
    timestamps: false,
  }
);

module.exports = User;
