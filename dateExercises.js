/* function timeMachine(startDate, numDays) {
    const date = new Date(startDate || new Date())
    date.setDate(date.getDate() + numDays)
    return date
}

const result = timeMachine(undefined, 10)
console.log(result)

function timeMachine2(date = new Date(), travelDays) {
    const result = new Date(date);
    result.setDate(result.getDate() + travelDays);
    return result;
  }

const finalDate = timeMachine2(undefined, 7)
console.log(finalDate) */



/* function measureDurationOfFunction(loopOneBillionTimes) {
  const startTime = new Date()
  function loopOneBillionTimes() {
    for (let i = 0; i < 1000000000; i++) {}
  }
  const endTime = new Date()
  let result = endTime - startTime
  return result
}

console.log(measureDurationOfFunction) */

/* function measureDurationOfFunction(functionToRun) {
  const startTime = new Date()

  functionToRun()

  const endTime = new Date()
  const deltaMilliSeconds = endTime.getTime() - startTime.getTime()
  const deltaSeconds = deltaMilliSeconds / 1000

  console.log(`It took ${deltaSeconds} seconds to run the function: "${functionToRun.name}"`)
}

 */

function measureDurationOfFunction(callback) {
  const startTime = new Date()
  callback()
  const endTime = new Date()
  const result = endTime.getTime() - startTime.getTime()
  const duration = result / 1000
  return duration
}

function loopOneBillionTimes() {
  for (let i = 0; i < 1000000000; i++) {}
}

function loopTenBillionTimes() {
  for (let i = 0; i < 10000000000; i++) {}
}

const solution = measureDurationOfFunction(loopOneBillionTimes)
const solution2 = measureDurationOfFunction(loopTenBillionTimes)
console.log(`It took ${solution} seconds to run the function: "${loopOneBillionTimes.name}"`)
console.log(`It took ${solution2} seconds to run the function: "${loopTenBillionTimes.name}"`)
