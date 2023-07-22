const express = require('express');
const { CartModel } = require('../models/cartModel');
const cartRouter = express.Router();

cartRouter.get("/getData", async (req, res) => {
    try {
        let data = await CartModel.find({ creator: req.userId }).populate('product');
    } catch (error) {
        res.status(400).send(error);
    }
    // await data.populate("creator");
    res.send(data);
})


cartRouter.post("/:id", async (req, res) => {
    try {
        let { ID } = req.params;
        console.log(req.params, ">>>>>>>");
        await CartModel.create({
            creator: req.userId,
            product: req.params.id,

        })
        // await newArt.populate("creator");
        res.status(200).send({ msg: "Artwork added" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = {
    cartRouter
}