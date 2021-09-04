const admin = require("../firebase");
const User = require("../models/user");

exports.authCheck = async (req, res, next) => {
  // console.log(req.headers);
  try {
    const firebaseUser = await admin
      .auth()
      .verifyIdToken(req.headers.authtoken); //verify token
    // console.log(firebaseUser);
    req.user = firebaseUser;
    next();
  } catch (err) {
    console.log(err);
    res.status(401).json({
      err: "Invalid or expired token",
    });
  }
  //get token from frontend and send to backend in headers
};

//admin user role check middelware
exports.adminCheck = async (req, res, next) => {
  const { email } = req.user; //destructure email from authcheck middleware req.user
  const adminUser = await User.findOne({ email: email }).exec();
  if (adminUser.role !== "admin") {
    res.status(403).json({ err: "Admin resource. Access Denied" });
  } else {
    next();
  }
};
