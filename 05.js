function pluck(array, propiedad) {
  // Utilizamos el método map para crear un nuevo arreglo
  var valoresPropiedad = array.map(function(objeto) {
    // Accedemos a la propiedad indicada por 'propiedad' de cada objeto
    return objeto[propiedad];
  });

  // Retornamos el nuevo arreglo que contiene los valores de la propiedad 'propiedad'
  return valoresPropiedad;
}

module.exports = pluck;

