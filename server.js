'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./bookModel');
const app = express();
app.use(cors());

const PORT = process.env.PORT || 3001;

app.get('/test', (request, response) => {

  response.send('test request received')

})

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Mongoose is connected')
});

app.get('/books', handleGetBooks);


async function handleGetBooks(req, res) {
  let clientEmail = {}
  if (req.query.email) {
    clientEmail = { email: req.query.email }
  }

  try {
    const booksFromDB = await Book.find(clientEmail);
    if (booksFromDB.length > 0) {
      res.status(200).send(booksFromDB);
    } else {
      res.status(404).send('no books found');
    }
  } catch (e) {
    res.status(500).send('Server Error');
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
