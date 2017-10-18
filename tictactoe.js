function grid (row,col){
  var arr = [];
  var xo = 'XO';
  for(let i = 0; i < row; i++){
    arr.push([]);
    for(let j = 0; j < col; j++){
      arr[i].push(' ');
    }
  }
  let x = 0;
  let o = 0;
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(x >= 5){
        arr[i][j] = 'O';
      }
      if(o >= 5){
        arr[i][j] = 'X';
      }
      if(arr[i][j] === ' '){
        arr[i][j] = xo[Math.ceil(Math.random() * xo.length - 1)];
        if(arr[i][j] === 'X'){
          x = x + 1
        }
        if(arr[i][j] === 'O'){
          o = o + 1
        }
      }
    }
  }
  // let x = 0;
  // let o = 0;
  // for(let i = 0; i < row; i++){
  //   for(let j = 0; j < col; j++){
  //     if(arr[i][j] === 'X'){
  //       x = x + 1
  //     }
  //     if(arr[i][j] === 'O'){
  //       o = o + 1
  //     }
  //   }
  // }
  // for(let i = 0; i < row; i++){
  //   for(let j = 0; j < col; j++){
  //
  //   }
  // }
  console.log(arr);
  // console.log('X: ' + x);
  // console.log('O: ' + o);
}


grid(3,3);
