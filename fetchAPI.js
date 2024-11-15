function turnIntoJson(response) {
    return response.json()
}

function printFact(data) {
    console.log(data.fact)
}

function logError(error) {
    console.log(`${error}`)
}
fetch('https://catfact.ninja/fact')
    .then(turnIntoJson)
    .then(printFact)
    .catch(logError)