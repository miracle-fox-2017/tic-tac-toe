function ticTacToe(row, col){
  let XO = 'XO'.split('')
  // console.log(XO)
  let temp = []

  for(let r=0; r<row; r++){
    let row=[]
    for(let c=0; c<col; c++){
      // row.push(XO[Math.floor(Math.random()*2)])
      let randomXO = XO[Math.floor(Math.random()*2)]
      xCounters = 0
      oCounters = 0

      // counter XO
      if(randomXO == 'X'){
        xCounters++
      }else{
        oCounters++
      }

      if(xCounters > 5){
        row.push('O')
      }else if(oCounters > 5){
        row.push('X')
      }else{
        row.push(randomXO)
      }

    }
    temp.push(row)
  }
  return temp
}

console.log(ticTacToe(3,3))
