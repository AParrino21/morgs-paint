const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paintingsSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    inventory: {
        type: Number,
        required: true
    }

});

const Paintings = mongoose.model("paintings", paintingsSchema);

module.exports = Paintings;