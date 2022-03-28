const userModel = require("../database/models/userSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { resAdmin, adminScuess, resObjectSuccess } = require("./helpers");

let checkEmail = [];
const login = (req, res) => {
  const { email, password } = req.body;

  userModel
    .findOne({ email })
    .then((resultUser) => {
      bcrypt.compare(password, resultUser.password, (err, result) => {
        if (result) {
          //generate Token
          const payload = {
            userId: resultUser._id,
            name: resultUser.name,
            role: resultUser.role,
          };

          const option = {
            expiresIn: "24h",
          };

          const token = jwt.sign(payload, process.env.SECRET, option);
          checkEmail.push(result.email);

          res.status(200).json({
            success: true,
            massage: " Valid login credentials",
            token,
            userId: resultUser._id,
            role: resultUser.role,
          });
        } else {
          res.status(403).json({
            success: false,
            message: "The password you’ve entered is incorrect",
          });
        }
      });
      checkEmail = [];
    })
    .catch((err) => {
      if (checkEmail.length == 0) {
        res.status(400).json({
          //bad request
          success: false,
          massage: "The email doesn't exist",
        });
      } else {
        res.json(err);
      }
    });
};

const loginAdmin = (req, res) => {
  const { email, password } = req.body;

  if (process.env.ADMIN_USER === email && process.env.ADMIN_PASS === password) {
    resAdmin(res, 200, "Admin");
  } else {
    res.status(404).json({
      err: "NOT ADMIN",
    });
  }
};
module.exports = {
  login,
  loginAdmin,
};
