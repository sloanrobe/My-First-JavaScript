/* const { input } = require('@inquirer/prompts')

async function guess() {
    const secretNumber = '23'
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 0 and 100. Can you guess it?");
    const number = await input({ message: 'This is a number guessing game!  What do you think the answer is?' })
    if (number === secretNumber) {
        console.log(`You win!`)
    } else {
        console.log(`You lose!`)
    }
}
guess() */

/* const { input } = require('@inquirer/prompts')

async function guess() {
    const secretNumber = '23'
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 0 and 100. Can you guess it?");
    let guessedCorrectly = false
    while (!guessedCorrectly) { 
        const guessedCorrectly = await input({ message: 'This is a number guessing game!  What do you think the answer is?' })
        if (guessedCorrectly < secretNumber) {
            console.log(`Your guess is too low.  Try again!`)
        } else if (guessedCorrectly > secretNumber) {
            console.log(`Too high!  You need to try again!`)
        } else if (guessedCorrectly === secretNumber) {
            console.log(`You got it!  Great job!!`)
            guessedCorrectly = true
        }   
    }
}
guess() */

const { input } = require('@inquirer/prompts')

async function guess() {
    const secretNumber = '23'
    console.log("Welcome to the Number Guessing Game!");
    console.log("I'm thinking of a number between 0 and 100. Can you guess it?");
    let guessedCorrectly = false
    while (!guessedCorrectly) { 
        const userGuess = await input({ message: 'This is a number guessing game!  What do you think the answer is?' })
        if (userGuess < secretNumber) {
            console.log(`Your guess is too low.  Try again!`)
        } else if (userGuess > secretNumber) {
            console.log(`Too high!  You need to try again!`)
        } else if (userGuess === secretNumber) {
            console.log(`You got it!  Great job!!`)
            guessedCorrectly = true
        }   
    }
}
guess()