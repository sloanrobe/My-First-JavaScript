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