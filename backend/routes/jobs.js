const express = require("express");
const { creatNewJob, getJobByCategorieId, updateJobById, deleteJobById, alljobs } = require("../controllers/jobs");

const jobsRouter = express.Router();

jobsRouter.post("/", creatNewJob);
jobsRouter.get("/:id", getJobByCategorieId);
jobsRouter.put("/:id", updateJobById);
jobsRouter.delete("/:id", deleteJobById);
jobsRouter.get("/",alljobs);

module.exports=jobsRouter;