const { Products, Restaurants } = require("./database/models/models");
const db = require("./database/index");
const app = require("./server/server.js");
require("dotenv/config");

//CONNECT TO DB AND RUN SERVER
const force = false;
db.sync({ force }).then(function () {
  console.log("Connected to DB");
  app.listen(process.env.PORT, function () {
    console.log(`Server is listening on port ${process.env.PORT}!`);
  });
});
