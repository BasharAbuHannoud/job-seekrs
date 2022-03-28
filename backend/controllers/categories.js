const categoriesModal = require("../database/models/categoriesSchema");
const { resObjectSuccess } = require("./helpers");
const createNewCategorie = (req, res) => {
  const { categorie } = req.body;
  const newcategorie = new categoriesModal({
    categorie,
  });

  newcategorie
    .save()
    .then(resObjectSuccess(res, 200))
    .catch((err) => error500(err, res));
};

const getAllCategories = (req, res) => {
  categoriesModal
    .find({})
    .then((data) => {
      res.status(200).json({
        success: true,
        data,
      });
    })
    .catch((err) => error500(res, err));
};

module.exports = {
  createNewCategorie,
  getAllCategories,
};
