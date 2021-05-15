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
function Grid({ coinPositions }) {
      console.log('i was called again')
    const [coinSelected, setcoinSelected] = useState(samplecell);
    const [cellSelected, setcellSelected] = useState([]);
    const [chance, setChance] = useState('white')
    const [classArray, setClassArray] = useState(defaultClassArray);

    let item = []
    

    //populating initial layout with the cell values

    const [cellDetails, setCellDetails] = useState(coinPositions);
    //cellDetails = coinPositions;
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
   const setClassArrayHandler = (classArray1) => { 
       setClassArray(classArray1)
       console.log('set class handler called ')
       console.log(classArray1)   
   };

    function cellSelector(e, r, c) {
      let tempcellDetails = [];
      for(let i=0;i<8;i++)
      {     tempcellDetails[i] = [];
           for(let j=0;j<8;j++)
               tempcellDetails[i][j] = Object.assign({}, cellDetails[i][j]);
      }
        if (!cellDetails[r][c].isActive && cellDetails[r][c].coinColor !== chance) //When it's not your turn, simply return
            return;
        else if (!cellDetails[r][c].isActive && cellDetails[r][c].coinColor === '') //If the cell is empty and not active we'll simply return
            return;
        else if (!cellDetails[r][c].isActive && cellDetails[r][c].coinColor !== '') {
            setCoinSelectedHandler(cellDetails[r][c])
            setCellSelectedHandler([r]);
            setCellSelectedHandler(a => [...a, c]);
             tempcellDetails = [...findPossibleMoves([...cellDetails], r, c, chance)]
            setCellDetailsHandler(tempcellDetails);

            let temp = classArray.slice();
    
  
            tempcellDetails.forEach((elem, i) => {
                elem.forEach((e, j) => {
                    
                })
            })
            console.log(cellDetails);
            for(let i=0;i<8;i++)
              for(let j=0;j<8;j++){
                if (tempcellDetails[i][j].isActive) {
                    if (tempcellDetails[i][j].coinColor === "")
                        temp[i * 8 + j] = "elementSelected "
                    else
                        temp[i * 8 + j] = "coinToPlay"
                }
              }
            console.log(temp);
            setClassArrayHandler(temp);
        }
        else if(classArray[ r * 8 + c ] === "coinToPlay"){
          console.log('came here '+ r + c)
                setClassArrayHandler(Array.from({ length: 64 }, () => ''))
                // setChance(chance);
                
        }
        else if (coinSelected.coinColor === chance) {

            let temp = classArray;

            temp.forEach((elem, index) => {
                if (elem.includes("coinToPlay") || elem.includes("elementSelected"))
                    temp[index] = '';
            })

            setClassArrayHandler(temp)
            setCellDetailsHandler(makeAMove([...cellDetails], r, c, cellSelected, coinSelected))            
            setChanceHandler(chance === 'white' ? 'black' : 'white')
            setCoinSelectedHandler(samplecell)

        }
       

    }

    function CreateRow(firstCellColor, rowNum, cellDetails) {
        console.log('create row called');
        let color = firstCellColor;
        let row = [];
        for (let j = 0; j < 8; j++) {
            let classN = "cell " + (color === "black" ? "white" : "black");
            row.push(<div key={_.uniqueId()} className={classN} onClick={(e) => cellSelector(e, rowNum, j)}> <div className={classArray[rowNum * 8 + j]} ></div><p>
                {
                    pieces[cellDetails[rowNum][j].coinColor] ?
                        pieces[cellDetails[rowNum][j].coinColor][cellDetails[rowNum][j].coin] : ''

                }

            </p></div>)
            color = color === "black" ? "white" : "black";
        }
        return row;
    }

    return (
        item
    )
}


export default Grid;
