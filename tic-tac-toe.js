function ticTacToe(row,col){
  let result = [];
  let xo = 'XO'
  let counterX = 0;
  let counterO = 0;
  for(let i = 0; i < row; i++){
    let row = [];
    for(let y = 0; y < col; y++){
      xoRandom = xo.charAt(Math.floor(Math.random()*xo.length))
      if(xoRandom === 'X'){
        counterX++;
        if(counterX === 5){
          xoRandom = 'O'
        }
      }
      else if(xoRandom === 'O'){
        counterO++;
        if(counterO === 5){
          xoRandom = 'X'
        }
      }
      console.log(xoRandom);
      row.push(xoRandom)
    }
    result.push(row)
  }
  return(result);
}
console.log(ticTacToe(3,3));
