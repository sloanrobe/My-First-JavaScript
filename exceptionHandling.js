/* const { input } = require('@inquirer/prompts')

async function makeWebRequest() {
    const url = await input({ message: `What website do you want to visit?` })
    const response = await fetch(url)
    const data = await response.json()
    console.log('This is the response: ')
    console.log(data)
}

makeWebRequest() */

/* const { input } = require('@inquirer/prompts')

async function makeSiteRequest() {
    const url = await input({ message: 'What site do you want to access?' })
    const response = await fetch(url)
    const data = await response.json()
    console.log('OK, this is what you asked for...:')
    console.log(data)
}

makeSiteRequest() */

/* const { input } = require('@inquirer/prompts')

async function makeRequest() {
    try {
        const url = await input({ message: 'Please tell me what site you want to explore:' })
        const response = await fetch(url)
        const data = await response.json()
        console.log('Here are your results: ')
        console.log(data)
    } catch (error) {
        console.log(`This URL does not work.  Please provide a valid one!`)
    }   
}

makeRequest() */

/* async function makeRequest() {
        let url = await input({ message: 'Please tell me what site you want to explore:' })
    try {
        let url = ''
        const response = await fetch(url)
        const data = await response.json()
        console.log('Here is your website: ')
        console.log(data)
    } catch (error) {
        console.log(`This URL ${url} does not work.  Please provide a valid one!`)
    }   
}

makeRequest() */


const { input } = require('@inquirer/prompts')

async function makeWebRequest() {
    try {
        const url = await input({ message: 'Which URL do you want to use?' })
        const response = await fetch(url)
        const data = await response.json()
        console.log('This is the response: ')
        console.log(data)
    } catch (error) {
        console.log(`Please try a valid URL. An error occurred: ${error.message}.`)
    }   
}

makeWebRequest()