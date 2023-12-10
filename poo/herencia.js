class Persona {
    constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    }
    presentarse() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  class Empleado extends Persona {
    constructor(nombre, edad, puesto) {
    super(nombre, edad);
    this.puesto = puesto;
    }
    presentarse() {
    super.presentarse();
    console.log(`Trabajo como ${this.puesto}.`);
    }
  }
  const juan = new Empleado('Juan', 28, 'desarrollador');
  juan.presentarse();
  // Hola, mi nombre es Juan y tengo 28 años.
  // Trabajo como desarrollador.
  