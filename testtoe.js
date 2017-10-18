/*function genTicTacToe() {
	let arrBoard = [[]];
	let jumX = 1;
	let jumY = 1;
	let jumMax = 9;

	for (var i = 0; i < 3; i++) {
		arrBoard[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arrBoard[i].push('')
		}
	}


	while (jumMax > 0) {
		var randomIdx = getRandomInt(1,4) - 1;

		if (arrBoard[randomIdx].length <= 3){
			if (arrBoard[randomIdx] != 'X') {
				arrBoard[randomIdx].pop();
				arrBoard[randomIdx].push('X');
			} else {
				arrBoard[randomIdx].pop();
				arrBoard[randomIdx].push('O');
			}
			jumMax--;
		}
	}

	
	// console.log(arrBoard[0][0]);
	// console.log(arrBoard[1][0]);
	// console.log(arrBoard[2][0]);

	return arrBoard;
}

console.log(genTicTacToe());
*/


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function randomXO() {
	return getRandomInt(1,5) % 2 === 0 ? 'O' : 'X';
}

function getTacToe() {
	var arrIndex = ['00', '01', '02', '10', '11', '12', '20', '21', '22'];
	let arrBoard = [[]];
	let jumX = 1;
	let jumY = 1;
	let jumMax = 9;

	for (var i = 0; i < 3; i++) {
		arrBoard[i] = [];
		
		for (let j = 0; j < 3; j++) {
			arrBoard[i].push('')
		}
	}


	while (arrIndex.length > 0) {
		var cIndex = getRandomInt(1,9) - 1;
		console.log(cIndex);
		
		// if (arrBoard[cIndex] == '') {
		// 	var insertXorO = randomXO();
		// 	arrBoard[cIndex].push(insertXorO);
		// 	if (insertXorO === 'X') {
		// 		jumX = jumX + 1;
		// 	}

		// 	if (insertXorO === 'Y') {
		// 		jumX = jumY + 1;
		// 	}
		// }

		arrIndex.splice(cIndex, 1);
	}

	console.log(arrIndex);
	return arrBoard;
}

// console.log(randomXO());
console.log(getTacToe());