const mongoose = require("mongoose");

const { Schema } = mongoose;

const filmeSchema = new Schema({
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
    cover: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

const Filme = mongoose.model("Filme", filmeSchema);

module.exports = {
    Filme,
    filmeSchema,
};