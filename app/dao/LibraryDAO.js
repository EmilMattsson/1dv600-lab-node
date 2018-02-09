(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    var parser = new xml2js.Parser();
    let Book = require('../dao/Book')

    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
          fs.readFile('/vagrant/books.xml', function(err, data) {
            if (err) throw err;
            parser.parseString(data, function(err, result) {
              if (err) throw err;
              let catalog = result.catalog
              let c = catalog.book
              var bookList = []
              c.forEach(book => {
                let b = new Book(book.$.id, book.author, book.title, book.genre, book.price, book.publish_date, book.description)
                bookList.push(b)
              })
              callback(bookList)
            });
          });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {

        }
    };

    module.exports = LibraryDAO;
}());
