class Evento {
    constructor(nombre, fecha) {
        this.nombre = nombre;
        this.fecha = new Date(fecha);
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerFecha() {
        return this.fecha;
    }
    obtenerDia() {
        return this.fecha.getDate();
    }
    obtenerMes() {
        return this.fecha.getMonth() + 1; // Los meses se cuentan de 0 a 11, así que sumamos 1.
    }
    obtenerAnio() {
        return this.fecha.getFullYear();
    }
}
let evento1 = new Evento("Reunión", new Date());
console.log(evento1.obtenerNombre()); // Reunión
console.log(evento1.obtenerFecha()); // 2023-04-17T00:00:00.000Z (dependiendo de la zona horaria)
console.log(evento1.obtenerDia()); // 17
console.log(evento1.obtenerMes()); // 4
console.log(evento1.obtenerAnio()); // 2023