"use strict";

// Clases //

// Clase Persona
class Persona {

    // Declaramos los atributos privados
    #nombre;
    #apellido;
    #edad;
    
    // Constructor Persona
    constructor(nombre, apellido, edad){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }

    // Función saludar que muestra el nombre de la clase Persona
    saludar(){
        console.log("Hola, soy " + this.nombre);
    }
}

// Creamos una persona a partir de la clase Persona
let p1 = new Persona("Angustias", "Malas", 33);
console.log(p1); // Mostramos el objeto 'p1'
p1.saludar(); // Llamamos a la función saludar de 'p1'

// ------------------------------------

// Clase Empleado que hereda de Persona
class Empleado extends Persona {

    // Declaramos el atributo privado
    #puesto;

    // Constructor Empleado <- Persona
    constructor(nombre, apellido, edad, puesto) {
        super(nombre, apellido, edad); // Llamamos a los atributos de Persona con super
        this.#puesto = puesto;
    }

    // Función get para el puesto
    getPuesto() {
        return this.#puesto;
    }

    // Función set para el puesto
    setPuesto(puesto){
        this.#puesto = puesto;
    }

    // Función trabajar que muestra el puesto del Empleado
    trabajar(){
        console.log(`Estoy trabajando de ${this.puesto}`);
    }
}

// Creamos un Empleado
let emp1 = new Empleado("Paco", "Gonzalez", 55, "Periodista");
console.log(emp1); // Mostramos el objeto 'emp1'
emp1.saludar(); // Llamamos a la función saludar de 'emp1'
emp1.trabajar(); // Llamamos a la función trabajar de 'emp1'