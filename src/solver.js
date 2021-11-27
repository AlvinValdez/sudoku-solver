
class sudoku {
    constructor(items) {
        this.items = items
    }

    isRowValid(num, row, col) {
        //Check if row includes the number about to be entered into square
        return !this.items[row].includes(num);
    }
    isColumnValid(num, row, col) {

        //Check if column has the number about to be entered
        for (let i = 0; this.items.length > i; i++) {



            if (this.items[i][col] == num) {
                return false
            }

        }
        return true
    }
    isSubSquareValid(num, row, col) {
        var newcol = 0;
        var newrow = 0;

        if (col % 3 != 0) {
            newcol = col - (col % 3)
        } else {

            var newcol = col;
        }

        if (row % 3 != 0) {
            newrow = row - (row % 3)
        } else {
            var newrow = row;
        }
        var i = newrow
        var j = newcol
        for (i = newrow; i < newrow + 3; i++) {
            for (j = newcol; j < newcol + 3; j++) {

                if (this.items[i][j] == num) {
                    return false
                }
            }
        }

        return true
    }
    printSudoku() {
        let text= " "
        text+='           -----------------------------\n'
        for (let i = 0; i < this.items[0].length; i++) {
            text +=String(this.items[i])+'\n'
        }
        text+='           -----------------------------\n'
        console.log(text)
    }
    validPlacement(num, row, col) {
        if (this.isSubSquareValid(num, row, col) && this.isRowValid(num, row, col) && this.isColumnValid(num, row, col)) {
            return true
        } else {
            return false
        }
    }

    solveSudoku() {
        for (var row = 0; row < 9; row++) {
            for (var col = 0; col < 9; col++) {
                if (this.items[row][col] == 0) {
                    for (var number = 1; number <= 9; number++) {
                        if (this.validPlacement(number, row, col)) {
                            this.items[row][col] = number;
                            if (this.solveSudoku()) {
                                return true;
                            }
                            else {
                                this.items[row][col] = 0;
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    getSudokuBoard(){
        return this.items
    }

}
/*
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
/*
const sudokuPuzzle = new sudoku(items);
sudokuPuzzle.solveSudoku()
sudokuPuzzle.printSudoku()
*/
module.exports = {
    sudoku
}
