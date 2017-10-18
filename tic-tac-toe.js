function ticTacToe(){
  let mark = ['X','O'];
  let countX = 0;
  let countO = 0;
  let result = [];
  for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      let random = Math.floor(Math.random(0)*mark.length);
      if(mark[random] == 'X'){
        if (countX < 5) {
          row.push(mark[random]);
          countX++
        }else{
          row.push('O');
          countO++
        }
      }else if(mark[random] == 'O'){
        if (countO < 5) {
          row.push(mark[random]);
          countO++
        }else{
          row.push('X');
          countX++
        }
      }
    }
    result.push(row);
  }
  return result;
}

console.log(ticTacToe());
