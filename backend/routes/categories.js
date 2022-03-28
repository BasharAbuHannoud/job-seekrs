const express = require("express");
const {
  createNewCategorie,
  getAllCategories,
} = require("../controllers/categories");

const usersRouter = express.Router();
/******************************************************************************** */
usersRouter.post("/", createNewCategorie);
usersRouter.get("/", getAllCategories);

module.exports = usersRouter;
