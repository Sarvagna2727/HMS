const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Ensure that Doctor and Nurse models are imported if they are in separate files
// Example:
// const Doctor = require('./Doctor');  // Adjust the path as needed
// const Nurse = require('./Nurse');    // Adjust the path as needed

const departmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  head: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor", // Ensure that "Doctor" model exists and is correctly referenced
  },
  staff: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nurse", // Ensure that "Nurse" model exists and is correctly referenced
    },
  ],
});

// Create the Department model
const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
