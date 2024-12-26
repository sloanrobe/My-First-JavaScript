/* const values = [true, false, true, true, 0, 0, '1', 1, 1, 1, []]

function numTrue(values) {
    let result = 0

    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        if (element == true) {
            result++
        }
    }
    return result
}

console.log(numTrue(values)) */


function countTrue(values) {
    let result = 0
    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        if (element == true) {
            result++
        }
    }
    return result
}
const values = [false, false, true, false, true]
console.log(countTrue(values))