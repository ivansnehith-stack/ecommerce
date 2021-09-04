const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    slug: {
      //Slugifies strings one-1-two-2-three-3
      type: String,
      unique: true,
      lowercase: true,
      index: true, //it helps to query the database fetch particular category based on slug
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);
