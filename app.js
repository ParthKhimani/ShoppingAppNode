const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./Routes/router");

const app = express();
const MONGO_URI =
  "mongodb+srv://parth:P%40rth2005@cluster0.eixcpta.mongodb.net/WebElight?retryWrites=true&w=majority";

app.use(cors());
app.use(bodyParser.json());
app.use(router);

mongoose.set("strictQuery", true);
mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(4444);
  })
  .catch((err) => console.log(err));
