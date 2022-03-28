const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const db = require("./database/db");

app.use(cors());

app.use(express.json());

const usersRouter = require("./routes/signUp");
app.use("/users", usersRouter);
/************************************** */
const loginRouter = require("./routes/login");
app.use("/login", loginRouter);
/************************************** */
const categorieRouter = require("./routes/categories");
app.use("/categorie", categorieRouter);
/************************************** */
const jobsRouter = require("./routes/jobs");
app.use("/jobs", jobsRouter);
/************************************** */
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`SERVER WORKING ON PORT: ${PORT}`);
});
