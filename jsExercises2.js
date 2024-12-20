// Find Largest Number in an Array

const numbers = [4, 8, 7, 2, 9, 375, 23, 6]
const largestNum = Math.max(...numbers)
console.log(largestNum)

// Solve a different way without using .max

/* const numbers = [6, 3, 17, 24, 5, 42, 13, 10]

function findLargest(numbers) {
    let largest = numbers[0]

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i]
        }   
    }
    return largest
}
const largestNum = findLargest(numbers)
console.log(largestNum) */