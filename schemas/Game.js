const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema({
  winner: {
    type: String,
    required: true,
  },
  loser: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Game", gameSchema);
