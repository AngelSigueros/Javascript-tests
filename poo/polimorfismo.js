// Polimorfismo con herencia

class Forma {
    area() {
    throw new Error('El método "area()" debe ser implementado en la clase derivada.');
    }
  }
  class Circulo extends Forma {
    constructor(radio) {
    super();
    this.radio = radio;
    }
    area() {
    return Math.PI * this.radio ** 2;
    }
  }
  class Cuadrado extends Forma {
    constructor(lado) {
    super();
    this.lado = lado;
    }
    area() {
    return this.lado ** 2;
    }
  }
  class Triangulo extends Forma {
    constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  9
    }
    area() {
    return (this.base * this.altura) / 2;
    }
  }
  const formas = [
    new Circulo(5),
    new Cuadrado(4),
    new Triangulo(3, 4)
  ];
  formas.forEach((forma) => {
    console.log(`Área: ${forma.area()}`);
  });
  // Área: 78.53981633974483
  // Área: 16
  // Área: 6
  