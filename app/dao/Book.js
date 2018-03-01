// A simple function that returns a book object with some attributes
module.exports = function Book (id, author, title, genre, price, publish_date, description) {
    var Book = {
        id: id,
        author: author,
        title: title,
        genre: genre,
        price: price,
        publish_date: publish_date,
        description: description
    }
    return Book;
};
