const mongoose = require("mongoose");
const pizzaSchema = new mongoose.Schema({
  crust: String,
  cheese: String,
  Sauce: String,
  toppings: [String]
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = {
  model: Pizza,
  schema: pizzaSchema
};
