import { Component } from "react";
import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import '../css/sudokuboard.css'

const {sudoku} = require('../solver'); 
class SudokuBoard extends React.Component {
    
    constructor(props){
      super(props);   
      this.solveSudoku = this.solveSudoku.bind(this);   
      this.state = {board: [
        [8, 0, 0, 3, 4, 0, 0, 2, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 4, 0, 7, 0, 0, 0, 0, 1],
        [0, 3, 0, 0, 0, 9, 0, 0, 5],
        [0, 0, 0, 1, 6, 0, 7, 3, 4],
        [0, 6, 4, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 3, 0, 6, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 5, 0, 1, 9, 0],
    ]};

    }
    solvePuzzle(){
      for (var row = 0; row < 9; row++) {
        for (var col = 0; col < 9; col++) {
            if (this.state.board[row][col] == 0) {
                for (var number = 1; number <= 9; number++) {
                    if (this.validPlacement(number, row, col)) {
                        this.state.board[row][col] = number;
                        if (this.solvePuzzle()) {
                            return true;
                        }
                        else {
                            this.state.board[row][col] = 0;
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
    }

    isRowValid(num, row, col) {
      //Check if row includes the number about to be entered into square
      return !this.state.board[row].includes(num);
  }
  isColumnValid(num, row, col) {

      //Check if column has the number about to be entered
      for (let i = 0; this.state.board.length > i; i++) {

          if (this.state.board[i][col] == num) {
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

              if (this.state.board[i][j] == num) {
                  return false
              }
          }
      }

      return true
  }
  printSudoku() {
      let text= " "
      text+='           -----------------------------\n'
      for (let i = 0; i < this.state.board[0].length; i++) {
          text +=String(this.state.board[i])+'\n'
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

  solveSudoku(){
    this.solvePuzzle()
    this.setState({something: 1});
    console.log(this.state.board)
  }
    render() {
      return(
          <div>
          <table>
<tbody>
          {this.state.board.map((item) => (
           <tr>
<td class='sudoku'>{item[0]}</td> <td class='sudoku'>{item[1]}</td> <td class='sudoku'>{item[2]}</td> 
<td class='sudoku'>{item[3]}</td> <td class='sudoku'>{item[4]}</td> <td class='sudoku'>{item[5]}</td>
 <td class='sudoku'>{item[6]}</td> <td class='sudoku'>{item[7]}</td> <td class='sudoku'>{item[8]}</td>
 </tr>
          ))}
          </tbody>
     </table>
     <Container fluid>
     <Row>
     <Col></Col>
    <Col md={{offset: 1}}><Button variant="primary" onClick={this.solveSudoku}>Solve Puzzle</Button></Col>
    <Col></Col>
  </Row> 
          </Container>
          </div>
      )
    }
  }

  export default SudokuBoard