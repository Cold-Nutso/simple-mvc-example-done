// Require mongoose the MongoDB library
const mongoose = require('mongoose');

// Variable to hold our Model
let DogModel = {};

// Create schema
const DogSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    breed: {
        type: String,
        trim: true,
        required: true,
      },
  
    age: {
      type: Number,
      min: 0,
      required: true,
    },
  
    createdDate: {
      type: Date,
      default: Date.now,
    },
});

// Create dog model based on schema
DogModel = mongoose.model('Dog', DogSchema);
  
// Only export the dog model
module.exports = DogModel;
  