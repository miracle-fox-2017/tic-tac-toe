function tictac() {
  let xo = 'XO';
  let numx=0;
  let numo=0;
  let arr = [];
  for(let i = 0; i < 3 ;i++){
    arr.push([])
    for(let j = 0;j < 3;j++){
       let acak = Math.floor(Math.random() * 2)
      if(acak == 0){
        if(numo < 5){
          arr[i].push('O')
            numo++
        }else {
          arr[i].push('X')
          numx++
        }
      }else {
         if(numx < 5){
           arr[i].push('X')
           numx++
         }
         else {
           arr[i].push('O')
           numo++
         }
       }
    }
  }
  // console.log(`ini numx :${numx}`)
  // console.log(`ini numo :${numo}`)
  return arr
}
console.log(tictac())
