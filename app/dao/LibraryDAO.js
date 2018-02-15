(function () {
    "use strict";

    var fs = require('fs');

    // Instructions how to use the xml2js
    // https://github.com/Leonidas-from-XIV/node-xml2js
    var xml2js = require('xml2js');
    let Book = require('../dao/Book')
    let xmlFile

    // Use this file to write and read the xml file.
    var LibraryDAO = {

        // Get the entire file from the file system.
        readXMLFile: function(callback) {
          fs.readFile('/vagrant/books.xml', (err, data) => {
            if (err) throw err;

            let parser = new xml2js.Parser()
            parser.parseString(data, (err, result) => {
              if (err) throw err;

              xmlFile = result
              let catalog = result.catalog
              let books = catalog.book

              let bookList = []
              books.forEach(book => {
                let b = new Book(
                  book.$.id,
                  book.title,
                  book.author, 
                  book.genre,
                  book.price,
                  book.publish_date,
                  book.description)
                bookList.push(b)
              })
              callback(bookList)
            });
          });
        },

        // Write the entire file from the file system.
        writeXMLFile: function(data) {
          let id = data
          let books = xmlFile.catalog.book
          books.forEach(book => {
            if (book.$.id === id) {
              let pos = books.indexOf(book)
              xmlFile.catalog.book.splice(pos, 1)
            }
          })

          let builder = new xml2js.Builder()
          let newXMLFile = builder.buildObject(xmlFile)
          fs.writeFile('/vagrant/books.xml', newXMLFile, (err) => {
            if (err) throw err;
            else console.log('success!')
          })
        }
    };

    module.exports = LibraryDAO;
}());
