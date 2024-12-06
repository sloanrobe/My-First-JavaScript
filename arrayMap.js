const numbers = [1, 2, 3, 4, 5]

function multiplyNum(num) {
    return num * 3
}

const solution = numbers.map(multiplyNum)
console.log(solution)

/* const numbers2 = [1, 2, 3, 4, 5]

const solution2 = numbers2.map((num2) => {
    return num2 * 2
})

console.log(solution2) */

/* const strings = ['Banana', 'House', 'Spaceship', 'Chili powder']

function reverseString(str) {
    
    return str
}
const result = strings.map(reverseString)
console.log(result) */

function stringReverser(input) {
    let reversedWord = ''
    for (let i = input.length - 1; i > -1; i--) {
      const letter = input[i]
      reversedWord += letter
    }
  
    return reversedWord
  }
  
  const strings = ['Banana', 'House', 'Spaceship', 'Chili powder']
  const result = strings.map(stringReverser)
  console.log(result)
  