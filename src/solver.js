var items = [
    [8, 0, 0, 3, 4, 0, 0, 2, 0],
    [2, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 4, 0, 7, 0, 0, 0, 0, 1],
    [0, 3, 0, 0, 0, 9, 0, 0, 5],
    [0, 0, 0, 1, 6, 0, 7, 3, 4],
    [0, 6, 4, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 3, 0, 6, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 5, 0, 1, 9, 0],
];

function isRowValid(items, num, row, col) {
    //console.log("row: "+row + ' col: '+col+ ' cell: '+ items[row][col])
    //console.log(items[0].includes(num));
    //Check if row includes the number about to be entered into square
    return !items[row].includes(num);
}

function isColumnValid(items, num, row, col) {
    //console.log("row: "+row + ' col: '+col+ ' cell: '+ items[row][col])

    //Check if column has the number about to be entered
    for (let i = 0; items.length > i; i++) {

        //console.log(items[i][col]);

        if (items[i][col] == num) {
            return false
        }

    }
    return true
}

function isSubSquareValid(items, num, row, col) {
    var newcol = 0;
    var newrow = 0;
    //console.log("row: "+row + ' col: '+col+ ' cell: '+ items[row][col])

    //console.log(col % 2)

    if (col % 3 != 0) {
        newcol = col - (col % 3)
    } else {
        //console.log('already at correct column')
        var newcol = col;
    }

    if (row % 3 != 0) {
        newrow = row - (row % 3)
    } else {
        //console.log('already at correct row')
        var newrow = row;
    }
    var i = newrow
    var j = newcol
    for (i = newrow; i < newrow + 3; i++) {
        for (j = newcol; j < newcol + 3; j++) {
            
            if (items[i][j] == num) {
                return false
            }
        }
    }
    //console.log(items[i][j])
    return true
}

function placeNumber(items,num,row,col){
    /*
    if(items[row][col] == 0){
        
    
    if(isSubSquareValid(items,num,row,col) && isRowValid(items,num,row,col) && isColumnValid(items,num,row,col)){
        items[row][col] = num
        if(col != 8){
            placeNumber(items,num,row,col+1)
        }else{
            placeNumber(items,num,row+1,0)
        }
        
    }else{
        if(num == 9){
            placeNumber(items,1,row,col-1)
        }else{
            placeNumber(items,num+1,row,col)
        }
        
    }
}else{
    placeNumber(items,num,row,col+1)
}
console.log(items)
*/
}

placeNumber(items,1,0,0)

module.exports = {
    isSubSquareValid,
    isRowValid,
    isColumnValid
}
