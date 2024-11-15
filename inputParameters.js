/*function messageRepeater(num, message) {
    for (i = 0; i < num; i++) {
        console.log(message)
    }
}
messageRepeater(7, 'This message will be repeated.')*/

function getLastItem(array) {
    const length = array.length
    const lastItem = array[length - 1]
    return lastItem
}

const letter = getLastItem(['a', 'b', 'c', 'd'])
const number = getLastItem([1, 2, 3, 4])

console.log(letter)
console.log(number)
