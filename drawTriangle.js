/*const height = 5
let rowOfStars = '*'

for (let rowCount = 0; rowCount < height; rowCount++) {
  for (let starCount = 0; starCount < rowCount; starCount++) {
    rowOfStars = rowOfStars + '*'
  }
  console.log(rowOfStars)
  rowOfStars = '*'
}

// Why do we even create functions?  Reuse our code/sequence of steps.
// What is a function definition and what is calling a function?  
// In the function definition what is the purpose of the parameters in the round brackets

// In this code example what are the formal parameters and what are the actual parameters?

function createFullName(firstName, lastName) {
return firstName + ' ' + lastName
}

// const fullName = createFullName('Jacob', 'Rasmussen')


const firstName = 'Bob'
function createFullName(firstName, lastName) {
   return firstName + ' ' + lastName
}

const fullName = createFullName('Jacob', 'Rasmussen')


// What does console.log() do? 


// const height = 6
let rowOfMoney = '$'

for (let rowCount = 0; rowCount < 6; rowCount++) {
  for (let moneyCount = 1; moneyCount < rowCount; moneyCount++) {
    let rowOfMoney = rowOfMoney + '$'
  }
  console.log(rowOfMoney)
  rowOfMoney = '$'
}*/

let rowOfStars = "*"
function drawTriangle(height) {
  for (let row = 1; row <= height; row++) {
    let rowOfStars = ''
    for (let i = 1; i <= row; i++) {
      rowOfStars = rowOfStars + "*"
    }
  }
  let result = rowOfStars
  return result
}
let solution = drawTriangle(5)
console.log(solution)