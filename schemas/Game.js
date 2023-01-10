const mongoose = require("mongoose");

const { Schema } = mongoose;

const gameSchema = new Schema({
  winner: {
    type: String,
    required: true,
  },
  winnerID: {
    type: Number,
    required: true,
  },
  loser: {
    type: String,
    required: true,
  },
  loserID: {
    type: Number,
    required: true,
  },
  // timestamps: {
  //  createdAt: "created_at",
  //  updatedAt: "updated_at",
  // },
});

module.exports = mongoose.model("Game", gameSchema);
