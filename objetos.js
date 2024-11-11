"use strict";

// Creamos el array
let palabras = ['zapatilla', 'hola', 'mundo', 'patata', 'tomate', "zanahoria"];

// Distintas maneras de usar forEach
palabras.forEach(function (elem) {console.log(elem)});
palabras.forEach(function (elem, indice) {console.log(indice, elem)});
palabras.forEach((elem, indice) => {console.log(indice, elem)});

// Recorremos las palabras del array y las mostramos pasadas a mayúsculas
palabras.forEach(elem => {
    console.log(elem.toUpperCase());
});

// Mapeamos el array y guardamos las palabras en mayúscula
let palabrasEnMayusculas = palabras.map(elem => elem.toUpperCase());

// Filtramos el array con las palabras que tienen 6 o menos carácteres
let palabrasCortas = palabras.filter(elem => {
    return elem.length <= 6;
});

// Usamos sort para ordenar las palabras al réves
let palabrasAlReves = palabras.sort((a, b) => {
    return (b.localeCompare(a)); // Si cambiasemos el orden de b y a, ordenariamos correctamente las palabras
});

// Array de números
let numeros = [2, 6, 4, 88, 3, 9];

// Ordenamos los números
let numerosOrdenados = numeros.sort((a, b) => {
    return a - b;
});