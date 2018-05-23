import axios from "axios";

export default {
  // Gets all books
  getFoods: function() {
    return axios.get("/api/foods");
  },
  // Gets the book with the given id
  getFood: function(id) {
    return axios.get("/api/foods/" + id);
  },
  // Deletes the book with the given id
  deleteFood: function(id) {
    return axios.delete("/api/foods/" + id);
  },
  // Saves a food to the database
  saveFood: function(foodData) {
    return axios.post("/api/foods", foodData);
  }
};
