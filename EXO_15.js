const size = 11;

for (let i = 0; i < size; i++) {
  let line = '';
  for (let j = 0; j < size; j++) {
    if (
      i === 0 || i === size - 1  ||       
      j === 0  || j === size - 1     ||     
      i === j ||                          
      i + j === size - 1                   
    ) {
      line += '■ ';
    } else {
      line += '□ ';
    }
  }
  console.log(line);
}

for (let i = 0; i < size; i++) {
  let line = '';
  for (let j = 0; j < size; j++) {
    if (
      i === 0 || i === size - 1  ||       
      j === 0  || j === size - 1 ||
      (i>=2 && j>=2 && i<size-2 && j<size-2)            
    ) {
      line += '■ ';
    } else {
      line += '□ ';
    }
  }
  console.log(line);
}
console.log('Voici un carré plein: ■');
console.log('Voici un carré vide: □');


