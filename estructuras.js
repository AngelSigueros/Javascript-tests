// Crear y manipular un Array

const frutas = ["manzana", "plátano", "naranja"];
frutas.push("fresa");
frutas.shift();
console.log(`Longitud del array: ${frutas.length}`);


// Iterar sobre un Array

const numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
for (const numero of numeros) {
  console.log(numero);
}
// for in
for (const indice in numeros) {
  console.log(numeros[indice]);
}
// forEach
numeros.forEach(numero => console.log(numero));


// Uso de map, filter y reduce en Arrays

const calificaciones = [85, 90, 78, 92, 88];
const calificacionesAumentadas = calificaciones.map(calificacion => calificacion + 5);
const calificacionesAltas = calificacionesAumentadas.filter(calificacion =>
calificacion >= 90);
const promedio = calificaciones.reduce((total, calificacion) => total + calificacion,
0) / calificaciones.length;
console.log(calificacionesAumentadas);
console.log(calificacionesAltas);
console.log(`Promedio: ${promedio}`);


// Crear y manipular un Objeto

const persona = {
  nombre: "Juan",
  apellido: "Pérez",
  edad: 30,
  ciudad: "Madrid"
};
persona.ciudad = "Barcelona";
persona.ocupacion = "programador";
for (const propiedad in persona) {
  console.log(`${propiedad}: ${persona[propiedad]}`);
}


// Crear y utilizar un Set

const nombres = new Set();
nombres.add("Pedro");
2
nombres.add("María");
nombres.add("Carlos");
nombres.add("Pedro"); // No se duplicará
console.log(`Cantidad de elementos en el Set: ${nombres.size}`);
for (const nombre of nombres) {
  console.log(nombre);
}


// Crear y utilizar un Map

const capitales = new Map([
  ["España", "Madrid"],
  ["Francia", "París"],
  ["Italia", "Roma"]
]);
capitales.set("Alemania", "Berlín");
console.log(capitales.get("España"));
for (const [pais, capital] of capitales) {
  console.log(`${pais}: ${capital}`);
}
/*
  Utiliza for in cuando necesit
es iterar sobre las propiedades de un objeto y conocer tanto las claves como los
valores.
  Utiliza for of cuando necesites iterar sobre elementos de objetos iterables como
arrays, strings, sets o mapas y solo te interesen los valores.
Recuerda que si utilizas for in en un array, obtendrás los índices en lugar de los
valores, mientras que con for of obtendrás directamente los valores.
*/
