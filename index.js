
function ticTacToe() {
  let arr = [];
  let jumO = 0;
  let jumX = 0;
  for (var i = 0; i < 3; i++) {
    arr.push([]);
    for (var j = 0; j < 3; j++) {
      if (random() == 0) {
        if (jumO < 5) {
          arr[i].push('o');
          jumO+=1;
        }else {
          arr[i].push('x');
          jumO+=1;
        }
      }else {
        if (jumX < 5) {
          arr[i].push('x');
          jumX += 1;
        }else {
          arr[i].push('o');
          jumX += 1;
        }
      }
    }
  }
  return arr;
}
function random() {
  let xoRandom = Math.floor(Math.random() * 2);
  return xoRandom
}
console.log(ticTacToe());
