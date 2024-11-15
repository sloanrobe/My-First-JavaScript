/* const myPromise = new Promise((resolve, reject) => {
    console.log('Started promise');
    setTimeout(() => {
        resolve('Food is ready!');
    }, 3000)

    if (true) {
        reject('Something horrible went wrong!')
    }
})

myPromise
    .then((result) => {
        console.log(`This is the result: ${result}`);
    })
    .catch((errorMessage) => {
        console.log(`An error happened: ${errorMessage}`)
    }) */

const myPromise = newPromise ((resolve, reject) => {
    console.log('The promise has started!')
    setTimeout(() => {
        resolve('Food is ready!');}, 3000)

    if (error) {
        reject('Something really bad went wrong!')
    }
})

myPromise
    .then((result) => {
        console.log(`This is the result: ${result}!`)
    })
    .catch((error) => {
        console.log(`This is the error that occurred: ${error}`)
    })