const express = require("express");
const app = express.Router();

const {
  getAllGames,
  getOneGame,
  createGame,
} = require("../controllers/gameControllers");

app.route("/leaderboard").get(getAllGames);

app.route("/save").post(createGame);

app.route("/leaderboard/:id").get(getOneGame);

module.exports = app;
