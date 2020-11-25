const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

const keys = require("./config/keys");

const app = express();

//DB Setup
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

//接続しているか確認用
mongoose.connection.on("connected", () => {
  console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
  console.error("Error connecting to mongo", err);
});

//App Setup

//logging framework
app.use(morgan("combined"));
//parsed any coming request to json
app.use(bodyParser.json({ type: "*/*" }));

//routing
require("./routes/authRoutes")(app);
//userのAPI
const userRoute = require("./routes/user");
app.use("/users", userRoute);

//Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log("Server listening on:", PORT);
