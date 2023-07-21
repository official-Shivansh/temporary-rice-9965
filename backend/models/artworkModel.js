const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    typeOfArtWork: { type: String, required: true },
    tags: [String],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UserModel",
      required: true,
    },
    creator_name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
      },
    ],
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artwork_like",
      },
    ],
  },
  { versionKey: false }
);

const ArtworkModel = mongoose.model("artwork", artworkSchema);

module.exports = { ArtworkModel };
