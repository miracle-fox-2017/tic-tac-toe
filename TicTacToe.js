function random() {
  var acak = 'xo';
  var xo = Math.ceil((Math.random() * acak.length -1));
  return acak[xo];
}

function ticTacToe(baris, kolom) {
    var arr = [];
    var counterx = 0;
    var countero = 0;
    for(var i = 0 ; i < baris ; i++) {
      arr.push([]);
      for(var j = 0 ; j < kolom ; j++) {
        let xo = random();
        if(xo === 'x') {
          if(counterx < 5) {
            arr[i].push(xo);
            counterx = counterx + 1;
          } else {
            arr[i].push('o');
            countero = countero + 1;
          }
        } else if(xo === 'o') {
          if(countero < 5) {
            arr[i].push(xo);
            countero = countero + 1;
          } else {
            arr[i].push('x');
            countero = countero + 1;
          }
        }
      }
    }
    return arr;
}


console.log(ticTacToe(3, 3));
