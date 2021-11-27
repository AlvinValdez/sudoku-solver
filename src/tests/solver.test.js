
const {sudoku} = require('../solver');

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

var completePuzzle = [
  [ 8, 7, 1, 3, 4, 5, 9, 2, 6 ],
  [ 2, 5, 6, 8, 9, 1, 4, 7, 3 ],
  [ 3, 4, 9, 7, 2, 6, 8, 5, 1 ],
  [ 1, 3, 2, 4, 7, 9, 6, 8, 5 ],
  [ 5, 9, 8, 1, 6, 2, 7, 3, 4 ],
  [ 7, 6, 4, 5, 3, 8, 2, 1, 9 ],
  [ 4, 2, 7, 9, 1, 3, 5, 6, 8 ],
  [ 9, 1, 5, 6, 8, 7, 3, 4, 2 ],
  [ 6, 8, 3, 2, 5, 4, 1, 9, 7 ],
];


const sudokuPuzzle = new sudoku(items);


describe
    describe
        test('Testing if cells can figure out its correct parent-cell and if correct return is returned if placement is valid or invalid', () => {
          expect(sudokuPuzzle.isSubSquareValid(1,0,0)).toBe(true);
          expect(sudokuPuzzle.isSubSquareValid(2,0,0)).toBe(false);

          expect(sudokuPuzzle.isSubSquareValid(5,0,1)).toBe(true);
          expect(sudokuPuzzle.isSubSquareValid(3,0,1)).toBe(false);

          expect(sudokuPuzzle.isSubSquareValid(6,0,2)).toBe(true);
          expect(sudokuPuzzle.isSubSquareValid(4,0,2)).toBe(false);
        });

        test('Testing if program can figure out if number to be placed in row is valid or not', () => {
          expect(sudokuPuzzle.isRowValid(1,0,0)).toBe(true);
          expect(sudokuPuzzle.isRowValid(5,1,0)).toBe(true);
          expect(sudokuPuzzle.isRowValid(6,2,0)).toBe(true);
          expect(sudokuPuzzle.isRowValid(8,3,0)).toBe(true);
          expect(sudokuPuzzle.isRowValid(8,4,0)).toBe(true);
          expect(sudokuPuzzle.isRowValid(7,5,0)).toBe(true);
          expect(sudokuPuzzle.isRowValid(2,6,0)).toBe(true);
          expect(sudokuPuzzle.isRowValid(8,7,0)).toBe(true);
          expect(sudokuPuzzle.isRowValid(7,8,0)).toBe(true);
          
          expect(sudokuPuzzle.isRowValid(3,0,0)).toBe(false);
          expect(sudokuPuzzle.isRowValid(2,1,0)).toBe(false);
          expect(sudokuPuzzle.isRowValid(7,2,0)).toBe(false);
          expect(sudokuPuzzle.isRowValid(5,3,0)).toBe(false);
          expect(sudokuPuzzle.isRowValid(7,4,0)).toBe(false);
          expect(sudokuPuzzle.isRowValid(6,5,0)).toBe(false);
          expect(sudokuPuzzle.isRowValid(6,6,0)).toBe(false);
          expect(sudokuPuzzle.isRowValid(1,7,0)).toBe(false);
          expect(sudokuPuzzle.isRowValid(5,8,0)).toBe(false);
        });

        test('Testing if program can figure out if number to be placed in column is valid or not', () => {
          expect(sudokuPuzzle.isColumnValid(9,0,0)).toBe(true);
          expect(sudokuPuzzle.isColumnValid(5,0,1)).toBe(true);
          expect(sudokuPuzzle.isColumnValid(3,0,2)).toBe(true);
          expect(sudokuPuzzle.isColumnValid(6,0,3)).toBe(true);
          expect(sudokuPuzzle.isColumnValid(1,0,4)).toBe(true);
          expect(sudokuPuzzle.isColumnValid(8,0,5)).toBe(true);
          expect(sudokuPuzzle.isColumnValid(9,0,6)).toBe(true);
          expect(sudokuPuzzle.isColumnValid(7,0,7)).toBe(true);
          expect(sudokuPuzzle.isColumnValid(2,0,8)).toBe(true);

          expect(sudokuPuzzle.isColumnValid(3,0,0)).toBe(false);
          expect(sudokuPuzzle.isColumnValid(6,0,1)).toBe(false);
          expect(sudokuPuzzle.isColumnValid(4,0,2)).toBe(false);
          expect(sudokuPuzzle.isColumnValid(1,0,3)).toBe(false);
          expect(sudokuPuzzle.isColumnValid(5,0,4)).toBe(false);
          expect(sudokuPuzzle.isColumnValid(3,0,5)).toBe(false);
          expect(sudokuPuzzle.isColumnValid(7,0,6)).toBe(false);
          expect(sudokuPuzzle.isColumnValid(6,0,7)).toBe(false);
          expect(sudokuPuzzle.isColumnValid(1,0,8)).toBe(false);
        });
    describe
        test('solve sudoku', () => {
          sudokuPuzzle.solveSudoku()
        });

        describe
            test('Check if soduku solved correctly', () => {
              expect(sudokuPuzzle.getSudokuBoard()).toStrictEqual(completePuzzle);
            });