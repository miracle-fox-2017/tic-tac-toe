function ticTacToe() {
	let isi = ['x', 'o']
	let arr = []
	let counterX = 0
	let counterO = 0

	for (let i = 0; i < 3; i++) {
		let row = []
		for (let j = 0; j < 3; j++) {
			let random = Math.floor(Math.random() * isi.length)
			if (isi[random] === 'x') {
				counterX++
			} else {
				counterO++
			}

			if (counterX > 5) {
				row.push('o')
			} else if (counterO > 5) {
				row.push('x')
			} else {
				row.push(isi[random])	
			}
		}
		arr.push(row)
	}
	// console.log(`counterX = ${counterX} | counterO = ${counterO}`)
	return arr
}

// ticTacToe()
console.log(ticTacToe())