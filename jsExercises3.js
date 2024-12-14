// Same Age and House Number

const person1 = {
    name: 'Jacob',
    age: 42,
    address: {
      city: 'London',
      street: 'Cricket way',
      houseNumber: 33,
    },
  }
  
const person2 = {
    name: 'Bob',
    age: 40,
    address: {
      city: 'Manchester',
      street: 'Another street',
      houseNumber: 40,
    },
  }
  
const person3 = {
    name: 'Alice',
    age: 25,
    address: {
      city: 'New York',
      street: 'Fifty seventh',
      houseNumber: 25,
    },
  }
  
const persons = [person1, person2, person3]

function sameInfo() {
    persons.forEach(person => {
        if (person.age == person.address.houseNumber) {
            console.log(`We found a match! ${person.name}'s age and house number are the same.`)
        }
    })
  }

sameInfo()