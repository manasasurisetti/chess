import './grid.css'

function CreateRow(firstCellColor){
  let color=firstCellColor;
  let row = [];
  for(let j=0;j<8;j++)
    {   
        let classN = "cell " + ( color=="black"?"white":"black" ); 
        row.push(<div className={classN}></div>)
        color = color==="black"?"white":"black";
}
  return row;   
}

function Grid(){
    let item = [];
    let initialColor = "black"
    for(let i=0;i<8;i++)
    {
       
     let row=  CreateRow(initialColor)
       initialColor = initialColor === "black"? "white":"black";
       item.push(...row);
    }
      
    return(
      item

    )
}

export default Grid;
