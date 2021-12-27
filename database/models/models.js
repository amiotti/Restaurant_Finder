const { DataTypes } = require("sequelize");
const db = require("../index.js");

//TABLES MODELS

const Products = db.define("products", {
  name: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  on_sale: {
    type: DataTypes.BOOLEAN,
  },
  featured: {
    type: DataTypes.BOOLEAN,
  },
});

const Restaurants = db.define("restaurants", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price_range: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = { Products, Restaurants };
