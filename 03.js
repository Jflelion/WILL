function buscarAmigo(amigos, nombre) {
  // Recorremos el arreglo de amigos
  for (var i = 0; i < amigos.length; i++) {
    // Comparamos el nombre del amigo actual con el nombre buscado
    if (amigos[i].nombre === nombre) {
      // Si hay coincidencia, retornamos el objeto amigo actual
      return amigos[i];
    }
  }

  // Si no se encuentra ninguna coincidencia, retornamos null o un mensaje indicando que no se encontró
  return null; // Opcionalmente, puedes retornar un mensaje como "Amigo no encontrado"
}

module.exports = buscarAmigo;
