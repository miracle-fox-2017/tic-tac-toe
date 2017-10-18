let buatArray3x3 = () => {
  let result = [];
  for(let i = 0; i<3; i++){
    result.push([]);
    for(let j = 0; j<3; j++){
      result[i].push("");
    }
  }
  return result;
}

//buat array
let base = buatArray3x3();

//tic tac toe begin
let isiTicTacToe = (base) => {
  //init count/reset count
  let countX = 0;
  let countO = 0;

  //random mode 1 atau 2
  //1 => X=5; O=4
  //2 => O=5; X=4
  let random = Math.floor(Math.random() * 2) + 1;
  if(random == 1){
    countX = 5;
    countO = 4;
  } else {
    countX = 4;
    countO = 5;
  }

  //mode 1 => X=5; O=4
  for(let i = 0; i<base.length; i++){
    for(let j = 0; j<base[i].length; j++){
      //random 1/2
      let rand = Math.floor(Math.random() * 2) + 1;

      //if 1; ifcountX>0; print X; countX-1
      if(rand == 1){
        //printX kalau masih ada, else prin O
        if(countX>0){
          base[i][j] = "X";
          countX -= 1;
        }else{
          base[i][j] = "O";
          countO -= 1;
        }
      } else {
        //else print O kalu masih ada, kalau udah ga ada print X
        if(countO>0){
          base[i][j] = "O";
          countO -= 1;
        }else{
          base[i][j] = "X";
          countX -= 1;
        }
      }

    }
  }

  //print pretty
  for(let i = 0; i<base.length; i++){
      console.log(base[i][0], base[i][1], base[i][2]);
  }

  return base;
}

//Driver
console.log(isiTicTacToe(base));
