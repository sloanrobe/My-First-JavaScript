function drawLineOfStars(length) {
    let rowOfStars = '*'
    for (let starCount = 0; starCount < length; starCount++) {
        rowOfStars = rowOfStars + '*'
    }
    console.log(rowOfStars)
}

function drawTriangle(height) {
    for (let rowCount = 0; rowCount < height; rowCount++) {
        drawLineOfStars(rowCount)
    }
}
console.log(drawTriangle(5))