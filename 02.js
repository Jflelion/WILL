function stringMasLarga(strings) {
  // Inicializamos una variable para almacenar el string más largo
  var stringMasLargo = '';

  // Recorremos el arreglo de entrada
  for (var i = 0; i < strings.length; i++) {
    // Comparamos la longitud del string actual con la longitud del string más largo
    if (strings[i].length > stringMasLargo.length) {
      // Si es más largo, actualizamos el stringMasLargo
      stringMasLargo = strings[i];
    }
  }

  // Retornamos el string más largo encontrado
  return stringMasLargo;
}

module.exports = stringMasLarga;
