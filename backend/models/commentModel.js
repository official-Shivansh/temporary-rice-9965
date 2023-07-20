const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment_text: String,
    comment_creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = { CommentModel };
