const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  categorie: { type: String },
});

module.exports = mongoose.model("Categories", categoriesSchema);
