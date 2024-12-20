/* let keyName = "name"
let value = "Benji Sloan"

let person = {}
person[keyName] = value
console.log(person) */

/* let keyName1 = await getUserInput();
let value1 = "John Doe";

let person = {};
person[keyName1] = value1; */

const products = [
    { id: 101, name: 'Laptop', category: 'Electronics', price: 999, inStock: true },
    { id: 202, name: 'Shirt', category: 'Apparel', price: 29, inStock: false },
    { id: 303, name: 'Coffee Machine', category: 'Appliances', price: 89, inStock: true },
  ]
  
let productCatalog = {}
  
products.forEach((product) => {
    let key = `${product.category}_${product.id}`
  
    productCatalog[key] = {
        name: product.name,
        price: product.price,
        inStock: product.inStock,
    }

    if (product.price > 50) {
        productCatalog[key].discount = 10
    }
})
  
console.log(productCatalog)

  
/*   {
    Electronics_101: { name: 'Laptop', price: 999, inStock: true, discount: 10 },
    Apparel_202: { name: 'Shirt', price: 29, inStock: false },  
    Appliances_303: { name: 'Coffee Machine', price: 89, inStock: true, discount: 10 }
  } */
  