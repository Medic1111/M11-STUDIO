const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minLength: [2, "Title must be at least 5 chars long"],
      maxLength: [65, "Title must be at most 15 chars long"],
      unique: [true, "Title already in use, choose a different one"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [1, "Price must be at least 5 chars long"],
      max: [999999, "Price must be at most 999999"],
    },
    identity: {
      type: Number,
      required: [true, "Identity is required"],
      min: [0, "Identity must be at least 0"],
      max: [999999, "Identity must be at most 999999"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      minLength: [6, "Description must be at least 6 chars long"],
      maxLength: [2000, "Description must be at most 2000 chars long"],
    },
    url: {
      type: String,
      required: [true, "url is required"],
      trim: true,
      minLength: [6, "url must be at least 6 chars long"],
      maxLength: [2000, "url must be at most 2000 chars long"],
    },
    artist: {
      type: String,
      required: [true, "Artist is required"],
      trim: true,
      minLength: [6, "Artist must be at least 6 chars long"],
      maxLength: [200, "Artist must be at most 200 chars long"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      minLength: [6, "Location must be at least 6 chars long"],
      maxLength: [200, "Location must be at most 200 chars long"],
    },
    view: {
      type: String,
      required: [true, "View is required"],
      trim: true,
      minLength: [6, "Location must be at least 6 chars long"],
      maxLength: [200, "Location must be at most 200 chars long"],
      default: "portrait",
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = { Product };
