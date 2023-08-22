const mongoose = require("mongoose");
const userSchema = require("./Schemas/UserSchemas");
const Users = mongoose.model("RegisterUsers", userSchema);
module.exports = Users;
