/*class Persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido
    this.edad = edad;



const personas = [
  new Persona("Abigail", "Santos", 18),
  new Persona("Abraham", "Santos", 24),
  new Persona("Juan", "Pablo", 57),
]
*/

const personas = [
  {
    nombre: "Mikhael",
    edad: 24,
  },
  {
    nombre: "Abigail",
    edad: 18,
  },
  {
    nombre: "Abraham",
    edad: 24,
  },
];

const sumaEdades = personas.reduce((acumulador, persona) => {
  return acumulador + persona.edad;
}, 0);


console.log(sumaEdades)


