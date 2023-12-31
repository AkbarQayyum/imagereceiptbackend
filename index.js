const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.use(express.json());

app.use(bodyParser.json());
const dotenv = require("dotenv");
const usersRouters = require("./routes/Auth_routes");
const friend = require('./routes/Friend_routes')
const Notifications = require('./routes/NotificationRoutes')
const StripeRoutes = require('./routes/striperoutes')
dotenv.config();
require("./config/mongodb_connection");

app.use("/users/auth/", usersRouters);
app.use("/friend/", friend);
app.use("/notifications/", Notifications);
app.use("/stripe/", StripeRoutes);


const PORT = process.env.PORT || 4433;

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));

  const path = require("path");

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, console.log("Server started ..."));
