const { Router } = require("express");
const { ArtworkModel } = require("../models/artworkModel");
const artworkRouter = Router();

artworkRouter.post("/addart", async (req, res) => {
  try {
    let {
      title,
      image,
      price,
      tags,
      description,
      comments,
      likes,
      typeOfArtWork,
    } = req.body;
    let newArt = await ArtworkModel.create({
      title,
      image,
      typeOfArtWork,
      price,
      tags,
      description,
      creator: req.userId,
      creator_name: req.username,
      likes,
      comments,
    });
    // await newnote.populate("creator");
    res.status(200).send({ msg: "Artwork added", art: newArt });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

artworkRouter.get("/getarts", async (req, res) => {
  try {
    const query = {};
    let { title } = req.body;
    if (title) {
      query.title = { $regex: title, $options: "i" };
    }
    let arts = await ArtworkModel.find(query);
    res.status(200).send({ msg: "All arts fetched", arts });
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
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

artworkRouter.delete("/delete/:id", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = { artworkRouter };
