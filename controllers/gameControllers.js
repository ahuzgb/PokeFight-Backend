const Game = require("../schemas/Game");

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json({
      games,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const getOneGame = async (req, res) => {
  try {
    const { id } = req.params;
    const game = await Game.findById(req.params.id);
    res.status(200).json({
      game,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const createGame = async (req, res) => {
  try {
    const { winner, winnerID, loser, loserID } = req.body;
    console.log("req.body:", req.body);
    const game = await Game.create({ winner, winnerID, loser, loserID });
    res.status(201).json({
      success: true,
      game,
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

const deleteAllGames = async (req, res) => {
  try {
    const student = await Game.deleteMany({});
    res.status(200).json({
      response: "All games eliminated successfully",
    });
  } catch (error) {
    res.status(500).json({
      error,
    });
  }
};

module.exports = {
  deleteAllGames,
  getAllGames,
  getOneGame,
  createGame,
};
