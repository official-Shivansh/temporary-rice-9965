const { Router } = require("express");
const { ArtworkModel } = require("../models/artworkModel");
const artworkRouter = Router();

const { authMiddleware } = require("../middleware/auth.middleware");

artworkRouter.get("/getarts", async (req, res) => {
  try {
    const query = {};
    let { title } = req.query;
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    let arts = await ArtworkModel.find(query);
    console.log("here inside getarts arts", arts);
    res.status(200).send({ msg: "All arts fetched", arts });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});
// Restricted Routes start here
artworkRouter.use(authMiddleware);
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

artworkRouter.patch("/update/:id", async (req, res) => {
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

artworkRouter.delete("/delete/:id", async (req, res) => {
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

module.exports = { artworkRouter };
