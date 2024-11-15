function addOne(num) {
    return num + 1
}

function newArray(numbers, action) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = action(numbers[i])
    }
    return numbers
}
const solution = newArray([2, 3, 4, 5], addOne)
console.log(solution)