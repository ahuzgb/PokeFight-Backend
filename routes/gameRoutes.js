const express = require("express");
const app = express.Router();

const {
  getAllGames,
  getOneGame,
  createGame,
  deleteAllGames,
} = require("../controllers/gameControllers");

app.route("/leaderboard").get(getAllGames);

app.route("/save").post(createGame).delete(deleteAllGames);

app.route("/leaderboard/:id").get(getOneGame);

module.exports = app;
