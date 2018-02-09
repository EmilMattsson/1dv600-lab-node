// A simple function that returns a book object with some attributes
module.exports = function Book (id, title, author, genre, publish_date, price, description) {
  var Book = {
    id: id,
    title: title,
    author: author,
    genre: genre,
    publish_date: publish_date,
    price: price,
    description: description
  }
  return Book;
};
