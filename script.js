function Pyramid() {
    
    let esp = '';
    for (let i = 1; i <= 25; i++) {
        for (let j = 1; j <= i; j++) {
            esp += j + '  ';
        }
        console.log(esp);
        esp = '';
    }
}

Pyramid();