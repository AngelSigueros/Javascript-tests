// Polimorfismo con interfaz

const coche = {
    conducir() {
    console.log('El coche está siendo conducido');
    }
  };
  const camion = {
    conducir() {
    console.log('El camión está siendo conducido');
  10
    }
  };
  const motocicleta = {
    conducir() {
    console.log('La motocicleta está siendo conducida');
    }
  };
  function realizarViaje(vehiculo) {
    vehiculo.conducir();
  }
  realizarViaje(coche); // El coche está siendo conducido
  realizarViaje(camion); // El camión está siendo conducido
  realizarViaje(motocicleta); // La motocicleta está siendo conducida
  