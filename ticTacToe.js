function ticTacToe (col, row){
  var xo = ['X', 'O']
  var arr = []
  var hitungX = 0;
  var hitungO = 0;
  var random;
  for(var i = 0; i < col; i++){
    arr.push([])
    for(var j = 0; j < row; j++){

      random = xo[Math.floor(Math.random() *xo.length)]
      // console.log(random)
      if(random === 'X'){
        hitungX++
        if (hitungX > 5){
          random = 'O'
        }
      }
      else if(random === 'O'){
        hitungO++
        if(hitungO > 5){
          random = 'X'
        }
      }
      arr[i].push(random)
    }
  }
  return arr
}
console.log(ticTacToe(3, 3))
