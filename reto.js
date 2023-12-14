const mapVacio = new Map();
const mapFrutas = new Map([
  ["manzana", 10],
  ["plátano", 5],
  ["cereza", 7]
]);

mapFrutas.forEach((valor, clave) => {
    console.log(`Clave: ${clave}, Valor: ${valor}`);
  });


for (let [clave, valor] of mapFrutas) {
console.log(`Clave: ${clave}, Valor: ${valor}`);
}