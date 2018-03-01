var request = require('supertest')
var app = require('../app')

describe('Get Books Resource', () => {

    describe('GET a list of books', () => {

        it('respond with list', (done) => {

            request(app)
                .get('/api/books')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done)
        })
    })
})
