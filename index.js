function tictactoe(){
	let result = []
	let isi = []
	let count1 = 0
	let count0 = 0
	let a = 0

	for(let i=0; i<9; i++){

		if(count0 === 5){
			isi[i]=1
		}else
			if(count1 === 5){
				isi[i]=0
			}else
				if(count0 <=5 || count1 <=5){
					isi[i]=Math.floor((Math.random() * 2) + 0);	
				}

		if(isi[i]===1){
			count1++
		}else{
			count0++
		}
	}

	for(let j=0; j<3; j++){
		result[j]=[]
		for(let k=0; k<3; k++){
			if(isi[a]===1){
				result[j].push('x')
			}else{
				result[j].push('o')
			}
			a++
		}
	}

	return result

}

console.log(tictactoe());