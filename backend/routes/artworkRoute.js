const { Router } = require("express");
const { ArtworkModel } = require("../models/artworkModel");
const artworkRouter = Router();

artworkRouter.post("/addart", async (req, res) => {
  try {
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

artworkRouter.get("/getarts", async (req, res) => {
  try {
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
