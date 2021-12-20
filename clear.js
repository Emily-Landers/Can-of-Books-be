const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./bookModel.js');

async function clear() {
  mongoose.connect(process.env.DB_URL);
  try {
    await Book.deleteMany({});
    console.log('Yeeted The Books!');
  } catch (err) {
    console.error(err)
  } finally {
    mongoose.disconnect();
  }
}

clear();