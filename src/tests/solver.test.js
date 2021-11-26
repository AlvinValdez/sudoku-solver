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

const {isSubSquareValid, isColumnValid,isRowValid} = require('../solver');




test('Testing if cells can figure out its correct parent-cell and if correct return is returned if placement is valid or invalid', () => {
    expect(isSubSquareValid(items,1,0,0)).toBe(true);
    expect(isSubSquareValid(items,2,0,0)).toBe(false);

    expect(isSubSquareValid(items,5,0,1)).toBe(true);
    expect(isSubSquareValid(items,3,0,1)).toBe(false);

    expect(isSubSquareValid(items,6,0,2)).toBe(true);
    expect(isSubSquareValid(items,4,0,2)).toBe(false);
});

test('Testing if program can figure out if number to be placed in row is valid or not', () => {
  expect(isRowValid(items,1,0,0)).toBe(true);
  expect(isRowValid(items,5,1,0)).toBe(true);
  expect(isRowValid(items,6,2,0)).toBe(true);
  expect(isRowValid(items,8,3,0)).toBe(true);
  expect(isRowValid(items,8,4,0)).toBe(true);
  expect(isRowValid(items,7,5,0)).toBe(true);
  expect(isRowValid(items,2,6,0)).toBe(true);
  expect(isRowValid(items,8,7,0)).toBe(true);
  expect(isRowValid(items,7,8,0)).toBe(true);
  
  expect(isRowValid(items,3,0,0)).toBe(false);
  expect(isRowValid(items,2,1,0)).toBe(false);
  expect(isRowValid(items,7,2,0)).toBe(false);
  expect(isRowValid(items,5,3,0)).toBe(false);
  expect(isRowValid(items,7,4,0)).toBe(false);
  expect(isRowValid(items,6,5,0)).toBe(false);
  expect(isRowValid(items,6,6,0)).toBe(false);
  expect(isRowValid(items,1,7,0)).toBe(false);
  expect(isRowValid(items,5,8,0)).toBe(false);
});

test('Testing if program can figure out if number to be placed in column is valid or not', () => {
  expect(isColumnValid(items,9,0,0)).toBe(true);
  expect(isColumnValid(items,5,0,1)).toBe(true);
  expect(isColumnValid(items,3,0,2)).toBe(true);
  expect(isColumnValid(items,6,0,3)).toBe(true);
  expect(isColumnValid(items,1,0,4)).toBe(true);
  expect(isColumnValid(items,8,0,5)).toBe(true);
  expect(isColumnValid(items,9,0,6)).toBe(true);
  expect(isColumnValid(items,7,0,7)).toBe(true);
  expect(isColumnValid(items,2,0,8)).toBe(true);

  expect(isColumnValid(items,3,0,0)).toBe(false);
  expect(isColumnValid(items,6,0,1)).toBe(false);
  expect(isColumnValid(items,4,0,2)).toBe(false);
  expect(isColumnValid(items,1,0,3)).toBe(false);
  expect(isColumnValid(items,5,0,4)).toBe(false);
  expect(isColumnValid(items,3,0,5)).toBe(false);
  expect(isColumnValid(items,7,0,6)).toBe(false);
  expect(isColumnValid(items,6,0,7)).toBe(false);
  expect(isColumnValid(items,1,0,8)).toBe(false);
});