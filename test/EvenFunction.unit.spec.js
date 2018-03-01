var expect = require('chai').expect
var IsEven = require('../app/IsEven')

describe('Modulus', () => {

    describe('Checking if an integer is even', () => {

        it('Unfinished function returns nothing', () => {
            var a = 2

            var result = IsEven(a)
            expect(result).to.equal(true)
        })

    })
})
