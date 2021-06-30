const Person = require('./Person')
const Bag = require('./Bag')
const Crew = require('./Person')

describe('Person', () => {
    const testPerson = new Person('Aden')
    const testGucciBag = new Bag(12)
    const testcrew2 = new Crew('mike', true)

    test('has a name', () => {
        expect(testPerson.name).toBe('Aden')
    })

    test('has a bag', () => {
        testPerson.addBag(testGucciBag)
        expect(testPerson.bags.length).toBe(1)
    })

    test('is crew ', () => {
        expect(testcrew2.name).toBe('mike')
    })

    test('is crew have id', () => {
        expect(testcrew2.id).toBeTruthy()
    })



})