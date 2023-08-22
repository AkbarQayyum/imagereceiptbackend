const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(req.headers);
  if (authHeader) {
    const token = authHeader;
    const user = jwt.verify(token, process.env.SECRET);
    console.log(user);
    if (user) {
      next();
    } else {
      res.send({ message: "Authorization Failed.", isSuccess: false });
    }
  } else {
    res.sendStatus(401);
  }
};

module.exports = verifyUser;
