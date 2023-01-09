const express = require("express");
require("dotenv").config();
const connectDB = require("./dbinit");
const cors = require("cors");

const app = express();

connectDB();

const PORT = process.env.PORT || 8080;

const pokeData = require("./pokedex.json");

const games = require("./routes/gameRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.get("/", (req, res) => {
  res.send("The listener is a Pokemon");
});

app.get("/pokemon", (req, res) => {
  res.json(pokeData);
});

app.get("/pokemon/:id", (req, res) => {
  const { id } = req.params;
  const pokemon = pokeData.find((pokemon) => pokemon.id === Number(id));
  res.json(pokemon);
});

app.get("/pokemon/:id/:info", (req, res) => {
  const { id, info } = req.params;
  const pokemon = pokeData.find((pokemon) => pokemon.id === Number(id));

  res.send(pokemon[info]);
});

app.use("/game", games);

app.listen(PORT, () => {
  `You are the listener, you are on port ${PORT}`;
});
