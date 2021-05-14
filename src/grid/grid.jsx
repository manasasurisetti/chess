import './grid.css'
import React, {  useState } from 'react';
import { findPossibleMoves, makeAMove } from './useUpdateGrid';
const _ = require('lodash')
const pieces = {
    black: {
        pawn: '\u265F',
        rook: '\u265C',
        knight: '\u265E',
        bishop: '\u265D',
        queen: '\u265B',
        king: '\u265A'
    },

    white: {
        pawn: '\u2659',
        rook: '\u2656',
        knight: '\u2658',
        bishop: '\u2657',
        queen: '\u2655',
        king: '\u2654'
    }
}
const samplecell = {
    coin: '',
    coinColor: '',
    isActive: false
}

const defaultClassArray = Array.from({ length: 64 }, () => '');

function Grid({ coinPositions }){

    const [coinSelected, setcoinSelected] = useState(samplecell);
    const [cellSelected, setcellSelected] = useState([]);
    let item = []
    const [chance, setChance] = useState('white')


    //populating initial layout with the cell values

    const [cellDetails, setCellDetails] = useState(coinPositions);

let initialColor = "black"
    for (let i = 0; i < 8; i++) {
        let row = CreateRow(initialColor, i, cellDetails)
        initialColor = initialColor === "black" ? "white" : "black";
        item.push(...row);
    }

    const setCellDetailsHandler = (cellDetails) => {
        setCellDetails(cellDetails);
        console.log('cell details handler finished');
      }
    const setCoinSelectedHandler = (coin) => setcoinSelected(coin);
    const setCellSelectedHandler = (cell) => setcellSelected(cell);
    const setChanceHandler = (chance) => setChance(chance);
  
  function cellSelector(e,r,c) {
    var tempcellDetails =[];
    for(let i=0;i<8;i++)
    {     tempcellDetails[i] = [];
         for(let j=0;j<8;j++){
             tempcellDetails[i][j] = Object.assign({}, cellDetails[i][j]);
             }
    }
    // const tempcellDetails=[...cellDetails]
    if(!cellDetails[r][c].isActive){
      
      //setcoinSelected([])
      setCoinSelectedHandler(cellDetails[r][c])
      setCellSelectedHandler(a=>[r]);
     // alert(cellSelected[0])
     setCellSelectedHandler(a=>[...a,c]);
      //alert(cellSelected[0]+cellSelected[1])
      if(cellDetails[r][c].coin!=='' && cellDetails[r][c].coinColor==chance){
        setCellDetailsHandler(findPossibleMoves([...tempcellDetails],r,c))
      }
  }
  else{
      
    if(tempcellDetails[r][c].coinColor!=tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])].coinColor){
        setChanceHandler(chance=='white'?'black':'white')
        setCoinSelectedHandler(samplecell)
        setCellDetailsHandler(makeAMove([...tempcellDetails],r,c,cellSelected,coinSelected))
    }
      //alert(tempcellDetails[r][c].coinColor+tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])].coinColor)
}
  }

function CreateRow(firstCellColor, rowNum, cellDetails){
  let color=firstCellColor;
  let row = [];
  for (let j = 0; j < 8; j++) {
            let classN = "cell " + (color === "black" ? "white" : "black");
            row.push(<div key={_.uniqueId()} className={classN} onClick={(e) => cellSelector(e, rowNum, j)}> <div className={cellDetails[rowNum][j].isActive?cellDetails[rowNum][j].coinColor === ""?"elementSelected":"coinToPlay":""} ></div><p>
                {
                    pieces[cellDetails[rowNum][j].coinColor] ?
                        pieces[cellDetails[rowNum][j].coinColor][cellDetails[rowNum][j].coin] : ''

                }

            </p></div>)
            color = color === "black" ? "white" : "black";
        }
        return row; 
}

      
    return(
      item

    )
}

export default Grid;
