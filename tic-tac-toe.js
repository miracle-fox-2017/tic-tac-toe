const generateTicTacToe = () => {
	let arrBoard = [[]];
	let boardLength = 3;
	let jumX = 0;
	let jumO = 0;
	var string = 'xo';

	for (let i = 0; i < boardLength; i++) {
		arrBoard[i] = [];
		
		for (let j = 0; j < boardLength; j++) {
			if (getRandomInt(1,5) === 2 ) {
				if (jumO < 5) {
					arrBoard[i].push("O");
					jumO++;	
				} else {
					arrBoard[i].push("X");
					jumX++;
				}
				
			} else {
				if (jumX < 5) {
					arrBoard[i].push("X");
					jumX++;
				} else {
					arrBoard[i].push("O");
					jumO++;
				}
			}
		}
	}

	return arrBoard;
}



function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

console.log(generateTicTacToe());