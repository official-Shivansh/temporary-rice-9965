const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema(
  {
    liker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
    },
  },
  { versionKey: false }
);

const LikeModel = mongoose.model("artwork_like", likeSchema);

module.exports = { LikeModel };
