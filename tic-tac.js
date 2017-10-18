'use strict'
let tic_tac_toe = (row, col)=>{
  let board = [];
  for(let i = 0; i < row; i++){
    board.push([])
  }
  //console.log(board)
  let XO = 'XO'
  let countX = 0;
  let countO = 0;
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      let random = Math.round(Math.random())
      //
      //console.log(XO[random])


      if(XO[random]==='X' && countX<5){
        board[i].push(XO[random])
        countX += 1
      }else if(XO[random]==='O' && countO<5){
        board[i].push(XO[random])
        countO += 1
      }else{
        if(XO[random]==='X'&& countX>=5){
          board[i].push('O')
          countO++
        }else{
          board[i].push('X')
          countX++
        }
      }
    }
  }
  console.log(board)
}
tic_tac_toe(4,3)
