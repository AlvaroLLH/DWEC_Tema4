"use strict";

// Constructor Vehículo
function Vehiculo(marca, matricula, potencia) { // Función Vehículo(padre)
    this.marca = marca;
    this.matricula = matricula;
    this.potencia = potencia;
}

// Constructor Coche <- Vehículo
function Coche(marca, matricula, potencia, tipo) { // Función Coche
    Vehiculo.call(this, marca, matricula, potencia); // Llamamos a los atributos de la función padre
    this.tipo = tipo;
}

// Constructor Moto <- Vehículo
function Moto(marca, matricula, potencia, cilindrada) { // Función Moto
    Vehiculo.call(this, marca, matricula, potencia);
    this.cilindrada = cilindrada;
}

// Constructor Locomotora <- Vehículo
function Locomotora(marca, matricula, potencia, velocidad_maxima, tipoCombustible) { // Función Locomotora
    Vehiculo.call(this, marca, matricula, potencia);
    this.velocidad_maxima = velocidad_maxima;
    this.tipoCombustible = tipoCombustible;
}