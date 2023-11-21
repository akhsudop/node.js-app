const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "password", {
  // password to mySQL root instance
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
