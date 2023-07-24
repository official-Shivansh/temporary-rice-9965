const express = require('express');
const { CartModel } = require('../models/cartModel');
const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
    try {
        let data = await CartModel.find({ creator: req.userId }).populate('product');
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
});

cartRouter.post("/:id", async (req, res) => {
    try {
        let { ID } = req.params;
        
        let present = await CartModel.find({ product: req.params.id });

        if (!present.length) {
            await CartModel.create({
                creator: req.userId,
                product: req.params.id,
            })
            return res.status(200).send({ msg: "Artwork added" });
        } else {
            return res.status(200).send('Art already present in cart');
        }

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

cartRouter.delete('/delete/:id', async (req, res) => {
    try {
        let present = await CartModel.findOneAndDelete({ product: req.params.id });

        return res.status(200).send({ msg: "Artwork deleted" });

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

module.exports = {
    cartRouter
}