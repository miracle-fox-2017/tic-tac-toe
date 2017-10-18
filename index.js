function ticTacToe(){
  let hasil=[];
  let countX = 0;
  let countO = 0;
  for (var row = 0; row < 3; row++) {
    let rows =[];
    for (var col = 0; col < 3; col++) {
      let random = Math.round(Math.random())
      if(random === 0){
        valueXO = 'O'
      } else {
        valueXO = 'X'
      }
      if(valueXO === 'O'){
        if(countO < 5){
          rows.push(valueXO)
          countO++
        } else {
          rows.push('X')
          countX++
        }
      } else if(valueXO === 'X'){
        if(countX < 5){
          rows.push(valueXO)
          countX++
        } else {
          rows.push('O')
          countO++
        }
      }
    }
    // console.log('===============',rows);
    hasil.push(rows)
  }
  return hasil
}
console.log(ticTacToe())
