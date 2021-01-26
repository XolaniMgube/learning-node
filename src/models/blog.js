/** @format */

const mongoose = require("mongoose");
const Schema = mongoose.Schema; // schema is what defines the structure of the document(database)

// creating a new instance of a schema object or class
// the schema takes in 2 arguments... 1. the structure in the form of an object. 2. the timestamps object set to true
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    snippet: {
      type: String,
      required: true
    },
    body: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);

// creating a model
// the name of the model is important because it has to be in a singular form of the document... eg, my document is blogs(plural form) the model should be blog(singular form)
// models should also be capitalized
const Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog;