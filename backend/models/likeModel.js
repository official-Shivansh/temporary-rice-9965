const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    liker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
    liked_artwork: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "artwork",
    },
  },
  { versionKey: false }
);

const LikeModel = mongoose.model("artwork_like", likeSchema);

module.exports = { LikeModel };
