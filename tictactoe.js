function getRandomChar ()
{
  let characters = ["x", "o"];

  return characters[Math.floor(Math.random() * ((characters.length) - 0) + 0)];
}

function tictactoeBoard()
{
  let board = [];
  let countO = 0;
  let countX = 0;
  for (let i = 0; i < 3; i++)
  {
    board.push([]);
    for (let j = 0; j < 3; j++)
    {
      if ((countO - countX) > 1)
      {
        board[i].push("x");
        countX++;
      }
      else if ((countX - countO) > 1)
      {
        board[i].push("o");
        countO++;
      }
      else
      {
        let temp = getRandomChar();
        if (temp === "x")
        {
          countX++;
        }
        else
        {
          countO++;
        }
        board[i].push(temp);
      }
    }
  }
  return board;
}


console.log(tictactoeBoard());
console.log("-------------------------");
console.log(tictactoeBoard());
console.log("-------------------------");
console.log(tictactoeBoard());
console.log("-------------------------");
console.log(tictactoeBoard());
console.log("-------------------------");
console.log(tictactoeBoard());
console.log("-------------------------");
console.log(tictactoeBoard());
console.log("-------------------------");
console.log(tictactoeBoard());
console.log("-------------------------");
console.log(tictactoeBoard());
console.log("-------------------------");
console.log(tictactoeBoard());
