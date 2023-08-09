const mongoose = require("mongoose");

const { Schema } = mongoose;

const serieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    seasons: {
        type: Number,
        required: true
    },
    episodes: {
        type: Number,
        required: true
    }
},
    { timestamps: true }
);

const Serie = mongoose.model("Serie", serieSchema);

module.exports = {
    Serie,
    serieSchema,
};