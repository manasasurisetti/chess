//import {useEffect, useState} from 'react';
const samplecell = {
    coin: '',
    coinColor: '',
    isActive: false
  }


export function findPossibleMoves(cellDetails,r,c, chance){
    const tempcellDetails = [...cellDetails]
   

      //setcoinSelected([])
      
      //alert(cellSelected[0]+cellSelected[1])
      if (cellDetails[r][c].coin !== '' && cellDetails[r][c].coinColor === chance) {

        tempcellDetails.forEach((cell) => {
          cell.forEach((data) => {
            data.isActive = false
          });
        })
        tempcellDetails[r][c].isActive = true;
        //coin condition
        switch (tempcellDetails[r][c].coin) {
          case 'rook': 
            for (let i = 1; i < 8; i++) {
              if (c + i < 8) {
                if (tempcellDetails[r][c + i].coin === '') 
                  tempcellDetails[r][c + i].isActive = true;
                
                else if (tempcellDetails[r][c + i].coin !== '' && tempcellDetails[r][c + i].coinColor !== tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r][c + i].isActive = true;
                  break;
                }
                else 
                  break;
                
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0) {
                if (tempcellDetails[r][c - i].coin=== '') {
                  tempcellDetails[r][c - i].isActive = true;
                }
                else if (tempcellDetails[r][c - i].coin !=='' && tempcellDetails[r][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (r + 1 < 8) {
                if (tempcellDetails[r + i][c].coin=== '') {
                  tempcellDetails[r + i][c].isActive = true;
                }
                else if (tempcellDetails[r + i][c].coin !=='' && tempcellDetails[r + i][c].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (r - i >= 0) {
                if (tempcellDetails[r - i][c].coin=== '') {
                  tempcellDetails[r - i][c].isActive = true;
                }
                else if (tempcellDetails[r - i][c].coin !=='' && tempcellDetails[r - i][c].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
          
            break;
          case 'knight': 
            if (r + 2 < 8 && c + 1 < 8 && tempcellDetails[r + 2][c + 1].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r + 2][c + 1].isActive = true;
            
            if (r + 2 < 8 && c - 1 >= 0 && tempcellDetails[r + 2][c - 1].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r + 2][c - 1].isActive = true;
            
            if (r - 2 >= 0 && c + 1 < 8 && tempcellDetails[r - 2][c + 1].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r - 2][c + 1].isActive = true;
            
            if (r - 2 >= 0 && c - 1 >= 0 && tempcellDetails[r - 2][c - 1].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r - 2][c - 1].isActive = true;
            
            if (r + 1 < 8 && c + 2 < 8 && tempcellDetails[r + 1][c + 2].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r + 1][c + 2].isActive = true;
            
            if (r - 1 >= 0 && c + 2 < 8 && tempcellDetails[r - 1][c + 2].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r - 1][c + 2].isActive = true;
            
            if (r + 1 < 8 && c - 2 >= 0 && tempcellDetails[r + 1][c - 2].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r + 1][c - 2].isActive = true;
            
            if (r - 1 >= 0 && c - 2 >= 0 && tempcellDetails[r - 1][c - 2].coinColor !==tempcellDetails[r][c].coinColor) 
              tempcellDetails[r - 1][c - 2].isActive = true;
            
          
            break;
          case 'bishop': 
            for (let i = 1; i < 8; i++) {
              if (c + i < 8 && r + i < 8) {
                if (tempcellDetails[r + i][c + i].coin=== '') {
                  tempcellDetails[r + i][c + i].isActive = true;
                }
                else if (tempcellDetails[r + i][c + i].coin !=='' && tempcellDetails[r + i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0 && r + i < 8) {
                if (tempcellDetails[r + i][c - i].coin=== '') {
                  tempcellDetails[r + i][c - i].isActive = true;
                }
                else if (tempcellDetails[r + i][c - i].coin !=='' && tempcellDetails[r + i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c + i < 8 && r - i >= 0) {
                if (tempcellDetails[r - i][c + i].coin=== '') {
                  tempcellDetails[r - i][c + i].isActive = true;
                }
                else if (tempcellDetails[r - i][c + i].coin !=='' && tempcellDetails[r - i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0 && r - i >= 0) {
                if (tempcellDetails[r - i][c - i].coin=== '') {
                  tempcellDetails[r - i][c - i].isActive = true;
                }
                else if (tempcellDetails[r - i][c - i].coin !=='' && tempcellDetails[r - i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
          
            break;
          case 'queen': 
            for (let i = 1; i < 8; i++) {
              if (c + i < 8) {
                if (tempcellDetails[r][c + i].coin=== '') {
                  tempcellDetails[r][c + i].isActive = true;
                }
                else if (tempcellDetails[r][c + i].coin !=='' && tempcellDetails[r][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0) {
                if (tempcellDetails[r][c - i].coin=== '') {
                  tempcellDetails[r][c - i].isActive = true;
                }
                else if (tempcellDetails[r][c - i].coin !=='' && tempcellDetails[r][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (r + 1 < 8) {
                if (tempcellDetails[r + i][c].coin=== '') {
                  tempcellDetails[r + i][c].isActive = true;
                }
                else if (tempcellDetails[r + i][c].coin !=='' && tempcellDetails[r + i][c].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (r - i >= 0) {
                if (tempcellDetails[r - i][c].coin=== '') {
                  tempcellDetails[r - i][c].isActive = true;
                }
                else if (tempcellDetails[r - i][c].coin !=='' && tempcellDetails[r - i][c].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c + i < 8 && r + i < 8) {
                if (tempcellDetails[r + i][c + i].coin=== '') {
                  tempcellDetails[r + i][c + i].isActive = true;
                }
                else if (tempcellDetails[r + i][c + i].coin !=='' && tempcellDetails[r + i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0 && r + i < 8) {
                if (tempcellDetails[r + i][c - i].coin=== '') {
                  tempcellDetails[r + i][c - i].isActive = true;
                }
                else if (tempcellDetails[r + i][c - i].coin !=='' && tempcellDetails[r + i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r + i][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c + i < 8 && r - i >= 0) {
                if (tempcellDetails[r - i][c + i].coin=== '') {
                  tempcellDetails[r - i][c + i].isActive = true;
                }
                else if (tempcellDetails[r - i][c + i].coin !=='' && tempcellDetails[r - i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c + i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
            for (let i = 1; i < 8; i++) {
              if (c - i >= 0 && r - i >= 0) {
                if (tempcellDetails[r - i][c - i].coin=== '') {
                  tempcellDetails[r - i][c - i].isActive = true;
                }
                else if (tempcellDetails[r - i][c - i].coin !=='' && tempcellDetails[r - i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
                  tempcellDetails[r - i][c - i].isActive = true;
                  break;
                }
                else {
                  break;
                }
              }
              else {
                break;
              }
            }
          
            break;
          case 'king': 
            const i = 1;
            if (c + i < 8 && tempcellDetails[r][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r][c + i].isActive = true;
            }
            if (c - i >= 0 && tempcellDetails[r][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r][c - i].isActive = true;
            }
            if (r + i < 8 && tempcellDetails[r + i][c].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r + i][c].isActive = true;
            }
            if (r - i >= 0 && tempcellDetails[r - i][c].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r - i][c].isActive = true;
            }
            if (c + i < 8 && r + i < 8 && tempcellDetails[r + i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r + i][c + i].isActive = true;
            }
            if (c - i >= 0 && r + i < 8 && tempcellDetails[r + i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r + i][c - i].isActive = true;
            }
            if (c + i < 8 && r - i >= 0 && tempcellDetails[r - i][c + i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r - i][c + i].isActive = true;
            }
            if (c - i >= 0 && r - i >= 0 && tempcellDetails[r - i][c - i].coinColor !==tempcellDetails[r][c].coinColor) {
              tempcellDetails[r - i][c - i].isActive = true;
            }
          
            break;
          case 'pawn': 
            if (tempcellDetails[r][c].coinColor=== 'white') {
              if (r=== 6 && tempcellDetails[r - 1][c].coinColor=== '')
                tempcellDetails[r - 2][c].isActive = true
              if (r - 1 >= 0 && tempcellDetails[r - 1][c].coinColor=== '')
                tempcellDetails[r - 1][c].isActive = true
              if (r - 1 >= 0 && c + 1 < 8 && tempcellDetails[r - 1][c + 1].coinColor=== 'black')
                tempcellDetails[r - 1][c + 1].isActive = true
              if (r - 1 >= 0 && c - 1 >= 0 && tempcellDetails[r - 1][c - 1].coinColor=== 'black')
                tempcellDetails[r - 1][c - 1].isActive = true
            }
            else {
              if (r=== 1 && tempcellDetails[r + 1][c].coinColor=== '')
                tempcellDetails[r + 2][c].isActive = true
              if (r + 1 < 8 && tempcellDetails[r + 1][c].coinColor=== '')
                tempcellDetails[r + 1][c].isActive = true
              if (r + 1 < 8 && c + 1 < 8 && tempcellDetails[r + 1][c + 1].coinColor=== 'white')
                tempcellDetails[r + 1][c + 1].isActive = true
              if (r + 1 < 8 && c - 1 >= 0 && tempcellDetails[r + 1][c - 1].coinColor=== 'white')
                tempcellDetails[r + 1][c - 1].isActive = true
            }
          
            break;
          default:
        }

      }
         return tempcellDetails;
         
}

  export const makeAMove = (tempcellDetails, r, c, cellSelected, coinSelected) => {
    if (tempcellDetails[r][c].coinColor !==tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])].coinColor) {
        tempcellDetails[Number(cellSelected[0])][Number(cellSelected[1])] = samplecell
        tempcellDetails[r][c] = coinSelected
        
        
        tempcellDetails.forEach((cell) => {
          cell.forEach((data) => {
            data.isActive = false
          });
        })
      }
      return tempcellDetails;
  }