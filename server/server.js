const express = require("express");
const mongoose = require("mongoose");
const morgon = require("morgan");
// const bodyParser = require("body-parser");
const cors = require("cors");
const fs = require("fs");
require("dotenv").config();

//app
const app = express();
const path = require("path");

//database connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => console.log(`DB CONNECTION ERR ${err}`));

//middlewares
app.use(morgon("dev"));
// app.use(bodyParser.json());
app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb" }));
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

//routes middleware
// app.use("/api", authRoutes); ex for below code
//auto load all the routes using file sytem node moduel
fs.readdirSync("./routes").map((r) =>
  app.use("/api", require("./routes/" + r))
);

//port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server running on port ${port}`));
