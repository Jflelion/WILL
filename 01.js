function soloNumeros(array) {
  // Inicializamos un arreglo vacío para almacenar los números
  var numeros = [];

  // Recorremos el arreglo de entrada
  for (var i = 0; i < array.length; i++) {
    // Verificamos si el elemento es un número
    if (typeof array[i] === 'number') {
      // Si es un número, lo agregamos al arreglo 'numeros'
      numeros.push(array[i]);
    }
  }

  // Retornamos el arreglo 'numeros' que contiene solo números
  return numeros;
}

module.exports = soloNumeros;
