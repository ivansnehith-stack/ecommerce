const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true, //we search database by text
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true, //we can query the database based on the slug
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32,
    },
    category: {
      type: ObjectId,
      ref: "Category", //refer to the Category model
    },
    subs: [
      {
        type: ObjectId,
        ref: "Sub", //refer to the Sub model
      },
    ],

    quantity: Number,

    sold: {
      type: Number,
      default: 0,
    },

    images: {
      type: Array,
    },

    shipping: {
      type: String,
      enum: ["Yes", "No"], //Only option we give to user either its shipped or not like yes or no
    },
    color: {
      type: String,
      enum: ["Black", "Brown", "Silver", "White", "Blue"],
    },
    brand: {
      type: String,
      enum: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    },
    ratings: [
      {
        star: Number,
        postedBy: { type: ObjectId, ref: "User" },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
