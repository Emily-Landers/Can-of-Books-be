'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Book = require('./bookModel');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 3001;
mongoose.connect(process.env.DB_URL);

app.get('/test', (req, res) => {
  res.send('your test was received')
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('The Mongoose is loose!')
});

app.get('/books', handleGetBooks);
app.post('/books', handlePostBooks);
app.delete('/books/:id', handleDeleteBooks);

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
      res.status(404).send('No books for you!');
    }
  } catch (e) {
    res.status(500).send('The Server is not stoked!');
  }
}

async function handlePostBooks(req, res) {
  try {
    const bookWeMade = await Book.create(req.body)
    res.status(201).send(bookWeMade);
  } catch (e) {
    res.status(500).send('Server Error');
  }
}

async function handleDeleteBooks(req, res) {
  const { id } = req.params
  try {
    await Book.findByIdAndDelete(id);
    res.status(204).send('success')
  } catch (e) {
    res.status(500).send('Server Error');
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
