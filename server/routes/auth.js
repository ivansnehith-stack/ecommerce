const express = require("express");

const router = express.Router();

//import middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

//import controllers
const { createOrUpdateUser, currentUser } = require("../controllers/auth");

router.post("/create-or-update-user", authCheck, createOrUpdateUser);
router.post("/current-user", authCheck, currentUser); //endpoint,middleware,controllers
router.post("/current-admin", authCheck, adminCheck, currentUser);

module.exports = router;
