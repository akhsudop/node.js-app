const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "alinkaIT97", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
