const array = [1, 3, 5, 7, 9]

array.forEach(element => {
    console.log(element + 1);
})

const array2 = [2, 3, 4, 5, 6]

array2.forEach(element => {
    console.log(element * 2)
})

let array3 = [2, 3, 4, 5, 6]

function solution(input) {
    console.log(input * 2)
}

array3.forEach(solution)

/* let array = ['apple', 'banana', 'orange']

function solution(input) {
    console.log(input)
}

array.forEach(solution)

let array2 = ['apple', 'banana', 'orange']

function solution2(input) {
    console.log(input[2])
}

array2.forEach(solution2) */