// Draw a Rectangle

function drawRectangle (columns, rows) {
    for (let i = 0; i < rows; i++) {
        const column = '*'.repeat(columns); 
        console.log(column)
    }    
}
drawRectangle(7, 4)