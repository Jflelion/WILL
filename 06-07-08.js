function crearClasePersona() {
  class Persona {
    constructor(nombre, edad, hobbies, amigos) {
      this.nombre = nombre;
      this.edad = edad;
      this.hobbies = hobbies || [];
      this.amigos = amigos || [];
    }

    addFriend(nombre, edad) {
      this.amigos.push({ nombre, edad });
    }

    addHobby(hobby) {
      this.hobbies.push(hobby);
    }

    getFriends() {
      return this.amigos.map(amigo => amigo.nombre);
    }

    getHobbies() {
      return this.hobbies;
    }

    getPromedioEdad() {
      if (this.amigos.length === 0) {
        return 0;
      }

      const sumaEdades = this.amigos.reduce((total, amigo) => total + amigo.edad, 0);
      return sumaEdades / this.amigos.length;
    }
  }

  return Persona;
}

// Ejemplo de uso
const Persona = crearClasePersona();

const persona1 = new Persona('Juan', 30, ['tenis'], [{ nombre: 'Laura', edad: 28 }]);
persona1.addFriend('Carlos', 32);
persona1.addHobby('nadar');
console.log(persona1.getFriends()); // ['Laura', 'Carlos']
console.log(persona1.getHobbies()); // ['tenis', 'nadar']
console.log(persona1.getPromedioEdad()); // 30 (promedio de edad de amigos)

module.exports = crearClasePersona;