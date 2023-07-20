const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  tokens: [String],
});

const BlacklistModel = mongoose.model("blacklistedToken", blacklistSchema);

module.exports = { BlacklistModel };
