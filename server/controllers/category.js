const Category = require("../models/category");
const Sub = require("../models/sub");
const slugify = require("slugify");
const Product = require("../models/product");

exports.create = async (req, res) => {
  try {
    const { name } = req.body; //we get data from frontend and we destructure only name from req.body
    const category = await new Category({
      name: name,
      slug: slugify(name), //we generate slug here
    }).save();
    res.json(category);
  } catch (err) {
    console.log(err);
    res.status(400).send("Create category failed");
  }
};

//list out all categories
exports.list = async (req, res) => {
  res.json(await Category.find().sort({ createdAt: -1 }).exec());
};

//get single category by slug
exports.read = async (req, res) => {
  let category = await Category.findOne({ slug: req.params.slug }).exec();

  const products = await Product.find({ category: category })
    .populate("category")
    .exec();

  res.json({ category, products });
};

exports.update = async (req, res) => {
  const { name } = req.body;
  try {
    const updated = await Category.findOneAndUpdate(
      { slug: req.params.slug }, //1st argument based on what we need to find and update
      { name: name, slug: slugify(name) }, //2nd argument we update what we require here it will be name
      { new: true } //to pass the updated value
    );
    res.json(updated);
  } catch (err) {
    console.log(err);
    res.status(400).send("Category update failed");
  }
};

//delete category
exports.remove = async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Category delete failed");
  }
};

exports.getSubs = (req, res) => {
  Sub.find({ parent: req.params._id }).exec((err, subs) => {
    //without async nd await we write call back in exec
    if (err) console.log(err);
    res.json(subs);
  });
};
