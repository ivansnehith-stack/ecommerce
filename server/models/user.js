const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema; //destructuring ObjectID from mongoose schema

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: {
      type: String,
      required: true,
      index: true,
    },
    role: {
      type: String,
      default: "subscriber",
    },
    cart: {
      type: Array,
      default: [],
    },
    address: String,
    wishlist: [{ type: ObjectId, ref: "Product" }], //it will be type of array and it will refer to product model
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
