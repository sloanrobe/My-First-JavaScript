const height = 6
let rowOfMoney = '$'

for (let rowCount = 1; rowCount < height; rowCount++) {
  for (let moneyCount = 1; moneyCount < rowCount; moneyCount++) {
    rowOfMoney = rowOfMoney + '$'
  }
  console.log(rowOfMoney)
  rowOfMoney = '$'
}

