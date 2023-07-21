const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true,
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "artwork",
        required: true,
    }
})

const CartModel = mongoose.model('cart', cartSchema);

module.exports = { CartModel };