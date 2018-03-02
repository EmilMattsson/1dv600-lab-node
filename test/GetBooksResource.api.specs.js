var request = require('supertest')
var app = require('../app')
var getBooks = require('../app/resources/GetBooksResource')

describe('Get Books Resource', () => {

    describe('GET a list of books', () => {
        var bookList
        getBooks((data) => {
            bookList = data
        })

        it('respond with list', (done) => {
            request(app)
                .get('/api/books')
                .set('Accept', 'application/json')
                .expect(200, bookList, done)
        })
    })
})
