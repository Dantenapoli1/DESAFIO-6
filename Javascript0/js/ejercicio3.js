console.log("----- Ejercicio c -----");


var cantidadDeGatos = 10;
var cantidadDePasos = 4;

for(var i = 1; i <= cantidadDeGatos; i++) {

    var pasos = ' '

    for(var j = 1; j <= cantidadDePasos; j++) {
        pasos += '🐾'
    }

    if(i % 2 == 0) {
        console.log('Gato #' + i + ': 🐈' +'⬛' + pasos);
    }
    else{
        console.log('Gato #' + i + ': 🐈'  + pasos);
    }
}