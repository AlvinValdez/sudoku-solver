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
      this.solvePuzzle = this.solvePuzzle.bind(this);   
      this.state = {board: new sudoku([
        [8, 0, 0, 3, 4, 0, 0, 2, 0],
        [2, 0, 0, 0, 0, 0, 0, 0, 0],
        [3, 4, 0, 7, 0, 0, 0, 0, 1],
        [0, 3, 0, 0, 0, 9, 0, 0, 5],
        [0, 0, 0, 1, 6, 0, 7, 3, 4],
        [0, 6, 4, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 3, 0, 6, 0],
        [0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 2, 5, 0, 1, 9, 0],
    ])};

    }
    solvePuzzle(){
      this.state.board.solveSudoku();
  
      console.log(this.state.board.items)
      this.setState({something: 1});
    }

    /*
    generateBoard(){
      
          return <div>
<table>
<tbody>
          {this.state.board.items.map((item) => (
           <tr>
<td class='sudoku'>{item[0]}</td> <td class='sudoku'>{item[1]}</td> <td class='sudoku'>{item[2]}</td> 
<td class='sudoku'>{item[3]}</td> <td class='sudoku'>{item[4]}</td> <td class='sudoku'>{item[5]}</td>
 <td class='sudoku'>{item[6]}</td> <td class='sudoku'>{item[7]}</td> <td class='sudoku'>{item[8]}</td>
 </tr>
          ))}
          </tbody>
     </table>
      
          </div>
        
        }
          */
    render() {
      return(
          <div>
          <table>
<tbody>
          {this.state.board.items.map((item) => (
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
    <Col md={{offset: 1}}><Button variant="primary" onClick={this.solvePuzzle}>Solve Puzzle</Button></Col>
    <Col></Col>
  </Row> 
          </Container>
          </div>
      )
    }
  }

  export default SudokuBoard