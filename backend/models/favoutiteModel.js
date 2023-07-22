const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
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

const FavouriteModel = mongoose.model('favourite', favouriteSchema);

module.exports = { FavouriteModel };