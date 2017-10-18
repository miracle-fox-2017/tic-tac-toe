function ticTacToe() {
  let nestArr = [];
  let countO = 0;
  let countX = 0;

  for (let i = 0; i < 3; i++) {
    nestArr[i] = [];
    for (let j = 0; j < 3; j++) {
      let games = Math.floor(Math.random() * 10);
      if (games % 2 == 0) {
        nestArr[i][j] = 'X';
        countX += 1;
        if (countX == 5) {
          nestArr[i][j] = 'O';
        }
      } else if (games % 2 != 0) {
        nestArr[i][j] = 'O';
        countO += 1;
        if (countO == 5) {
          nestArr[i][j] = 'X';
        }
      }
    }
  }

  console.log(nestArr);
}

ticTacToe();
