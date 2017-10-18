function tic_tac_toe() {
  let xhitung = 0;
  let ohitung = 0;
  let newArr = [];

  for (let i = 0; i < 3 ; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
      let random = Math.random();
      
      if(xhitung < 5 && random < 0.5) {
        xhitung++;
        row.push('x');
      } else if (ohitung < 5) {
        ohitung++;
        row.push('o')
      } else {
        row.push ('x' || 'o');
      }
      
    }
    newArr.push(row);
  }

  return newArr;
}

console.log(tic_tac_toe()) 




