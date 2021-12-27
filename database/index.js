const { Sequelize } = require("sequelize");
require("dotenv/config");

//CONECTION TO DB

const db = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:${process.env.DB_PORT}/${process.env.DB}`,
  {
    logging: false,
  }
);

module.exports = db;
