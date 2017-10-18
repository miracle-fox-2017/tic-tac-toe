function tictactoe() {
    let xo = "XO"
    let arr = []
    let x = 0
    let o = 0
    let huruf

    for (let i = 0; i < 3; i++) {
        let row = [];
        for (let j = 0; j < 3; j++) {
            huruf = xo[Math.floor(Math.random() * 2)]
            huruf == 'X' ? x += 1 : o += 1

            if (x > 5) {
                row.push('O')
            } else if (o > 5) {
                row.push('X')
            } else {
                row.push(huruf)
            }

        }
        arr.push(row)
    }
    return arr;
}

console.log(tictactoe());