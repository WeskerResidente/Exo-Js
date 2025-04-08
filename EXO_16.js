const size = 20;

for (let i = 0; i < size; i++) {
  let line = '';
  for (let j = 0; j < size; j++) {

    const layer = Math.min(i, j, size - 1 - i, size - 1 - j);

   
    if (layer % 2 === 0) {
      line += '⬛ '; 
    } else {
      line += '⬜ '; 
    }
  }
  console.log(line);
}