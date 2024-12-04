const date = new Date(1974, 7, 28, 9, 45)
console.log(date)

const date2 = new Date('August 28, 1974 09:45:00')
console.log(date2)

const date3 = new Date(2024, 11, 3, 5, 4, 3)
console.log(date3)

const date1 = new Date()

const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDate()
const dayOfWeek = date.getDay()
const hour = date.getHours()
const minute = date.getMinutes()

console.log(year)
console.log(month)
console.log(day)
console.log(dayOfWeek)
console.log(hour)
console.log(minute)