function tictactoe(){
let board=[[],[],[]];
let xo ='xo';
let col=3;
let X=0;
let O=0;

function random(str){
      let num=0;
      num = Math.floor(Math.random()*str.length);

      return str[num];
    }
// board[j].push(xo[1])
    for(let i=0;i<col;i++){
      for(let j=0;j<board.length;j++){
        let functrandom =random(xo)
        if(functrandom ==='x'){
          if( X < 5){
          board[j].push('x')
          X++
          }
          else{
          board[j].push('o')
          O++
          }
        }
        else if(functrandom ==='o'){
          if( O<5 ){
          board[j].push('o')
          O++
          }
          else{
          board[j].push('x')
          X++
          }
        }

      }
    }
return board;
}

console.log(tictactoe());
