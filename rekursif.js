'use strict'

function tic_tac(row=3, col=3){

	let XO = 'XO',
		r = 0,
		c = 0,
		x = 0,
		o=0
		
	

	const papan = Array(row).fill().map(()=>Array(col))
	// console.log(papan)	//[ [ , ,  ], [ , ,  ], [ , ,  ] ]
	
	for(var i = 0; i < col*row; i++){
		let index = XO[Math.floor(Math.random() * XO.length)] 
			index == 'X' ? x+=1 : o+=1

		papan[r][c] = index

		if(c < 2){
			c++
		}else{
			c = 0
			r++
		}

	}

	if(x == 5 && o == 4 || o ==5 && x == 4){
		return papan
	}
	else{
		return tic_tac(row, col)
	}

// 
}


console.log(tic_tac())