const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
const dotenv = require("dotenv");
const usersRouters = require("./routes/Auth_routes");


dotenv.config();
require("./config/mongodb_connection");

app.use("/users/auth/", usersRouters);


const PORT = process.env.PORT || 4433;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log("Server started ..."));
