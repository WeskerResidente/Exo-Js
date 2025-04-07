let hours = 25

if (hours <= 12) {
    hours='AM'
} else if (hours <=24 ) {
    hours='AP'
} else if (hours > 24) {
    hours='ERREUR'
}


console.log (hours)