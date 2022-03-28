const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  age: { type: Number },
  gender: { type: String },
  role: { type: String, default: "User" },
  image: {
    type: String,
    default:
      "https://cdn.vectorstock.com/i/1000x1000/00/65/user-profile-grey-icon-web-avatar-employee-vector-32550065.webp",
  },
});
/******************************************************************************************************* */
// This function for hashing the password when the user make a register before saving in the data-base //
userSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, 10);
});
/************************************************************************************************* */
module.exports = mongoose.model("User", userSchema);
