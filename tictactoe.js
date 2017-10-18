function tictactoe(){
  let ticX =0;
  let tacO =0;
  let newarr= []
  for (var i = 0; i < 3; i++) {
    let arr = [];
    for (var j = 0; j < 3; j++) {
      if (Math.floor(Math.random()*2)==1 && ticX < 5 || tacO  ==5 ) {
        arr.push('X')
        ticX++
      }
      else {
        arr.push('O')
        tacO++
      }
    }
    newarr.push(arr)
  }
  console.log(newarr);
}
//output
tictactoe()
