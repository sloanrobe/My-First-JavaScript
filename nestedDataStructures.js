const person1 = {
    name: 'Benji',
    address: {
        street: 'Balmes',
        city: 'Barcelona',
        country: 'Spain'
    }
}
const person2 = {
    name: 'Anthony',
    address: {
        street: 'Sheridan Street',
        city: 'Pembroke Pines',
        country: 'USA'
    }
}

const people = [person1, person2]

console.log(people[0].name, people[0].address.city)

console.log(`My name is ${person2.name} and I live in ${person2.address.city}!`)
console.log(`What do you want to do today, ${people[1].name}?  Do you want me to drop you off at home on ${people[1].address.street}?`)