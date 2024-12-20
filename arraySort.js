/* let numbers = [2, 5, 3, 1, 4]
numbers.sort()
console.log(numbers) */

/* let numbers1 = [7, 15]

function compareNumbers(a, b) {
    if (a > b) {
        return 1
    } else if (b > a) {
        return -1
    } else {
        return 0
    }
}

const solution = numbers1.sort(compareNumbers)
console.log(solution) */

const activities = [
    { "name": "Hiking", "distance": 5, "price": 0 },
    { "name": "Museum Tour", "distance": 2, "price": 15 },
    { "name": "Kayaking", "distance": 10, "price": 40 },
    { "name": "Biking", "distance": 15, "price": 0 },
    { "name": "Rock Climbing", "distance": 5, "price": 50 },
    { "name": "City Walking Tour", "distance": 2, "price": 0 },
    { "name": "Snorkeling", "distance": 8, "price": 40 },
    { "name": "Concert", "distance": 3, "price": 25 },
    { "name": "Wine Tasting", "distance": 5, "price": 25 },
    { "name": "Amusement Park", "distance": 10, "price": 50 }
  ]
  
function sortDistance(a, b) {
    if (a.distance < b.distance) {
        return -1
    } else if (a.distance > b.distance) {
        return 1
    } else {
        return a.price - b.price
    }
}
  
activities.sort(sortDistance)
console.log(activities)