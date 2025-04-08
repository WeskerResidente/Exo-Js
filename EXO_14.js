let line = "";
for (let i=1; i<=10; i++) {
    for ( let j=1; j<=10;  j++)
        if (i  % 10 == 0 || j % 10 ==0 || i+1< 3 || j+1<3) {
            line += ('▶️') 
        } else  {
            line += ('⬛') 
        }
        // line += ('⬛') +  "▶️";
        line += '\n'
    }
console.log(line)