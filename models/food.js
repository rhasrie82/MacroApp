const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  week: { type: String, required: true },
  day: { type: String, required: true },
  carbs: { type: String, required: true },
    proteins: { type: String, required: true },
    fats:{ type: String, required: true },
  journal: String,
  date: { type: Date, default: Date.now }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
