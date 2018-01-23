(function () {
    "use strict";

    var LibraryDAO = require('../dao/LibraryDAO');
    var Book = require('../dao/Book');
    let book_1 = new Book(1, 'The lord of the rings', 'Tolkien', 'Fantasy', 1950, 399, 'One ring to rule them all...');
    let book_2 = new Book(2, 'Game of thrones', 'George Martin', 'fantasy', 1995, 199, 'You win or you die...');
    let arr = [book_1, book_2];

    module.exports = function getBooks(callback, title) { // The title is optional and is only present when searching. (You need yo modify the books.js file first)
      callback(JSON.stringify(arr));
    };

}());
