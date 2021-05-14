import './App.css';
import './grid/grid'
import Grid from './grid/grid';
import Grid1 from './grid/grid1';


function App() {
  const coins = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
  const coinPositions = [];
  for (let i = 0; i < 8; i++) {
    coinPositions[i] = [];
    for (let j = 0; j < 8; j++) {
      if (i=== 0) {
        coinPositions[i][j] = {
          coin: coins[j],
          coinColor: 'black',
          isActive: false
        };
      }
      else if (i=== 1) {
        coinPositions[i][j] = {
          coin: 'pawn',
          coinColor: 'black',
          isActive: false
        };
      }
      else if (i=== 6) {
        coinPositions[i][j] = {
          coin: 'pawn',
          coinColor: 'white',
          isActive: false
        };
      }
      else if (i=== 7) {
        coinPositions[i][j] = {
          coin: coins[j],
          coinColor: 'white',
          isActive: false
        };
      }
      else {
        coinPositions[i][j] = {
          coin: '',
          coinColor: '',
          isActive: false
        };
      }
    }
  }
  return (
    <div className="container">
       {/* <Grid1></Grid1>  */}
       <Grid coinPositions={coinPositions}></Grid> 
    </div>
  );
}

export default App;
