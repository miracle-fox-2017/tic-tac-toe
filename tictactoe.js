function tictactoe() {
  var arrCol = []
  var jumlahX = 0
  var jumlahO = 0
  var bilAcak = 0
  var input = ''

  for(var i = 0; i < 3; i++) {
    var arrRow = []
    for(var j = 0; j < 3; j++) {
      bilAcak = Math.round(Math.random())

      if(bilAcak == 0) {
        input = 'O'
      }

      if(bilAcak == 1) {
        input = 'X'
      }

      if(jumlahX == 5) {
        input = 'O'
      }

      if(jumlahO == 5) {
        input = 'X'
      }

      if(input == 'X') {
        arrRow.push(input)
        jumlahX++
      }

      if(input == 'O') {
        arrRow.push(input)
        jumlahO++
      }

    }
    arrCol.push(arrRow)
  }
  return arrCol
}


console.log(tictactoe());
