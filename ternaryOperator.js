/* let age = 22
let canDrink = age >= 21 ? "Yes, you can drink!" : "No, you are not of legal age to drink."
console.log(canDrink)

age = 17
canDrink = age >= 21 ? "Yes, you can drink!" : "No, you are not of legal age to drink."
console.log(canDrink)

// ______________________________________________________________________________________________________________

let age1 = 22;

const checkCanDrink1 = (age1) => age1 >= 21 ? "Yes, you can drink!" : "No, you are not of legal age to drink.";

console.log(checkCanDrink1(age1))

age1 = 17;
console.log(checkCanDrink1(age1))

// ______________________________________________________________________________________________________________

age = 19
console.log(`You ${age >= 18 ? "can" : "cannot"} vote.`)
console.log(`You ${age >= 21 ? "can" : "cannot"} drink.`) */

let customerChoice = 1

function customerOrder(customerChoice) {
    return customerChoice === 1 ? 'Pizza'
    : customerChoice === 2 ? 'Burger'
    : customerChoice === 3 ? 'Tacos'
    : 'Surprise'
}

console.log(customerOrder(customerChoice))

customerChoice = 3
console.log(customerOrder(customerChoice))

customerChoice = 6
console.log(customerOrder(customerChoice))