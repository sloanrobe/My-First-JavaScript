const student = {
    name: 'Benji',
    age: 50,
    likesCoding: true,
    greet: function() {
        return `My name is ${this.name}. I am ${this.age} years old and it is ${student.likesCoding} that I like coding!`
    }
}
const house = {
    location: 'Barcelona',
    bedrooms: 3,
    houseIsClean: true,
    greet: function() {
    return `Hello, my name is ${student.name} and I am selling my house in ${house.location}. It has ${house.bedrooms} bedrooms.`
}
}
console.log(house.greet())
console.log(student.greet())