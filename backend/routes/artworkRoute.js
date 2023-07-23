const { Router } = require("express");
const { ArtworkModel } = require("../models/artworkModel");
const { CommentModel } = require("../models/commentModel");
const artworkRouter = Router();

const { authMiddleware } = require("../middleware/auth.middleware");

artworkRouter.get("/getarts", async (req, res) => {
  let { title, creator_name } = req.query;
  try {
    let query = {};
    if (title && creator_name) {
      query = { title, creator_name };
    } else if (title) {
      query.title = { $regex: title, $options: "i" };
    } else if (creator_name) {
      query.creator_name = { $regex: creator_name, $options: "i" };
    }
    let arts = await ArtworkModel.find(query);
    console.log("here inside get arts", arts);
    res.status(200).send({ msg: "All arts fetched", arts });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Restricted Routes start here
artworkRouter.use(authMiddleware);
// getting a single product

artworkRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const art = await ArtworkModel.findById(id);

    // const artCretorId = art.creator.toString();

    console.log("id", id);

    res.status(200).send({
      msg: "Post fetched according to paramId successfully",
      art,
    });
    return;
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

artworkRouter.post("/addart", async (req, res) => {
  console.log("inside /addart route", req.body);
  try {
    console.log(req.userId, req.name);
    let { title, price, tags, description, typeOfArtWork, image } = req.body;
    let newArt = await ArtworkModel.create({
      title,
      image,
      typeOfArtWork,
      price,
      tags,
      description,
      creator: req.userId,
      creator_name: req.name,
      likes: [],
      comments: [],
    });
    await newArt.populate("creator");
    res.status(200).send({ msg: "Artwork added", art: newArt });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

artworkRouter.get("/profile", async (req, res) => {
  try {
    const userId = req.userId;
    const query = { creator: userId }; // Filter by the logged-in user's ID
    let arts = await ArtworkModel.find(query);
    res.status(200).send({ msg: "Logged in user's arts are fetched.", arts });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

artworkRouter.patch("/:id", async (req, res) => {
  try {
    const userId = req.userId;
    const payload = req.body;
    const { id } = req.params;
    const art = await ArtworkModel.findById(id);

    const artCretorId = art.creator.toString();

    console.log("id", id, "userId", userId, "artcreatorId", artCretorId);

    if (artCretorId !== userId) {
      res.status(400).send({
        msg: "Not authorized for updating art",
      });
      return;
    }

    const updatedart = await ArtworkModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    res.status(200).send({
      msg: "Post updated successfully",
      updatedart,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

artworkRouter.delete("/:id", async (req, res) => {
  try {
    const userId = req.userId;

    const { id } = req.params;
    const art = await ArtworkModel.findById(id);

    const artCretorId = art.creator.toString();

    console.log("id", id, "userId", userId, "artcreatorId", artCretorId);

    if (artCretorId !== userId) {
      res.status(400).send({
        msg: "Not authorized for deleting art",
      });
      return;
    }

    const deletedart = await ArtworkModel.findByIdAndDelete(id);
    res.status(200).send({
      msg: "Art deleted successfully",
      deletedart,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

// Define a route to add a like to the artwork document
artworkRouter.post("/:id/like", async (req, res) => {
  try {
    const artworkId = req.params.id;

    console.log("inside like artworkId", artworkId)

    // Find the artwork document by its ID
    const artwork = await ArtworkModel.findById(artworkId);
    console.log("inside like artwork", artwork);
    if (!artwork) {
      return res.status(404).json({ error: "Artwork not found" });
    }

    // Assuming you have some form of authentication, get the user's ID who liked the artwork
    const userId = req.userId; // Change this based on your authentication method
    console.log("inside like userId", userId);
    // Check if the user has already liked the artwork
    const userIndex = artwork.likes.indexOf(userId);
    if (artwork.likes.includes(userId)) {
      artwork.likes.splice(userIndex, 1);
      await artwork.save();
      return res.status(200).json({
        error: "User already liked this artwork, so unliking now",
        artwork,
      });
    }

    // Add the user's ID to the "likes" array
    artwork.likes.push(userId);

    // Save the updated artwork document
    await artwork.save();

    res.status(200).json({
      message: "Artwork liked successfully",
      artwork,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Post a new comment for a single post
artworkRouter.post("/:id/comments", async (req, res) => {
  try {
    const userImg = req.body.comment_creator_img;

    const postId = req.params.id;
    const commentText = req.body.comment_text;
    const userId = req.userId; // Assuming you've set the userId in the request object
    // Find the post
    const post = await ArtworkModel.findById(postId);
    console.log("post inside post comments", post);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    const commentData = {
      createdby: req.body.createdby,
      comment_creator_img: userImg,
      comment_text: commentText,
      comment_creator: userId,
    };
    //Create a new comment and automatically capture the user ID
    const newComment = await CommentModel.create(commentData);
    console.log("new comment", newComment);
    post.comments.push(newComment);
    console.log("post before saving", post);
    await post.save();
    res.status(201).json({
      message: "Comment posted successfully",
      newComment,
      commentData,
    });
  } catch (error) {
    res.status(500).json({
      error: "Something went wrong",
      err: error.message,
      errorStack: error.stack,
    });
  }
});

// Get comments for a single post
artworkRouter.get("/:id/comments", async (req, res) => {
  const postId = req.params.id;

  try {
    // Find the post
    const post = await ArtworkModel.findById(postId)
      .populate("comments", "-__v") // This will populate the comments with their details while excluding the '__v' field
      .exec();

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post.comments);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});


module.exports = { artworkRouter };
