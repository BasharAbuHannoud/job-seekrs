const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categorie: { type: mongoose.Schema.Types.ObjectId, ref: "Categories" },
  description: { type: String, required: true },
  skills: { type: [String] },
});

module.exports = mongoose.model("Jobs", jobsSchema);
