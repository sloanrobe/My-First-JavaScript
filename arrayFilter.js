const numbers = [1, 2, 3, 4, 5]

function newArray(num) {
    return num > 3
}

const solution = numbers.filter(newArray)
console.log(solution)