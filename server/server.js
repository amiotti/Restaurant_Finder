const express = require("express");
const app = express();
const morgan = require("morgan");
const { Products, Restaurants } = require("../database/models/models");
const cors = require("cors");
//MIDDLEWARES

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
//ROUTES
app.get("/api/v1/restaurants", async (req, res) => {
  try {
    const all_restaurants = await Restaurants.findAll();
    res.json(all_restaurants);
  } catch (err) {
    console.log(err);
  }
});

app.get("/api/v1/restaurants/:id", async (req, res) => {
  try {
    const one_restaurant = await Restaurants.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.json(one_restaurant);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/restaurants", async (req, res) => {
  try {
    Restaurants.create({
      name: req.body.name,
      location: req.body.location,
      price_range: req.body.price_range,
    });
    res.send("Restaurant Added");
  } catch (err) {
    console.log(err);
  }
});

app.put("/api/v1/restaurants/:id", async (req, res) => {
  try {
    Restaurants.update(
      {
        name: req.body.name,
        location: req.body.location,
        price_range: req.body.price_range,
      },
      {
        where: { id: req.params.id },
      }
    );
    res.send("Restaurant Updated");
  } catch (err) {
    console.log(err);
  }
});

app.delete("/api/v1/restaurants/:id", async (req, res) => {
  try {
    await Restaurants.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.send("Restaurant Deleted");
  } catch (err) {
    console.log(err);
  }
});

module.exports = app;
