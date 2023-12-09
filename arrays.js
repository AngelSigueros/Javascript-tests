let numeros = [1, 2, 3, 4, 5];
let frutas = ['manzana', 'plátano', 'cereza'];

// Añade el número 6 al array de números y la fruta 'uva' al array de frutas.
numeros.push(6);
frutas.push('uva');

// Elimina el último elemento del array de frutas.
frutas.pop();

console.log(numeros);
console.log(frutas);

// Encuentra el índice de 'plátano' en el array de frutas.
let indicePlatano = frutas.indexOf('plátano');

// Utiliza splice() para reemplazar 'plátano' con 'pera' y 'naranja'.
frutas.splice(indicePlatano, 1, 'pera', 'naranja');

console.log(numeros);
console.log(frutas);

// Une los dos arrays en uno solo y asigna el resultado a una nueva variable.
let combinado = numeros.concat(frutas);

// Invierte el orden del nuevo array.
combinado.reverse();

// Imprime el array resultante y su longitud.

console.log(combinado);
console.log(combinado.length);