let n = 0

while (n < 11) {
    console.log(n)
    n++
}

/* const { input } = require('@inquirer/prompts')

async function greet() {
    const name = await input({ message: 'Hi! What is your name?' })
    const age = await input({ message: 'How old are you?' })
    console.log(`Hello, ${name}, it's very nice to meet you! Are you ${age} years old?`)
}

greet() */

const { input } = require('@inquirer/prompts')

async function greeting() {
    const name = await input({ message:'Hello, what is your name?' })
    console.log(`Hi, ${name}, it is nice to meet you!`)
}

greeting('Benji')

let name = 'Benji'

while (name) {
    greeting()
    if (name = 'quit') {
        console.log('We are finished!')
    }
}