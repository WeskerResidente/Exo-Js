const size = 10;

for (let i = 0; i < size; i++) {
  let line = '';
  for (let j = 0; j < size; j++) {
    if (
      i === 0 || i === size - 1  ||        // Bord haut et bas
      j === 0  || j === size - 1     ||     // Bord gauche et droite
      i === j ||                           // Diagonale principale
      i + j === size - 1                   // Diagonale secondaire
    ) {
      line += '■ ';
    } else {
      line += '□ ';
    }
  }
  console.log(line);
}