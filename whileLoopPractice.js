const { input } = require('@inquirer/prompts')

async function greeting() {
    const name = await input({ message:'Hello, what is your name?' })
    return name
}

/* async function main() {
    let userDidNotQuit = true
    while (userDidNotQuit) {
        const userName = await greeting()
        if (userName === 'quit') {
            console.log('You just quit!')
            userDidNotQuit = false
        } else {
            console.log(`Hi, ${userName}, it is nice to meet you!`)
        }
    } 
}
 */
async function main() {
    while (true) {
        const userName = await greeting()
        if (userName === 'quit') {
            console.log('You just quit!')
            break
        } else if (userName === 'Quit') {
                console.log('You just quit!')
                break
        } else if (userName === 'QUIT') {
            console.log('You just quit!')
            break
        } else {
            console.log(`Hi, ${userName}, it is nice to meet you!`)
        }
    } 
}

main()