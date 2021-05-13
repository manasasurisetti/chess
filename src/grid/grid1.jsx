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

function Grid1({ coinPositions }) {

    const [coinSelected, setcoinSelected] = useState(samplecell);
    const [cellSelected, setcellSelected] = useState([]);
    const [chance, setChance] = useState('white')
    let item = []
    const [classArray, setClassArray] = useState(Array.from({ length: 64 }, () => ''));


    //populating initial layout with the cell values

    const [cellDetails, setCellDetails] = useState(coinPositions);
    //cellDetails = coinPositions;
    let initialColor = "black"
    for (let i = 0; i < 8; i++) {
        let row = CreateRow(initialColor, i, cellDetails)
        initialColor = initialColor === "black" ? "white" : "black";
        item.push(...row);
    }



    // const [ selected, setSelected ] = useState(false);

    // useEffect(() => {
    //   let count=0
    //   cellDetails.forEach((cell) => {
    //     cell.forEach((data) => {
    //         if(data.isActive==true){
    //           setSelected(true)
    //           count++;
    //         }
    //     });
    // });
    // if(count==0){
    //   setSelected(false)
    // }
    // if(!selected){
    // setChance(chance=='white'?'black':'white')
    // alert(chance)
    // }
    // },[cellDetails]);

    function cellSelector(e, r, c) {

        if (!cellDetails[r][c].isActive && cellDetails[r][c].coinColor !== chance) //When it's not your turn, simply return
            return;
        else if (!cellDetails[r][c].isActive && cellDetails[r][c].coinColor === '') //If the cell is empty and not active we'll simply return
            return;
        else if (!cellDetails[r][c].isActive && cellDetails[r][c].coinColor !== '') {
            setcoinSelected(cellDetails[r][c])
            setcellSelected([r]);
            setcellSelected(a => [...a, c]);
            setCellDetails(findPossibleMoves([...cellDetails], r, c, chance))


            let temp = classArray;
            cellDetails.forEach((elem, i) => {
                elem.forEach((e, j) => {
                    if (e.isActive) {
                        if (e.coinColor === "")
                            temp[i * 8 + j] = "elementSelected "
                        else
                            temp[i * 8 + j] = "coinToPlay"
                    }

                })
            })
            setClassArray(temp);


        }
        else if (coinSelected.coinColor === chance) {

            let temp = classArray;

            temp.forEach((elem, index) => {
                if (elem.includes("coinToPlay") || elem.includes("elementSelected"))
                    temp[index] = '';
            })

            setClassArray(temp)
            setCellDetails(makeAMove([...cellDetails], r, c, cellSelected, coinSelected))            
            setChance(chance === 'white' ? 'black' : 'white')
            setcoinSelected(samplecell)

        }
       

    }

    function CreateRow(firstCellColor, rowNum, cellDetails) {

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


export default Grid1;
