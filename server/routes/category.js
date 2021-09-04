const express = require("express");
const router = express.Router();

//middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

//controller
const {
  create,
  read,
  update,
  list,
  remove,
  getSubs,
} = require("../controllers/category");

//route endpoints
router.post("/category", authCheck, adminCheck, create);
router.get("/categories", list); //all categories
router.get("/category/:slug", read); //based on slug we can query database
router.put("/category/:slug", authCheck, adminCheck, update);
router.delete("/category/:slug", authCheck, adminCheck, remove);
router.get("/category/subs/:_id", getSubs);
module.exports = router;
