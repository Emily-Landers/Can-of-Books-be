const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookSchema = new Schema ({
    title = String,
    description = String, 
    author = String, 
    email = String, 
})

const Book = mongoose.Model('Book', bookSchema);

module.exports = Book;