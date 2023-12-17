const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo-api", "root", "rootLucas", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
