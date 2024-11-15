// what would be a good name for the function defined below?
/*function lastElement(input) {
    const length = input.length
    const element = input[length - 1]
    return element
  }
  
  const lastFruit = lastElement(['bananas', 'pineapples', 'oranges'])
  const lastNumber = lastElement([1, 2, 42, 44, 21, 19])
  
  console.log(lastFruit);
  console.log(lastNumber);

  // How many times will # be printed in the console?

for (let i = 0; i < 10; i++) {
    for (let k = 0; k < 10; k++) {
      console.log('#');
    }
  }

  // What do I need to write in order to access the lat coordinate value 37.7749

console.log(person.info.address.coordinates.lat)*/

// How could I write a program that prints out all the favorite books of all of the person's friends?

let person = {
    name: "Alice",
    info: {
      age: 30,
      hobbies: ["reading", "hiking", "cooking"],
      address: {
        city: "San Francisco",
        country: "USA",
        coordinates: {
          lat: 37.7749,
          lng: -122.4194,
        },
      },
    },
    friends: [
      {
        name: "Bob",
        favoriteBooks: [
          { title: "1984", author: "George Orwell" },
          { title: "The Hobbit", author: "J.R.R. Tolkien" },
        ],
      },
      {
        name: "Charlie",
        favoriteBooks: [
          { title: "To Kill a Mockingbird", author: "Harper Lee" },
        ],
      },
 ],
};

console.log(person.friends)

for (i = 0; i < person.friends.length; i++) {
    let currentFriend = person.friends[i]
    for (k = 0; k < currentFriend.favoriteBooks.length; k++) {
        let goodBook = currentFriend.favoriteBooks[k]
        console.log(goodBook)
    }
}