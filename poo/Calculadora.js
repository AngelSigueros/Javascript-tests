class Calculadora {
    static sumar(a, b) {
        return a+b;
    }
}

const valor = Calculadora.sumar(34, 7);
console.log(valor);


let objeto = {a: 1, b: 2, c: 3};

for (let key in objeto) {
    console.log(key);  // Imprime las claves: a, b, c
    console.log(`${key}:${objeto[key]}`);
}

let array = [1, 2, 3];

for (let value of array) {
    console.log(value);  // Imprime los valores: 1, 2, 3
}