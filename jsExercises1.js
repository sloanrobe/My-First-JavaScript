// Draw a Rectangle

/* function drawRectangle (columns, rows) {
    for (let i = 0; i < rows; i++) {
        const column = '*'.repeat(columns); 
        console.log(column)
    }    
}
drawRectangle(7, 4) */

function drawLineOfStars (columns) {
    let rowOfStars = '*'
    for (let starCount = 0; starCount < columns; starCount++) {
        rowOfStars = rowOfStars + '*';
    }
    console.log(rowOfStars)
}

function drawRectangle (columns, height) {
    for (let rowCount = 0; rowCount < height; rowCount++) {
        drawLineOfStars(columns)   
    }
}

drawRectangle(7, 4)