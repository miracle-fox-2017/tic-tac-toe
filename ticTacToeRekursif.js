function ticTacToeRec() {
  let word = 'XO';
  let nestArr = [];
  let countX = 0;
  let countO = 0;

  for (let i = 0; i < 3; i++) {
    baru = [];
    for (let j = 0; j < 3; j++) {
      baru.push(word.charAt(Math.floor(Math.random() * word.length)));
    }

    nestArr.push(baru);
    for (let x = 0; x < 3; x++) {
      if (nestArr[i][x] == 'X') {
        countX += 1;
        if (countX > 5) {
          return ticTacToeRec();
        }
      } else if (nestArr[i][x] == 'O') {
        countO += 1;
        if (countO > 5) {
          return ticTacToeRec();
        }
      }

    }

  }

  return nestArr;
}

console.log(ticTacToeRec());
