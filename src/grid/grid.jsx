import './grid.css'
import React, { useEffect, useState } from 'react';

function Grid(){
  const coins=['rook','knight','bishop','queen','king','bishop','knight','rook']
  const coinPositions = [ ];
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
  const [ selected, setSelected ] = useState(false);
  const [cellDetails, setCellDetails] = useState(coinPositions);
  useEffect(() => {
    cellDetails.forEach((cell) => {
      cell.forEach((data) => {
          if(data.isActive==true){
            setSelected(true)
          }
      });
  });
  });
  
function CreateRow(firstCellColor,rowNum){
  let color=firstCellColor;
  let row = [];
  function selectGrid(r,c) {
    if(cellDetails[r][c].coin!==''){
    const tempcellDetails=[...cellDetails]
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
          if(r-1>=0 && tempcellDetails[r-1][c].coinColor=='')
          tempcellDetails[r-1][c].isActive=true
          if(r-1>=0 && c+1<8 && tempcellDetails[r-1][c+1].coinColor=='black')
          tempcellDetails[r-1][c+1].isActive=true
          if(r-1>=0 && c-1>=0 && tempcellDetails[r-1][c-1].coinColor=='black')
          tempcellDetails[r-1][c-1].isActive=true
        }
        else{
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
    setCellDetails(tempcellDetails)
    }
    //alert(JSON.stringify(cellDetails[r][c])+" "+r+","+c)
    
  }
  for(let j=0;j<8;j++)
    {   
        let classN = "cell " + ( color=="black"?"white":"black" ); 
        row.push(<div className={classN} onClick={() => selectGrid(rowNum,j)}><p>{selected?'y':'n'}{cellDetails[rowNum][j].isActive?'T ':'F '}{cellDetails[rowNum][j].coinColor}{cellDetails[rowNum][j].coin}</p></div>)
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
