const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserModel",
  },
  creator_name: { type: String },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});

const ArtworkModel = mongoose.model("artwork", artworkSchema);

module.exports = { ArtworkModel };
