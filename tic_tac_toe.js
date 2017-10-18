let createArr = (x,y) =>{
	let newArr = [];
	let totalArr = x*y;
	let ttt = ["X","O"];
	let indexTTT = 0;

	if (x === y){
		for (let i = 0 ; i<x ; i++){
			let arr = [];
			for (let j = 0 ; j<y ; j++){
				arr.push(0);
			}
			newArr.push(arr);
		}
	}	
	for (let i = 0 ; i<x ; i++){
		while (newArr[i].indexOf(0) !== -1){
			let j = Math.floor(Math.random()*totalArr)
			if (indexTTT > 1){
				indexTTT = 0;
			}
			if (newArr[i][j] === 0){
				newArr[i][j]=ttt[indexTTT];
				indexTTT++
			}
		}
	}
	console.log(newArr)
}

createArr(3,3);