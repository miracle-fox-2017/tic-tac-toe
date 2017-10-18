function TicTacToe(baris,kolom){
    var set = 'XO';
    var getArr = [];
    var max = 5;
    var nilaiX = 0;
    var nilaiO = 0;
    for (var i = 0; i < baris;i++){
        getArr.push([]);
        for(var j = 0; j < kolom;j++){
            //random nilai X atau O
            var randomNilai = set[Math.floor(Math.random() * set.length)];
            if (randomNilai === set[0] && nilaiX < max){
                    getArr[i].push(randomNilai);
                    nilaiX++;
            } else if (randomNilai === set[1] && nilaiO < max){
                    getArr[i].push(randomNilai);
                    nilaiO++; 
            } else {
                if (randomNilai === set[0]){
                    getArr[i].push(set[1]);
                }else{
                    getArr[i].push(set[0]);
                }                
            }
        }
    }
    return getArr;
}

console.log(TicTacToe(3,3));