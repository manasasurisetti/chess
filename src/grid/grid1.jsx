import './grid.css'
import React, { useEffect, useState } from 'react';
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
function Grid(){
  const coins=['rook','knight','bishop','queen','king','bishop','knight','rook']
  const coinPositions = [ ];
  const samplecell={coin:'',
  coinColor:'',
  isActive:false}
for(var i = 0; i < 8; i++) {
  coinPositions[i] = [ ];
    for(var j = 0; j < 8; j++) {
      if(i==0){
        coinPositions[i][j] = {
          coin:coins[j],
          coinColor:'black',
          isActive:false
        };
      }
      else if(i==1){
        coinPositions[i][j] = {
          coin:'pawn',
          coinColor:'black',
          isActive:false
        };
      }
      else if(i==6){
        coinPositions[i][j] = {
          coin:'pawn',
          coinColor:'white',
          isActive:false
        };
      }
      else if(i==7){
        coinPositions[i][j] = {
          coin:coins[j],
          coinColor:'white',
          isActive:false
        };
      }
      else{
      coinPositions[i][j] = {
        coin:'',
        coinColor:'',
        isActive:false
      };
    }
    }
}
  // const [ selected, setSelected ] = useState(false);
  const [cellDetails, setCellDetails] = useState(coinPositions);
  const [coinSelected, setcoinSelected] = useState(samplecell);
  const [cellSelected, setcellSelected] = useState([]);
  const [chance,setChance]=useState('white')
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
  
function CreateRow(firstCellColor,rowNum){
  let color=firstCellColor;
  let row = [];
  function selectGrid(r,c) {
    const tempcellDetails=[...cellDetails]
    if(!cellDetails[r][c].isActive){
      
      //setcoinSelected([])
      setcoinSelected(cellDetails[r][c])
      setcellSelected(a=>[r]);
     // alert(cellSelected[0])
     setcellSelected(a=>[...a,c]);
      //alert(cellSelected[0]+cellSelected[1])
    if(cellDetails[r][c].coin!=='' && cellDetails[r][c].coinColor==chance){
   
   tempcellDetails.forEach((cell) => {
      cell.forEach((data) => {
          data.isActive=false
  });
  })
    tempcellDetails[r][c].isActive=true;
    //coin condition
    switch(tempcellDetails[r][c].coin){
      case 'rook':{
        for(i=1;i<8;i++){
          if(c+i<8){
          if(tempcellDetails[r][c+i].coin==''){
            tempcellDetails[r][c+i].isActive=true;
          }
          else if(tempcellDetails[r][c+i].coin!='' && tempcellDetails[r][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r][c+i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c-i>=0){
          if(tempcellDetails[r][c-i].coin==''){
            tempcellDetails[r][c-i].isActive=true;
          }
          else if(tempcellDetails[r][c-i].coin!='' && tempcellDetails[r][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r][c-i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(r+1<8){
          if(tempcellDetails[r+i][c].coin==''){
            tempcellDetails[r+i][c].isActive=true;
          }
          else if(tempcellDetails[r+i][c].coin!='' && tempcellDetails[r+i][c].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(r-i>=0){
          if(tempcellDetails[r-i][c].coin==''){
            tempcellDetails[r-i][c].isActive=true;
          }
          else if(tempcellDetails[r-i][c].coin!='' && tempcellDetails[r-i][c].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
      }
        break;
      case 'knight':{
        if(r+2<8 && c+1<8 && tempcellDetails[r+2][c+1].coinColor!=tempcellDetails[r][c].coinColor){
          tempcellDetails[r+2][c+1].isActive=true;
        }
        if(r+2<8 && c-1>=0 && tempcellDetails[r+2][c-1].coinColor!=tempcellDetails[r][c].coinColor){
          tempcellDetails[r+2][c-1].isActive=true;
        }
        if(r-2>=0 && c+1<8 && tempcellDetails[r-2][c+1].coinColor!=tempcellDetails[r][c].coinColor){
          tempcellDetails[r-2][c+1].isActive=true;
        }
        if(r-2>=0 && c-1>=0 && tempcellDetails[r-2][c-1].coinColor!=tempcellDetails[r][c].coinColor){
          tempcellDetails[r-2][c-1].isActive=true;
        }
        if(r+1<8 && c+2<8 && tempcellDetails[r+1][c+2].coinColor!=tempcellDetails[r][c].coinColor){
          tempcellDetails[r+1][c+2].isActive=true;
        }
        if(r-1>=0 && c+2<8 && tempcellDetails[r-1][c+2].coinColor!=tempcellDetails[r][c].coinColor){
          tempcellDetails[r-1][c+2].isActive=true;
        }
        if(r+1<8 && c-2>=0 && tempcellDetails[r+1][c-2].coinColor!=tempcellDetails[r][c].coinColor){
          tempcellDetails[r+1][c-2].isActive=true;
        }
        if(r-1>=0 && c-2>=0 && tempcellDetails[r-1][c-2].coinColor!=tempcellDetails[r][c].coinColor){
          tempcellDetails[r-1][c-2].isActive=true;
        }
      }
        break;
      case 'bishop':{
        for(i=1;i<8;i++){
          if(c+i<8 && r+i<8){
          if(tempcellDetails[r+i][c+i].coin==''){
            tempcellDetails[r+i][c+i].isActive=true;
          }
          else if(tempcellDetails[r+i][c+i].coin!='' && tempcellDetails[r+i][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c+i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c-i>=0 && r+i<8){
          if(tempcellDetails[r+i][c-i].coin==''){
            tempcellDetails[r+i][c-i].isActive=true;
          }
          else if(tempcellDetails[r+i][c-i].coin!='' && tempcellDetails[r+i][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c-i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c+i<8 && r-i>=0){
          if(tempcellDetails[r-i][c+i].coin==''){
            tempcellDetails[r-i][c+i].isActive=true;
          }
          else if(tempcellDetails[r-i][c+i].coin!='' && tempcellDetails[r-i][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c+i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c-i>=0 && r-i>=0){
          if(tempcellDetails[r-i][c-i].coin==''){
            tempcellDetails[r-i][c-i].isActive=true;
          }
          else if(tempcellDetails[r-i][c-i].coin!='' && tempcellDetails[r-i][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c-i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
      }
        break;
      case 'queen':{
        for(i=1;i<8;i++){
          if(c+i<8){
          if(tempcellDetails[r][c+i].coin==''){
            tempcellDetails[r][c+i].isActive=true;
          }
          else if(tempcellDetails[r][c+i].coin!='' && tempcellDetails[r][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r][c+i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c-i>=0){
          if(tempcellDetails[r][c-i].coin==''){
            tempcellDetails[r][c-i].isActive=true;
          }
          else if(tempcellDetails[r][c-i].coin!='' && tempcellDetails[r][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r][c-i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(r+1<8){
          if(tempcellDetails[r+i][c].coin==''){
            tempcellDetails[r+i][c].isActive=true;
          }
          else if(tempcellDetails[r+i][c].coin!='' && tempcellDetails[r+i][c].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(r-i>=0){
          if(tempcellDetails[r-i][c].coin==''){
            tempcellDetails[r-i][c].isActive=true;
          }
          else if(tempcellDetails[r-i][c].coin!='' && tempcellDetails[r-i][c].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c+i<8 && r+i<8){
          if(tempcellDetails[r+i][c+i].coin==''){
            tempcellDetails[r+i][c+i].isActive=true;
          }
          else if(tempcellDetails[r+i][c+i].coin!='' && tempcellDetails[r+i][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c+i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c-i>=0 && r+i<8){
          if(tempcellDetails[r+i][c-i].coin==''){
            tempcellDetails[r+i][c-i].isActive=true;
          }
          else if(tempcellDetails[r+i][c-i].coin!='' && tempcellDetails[r+i][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c-i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c+i<8 && r-i>=0){
          if(tempcellDetails[r-i][c+i].coin==''){
            tempcellDetails[r-i][c+i].isActive=true;
          }
          else if(tempcellDetails[r-i][c+i].coin!='' && tempcellDetails[r-i][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c+i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
        for(i=1;i<8;i++){
          if(c-i>=0 && r-i>=0){
          if(tempcellDetails[r-i][c-i].coin==''){
            tempcellDetails[r-i][c-i].isActive=true;
          }
          else if(tempcellDetails[r-i][c-i].coin!='' && tempcellDetails[r-i][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c-i].isActive=true;
            break;
          }
          else{
            break;
          }
        }
          else{
            break;
          }
        }
      }
        break;
      case 'king':{
          const i=1;
          if(c+i<8 && tempcellDetails[r][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r][c+i].isActive=true;
          }
          if(c-i>=0 && tempcellDetails[r][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r][c-i].isActive=true;
          }
          if(r+i<8 && tempcellDetails[r+i][c].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c].isActive=true;
          }
          if(r-i>=0 && tempcellDetails[r-i][c].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c].isActive=true;
          }
          if(c+i<8 && r+i<8 && tempcellDetails[r+i][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c+i].isActive=true;
          }
          if(c-i>=0 && r+i<8 && tempcellDetails[r+i][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r+i][c-i].isActive=true;
          }
          if(c+i<8 && r-i>=0 && tempcellDetails[r-i][c+i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c+i].isActive=true;
          }
          if(c-i>=0 && r-i>=0 && tempcellDetails[r-i][c-i].coinColor!=tempcellDetails[r][c].coinColor){
            tempcellDetails[r-i][c-i].isActive=true;
          }
      }
        break;
      case 'pawn':{
        if(tempcellDetails[r][c].coinColor=='white'){
          if(r==6 && tempcellDetails[r-1][c].coinColor=='')
          tempcellDetails[r-2][c].isActive=true
          if(r-1>=0 && tempcellDetails[r-1][c].coinColor=='')
          tempcellDetails[r-1][c].isActive=true
          if(r-1>=0 && c+1<8 && tempcellDetails[r-1][c+1].coinColor=='black')
          tempcellDetails[r-1][c+1].isActive=true
          if(r-1>=0 && c-1>=0 && tempcellDetails[r-1][c-1].coinColor=='black')
          tempcellDetails[r-1][c-1].isActive=true
        }
        else{
          if(r==1 && tempcellDetails[r+1][c].coinColor=='')
          tempcellDetails[r+2][c].isActive=true
          if(r+1<8 && tempcellDetails[r+1][c].coinColor=='')
          tempcellDetails[r+1][c].isActive=true
          if(r+1<8 && c+1<8 && tempcellDetails[r+1][c+1].coinColor=='white')
          tempcellDetails[r+1][c+1].isActive=true
          if(r+1<8 && c-1>=0 && tempcellDetails[r+1][c-1].coinColor=='white')
          tempcellDetails[r+1][c-1].isActive=true
        }
      }
        break;
      default:
    }
    
    }
  }
  else{
      //alert(tempcellDetails[r][c].coinColor+tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])].coinColor)
      if(tempcellDetails[r][c].coinColor!=tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])].coinColor){
      tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])]=samplecell
      tempcellDetails[r][c]=coinSelected
      setChance(chance=='white'?'black':'white')
      setcoinSelected(samplecell)
      tempcellDetails.forEach((cell) => {
        cell.forEach((data) => {
            data.isActive=false
    });
    })
  }
  }
  setCellDetails(tempcellDetails)
    //alert(JSON.stringify(cellDetails[r][c])+" "+r+","+c)
    
  }
  for(let j=0;j<8;j++)
    {   
        let classN = "cell " + ( color=="black"?"white":"black" ); 
        row.push(<div className={classN} onClick={() => selectGrid(rowNum,j)}><p> {
            pieces[cellDetails[rowNum][j].coinColor] ?
                pieces[cellDetails[rowNum][j].coinColor][cellDetails[rowNum][j].coin] : ''

        }</p></div>)
        color = color==="black"?"white":"black";
}
  return row;   
}


    
    let item = [];
    let initialColor = "black"
    for(let i=0;i<8;i++)
    {
       
     let row=  CreateRow(initialColor,i)
       initialColor = initialColor === "black"? "white":"black";
       item.push(...row);
    }
      
    return(
      item

    )
}

export default Grid;