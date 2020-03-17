const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create book Schema
const BookSchema = new Schema({
    title: String,
    pages: Number
});

// create author Schema
const AuthorSchema = new Schema({
    name: String,
    age: Number,
    books: [BookSchema]
});

// create author Model based on the author schema with books
const Author = mongoose.model("author", AuthorSchema);

module.exports = Author;