function ticTacToe(jumlahRow,jumlahCol){
let arr = []
let counterX = 0,counterO = 0;
for (let i =0;i<jumlahRow;i++){
  arr.push([])

  for (let j= 0;j<jumlahCol;j++){

    let random = Math.floor(Math.random()*2)
    if (random === 0){

      if (counterX < 5){
        counterX++
        arr[i].push('X')
      }
      else  {
        counterO++
        arr[i].push('O')
      }
      // arr[i].push('X')
    }
    else if (random === 1){

      if (counterO < 5){
        counterO++
        arr[i].push('O')
      }
      else {
        counterX++
        arr[i].push('X')
      }


    }
  }

}

console.log(arr);

}

ticTacToe(3,3)
