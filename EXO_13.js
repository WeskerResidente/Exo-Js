for (let i=1; i<=10; i++) {
    let line = "";
    for ( let j=0; j<=4;  j++)
        if (i % 2  == 0) {
            line += ('⬛') +  "▶️"
        } else  {
            line += ('▶️') + ('⬛')
        }
        // line += ('⬛') +  "▶️";
    console.log(line)

};