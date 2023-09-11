function numeroSimetrico(num) {
  // Convierte el número a una cadena
  var numStr = num.toString();

  // Invierte la cadena
  var numStrInvertido = numStr.split('').reverse().join('');

  // Compara la cadena original con la cadena invertida
  if (numStr === numStrInvertido) {
    return true; // El número es simétrico
  } else {
    return false; // El número no es simétrico
  }
}

module.exports = numeroSimetrico;
