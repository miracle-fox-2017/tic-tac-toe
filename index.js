const nestedArr = () => {
  const arrResult = [];
  let randomXO = random();

  console.log(randomXO);
  
  for (let i = 0; i < 9; i+=3) {
    const sliced = randomXO.split('').splice(i, 3);
    arrResult.push(sliced);
  }
  
  return arrResult;
}

const random = () => {
  const alphabet = 'XO';
  let randomText = '';
  let counterX = 0;
  let counterO = 0;

  for (let i = 0; i < 9; i++) {
    let char = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
    char === 'X' ? counterX++ : counterO++;

    console.log(char);
    if (counterX > 5) {
      char = 'O';
    } else if (counterO > 5) {
      char = 'X'
    }

    console.log(char);
    randomText += char;
  }

  console.log(randomText);
  return randomText;
}

console.log(nestedArr());
