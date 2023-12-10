class Persona {

    constructor (nombre, apellido, edad) {
        this._nombre=nombre;
        this._apellido=apellido;
        this._edad=edad;
    }    
    saludar() {
        console.log(`Hola! ${this._nombre} ${this._apellido}`);
    }

}

const pers1 = new Persona('Lola', 'Ramos', 19);
pers1.saludar();

class Estudiante extends Persona {
    constructor (nombre, apellido, edad, carrera) { 
        super(nombre, apellido, edad);
        this._carrera = carrera;
    }

    estudiar() {
        super.saludar();
        console.log(`Estudio ${this._carrera} `);
    }
}

const estu1 = new Estudiante('Raul', 'Sanz', 25, 'Galgos');
// estu1.saludar();
estu1.estudiar();

class Profesor extends Persona {
    constructor (nombre, apellido, edad, materia) {
        super(nombre, apellido, edad);
        this._materia = materia;
    }
    saludar() {
        super.saludar();
        console.log(`Enseño ${this._materia} y tengo ${this._edad}`);
    }
}
const profe1 = new Profesor('Pedro', 'Loscos', 59, 'Cetrería');
profe1.saludar();