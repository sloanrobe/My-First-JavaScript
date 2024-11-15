const { input } = require('@inquirer/prompts')

async function greet() {
    const name = await input({ message: 'Hi! What is your name?' })
    const age = await input({ message: 'How old are you?' })
    console.log(`Hello, ${name}, it's very nice to meet you! Are you ${age} years old?`)
}

greet()