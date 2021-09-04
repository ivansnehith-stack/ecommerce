const User = require("../models/user");

exports.createOrUpdateUser = async (req, res) => {
  const { name, picture, email } = req.user; //destructuring from  auth middleware from req.user
  const user = await User.findOneAndUpdate(
    { email: email }, // 1st argument based on what we need to update
    { name: email.split("@")[0], picture: picture }, //2nd argument what date we need to update
    { new: true } //gives updated user information
  ); //if user not there we update
  if (user) {
    // console.log("user updated", user);
    res.json(user);
  } else {
    const newUser = await new User({
      email: email,
      name: email.split("@")[0],
      picture: picture,
    }).save(); //if user not found we create new user
    // console.log("User Created", newUser);
    res.json(newUser);
  }
};

exports.currentUser = async (req, res) => {
  User.findOne({ email: req.user.email }).exec((err, user) => {
    if (err) throw new Error(err);
    res.json(user);
  });
};
