var expect = require('chai').expect
var Book = require('../app/dao/Book')

describe('Create a Book object', () => {

    describe('Trying to get an undefined attribute of an Book object', () => {

        it('Attribute is undefined', () => {
            var book = new Book()
            var attribute = undefined
            expect(attribute).to.equal(book.id)
        })
    })

    describe('Expecting a Book to be an object', () => {

        it('Book is an object', () => {
            var book = new Book(
                -1,
                'Emil',
                'Mina äventyr',
                'Fantasy',
                199,
                2018-03-01,
                'äventyr',
                'something'
            )
            expect(book).to.be.a('object')
        })
    })
})
