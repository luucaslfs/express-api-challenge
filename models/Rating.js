const mongoose = require("mongoose");
const { Schema } = mongoose;

const ratingSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    content: {
      type: Schema.Types.ObjectId,
      ref: "Content",
      required: true,
    },
    value: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
  },
  { timestamps: true }
);

ratingSchema.index({ user: 1, content: 1 }, { unique: true }); // Garantindo que um usuario so pode classificar um conteudo uma vez

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = {
  Rating,
  ratingSchema,
};
