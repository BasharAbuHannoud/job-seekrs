const express = require("express");

const { login, loginAdmin } = require("../controllers/login");
const authentication = require("../middleware/authentication");
const loginRouter = express.Router();
/*********************************** */
loginRouter.post("/",login);
loginRouter.post("/loginAdmin",loginAdmin)

module.exports=loginRouter