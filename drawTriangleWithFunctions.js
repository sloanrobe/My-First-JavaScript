/* function drawLineOfStars(length) {
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
console.log(drawTriangle(5)) */

function drawRectangle (length, width) {
    for (let i = 0; i < width; i++) {
        const row = '*'.repeat(length); 
        console.log(row)
    }    
}
drawRectangle(7, 4)