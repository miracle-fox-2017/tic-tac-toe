
function tictac (row, column){
var tampung = [];
var random = 'XO';
var X = 0;
var O = 0;

    for(let i = 0; i < row; i++){
     tampung.push([]);
      for(let j = 0; j < column; j++){
        var random1 =  random[Math.floor(Math.random() * random.length)]
        if(random1 === 'X' && X !== 5){
          X += 1
          tampung[i].push(random1)
        }
        if(random1 === 'O' && O !== 5){
          O+= 1
          tampung[i].push(random1)
        }
        else if (O === 5) {
          tampung[i].push('X')
        }
        else if (X === 5){
          tampung[i].push('O')
        }
    }
  }
  return tampung
}
console.log(tictac(3,3));
