console.log("----- Ejercicio B -----");


var cantidadDeGatos = 10;
var cantidadDePasos = 5;

for (var i = 1 ; i <= cantidadDeGatos; i++) {
    
    var pasos = ' '

    for (var j = 1 ; j <= cantidadDePasos; j++) {
        pasos += '🐾'
    }

    console.log('Gato #' + i + ': 🐈' + pasos);

}

