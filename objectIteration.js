/* function sumData() {

    const monthData = {
        january: 15200,
        february: 17800,
        march: 19500,
        april: 22100,
        may: 24300,
        june: 26800,
        july: 28500,
        august: 27900,
        september: 25600,
        october: 23400,
        november: 21700,
        december: 20100
    }
    
    const values = Object.values(monthData)
    let sum = 0

    for (const value of values) {
        sum += value
    }

    return sum
}
  
const solution = sumData()
console.log(solution) */

/* const monthlySalesData = {
    january: 15200,
    february: 17800,
    march: 19500,
    april: 22100,
    may: 24300,
    june: 26800,
    july: 28500,
    august: 27900,
    september: 25600,
    october: 23400,
    november: 21700,
    december: 20100,
  }
  
let totalSales = 0

Object.values(monthlySalesData).forEach((value) => {
    totalSales += value
})

console.log(totalSales) */

const salesData = {
    march2023: 19500,
    august2024: 29400,
    february2022: 16200,
    november2023: 21700,
    june2024: 28200,
    september2022: 23600,
    january2024: 16500,
    april2023: 22100,
    october2022: 21400,
    may2024: 25700,
    july2023: 28500,
    december2022: 18100,
    february2024: 18900,
    august2023: 27900,
    march2022: 18500,
    october2024: 24900,
    january2023: 15200,
    june2022: 24800,
    september2024: 27100,
    april2022: 20100,
    november2024: 23200,
    may2023: 24300,
    july2022: 26500,
    december2024: 21500,
    february2023: 17800,
    september2023: 25600,
    january2022: 14800,
    june2023: 26800,
    august2022: 25900,
    march2024: 21000,
    october2023: 23400,
    may2022: 22300,
    july2024: 30000,
    december2023: 20100,
    april2024: 23800,
    november2022: 19700
}

let janFebSales = 0
for (const [month, value] of Object.entries(salesData))
if (month.includes('january') || month.includes('february')) {
    janFebSales += value
}

console.log(janFebSales)