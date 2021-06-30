class Person {
    constructor(name) {
        this.name = name
        this.bags = []
    }

    addBag(bag) {
        this.bags.push(bag)
    }
}


class Crew extends Person {
    constructor(name, id) {

        super(name)
        this.id = id
    }
}

class Passenger extends Person {
    constructor() {

    }
}
const testcrew2 = new Crew('mike', 21)

console.log('i hope so' + testcrew2.id)

module.exports = Crew
module.exports = Person