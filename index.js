function ticTacToe (row,col){

  const grid = Array(row).fill().map(()=>Array(col))
  

  let huruf = ['X','O']
  let r = 0;
  let c = 0;
  let counter = 0
  for(let i =0;i < row*col; i++){
    let index = Math.floor(Math.random()*huruf.length)
    if(index == 0){
      counter++
    }
    grid[r][c] = huruf[index]

    if(c <2){
      c++
    }else{
      c=0
      r++
    }
  }
  if(counter == 5){
    return grid
  }else{
    return ticTacToe(3,3)
  }


}

console.log(ticTacToe(3,3));
