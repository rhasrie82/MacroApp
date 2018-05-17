const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  carbs: { type: String, required: true },
    proteins: { type: String, required: true },
    fats:{ type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
