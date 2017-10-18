const generateXO=()=>{ // Membuat Array XO seimbang (X=4 O=5 / X=5 O=4)
    let data=[];
    let xCounter=0;
    let oCounter=0;
    const base="XO";
    for(let i=0;i < 9;i++){
        const dataPush=base[Math.floor(Math.random() * 2)];
        if(dataPush === "X" & xCounter < 5){
            data.push("X");
            xCounter++;
        }else if(dataPush === "X" & xCounter >= 5){
            data.push("O");
            oCounter++;
        }else if(dataPush === "O" & oCounter < 5){
            data.push("O");
            oCounter++;
        }else if(dataPush === "O" & oCounter >= 5){
            data.push("X");
            xCounter++;
        }
    }
    return ticTacToe(data);
}
const ticTacToe=(array)=>{
    let row=0;
    let hasil=[];
    for(let i=0;i < 3;i++){ // Create Structure
        hasil.push([]);
    }
    for(let i=0;i < array.length;i++){
        hasil[row].push(array[i]);
        row < 2 ? row++ : row=0;
    }
    return hasil;
}

console.log(generateXO());
