/* const listOfProducts = ['Grapes', 'Bananas', 'Apples', 'Oranges']

function validateOrder(wantedProduct) {
  if (!listOfProducts.includes(wantedProduct)) {
    throw new Error('The requested product does not exist.')
  } else {
    console.log('The requested product is present.')
    return true
  }
}

try {
  validateOrder('Apples')
} catch (error) {
  console.log(`Unfortunately the purchase is invalid because: ${error.message}`)
} */

/*   const listOfProducts = ['apples', 'oranges', 'grapes', 'bananas']

  function validateOrder(wantedProduct) {
    if (!listOfProducts.includes(wantedProduct)) {
        console.log('Sorry - we do not have the product you requested!')
    } else {
        console.log('Your product is available.  Thank you for your order!')
    }
  }

  validateOrder('pizza') */

const listOfProducts = ['Grapes', 'Bananas', 'Apples', 'Oranges']

function validateOrder(wantedProduct) {
  if (!listOfProducts.includes(wantedProduct)) {
    throw new Error('The requested product does not exist.')
  } else {
    console.log('The requested product is available.')
    return true
  }
}

try {
  validateOrder('Apples')
} catch (error) {
  console.log(`Unfortunately the purchase is invalid: ${error.message}`)
}
