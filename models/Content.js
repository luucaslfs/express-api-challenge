const mongoose = require("mongoose");
const { Schema } = mongoose;

const contentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      enum: ["Filme", "Serie"],
      required: true,
    },
    numberOfSeasons: {
      type: Number,
      required: function () {
        return this.type === "Serie";
      },
    },
    numberOfEpisodes: {
      type: Number,
      required: function () {
        return this.type === "Serie";
      },
    },
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    ratings: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: "User",
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
        },
      },
    ],
  },
  { timestamps: true }
);

const Content = mongoose.model("Content", contentSchema);

module.exports = {
  Content,
  contentSchema,
};
