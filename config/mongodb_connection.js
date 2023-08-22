const mongoose = require("mongoose");
mongoose
  .connect(process.env.CONNECTION_URL)
  .then((res) => {
    console.log("MongoDB Connected ... ");
  })
  .catch((err) => {
    console.log("Error.!!", err);
  });
