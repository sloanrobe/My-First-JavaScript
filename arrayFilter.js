/* const numbers = [1, 2, 3, 4, 5]

function newArray(num) {
    return num > 3
}

const solution = numbers.filter(newArray)
console.log(solution) */

/* const ages = [24, 18, 27, 11, 42, 15]

function newAges(num) {
    return num < 23
}

const age = ages.filter(newAges)
console.log(age) */

function moreThan3Ingredients(recipe) {
    return recipe.ingredients.length > 3
  }
  
  recipes = [
    { name: 'noodles', ingredients: ['eggs', 'flour', 'water'] },
    { name: 'pancakes', ingredients: ['eggs', 'flour', 'water', 'sugar'] },
  ]
  
  const longRecipes = recipes.filter(moreThan3Ingredients)
  console.log('longRecipes:', longRecipes)
  
  longRecipes[0].name = 'Spaghetti'
  
  console.log('longRecipes after change', longRecipes)
  console.log('recipes after change', recipes)
  
  const items = [
    { name: 'computer', price: 850 },
    { name: 'bike', price: 310 },
    { name: 'clothes', price: 95 },
    { name: 'shoes', price: 150 },
    { name: 'jewelry', price: 638 },
    { name: 'television', price: 1175 },
  ]

  function itemsBought(item) {
    return item.price > 320
  }

  const newItems = items.filter(itemsBought)
  console.log(newItems)