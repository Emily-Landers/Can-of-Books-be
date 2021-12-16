require('dotenv').config();
const mongoose = require('mongoose');
const Book = require('./bookModel.js');

// seeded book titles including title, description, and author
async function seed() {
  mongoose.connect(process.env.DB_URL);
  await Book.create({
      title: 'The Happy Satanist',
      description: 'Award-winning author Lilith Starr writes about modern nontheistic Satanism and personal Satanic practice. Her first book, The Happy Satanist: Finding Self-Empowerment, is part of the Satanic Temple\'s Recommended Reading list. Her second book, Compassionate Satanism: An Introduction to Modern Satanic Practice, is the first comprehensive guide to the Satanic religion by a Satanic insider. In 2020, she was awarded the Satanic Temple\'s first Anatole France Literary Excellence Award for her writing.',
      author: 'Lilith Starr',
      email: 'nogods@tst.org'
});
  console.log('The Happy Satanist');

  await Book.create({
      title: 'The Satanic Narratives: A Modern Satanic Bible',
      description: 'This is a short book of just seven thousand words. It\'s very concise, and a similar length to the actual philosophical portion of The Satanic Bible. This is what you need to understand and practice this variation of Satanism. It\'s a foundational text, introducing the subject, and presenting just the information needed for it\'s stated purpose.',
      author: 'Damien Ba’al',
      email: 'nogods@tst.org'
});
  console.log('The Satanic Narratives: A Modern Satanic Bible');

  await Book.create({
      title: 'Bad Manners: The Official Cookbook: Eat Like You Give a F*ck: A Vegan Cookbook',
      description: 'Bad Manners blew up the Internet back in 2012, when they first began blogging. Their first cookbook was a #1 New York Times bestseller. They are based in Los Angeles, California.',
      Author: 'Matt Holloway and Michelle Davis',
      email: 'nogods@tst.org'
});
  console.log('Bad Manners: The Official Cookbook: Eat Like You Give a F*ck: A Vegan Cookbook');

  mongoose.disconnect();
}

seed();
