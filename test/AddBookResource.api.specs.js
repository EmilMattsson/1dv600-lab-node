var request = require('supertest')
var app = require('../app')
var Book = require('../app/dao/Book')

describe('Add Book Resource', () => {

    describe('PUT add a new book', () => {

        it('respond with 200 OK', (done) => {
            var book = new Book(
                69,
                'Emil',
                'A great adventure',
                'fantasy',
                199,
                2018,
                'adventure'
            )
            request(app)
                .put('/api/books')
                .send(JSON.stringify(book))
                .expect(200, done)
        })
    })
})
