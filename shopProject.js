const { input } = require('@inquirer/prompts')

const products = [{
    productName: 'Apples',
    quantity: 5
}, {
    productName: 'Bananas',
    quantity: 12
}, {
    productName: 'Oranges',
    quantity: 8
}, {
    productName: 'Avocados',
    quantity: 4
}]

async function showIntro() {
    let intro = "Welcome to The Shop!  Here is a list of products in stock:"
    console.log(intro)
    console.log('-'.repeat(intro.length))
}

async function showProducts() {
    products.forEach(product => console.log(product))
}

async function askForInput() {
    const foodOrder = await input({ message: 'What would you like to order from the shop today?'})
    return foodOrder
}

async function validateInput(foodOrder) { 
    if (!products.includes(foodOrder)) {
        console.log('The requested product does not exist.')
      } else {
        console.log('The requested product is available.')
        return true
      }
}
async function startShop() {
    showIntro()
    showProducts()
    const userInput = await askForInput()
    validateInput(userInput)
}

startShop()

/* List quantities of items in the store
Include lowercase functionality
Follow up question if product is available.  How many do you want?
Deduct the user quantity input from the inventory
Ask user if they would like to order anything else, and repopulate the inventory list */