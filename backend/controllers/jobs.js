const jobModel = require("../database/models/jobSchema");
const { error500, resObjectSuccess } = require("./helpers");

const creatNewJob = (req, res) => {
  const { name, description, location, skills, categorie } = req.body;

  const newJob = new jobModel({
    name,
    description,
    location,
    skills,
    categorie,
  });

  newJob
    .save()
    .then(resObjectSuccess(res, 201))
    .catch((err) => error500(res, err));
};

const getJobByCategorieId = (req, res) => {
  let id = req.params.id;
  jobModel
    .find({ categorie: id })
    .populate("categorie", "categorie -_id ")
    .then(resObjectSuccess(res, 200))
    .catch((err) => error500(res, err));
};

/******************************************************* */
const updateJobById = (req, res) => {
  const { name, description, location, skills, categorie } = req.body;

  let job_id = req.params.id;
  jobModel
    .findByIdAndUpdate(job_id, req.body, { new: true })
    .then((data) => {
      res.status(200).json({
        success: true,
        message: `success updated this job ${job_id}`,
        data,
      });
    })
    .catch((err) => error500(res, err));
};

const deleteJobById = (req, res) => {
  const job_id = req.params.id;

  jobModel
    .findByIdAndDelete({ _id: job_id })
    .then((data) => {
      if (!data) {
        res.status(404).json({
          success: false,
          massage: `The post  ==> ${job_id} Not Found`,
        });
      }

      res.status(200).json({
        success: true,
        massage: `Success Delete job With id ==> ${job_id}`,
      });
    })
    .catch((err) => error500(res, err));
};

/************************************ */

const alljobs = (req, res) => {
  jobModel
    .find({}).populate("categorie", "categorie -_id ")
    .then(resObjectSuccess(res, 200))
    .catch((err) => error500);
};
module.exports = {
  creatNewJob,
  getJobByCategorieId,
  updateJobById,
  deleteJobById,
  alljobs
};
