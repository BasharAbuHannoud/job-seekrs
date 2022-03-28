const userModel = require("../database/models/userSchema");
const { error500, resObjectSuccess } = require("./helpers");

const createNewUser = (req, res) => {
  const { name, email, password, age, gender, role } = req.body;
  const newUser = new userModel({
    name,
    email,
    password,
    age,
    gender,
    role,
  });
  newUser
    .save()
    .then(resObjectSuccess(res, 201, "user"))
    .catch((err) => {
      console.error(err);
      if (err.code === 11000) {
        return res.status(409).json({
          success: false,
          message: `The email already exists`,
        });
      }
      error500(err, res);
    });
};

module.exports = {
  createNewUser,
};
