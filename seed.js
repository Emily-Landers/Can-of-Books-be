const mongoose = require('mongoose');
const Book = require('./bookModel.js');
require('dotenv').config();

async function seed() {
  mongoose.connect(process.env.DB_URL);

  await Book.create({
    title: 
    description: 
    status: 
    email: 
  });

  await Book.create({
    title: 
    description: 
    status: 
    email: 
  });

  await Book.create({
    title: 
    description: 
    status: 
    email: 
  });

  mongoose.disconnect();
}





seed();
