/* function pizzaOrderMaker(NumberOfPizzas, Cheese, Topping1, Topping2, Delivery) {
    const topping = ['pepperoni', 'mushrooms', 'salami']
    const pizza1 = {
        cheese: Cheese,
        topping1: Topping1,
        topping2: Topping2,
        delivery: Delivery,   
    }
    for (let i = 0; i < NumberOfPizzas; i++) {
        
    }
    return [pizza1]
}

let order1 = pizzaOrderMaker(10, 'mozzarella', 'pepperoni', 'mushrooms', true)

// console.log(order1)
console.log(`I would like to order a pizza with ${pizzaOrderMaker.topping[0]} and ${pizzaOrderMaker.topping[2]}`)*/

/* function pizzaOrderMaker(amount, cheese, topping1, topping2, delivery) {
    const pizza = {
        cheese: cheese,
        topping1: topping1,
        topping2: topping2,
        delivery: delivery, 
    }
    const pizzaArray = []
    for (i = 0; i < amount; i++) {
        pizzaArray.push(pizza)
    }
    return pizzaArray
}

const order1 = pizzaOrderMaker(7, 'Mozzarella', 'Salami', 'Mushrooms', true)
const order2 = pizzaOrderMaker(2, 'Cheddar', 'Pepperoni', 'Salami', true)
console.log(order2) */


/* //const myArray = []
console.log(myArray); // empty now

const amount = 10
// populating the array
for (let i = 0; i < amount; i++) {
  myArray.push('a')
}

console.log(myArray); // no longer empty

// const order2 = pizzaOrderMaker(50, 'Mozzarella', 'Pepperoni', 'Mushrooms', true)
// ->
/* [
    {
      cheese: 'Cheddar',
      topping1: 'Salami',
      topping2: 'Mushrooms',
      delivery: true
    },
    {
      cheese: 'Cheddar',
      topping1: 'Salami',
      topping2: 'Mushrooms',
      delivery: true
    },
    {
      cheese: 'Cheddar',
      topping1: 'Salami',
      topping2: 'Mushrooms',
      delivery: true
    }
  ]
*/

const { input } = require('@inquirer/prompts')

async function pizzaMaker() {
  const name = await input({ message: 'Thank you for calling Domino Pizza. What is your name?' })
  console.log(`Hello, ${name}, let's take your pizza order now.`)
  const topping1 = await input({ message: 'What do you want on your pizza?' })
  const topping2 = await input({ message: 'What else do you want on your pizza?' })
  const topping3 = await input({ message: 'What do you want for your third topping?' })
  const topping4 = await input({ message: 'We should top it off with one last topping...which one?' })
  const cheese = await input({ message: 'What kind of cheese do you want?' })
  console.log(`We are making a fresh ${cheese} pizza with ${topping1}, ${topping2}, ${topping3}, and ${topping4}.  It should be ready soon!`)
}

pizzaMaker()