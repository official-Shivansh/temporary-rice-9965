const express = require('express');
const { FavouriteModel } = require('../models/favoutiteModel');
const { CartModel } = require('../models/cartModel');
const favouriteRouter = express.Router();

favouriteRouter.get("/", async (req, res) => {
    try {
        let data = await FavouriteModel.find({ creator: req.userId }).populate('product');
        res.send(data);
    } catch (error) {
        res.status(400).send(error);
    }
});

favouriteRouter.post("/:id", async (req, res) => {
    try {

        let present = await FavouriteModel.find({ product: req.params.id });

        if (!present.length) {
            await FavouriteModel.create({
                creator: req.userId,
                product: req.params.id,
            })
            return res.status(200).send({ msg: "Artwork added" });
        } else {
            return res.status(200).send('Art already present in favourite');
        }

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

favouriteRouter.delete('/delete/:id', async (req, res) => {
    try {
        let present = await FavouriteModel.findOneAndDelete({ product: req.params.id });

        return res.status(200).send({ msg: "Artwork deleted" });

    } catch (error) {
        res.status(400).send({ error: error.message });
    }
});

favouriteRouter.post('/addtocart/:id', async (req, res) => {
    try {
        let ID = req.params.id;
        let deletedArt = await FavouriteModel.findOneAndDelete({ product: req.params.id }, { new: true });

        let addToCart = await CartModel.create({ product: deletedArt.product, creator: req.userId });

        res.status(200).send('Product successfully added to cart');

    } catch (error) {
        res.status(400).send({ error: error });
    }
});

module.exports = {
    favouriteRouter
}