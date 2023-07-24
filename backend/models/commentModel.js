const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    comment_text: String,
    comment_creator_img: String,
    createdby: String,
    comment_creator: String,
  },
  { versionKey: false }
);

const CommentModel = mongoose.model("comment", commentSchema);

module.exports = { CommentModel };
