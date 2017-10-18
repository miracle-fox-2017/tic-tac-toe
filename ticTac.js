function ticTacToe() {
    let abc = 'xo';
    let x = 0;
    let o = 0;
    let nestArr = [];

    for (let j = 0; j < 3; j++) {

        let isi = '';
        for (let i = 0; i < 3; i++) {
            isi += abc.charAt(Math.floor(Math.random() * abc.length));
            
        }
        nestArr.push(isi.split(''))
    }


    for (let y = 0; y < nestArr.length; y++) {
        for (let k = 0; k < nestArr[y].length; k++) {
            if (nestArr[y][k] == 'o') {
                o++
            } else {
                x++
            }
        }
    }
    if (o == 5 || x == 5) {
        return nestArr
    }

    else{
        return ticTacToe()
    }
}
// function callTicTacToe(){
//     var nameTictactoe = ticTacToe();
//     while(nameTictactoe == null){
//         nameTictactoe = ticTacToe();
//     }

//     return nameTictactoe;
// }

// console.log(callTicTacToe());

console.log(ticTacToe());
