class Estudiante extends Persona {
    constructor (nombre, apellido, edad, carrera) { 
        super(nombre, apellido, edad);
        this._carrera = carrera;
    }

    estudiar() {
        console.log(`super.saludar() estudio ${this._carrera} `);
    }
}

const estu1 = new Estudiante('Raul', 'Sanz', 25, 'Galgos');
estu1.saludar();
estu1.estudiar();