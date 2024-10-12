/**
 * Create A schema for todo app
 * todoSchema = mongoose.model({})
 */

const mongoose = require("mongoose");

// connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:admin1234@cluster0.avr5rus.mongodb.net/todos"
);
// define a schema for the todo app
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
//   titel: {
//     type: String,
//     required: true,
//     minlength: 3,
//   },
//   description: {
//     type: String,
//     default: "",
//   },
//   completed: {
//     type: Boolean,
//     default: false,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },

});

// create a model for the schema
const todo = mongoose.model("todo", todoSchema);
// export the model
module.exports = {
  todo: todo,
};
