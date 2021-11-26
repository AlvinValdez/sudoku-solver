import { Component } from "react";
import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'

import '../css/sudokuboard.css'
class SudokuBoard extends React.Component {
    
    
    generateBoard(){
        var items = [
            [8,  ,  , 3, 4,  ,  ,2, ],
            [2,  ,  ,  ,  ,  ,  , , ],
            [3, 4,  , 7,  ,  ,  , ,1],
            [ , 3,  ,  ,  , 9,  , ,5],
            [ ,  ,  , 1, 6,  , 7,3,4],
            [ , 6, 4,  ,  ,  ,  ,1, ],
            [ ,  ,  ,  ,  , 3,  ,6, ],
            [ , 1,  ,  ,  ,  ,  , , ],
            [ ,  ,  , 2, 5,  , 1,9, ],
          ];
          return <div>


<table>
<tbody>
          {items.map((item) => (
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
          
    render() {
      return(
          <div>
          {this.generateBoard()}
          </div>
      )
    }
  }

  export default SudokuBoard