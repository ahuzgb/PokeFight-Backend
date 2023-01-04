const express = require("express");

const pokeData = require("./pokedex.json");

const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 8080;

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

app.listen(PORT, () => {
  `You are the listener, you are on port ${PORT}`;
});
