// Polimorfismo composicion

class Persona {
  constructor(nombre, rol) {
  this.nombre = nombre;
  this.rol = rol;
  }
  realizarTarea() {
  this.rol.realizarTarea(this.nombre);
  }
}
class Rol {
  realizarTarea(nombre) {
11
  console.log(`${nombre} está realizando una tarea genérica`);
  }
}
class Desarrollador extends Rol {
  realizarTarea(nombre) {
  console.log(`${nombre} está escribiendo código`);
  }
}
class Gerente extends Rol {
  realizarTarea(nombre) {
  console.log(`${nombre} está gestionando un equipo`);
  }
}
const juan = new Persona('Juan', new Desarrollador());
const ana = new Persona('Ana', new Gerente());
juan.realizarTarea(); // Juan está escribiendo código
ana.realizarTarea(); // Ana está gestionando un equipo
