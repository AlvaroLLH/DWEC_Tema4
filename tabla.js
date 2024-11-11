"use strict";

// Creamos una matriz en la que almacenamos los datos de los empleados
// Nombre, Apellido, Año Nacimiento, Sueldo
let empleados = [
    {nombre: "Gabriel", apellido: "Herranz", nacimiento: 1954, sueldo: 30000 },
    {nombre: "Sandra", apellido: "Lopez", nacimiento: 1984, sueldo: 55000},
    {nombre: "Juan", apellido: "Gonzalez", nacimiento: 1990, sueldo: 45000},
    {nombre: "Fernando", apellido: "Jimenez", nacimiento: 2000, sueldo: 25000},
];

// Filtramos por sueldo > 40000
let empleadosSueldosAltos = empleados.filter(empleado => {
    return empleado.sueldo > 40000;
});

// Ordenamos los empleados
let empleadosPorOrdenDeNacimiento = empleados.sort((a, b) => {
    return empleados.nacimiento(a - b);
});