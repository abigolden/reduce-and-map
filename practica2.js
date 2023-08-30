/* Agrega un método a la clase Persona llamado obtenerNombreCompleto
Con la siguiente lista de personas y el uso del método que creaste, utiliza la función map
para convertir ese array en un array de strings conteniendo solo los nombres completo de las 
personas.
Array de personas:


*/

class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }
  obtenerNombreCompleto(nombre, apellido) {
    const nombreCompleto = this.nombre + " " + this.apellido
    return nombreCompleto
  }
}

const personas = [
  new Persona("Abigail", "Santos", 18),
  new Persona("Abraham", "Santos", 24),
  new Persona("Juan", "Pablo", 57),
];

const nombresCompletos = personas.map((persona) => persona.obtenerNombreCompleto());
console.log(nombresCompletos)

