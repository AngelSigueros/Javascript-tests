// function cuadrado(numero) {
//     return numero * numero;
// }

// Para la tarea 1
const cuadrado = (numero) => numero * numero; // Tu función flecha aquí
console.log(cuadrado(4));  // Debe mostrar 16

// Para la tarea 2
const numeros = [1, 2, 3, 4];
const nuevoArray = numeros.map(num => cuadrado(num));
console.log(nuevoArray);  // Debe mostrar [1, 4, 9, 16]

// Para la tarea 3
const objeto = {
    nombre: "John",
    mostrarNombre: () => {
        const self = this;
        setTimeout(() => {
            console.log(self.nombre);
        }, 1000);
    }
};
objeto.mostrarNombre();  // Debe mostrar "John"


const objeto2 = {
    nombre: "John2",
    mostrarNombre: () => {
        const self = this;
        const arrowFunction = () => {
            console.log(self.nombre);
        }
        setTimeout(arrowFunction, 1000);
    }
};
objeto2.mostrarNombre();

const objeto3 = {
    nombre: "John333",
    mostrarNombre: () => {
      const self = this;
      const mostrar = () => {
        console.log(self.nombre);
      };
    }
  };
// console.log(objeto3.mostrarNombre().mostrar());  // Mostrará "John"